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
Jika informasi tidak ada di konteks, katakan bahwa data portofolio belum memuat informasi itu.
Jangan mengarang pengalaman, link, nilai, tanggal, atau klaim yang tidak ada di konteks.
Jika pengunjung bertanya soal kerja sama, arahkan ke email atau WhatsApp yang tersedia.
`.trim();

const getNumberEnv = (key, fallback) => {
    const value = Number(process.env[key]);
    return Number.isFinite(value) && value > 0 ? value : fallback;
};

const getDateKey = () => {
    const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: process.env.AI_RATE_LIMIT_TIMEZONE || "Asia/Jakarta",
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

const getRateBucket = () => {
    const dateKey = getDateKey();
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

const createReservation = ({ req, estimatedTokens }) => {
    const dailyTokenLimit = getNumberEnv(
        "OPENAI_DAILY_TOKEN_LIMIT",
        DEFAULT_DAILY_TOKEN_LIMIT
    );
    const dailyRequestLimit = getNumberEnv(
        "OPENAI_DAILY_REQUEST_LIMIT",
        DEFAULT_DAILY_REQUEST_LIMIT
    );
    const dailyIpTokenLimit = getNumberEnv(
        "OPENAI_DAILY_IP_TOKEN_LIMIT",
        DEFAULT_DAILY_IP_TOKEN_LIMIT
    );
    const dailyIpRequestLimit = getNumberEnv(
        "OPENAI_DAILY_IP_REQUEST_LIMIT",
        DEFAULT_DAILY_IP_REQUEST_LIMIT
    );
    const bucket = getRateBucket();
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

export default async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method !== "POST") {
        json(res, 405, { error: "Method not allowed." });
        return;
    }

    if (!process.env.OPENAI_API_KEY) {
        json(res, 503, {
            error:
                "OpenAI API key belum diset. Tambahkan OPENAI_API_KEY di .env.local atau environment hosting.",
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
        DEFAULT_MAX_OUTPUT_TOKENS
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
    const reservation = createReservation({ req, estimatedTokens });

    if (!reservation.ok) {
        json(res, reservation.status, { error: reservation.message });
        return;
    }

    try {
        const apiResponse = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
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
