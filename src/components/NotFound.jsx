import { Link } from "react-router-dom";

const NotFound = () => (
    <main className="mx-auto grid min-h-[calc(100svh-var(--site-header-height))] w-full max-w-6xl content-center justify-items-center px-6 py-16 text-center">
        <span className="rounded border-2 border-border bg-primary px-3 py-2 font-display text-sm font-semibold">404</span>
        <h1 className="mt-5 max-w-3xl font-display text-xl leading-tight sm:text-2xl">
            Halaman yang kamu cari belum tersedia.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70 sm:text-base">
            Rutenya mungkin berubah setelah portfolio dirapikan. Kamu bisa kembali ke halaman utama untuk melihat versi terbaru.
        </p>
        <Link className="mt-7 inline-flex min-h-12 items-center rounded border-2 border-border bg-primary px-5 font-display text-sm font-semibold shadow-[4px_4px_0_#0A0A0A]" to="/">
            Kembali ke Home
        </Link>
    </main>
);

export default NotFound;
