import { motion } from "framer-motion";
import {
    achievementHighlights,
    educationTimeline,
    profile,
} from "../../data/portfolioData";
import "./Style.css";

const Education = () => {
    return (
        <main className="page-shell education-page">
            <section className="section-shell education-hero">
                <div className="container">
                    <div className="section-heading section-heading--left">
                        <span className="section-heading__eyebrow">
                            Education Journey
                        </span>
                        <h1 className="section-heading__title">
                            Riwayat pendidikan yang ikut membentuk cara saya
                            <span> membangun web</span>.
                        </h1>
                        <p className="section-heading__description">
                            Saya lulus pada tahun 2025 dan ingin halaman
                            education ini terasa lebih dari sekadar daftar
                            sekolah. Karena itu saya tambahkan milestone,
                            konteks perkembangan, dan pencapaian yang relevan.
                        </p>
                    </div>

                    <div className="education-hero__cards">
                        <article className="content-panel education-hero__card">
                            <span>Graduate</span>
                            <strong>2025</strong>
                            <p>
                                Politeknik Negeri Malang, Business Information
                                System.
                            </p>
                        </article>
                        <article className="content-panel education-hero__card">
                            <span>Achievement</span>
                            <strong>Best Graduate</strong>
                            <p>
                                Pencapaian akademik yang saya jadikan standar
                                kualitas kerja.
                            </p>
                        </article>
                        <article className="content-panel education-hero__card">
                            <span>Focus</span>
                            <strong>{profile.role}</strong>
                            <p>
                                Terutama di web berbasis Laravel, React, dan
                                pengalaman pengguna yang lebih halus.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <div className="education-timeline">
                        {educationTimeline.map((item, index) => (
                            <motion.article
                                key={item.school}
                                className={
                                    index % 2 === 0
                                        ? "education-step"
                                        : "education-step education-step--right"
                                }
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                }}
                            >
                                <div className="education-step__marker"></div>
                                <div className="education-step__content content-panel">
                                    <div className="education-step__image">
                                        <img src={item.image} alt={item.school} />
                                    </div>
                                    <div className="education-step__copy">
                                        <span className="education-step__period">
                                            {item.period}
                                        </span>
                                        <h2>{item.school}</h2>
                                        <strong>
                                            {item.title} - {item.location}
                                        </strong>
                                        <p>{item.description}</p>
                                        <div className="education-step__tags">
                                            {item.highlights.map((highlight) => (
                                                <span key={highlight}>{highlight}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">
                            Academic Highlights
                        </span>
                        <h2 className="section-heading__title">
                            Pencapaian yang bikin perjalanan ini terasa lebih
                            <span> bermakna</span>.
                        </h2>
                    </div>

                    <div className="education-highlights">
                        {achievementHighlights.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="content-panel education-highlight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                }}
                            >
                                <div className="education-highlight__icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                <span>{item.value}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Education;
