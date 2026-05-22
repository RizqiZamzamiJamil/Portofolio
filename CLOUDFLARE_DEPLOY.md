# Cloudflare Pages Deploy

## Build settings

Isi konfigurasi Cloudflare Pages seperti ini:

| Field | Value |
| --- | --- |
| Framework preset | React (Vite) |
| Build command | `npm run build:cloudflare` |
| Build output directory | `dist` |
| Root directory | kosongkan jika repository ini adalah root project |

## Environment variables

Tambahkan variable ini untuk Production dan Preview:

| Variable | Required | Notes |
| --- | --- | --- |
| `OPENAI_API_KEY` | Ya | Isi dengan API key OpenAI. Simpan sebagai secret kalau opsi secret tersedia. |
| `OPENAI_MODEL` | Tidak | Default project: `gpt-5.4-mini`. |
| `AI_ALLOWED_ORIGINS` | Ya | Contoh: `https://portofolio-72b.pages.dev,https://rizam.xyz`. |
| `OPENAI_DAILY_TOKEN_LIMIT` | Tidak | Default: `50000`. |
| `OPENAI_DAILY_REQUEST_LIMIT` | Tidak | Default: `100`. |
| `OPENAI_DAILY_IP_TOKEN_LIMIT` | Tidak | Default: `12000`. |
| `OPENAI_DAILY_IP_REQUEST_LIMIT` | Tidak | Default: `30`. |
| `OPENAI_MAX_OUTPUT_TOKENS` | Tidak | Default: `550`. |
| `AI_RATE_LIMIT_TIMEZONE` | Tidak | Default: `Asia/Jakarta`. |
| `VITE_AI_CHAT_API_URL` | Tidak | Kosongkan agar frontend memakai `/api/chat` dari Cloudflare Pages Function. |
| `VITE_BASE_PATH` | Tidak | Kosongkan atau isi `/` untuk Cloudflare Pages root domain. |

Jangan isi `VITE_BASE_PATH=/Portofolio/` untuk Cloudflare, karena itu membuat asset build mengarah ke `/Portofolio/assets/...` dan bisa menyebabkan halaman putih kosong.

## GitHub Pages backup

GitHub Pages tetap bisa dipakai sebagai backup deploy:

```bash
npm run deploy
```

atau:

```bash
npm run deploy:gh-pages
```

Script ini sengaja memakai `vite build --base=/Portofolio/`, karena GitHub Pages repository path butuh asset berada di bawah `/Portofolio/`. Untuk Cloudflare, tetap gunakan `npm run build:cloudflare` atau `npm run deploy:cloudflare`.

## API route

Cloudflare Pages Function untuk chat berada di:

```text
functions/api/chat.js
```

Endpoint publiknya:

```text
/api/chat
```

File `public/_routes.json` membatasi Pages Function hanya untuk `/api/*`, sehingga halaman statis dan asset tetap dilayani sebagai static Pages output.

## Custom domain

Jika `https://rizam.xyz` menampilkan `DNS_PROBE_FINISHED_NXDOMAIN`, itu berarti DNS domain belum mengarah ke Cloudflare Pages atau nameserver/DNS record belum aktif.

Checklist:

1. Tambahkan custom domain `rizam.xyz` di Cloudflare Pages project.
2. Pastikan DNS domain di Hostinger memakai nameserver Cloudflare, atau buat record sesuai instruksi custom domain Cloudflare Pages.
3. Setelah DNS aktif, tambahkan `https://rizam.xyz` ke `AI_ALLOWED_ORIGINS`.
4. Deploy ulang setelah env berubah.
