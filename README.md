# My Portofolio using React JS

## Chat AI

Chat AI memakai endpoint `/api/chat` supaya `OPENAI_API_KEY` tidak ikut masuk ke bundle React.

1. Salin `.env.example` ke `.env.local`.
2. Isi `OPENAI_API_KEY` dengan API key OpenAI.
3. Model default ada di `OPENAI_MODEL=gpt-5.4-mini`.
4. Batas token harian bisa diatur lewat `OPENAI_DAILY_TOKEN_LIMIT` dan `OPENAI_DAILY_IP_TOKEN_LIMIT`.
5. Data tambahan untuk AI bisa ditambahkan di `src/data/aiCustomKnowledge.js`.

Saat local development, `npm run dev` sudah menyediakan `/api/chat` lewat middleware Vite. Untuk production, deploy ke hosting yang mendukung serverless function atau Node endpoint. GitHub Pages hanya static, jadi endpoint API tidak akan menyimpan API key dengan aman.
