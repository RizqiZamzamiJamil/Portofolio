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

const experienceGroups = [
    {
        key: "work",
        title: "Pengalaman Kerja",
        description:
            "Magang dan kontribusi project yang dikerjakan bersama perusahaan atau instansi.",
    },
    {
        key: "growth",
        title: "Organisasi & Pelatihan",
        description:
            "Aktivitas pengembangan diri, organisasi, dan program pembelajaran industri.",
    },
];

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

                    <div className="experience-timeline-grid">
                        {experienceGroups.map((group, groupIndex) => {
                            const entries = experienceEntries.filter(
                                (item) => item.category === group.key
                            );

                            return (
                                <motion.section
                                    key={group.key}
                                    className="experience-column"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={defaultViewport}
                                    variants={sectionStagger}
                                >
                                    <motion.div
                                        className="experience-column__head"
                                        variants={sectionItem}
                                    >
                                        <span>{group.title}</span>
                                        <p>{group.description}</p>
                                    </motion.div>

                                    <div className="experience-timeline-list">
                                        <span
                                            className="experience-timeline-list__track"
                                            aria-hidden="true"
                                        ></span>

                                        {entries.map((item, index) => (
                                            <motion.article
                                                key={`${item.period}-${item.role}-${item.organization}`}
                                                className="experience-step"
                                                style={{
                                                    "--experience-accent-rgb":
                                                        item.accent,
                                                }}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={defaultViewport}
                                                transition={{
                                                    duration: 0.42,
                                                    delay:
                                                        groupIndex * 0.08 +
                                                        index * 0.07,
                                                }}
                                            >
                                                <span
                                                    className="experience-step__marker"
                                                    aria-hidden="true"
                                                ></span>
                                                <p className="experience-step__period">
                                                    {item.period}
                                                </p>
                                                <h3>{item.role}</h3>
                                                <strong>{item.title}</strong>
                                                <p className="experience-step__org">
                                                    {item.organization}
                                                </p>
                                                <p className="experience-step__summary">
                                                    {item.summary}
                                                </p>

                                                <div className="experience-step__badges">
                                                    {item.badges.map((badge) => (
                                                        <span key={badge}>
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.article>
                                        ))}
                                    </div>
                                </motion.section>
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
