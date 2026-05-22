/* eslint-env node */
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
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

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    Object.assign(process.env, env);

    return {
        test: {
            // ...
        },
        plugins: [react(), portfolioChatApi()],
        base: normalizeBasePath(env.VITE_BASE_PATH || "/"),
        server: {
            port: 1000,
        },
        build: {
            sourcemap: true,
            chunkSizeWarningLimit: 2000,
            assetsInlineLimit: 10240,
            rollupOptions: {
                output: {
                    manualChunks: {
                        react: ["react"],
                        "react-dom": ["react-dom"],
                    },
                },
            },
        },
    };
});
