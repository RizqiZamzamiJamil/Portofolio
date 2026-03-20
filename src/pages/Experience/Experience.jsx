import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experienceEntries, experienceStats } from "../../data/portfolioData";
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
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">
                            Experience
                        </span>
                        <h1 className="section-heading__title">
                            Timeline pengalaman di luar
                            <span> portfolio</span>.
                        </h1>
                        <p className="section-heading__description">
                            Organisasi kampus, studi independen, PKL, dan
                            magang setelah lulus dalam satu alur perjalanan.
                        </p>
                    </div>

                    <div className="experience-hero__stats">
                        {experienceStats.map((item) => (
                            <article
                                key={item.label}
                                className="content-panel experience-hero__stat"
                            >
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                                <p>{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">
                            Timeline
                        </span>
                        <h2 className="section-heading__title">
                            Langkah yang membentuk ritme kerja saya.
                        </h2>
                        <p className="section-heading__description">
                            Dari organisasi kampus sampai pengalaman industri
                            setelah lulus.
                        </p>
                    </div>

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
                                        viewport={{ once: true, amount: 0.2 }}
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
        </main>
    );
};

export default Experience;
