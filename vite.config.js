import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
    // ...
  },
  plugins: [react()],
  base: "/Portofolio",
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
          react: ['react'],
          'react-dom': ['react-dom'],
        },
      },
    },
  },
});
