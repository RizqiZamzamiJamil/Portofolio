/* eslint-env node */
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

const portfolioChatApi = () => ({
    name: "portfolio-chat-api",
    configureServer(server) {
        server.middlewares.use("/api/chat", async (req, res) => {
            const moduleUrl = new URL(
                `./api/chat.js?updated=${Date.now()}`,
                import.meta.url
            ).href;
            const { default: handler } = await import(moduleUrl);

            return handler(req, res);
        });
    },
});

const normalizeBasePath = (basePath) => {
    if (!basePath || basePath === ".") {
        return "/";
    }

    const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`;

    return withLeadingSlash.endsWith("/")
        ? withLeadingSlash
        : `${withLeadingSlash}/`;
};

const assertNoPublicSecrets = (env) => {
    const openAiKeyPattern = /^sk-[A-Za-z0-9_-]{20,}/;
    const publicSecretNamePattern = /^VITE_.*(API_KEY|SECRET|PRIVATE_KEY|ACCESS_TOKEN)$/i;

    Object.entries(env).forEach(([key, value]) => {
        if (!key.startsWith("VITE_") || !value) {
            return;
        }

        if (publicSecretNamePattern.test(key) || openAiKeyPattern.test(value)) {
            throw new Error(
                `${key} terlihat seperti secret dan akan ikut ke bundle browser. ` +
                    "Simpan OPENAI_API_KEY hanya di .env.local atau Cloudflare Pages Variables and Secrets."
            );
        }
    });
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    assertNoPublicSecrets(env);
    Object.assign(process.env, env);

    return {
        plugins: [react(), tailwindcss(), portfolioChatApi()],
        base: normalizeBasePath(env.VITE_BASE_PATH || "/"),
        server: {
            port: 1000,
        },
    };
});
