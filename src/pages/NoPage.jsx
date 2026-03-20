import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <main className="page-shell">
            <section className="section-shell">
                <div className="container text-center">
                    <span className="section-heading__eyebrow">404</span>
                    <h1>Halaman yang kamu cari belum tersedia.</h1>
                    <p className="section-heading__description mx-auto">
                        Rutenya mungkin berubah setelah portfolio dirapikan.
                        Kamu bisa kembali ke halaman utama untuk melihat versi
                        terbaru.
                    </p>
                    <Link to="/" className="portfolio-button">
                        Kembali ke Home
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NoPage;
