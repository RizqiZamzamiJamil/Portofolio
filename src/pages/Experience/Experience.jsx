import { motion } from "framer-motion";
import {
    experienceEntries,
    experienceLabels,
} from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import CertificateCarousel from "../Home/CertificateCarousel";
import "./Style.css";

const getTimelinePosition = (index) => {
    const row = Math.floor(index / 4) + 1;
    const offset = index % 4;
    const column = row % 2 === 1 ? offset + 1 : 4 - offset;

    return {
        gridColumn: String(column),
        gridRow: String(row),
    };
};

const Experience = () => {
    return (
        <main className="page-shell experience-page">
            <section className="section-shell experience-hero">
                <div className="container">
                    <motion.div
                        className="experience-hero__content"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={heroItem}
                        >
                            Experience
                        </motion.span>
                        <motion.h1
                            className="experience-hero__title"
                            variants={heroItem}
                        >
                            Pengalaman yang membentuk cara kerja saya.
                        </motion.h1>
                        <motion.p
                            className="experience-hero__description"
                            variants={heroItem}
                        >
                            Keterlibatan organisasi, studi independen, PKL, dan
                            magang industri yang memperkuat komunikasi, tanggung
                            jawab, dan delivery project.
                        </motion.p>

                        <motion.div
                            className="experience-labels"
                            variants={sectionStagger}
                        >
                            {experienceLabels.map((label) => (
                                <motion.span key={label} variants={heroItem}>
                                    {label}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="section-heading section-heading--left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Timeline
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Timeline pengalaman profesional.
                        </motion.h2>
                    </motion.div>

                    <div className="experience-serpentine">
                        <span
                            className="experience-serpentine__track"
                            aria-hidden="true"
                        ></span>

                        {experienceEntries.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="experience-step"
                                style={{
                                    "--experience-accent-rgb": item.accent,
                                    ...getTimelinePosition(index),
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
                                transition={{
                                    duration: 0.42,
                                    delay: index * 0.07,
                                }}
                            >
                                <div className="experience-step__top">
                                    <span>{item.label}</span>
                                    <div className="experience-step__icon">
                                        <i className={item.icon} aria-hidden="true"></i>
                                    </div>
                                </div>
                                <p className="experience-step__period">
                                    {item.period}
                                </p>
                                <h3>{item.title}</h3>
                                <strong>{item.role}</strong>
                                <p className="experience-step__org">
                                    {item.organization}
                                </p>
                                <p className="experience-step__summary">
                                    {item.summary}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <CertificateCarousel />
        </main>
    );
};

export default Experience;
