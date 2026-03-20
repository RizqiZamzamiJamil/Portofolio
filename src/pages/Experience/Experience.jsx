import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experienceEntries, experienceStats } from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import CertificateCarousel from "../Home/CertificateCarousel";
import "./Style.css";

const Experience = () => {
    const [activeEntry, setActiveEntry] = useState(null);

    const toggleEntry = (title) => {
        setActiveEntry((current) => (current === title ? null : title));
    };

    return (
        <main className="page-shell experience-page">
            <section className="section-shell experience-hero">
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
                            Experience
                        </motion.span>
                        <motion.h1
                            className="section-heading__title"
                            variants={heroItem}
                        >
                            Timeline pengalaman di luar
                            <span> portfolio</span>.
                        </motion.h1>
                        <motion.p
                            className="section-heading__description"
                            variants={heroItem}
                        >
                            Organisasi kampus, studi independen, PKL, dan
                            magang setelah lulus dalam satu alur perjalanan.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="experience-hero__stats"
                        initial="hidden"
                        animate="visible"
                        variants={sectionStagger}
                    >
                        {experienceStats.map((item) => (
                            <motion.article
                                key={item.label}
                                className="content-panel experience-hero__stat"
                                variants={sectionItem}
                            >
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                                <p>{item.detail}</p>
                            </motion.article>
                        ))}
                    </motion.div>
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
                            Timeline
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Langkah yang membentuk ritme kerja saya.
                        </motion.h2>
                        <motion.p
                            className="section-heading__description"
                            variants={sectionItem}
                        >
                            Dari organisasi kampus sampai pengalaman industri
                            setelah lulus.
                        </motion.p>
                    </motion.div>

                    <div className="experience-timeline">
                        <div className="experience-timeline__track" aria-hidden="true"></div>
                        {experienceEntries.map((item, index) => {
                            const isTop = index % 2 === 0;
                            const isOpen = activeEntry === item.title;

                            return (
                                <Fragment key={item.title}>
                                    <motion.article
                                        className={
                                            isTop
                                                ? `content-panel experience-node is-top ${
                                                      isOpen ? "is-open" : ""
                                                  }`
                                                : `content-panel experience-node is-bottom ${
                                                      isOpen ? "is-open" : ""
                                                  }`
                                        }
                                        style={{
                                            "--experience-accent-rgb": item.accent,
                                            gridColumn: `${index + 1}`,
                                            gridRow: isTop ? "1" : "3",
                                        }}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={defaultViewport}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.08,
                                        }}
                                    >
                                        <div className="experience-node__top">
                                            <span className="experience-node__phase">
                                                {item.phase}
                                            </span>
                                            <div className="experience-node__icon">
                                                <i
                                                    className={item.icon}
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>

                                        <span className="experience-node__period">
                                            {item.period}
                                        </span>
                                        <p className="experience-node__org">
                                            {item.organization}
                                        </p>
                                        <h3>{item.title}</h3>
                                        <strong>{item.role}</strong>

                                        <button
                                            type="button"
                                            className="experience-node__toggle"
                                            onClick={() => toggleEntry(item.title)}
                                            aria-expanded={isOpen}
                                        >
                                            <span>
                                                {isOpen
                                                    ? "Tutup detail"
                                                    : "Lihat detail"}
                                            </span>
                                            <i
                                                className={`fa-solid ${
                                                    isOpen
                                                        ? "fa-chevron-up"
                                                        : "fa-chevron-down"
                                                }`}
                                                aria-hidden="true"
                                            ></i>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen ? (
                                                <motion.div
                                                    className="experience-node__accordion"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.22 }}
                                                >
                                                    <p>{item.summary}</p>
                                                    <div className="experience-node__tags">
                                                        {item.highlights.map(
                                                            (highlight) => (
                                                                <span
                                                                    key={highlight}
                                                                >
                                                                    {highlight}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ) : null}
                                        </AnimatePresence>
                                    </motion.article>

                                    <div
                                        className={
                                            isTop
                                                ? "experience-marker is-top"
                                                : "experience-marker is-bottom"
                                        }
                                        style={{
                                            "--experience-accent-rgb": item.accent,
                                            gridColumn: `${index + 1}`,
                                            gridRow: "2",
                                        }}
                                        aria-hidden="true"
                                    >
                                        <span className="experience-marker__line"></span>
                                        <span className="experience-marker__dot"></span>
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CertificateCarousel />
        </main>
    );
};

export default Experience;
