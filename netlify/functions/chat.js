import { Buffer } from "node:buffer";
import { Readable } from "node:stream";
import chatHandler from "../../api/chat.js";

const normalizeHeaders = (headers = {}) =>
    Object.fromEntries(
        Object.entries(headers).map(([key, value]) => [
            key.toLowerCase(),
            Array.isArray(value) ? value.join(", ") : String(value || ""),
        ]),
    );

const getBody = (event) => {
    if (!event.body) {
        return "";
    }

    return event.isBase64Encoded
        ? Buffer.from(event.body, "base64").toString("utf8")
        : event.body;
};

const ALLOWED_ORIGIN = "https://rizqizamzamijamil.github.io";

export const handler = async (event) => {
    // HANDLE PREFLIGHT OPTIONS
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
            },
            body: "",
        };
    }

    const headers = normalizeHeaders(event.headers);
    const body = getBody(event);

    const req = Readable.from(body ? [body] : []);

    req.method = event.httpMethod;

    req.headers = headers;

    req.socket = {
        remoteAddress:
            headers["x-nf-client-connection-ip"] ||
            headers["client-ip"] ||
            headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
            "netlify",
    };

    let statusCode = 200;

    let responseBody = "";

    // TAMBAHKAN HEADER CORS DI SINI
    const responseHeaders = {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    const res = {
        set statusCode(value) {
            statusCode = value;
        },

        get statusCode() {
            return statusCode;
        },

        setHeader(key, value) {
            responseHeaders[key] = String(value);
        },

        end(chunk = "") {
            responseBody += Buffer.isBuffer(chunk)
                ? chunk.toString("utf8")
                : chunk;
        },
    };

    await chatHandler(req, res);

    return {
        statusCode,
        headers: responseHeaders,
        body: responseBody,
    };
};
