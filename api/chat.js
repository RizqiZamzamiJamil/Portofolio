/* eslint-env node */
import { buildAiPortfolioContext } from "../src/data/aiPortfolioKnowledge.js";

const DEFAULT_MODEL = "gpt-5.4-mini";
const DEFAULT_DAILY_TOKEN_LIMIT = 50000;
const DEFAULT_DAILY_REQUEST_LIMIT = 100;
const DEFAULT_DAILY_IP_TOKEN_LIMIT = 12000;
const DEFAULT_DAILY_IP_REQUEST_LIMIT = 30;
const DEFAULT_MAX_OUTPUT_TOKENS = 550;
const MAX_MESSAGE_CHARS = 1400;
const MAX_HISTORY_MESSAGES = 8;
const rateBuckets = new Map();

const systemPrompt = `
Kamu adalah AI assistant untuk website portofolio Rizqi Zamzami Jamil.
Jawab dalam bahasa Indonesia yang ramah, ringkas, dan natural.
Gunakan hanya konteks portofolio yang diberikan: home, project, education, experience, dan data tambahan khusus AI.
Format jawaban dengan Markdown rapi jika butuh struktur: gunakan paragraf pendek, numbering untuk urutan, bullet list untuk rincian, **bold** untuk istilah penting, _italic_ untuk penekanan ringan, dan __underline__ hanya jika benar-benar perlu.
Jangan berlebihan memakai simbol Markdown. Hindari daftar panjang jika pertanyaan bisa dijawab singkat.
Jika informasi tidak ada di konteks, katakan bahwa data portofolio belum memuat informasi itu.
Jangan mengarang pengalaman, link, nilai, tanggal, atau klaim yang tidak ada di konteks.
Jika pengunjung bertanya soal kerja sama, arahkan ke email atau WhatsApp yang tersedia.
`.trim();

const getRuntimeEnv = (runtimeEnv) => {
    if (runtimeEnv) {
        return runtimeEnv;
    }

    if (typeof process !== "undefined" && process.env) {
        return process.env;
    }

    return {};
};

const getEnvValue = (key, runtimeEnv) => {
    const env = getRuntimeEnv(runtimeEnv);
    const value = env[key];

    return typeof value === "string" ? value : value || "";
};

const getAllowedOrigins = (runtimeEnv) =>
    (
        getEnvValue("AI_ALLOWED_ORIGINS", runtimeEnv) ||
        getEnvValue("AI_ALLOWED_ORIGIN", runtimeEnv) ||
        ""
    )
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);

const isLocalOrigin = (origin) => {
    try {
        const { hostname } = new URL(origin);

        return ["localhost", "127.0.0.1", "::1"].includes(hostname);
    } catch (error) {
        return false;
    }
};

const getCorsOrigin = (req, runtimeEnv) => {
    const origin = req.headers.origin;

    if (!origin) {
        return null;
    }

    const allowedOrigins = getAllowedOrigins(runtimeEnv);

    if (
        isLocalOrigin(origin) ||
        allowedOrigins.includes("*") ||
        allowedOrigins.includes(origin)
    ) {
        return origin;
    }

    return null;
};

const isRequestOriginAllowed = (req, runtimeEnv) => {
    const origin = req.headers.origin;

    return !origin || Boolean(getCorsOrigin(req, runtimeEnv));
};

const applyCorsHeaders = (req, res, runtimeEnv) => {
    const allowedOrigin = getCorsOrigin(req, runtimeEnv);

    if (allowedOrigin) {
        res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
        res.setHeader("Vary", "Origin");
    }

    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const getNumberEnv = (key, fallback, runtimeEnv) => {
    const value = Number(getEnvValue(key, runtimeEnv));
    return Number.isFinite(value) && value > 0 ? value : fallback;
};

const getDateKey = (runtimeEnv) => {
    const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone:
            getEnvValue("AI_RATE_LIMIT_TIMEZONE", runtimeEnv) || "Asia/Jakarta",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    return formatter.format(new Date());
};

const estimateTokens = (text) => Math.ceil(String(text || "").length / 4);

const cleanupBuckets = (activeDateKey) => {
    for (const dateKey of rateBuckets.keys()) {
        if (dateKey !== activeDateKey) {
            rateBuckets.delete(dateKey);
        }
    }
};

const getRateBucket = (runtimeEnv) => {
    const dateKey = getDateKey(runtimeEnv);
    cleanupBuckets(dateKey);

    if (!rateBuckets.has(dateKey)) {
        rateBuckets.set(dateKey, {
            requests: 0,
            tokens: 0,
            clients: new Map(),
        });
    }

    return rateBuckets.get(dateKey);
};

const getClientKey = (req) => {
    const forwardedFor = req.headers["x-forwarded-for"];
    const forwardedValue = Array.isArray(forwardedFor)
        ? forwardedFor[0]
        : forwardedFor;

    return (
        forwardedValue?.split(",")[0]?.trim() ||
        req.socket?.remoteAddress ||
        "anonymous"
    );
};

const getClientBucket = (bucket, clientKey) => {
    if (!bucket.clients.has(clientKey)) {
        bucket.clients.set(clientKey, {
            requests: 0,
            tokens: 0,
        });
    }

    return bucket.clients.get(clientKey);
};

const json = (res, status, payload) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify(payload));
};

const readJsonBody = async (req) => {
    if (req.body && typeof req.body === "object") {
        return req.body;
    }

    if (typeof req.text === "function") {
        const text = await req.text();

        return text ? JSON.parse(text) : {};
    }

    const chunks = [];

    for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
    }

    if (chunks.length === 0) {
        return {};
    }

    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const sanitizeHistory = (history) => {
    if (!Array.isArray(history)) {
        return [];
    }

    return history
        .filter((item) => ["user", "assistant"].includes(item.role))
        .map((item) => ({
            role: item.role,
            content: String(item.content || "").slice(0, MAX_MESSAGE_CHARS),
        }))
        .filter((item) => item.content.trim().length > 0)
        .slice(-MAX_HISTORY_MESSAGES);
};

const buildConversationInput = ({ message, history, context }) => {
    const historyText = history
        .map((item) => `${item.role === "user" ? "Pengunjung" : "AI"}: ${item.content}`)
        .join("\n");

    return `
KONTEKS PORTOFOLIO:
${context}

RIWAYAT CHAT TERBARU:
${historyText || "Belum ada riwayat chat."}

PERTANYAAN PENGUNJUNG:
${message}
`.trim();
};

const extractText = (responseData) => {
    if (typeof responseData.output_text === "string") {
        return responseData.output_text.trim();
    }

    const output = Array.isArray(responseData.output) ? responseData.output : [];
    const textChunks = [];

    output.forEach((item) => {
        const content = Array.isArray(item.content) ? item.content : [];

        content.forEach((part) => {
            if (typeof part.text === "string") {
                textChunks.push(part.text);
            }
        });
    });

    return textChunks.join("\n").trim();
};

const createReservation = ({ req, estimatedTokens, runtimeEnv }) => {
    const dailyTokenLimit = getNumberEnv(
        "OPENAI_DAILY_TOKEN_LIMIT",
        DEFAULT_DAILY_TOKEN_LIMIT,
        runtimeEnv
    );
    const dailyRequestLimit = getNumberEnv(
        "OPENAI_DAILY_REQUEST_LIMIT",
        DEFAULT_DAILY_REQUEST_LIMIT,
        runtimeEnv
    );
    const dailyIpTokenLimit = getNumberEnv(
        "OPENAI_DAILY_IP_TOKEN_LIMIT",
        DEFAULT_DAILY_IP_TOKEN_LIMIT,
        runtimeEnv
    );
    const dailyIpRequestLimit = getNumberEnv(
        "OPENAI_DAILY_IP_REQUEST_LIMIT",
        DEFAULT_DAILY_IP_REQUEST_LIMIT,
        runtimeEnv
    );
    const bucket = getRateBucket(runtimeEnv);
    const client = getClientBucket(bucket, getClientKey(req));

    if (bucket.requests >= dailyRequestLimit) {
        return {
            ok: false,
            status: 429,
            message: "Batas request harian AI portfolio sudah habis.",
        };
    }

    if (client.requests >= dailyIpRequestLimit) {
        return {
            ok: false,
            status: 429,
            message: "Batas request harian dari perangkat ini sudah habis.",
        };
    }

    if (bucket.tokens + estimatedTokens > dailyTokenLimit) {
        return {
            ok: false,
            status: 429,
            message: "Batas token harian AI portfolio sudah habis.",
        };
    }

    if (client.tokens + estimatedTokens > dailyIpTokenLimit) {
        return {
            ok: false,
            status: 429,
            message: "Batas token harian dari perangkat ini sudah habis.",
        };
    }

    bucket.requests += 1;
    bucket.tokens += estimatedTokens;
    client.requests += 1;
    client.tokens += estimatedTokens;

    return {
        ok: true,
        bucket,
        client,
        estimatedTokens,
        dailyTokenLimit,
        dailyIpTokenLimit,
    };
};

const reconcileReservation = ({ reservation, actualTokens, failed = false }) => {
    if (!reservation.ok) {
        return;
    }

    const adjustment = failed
        ? -reservation.estimatedTokens
        : actualTokens - reservation.estimatedTokens;

    reservation.bucket.tokens = Math.max(0, reservation.bucket.tokens + adjustment);
    reservation.client.tokens = Math.max(0, reservation.client.tokens + adjustment);

    if (failed) {
        reservation.bucket.requests = Math.max(0, reservation.bucket.requests - 1);
        reservation.client.requests = Math.max(0, reservation.client.requests - 1);
    }
};

export default async function handler(req, res, runtimeEnv) {
    const env = getRuntimeEnv(runtimeEnv);

    applyCorsHeaders(req, res, env);

    if (req.method === "OPTIONS") {
        res.statusCode = isRequestOriginAllowed(req, env) ? 204 : 403;
        res.end();
        return;
    }

    if (!isRequestOriginAllowed(req, env)) {
        json(res, 403, {
            error:
                "Origin tidak diizinkan untuk memakai endpoint AI portfolio.",
        });
        return;
    }

    if (req.method !== "POST") {
        json(res, 405, { error: "Method not allowed." });
        return;
    }

    if (!getEnvValue("OPENAI_API_KEY", env)) {
        json(res, 503, {
            error:
                "OpenAI API key belum diset. Tambahkan OPENAI_API_KEY di .env.local atau Variables and Secrets Cloudflare Pages.",
        });
        return;
    }

    let body;

    try {
        body = await readJsonBody(req);
    } catch (error) {
        json(res, 400, { error: "Format request tidak valid." });
        return;
    }

    const message = String(body.message || "").trim().slice(0, MAX_MESSAGE_CHARS);
    const history = sanitizeHistory(body.history);

    if (!message) {
        json(res, 400, { error: "Pertanyaan tidak boleh kosong." });
        return;
    }

    const maxOutputTokens = getNumberEnv(
        "OPENAI_MAX_OUTPUT_TOKENS",
        DEFAULT_MAX_OUTPUT_TOKENS,
        env
    );
    const context = buildAiPortfolioContext();
    const conversationInput = buildConversationInput({
        message,
        history,
        context,
    });
    const estimatedTokens =
        estimateTokens(systemPrompt) +
        estimateTokens(conversationInput) +
        maxOutputTokens;
    const reservation = createReservation({ req, estimatedTokens, runtimeEnv: env });

    if (!reservation.ok) {
        json(res, reservation.status, { error: reservation.message });
        return;
    }

    try {
        const apiResponse = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${getEnvValue("OPENAI_API_KEY", env)}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: getEnvValue("OPENAI_MODEL", env) || DEFAULT_MODEL,
                instructions: systemPrompt,
                input: conversationInput,
                max_output_tokens: maxOutputTokens,
            }),
        });

        const responseData = await apiResponse.json();

        if (!apiResponse.ok) {
            reconcileReservation({ reservation, actualTokens: 0, failed: true });
            json(res, apiResponse.status, {
                error:
                    responseData.error?.message ||
                    "OpenAI API mengembalikan error.",
            });
            return;
        }

        const answer = extractText(responseData);
        const actualTokens =
            responseData.usage?.total_tokens ||
            responseData.usage?.input_tokens + responseData.usage?.output_tokens ||
            estimateTokens(answer) + estimateTokens(conversationInput);

        reconcileReservation({ reservation, actualTokens });

        json(res, 200, {
            answer:
                answer ||
                "Maaf, AI belum menghasilkan jawaban. Coba tanyakan lagi dengan kalimat yang lebih spesifik.",
            usage: responseData.usage || null,
            rateLimit: {
                dailyTokenLimit: reservation.dailyTokenLimit,
                dailyTokenUsed: reservation.bucket.tokens,
                dailyTokenRemaining: Math.max(
                    0,
                    reservation.dailyTokenLimit - reservation.bucket.tokens
                ),
                dailyIpTokenLimit: reservation.dailyIpTokenLimit,
                dailyIpTokenUsed: reservation.client.tokens,
                dailyIpTokenRemaining: Math.max(
                    0,
                    reservation.dailyIpTokenLimit - reservation.client.tokens
                ),
            },
        });
    } catch (error) {
        reconcileReservation({ reservation, actualTokens: 0, failed: true });
        json(res, 500, {
            error: "Gagal menghubungi OpenAI API. Coba lagi sebentar lagi.",
        });
    }
}
