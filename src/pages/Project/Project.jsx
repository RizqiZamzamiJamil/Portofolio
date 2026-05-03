import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import { highlightedProject, projects } from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroPanel,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import "./Style.css";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        const projectList =
            activeCategory === "All"
                ? projects
                : projects.filter((project) => project.category === activeCategory);

        return [...projectList].sort(
            (left, right) => new Date(right.updatedAt) - new Date(left.updatedAt)
        );
    }, [activeCategory]);

    return (
        <main className="page-shell projects-page">
            <section className="section-shell projects-hero">
                <div className="container">
                    <div className="projects-hero__grid">
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
                                Selected Works
                            </motion.span>
                            <motion.h1
                                className="projects-hero__title"
                                variants={heroItem}
                            >
                                Project pilihan yang paling relevan untuk
                                <span> dieksplor</span>.
                            </motion.h1>
                            <motion.p
                                className="projects-hero__description"
                                variants={heroItem}
                            >
                                Semua project memakai sumber data yang sama agar
                                urutan dan tampilannya tetap konsisten.
                            </motion.p>

                            <motion.div
                                className="projects-hero__stats"
                                variants={sectionStagger}
                            >
                                <motion.article variants={heroItem}>
                                    <strong>{projects.length}+</strong>
                                    <span>Total project pilihan</span>
                                </motion.article>
                                <motion.article variants={heroItem}>
                                    <strong>{categories.length - 1}</strong>
                                    <span>Kategori karya</span>
                                </motion.article>
                                <motion.article variants={heroItem}>
                                    <strong>Laravel</strong>
                                    <span>Stack yang paling sering dipakai</span>
                                </motion.article>
                            </motion.div>
                        </motion.div>

                        <motion.article
                            className="content-panel projects-featured"
                            initial="hidden"
                            animate="visible"
                            variants={heroPanel}
                        >
                            <motion.div
                                className="projects-featured__media"
                                variants={heroItem}
                            >
                                <motion.img
                                    src={highlightedProject.image}
                                    alt={highlightedProject.title}
                                    variants={heroItem}
                                />
                            </motion.div>
                            <motion.div
                                className="projects-featured__copy"
                                variants={sectionStagger}
                            >
                                <motion.span
                                    className="info-chip"
                                    variants={heroItem}
                                >
                                    Highlight Project
                                </motion.span>
                                <motion.h2 variants={heroItem}>
                                    {highlightedProject.title}
                                </motion.h2>
                                <motion.p variants={heroItem}>
                                    {highlightedProject.highlight}
                                </motion.p>
                            </motion.div>
                        </motion.article>
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="projects-toolbar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? "projects-filter is-active"
                                        : "projects-filter"
                                }
                                onClick={() => setActiveCategory(category)}
                                variants={sectionItem}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {filteredProjects.length > 0 ? (
                        <div className="projects-grid">
                            {filteredProjects.map((project, index) => (
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45 }}
                        >
                            Belum ada project pada kategori ini.
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;
