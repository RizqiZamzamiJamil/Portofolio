import { motion } from "framer-motion";
import {
    achievementHighlights,
    educationTimeline,
    profile,
} from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import "./Style.css";

const Education = () => {
    return (
        <main className="page-shell education-page">
            <section className="section-shell education-hero">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={heroItem}
                        >
                            Education Journey
                        </motion.span>
                        <motion.h1
                            className="section-heading__title"
                            variants={heroItem}
                        >
                            Riwayat pendidikan yang ikut membentuk cara saya
                            <span> membangun web</span>.
                        </motion.h1>
                        <motion.p
                            className="section-heading__description"
                            variants={heroItem}
                        >
                            Saya lulus pada tahun 2025 dan ingin halaman
                            education ini terasa lebih dari sekadar daftar
                            sekolah. Karena itu saya tambahkan milestone,
                            konteks perkembangan, dan pencapaian yang relevan.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="education-hero__cards"
                        initial="hidden"
                        animate="visible"
                        variants={sectionStagger}
                    >
                        <motion.article
                            className="content-panel education-hero__card"
                            variants={sectionItem}
                        >
                            <span>Graduate</span>
                            <strong>2025</strong>
                            <p>
                                Politeknik Negeri Malang, Business Information
                                System.
                            </p>
                        </motion.article>
                        <motion.article
                            className="content-panel education-hero__card"
                            variants={sectionItem}
                        >
                            <span>Achievement</span>
                            <strong>Best Graduate</strong>
                            <p>
                                Pencapaian akademik yang saya jadikan standar
                                kualitas kerja.
                            </p>
                        </motion.article>
                        <motion.article
                            className="content-panel education-hero__card"
                            variants={sectionItem}
                        >
                            <span>Focus</span>
                            <strong>{profile.role}</strong>
                            <p>
                                Terutama di web berbasis Laravel, React, dan
                                pengalaman pengguna yang lebih halus.
                            </p>
                        </motion.article>
                    </motion.div>
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
                                <div className="education-step__media content-panel">
                                    <div className="education-step__image">
                                        <img src={item.image} alt={item.school} />
                                    </div>
                                </div>

                                <div className="education-step__line" aria-hidden="true">
                                    <div className="education-step__marker"></div>
                                </div>

                                <div className="education-step__detail content-panel">
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
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Academic Highlights
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Pencapaian yang bikin perjalanan ini terasa lebih
                            <span> bermakna</span>.
                        </motion.h2>
                    </motion.div>

                    <div className="education-highlights">
                        {achievementHighlights.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="content-panel education-highlight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
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
