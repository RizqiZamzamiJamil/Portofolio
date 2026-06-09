import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import {
    personalProjects,
    projectLabels,
    projects,
    workedProjects,
} from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import "./Style.css";

const Projects = () => {
    const [activeLabel, setActiveLabel] = useState("Semua");

    const filteredWorkedProjects = useMemo(() => {
        const projectList =
            activeLabel === "Semua"
                ? workedProjects
                : workedProjects.filter((project) => project.label === activeLabel);

        return [...projectList].sort(
            (left, right) => new Date(right.updatedAt) - new Date(left.updatedAt)
        );
    }, [activeLabel]);

    return (
        <main className="page-shell projects-page">
            <section className="section-shell projects-hero">
                <div className="container">
                    <motion.div
                        className="projects-hero__content"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={heroItem}
                        >
                            Projects
                        </motion.span>
                        <motion.h1
                            className="projects-hero__title"
                            variants={heroItem}
                        >
                            Project yang merepresentasikan pengalaman saya
                            membangun web.
                        </motion.h1>
                        <motion.p
                            className="projects-hero__description"
                            variants={heroItem}
                        >
                            Dari karya personal hingga project magang dan skripsi,
                            setiap item menampilkan konteks peran, stack utama,
                            dan kontribusi yang relevan.
                        </motion.p>

                        <motion.div
                            className="projects-hero__summary"
                            variants={sectionStagger}
                        >
                            <motion.span variants={heroItem}>
                                {personalProjects.length} project pribadi
                            </motion.span>
                            <motion.span variants={heroItem}>
                                {workedProjects.length} project pernah dikerjakan
                            </motion.span>
                            <motion.span variants={heroItem}>
                                {projects.length} total project
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell">
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
                            Proyek Pribadi
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Project yang saya bangun sebagai karya personal.
                        </motion.h2>
                    </motion.div>

                    <div className="projects-grid">
                        {personalProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                project={project}
                                delay={index * 0.06}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="projects-worked__head"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <div className="section-heading section-heading--left">
                            <motion.span
                                className="section-heading__eyebrow"
                                variants={sectionItem}
                            >
                                Pernah Dikerjakan
                            </motion.span>
                            <motion.h2
                                className="section-heading__title"
                                variants={sectionItem}
                            >
                                Project dari pengalaman magang, skripsi, dan
                                kolaborasi lain.
                            </motion.h2>
                        </div>

                        <motion.div
                            className="projects-toolbar"
                            variants={sectionStagger}
                        >
                            {projectLabels.map((label) => (
                                <motion.button
                                    key={label}
                                    type="button"
                                    className={
                                        activeLabel === label
                                            ? "projects-filter is-active"
                                            : "projects-filter"
                                    }
                                    onClick={() => setActiveLabel(label)}
                                    variants={sectionItem}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {filteredWorkedProjects.length > 0 ? (
                        <div className="projects-grid">
                            {filteredWorkedProjects.map((project, index) => (
                                <Card
                                    key={project.id}
                                    project={project}
                                    delay={index * 0.06}
                                />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="empty-state"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.4 }}
                        >
                            Belum ada project pada label ini.
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;
