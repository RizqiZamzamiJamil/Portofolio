import chatHandler from "../../api/chat.js";

const normalizeHeaders = (headers) => {
    const normalized = {};

    headers.forEach((value, key) => {
        normalized[key.toLowerCase()] = value;
    });

    return normalized;
};

const getClientAddress = (headers) =>
    headers["cf-connecting-ip"] ||
    headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    headers["client-ip"] ||
    "cloudflare-pages";

export const onRequest = async ({ request, env }) => {
    const requestHeaders = normalizeHeaders(request.headers);
    const req = {
        method: request.method,
        headers: requestHeaders,
        socket: {
            remoteAddress: getClientAddress(requestHeaders),
        },
        text: () => request.text(),
    };

    let statusCode = 200;
    let responseBody = "";
    const responseHeaders = new Headers();

    const res = {
        set statusCode(value) {
            statusCode = value;
        },

        get statusCode() {
            return statusCode;
        },

        setHeader(key, value) {
            responseHeaders.set(key, String(value));
        },

        end(chunk = "") {
            responseBody +=
                typeof chunk === "string"
                    ? chunk
                    : new TextDecoder().decode(chunk);
        },
    };

    await chatHandler(req, res, env);

    return new Response(responseBody, {
        status: statusCode,
        headers: responseHeaders,
    });
};
