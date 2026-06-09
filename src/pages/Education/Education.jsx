import { useEffect } from "react";
import { motion } from "framer-motion";
import { educationTimeline } from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import "./Style.css";

const Education = () => {
    useEffect(() => {
        const target = window.location.hash
            ? document.querySelector(window.location.hash)
            : null;

        if (!target) {
            return;
        }

        requestAnimationFrame(() => {
            target.scrollIntoView({ block: "start" });
        });
    }, []);

    return (
        <main className="page-shell education-page">
            <section className="section-shell education-hero">
                <div className="container">
                    <motion.div
                        className="education-hero__content"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={heroItem}
                        >
                            Education
                        </motion.span>
                        <motion.h1
                            className="education-hero__title"
                            variants={heroItem}
                        >
                            Pendidikan yang membentuk fondasi teknis dan bisnis.
                        </motion.h1>
                        <motion.p
                            className="education-hero__description"
                            variants={heroItem}
                        >
                            Perjalanan akademik dari Teknik Komputer dan Jaringan
                            hingga Sistem Informasi Bisnis, dengan fokus pada
                            praktik IT, analisis kebutuhan, dan pengembangan sistem.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="education-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        {educationTimeline.map((item, index) => (
                            <motion.article
                                key={item.school}
                                id={`education-step-${index}`}
                                className="education-item"
                                variants={sectionItem}
                            >
                                <div className="education-item__marker">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="education-item__copy">
                                    <span>{item.period}</span>
                                    <h2>{item.school}</h2>
                                    <strong>
                                        {item.program} - {item.location}
                                    </strong>
                                    <p>{item.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Education;
