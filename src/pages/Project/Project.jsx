import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import { latestProjects, projects } from "../../data/portfolioData";
import "./Style.css";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter((project) => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="page-shell projects-page">
            <section className="section-shell projects-hero">
                <div className="container">
                    <div className="projects-hero__grid">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55 }}
                        >
                            <span className="section-heading__eyebrow">
                                Selected Works
                            </span>
                            <h1 className="projects-hero__title">
                                Project pilihan yang paling relevan untuk
                                <span> dieksplor</span>.
                            </h1>
                            <p className="projects-hero__description">
                                Semua project memakai sumber data yang sama agar
                                urutan dan tampilannya tetap konsisten.
                            </p>

                            <div className="projects-hero__stats">
                                <article>
                                    <strong>{projects.length}+</strong>
                                    <span>Total project pilihan</span>
                                </article>
                                <article>
                                    <strong>{categories.length - 1}</strong>
                                    <span>Kategori karya</span>
                                </article>
                                <article>
                                    <strong>Laravel</strong>
                                    <span>Stack yang paling sering dipakai</span>
                                </article>
                            </div>
                        </motion.div>

                        <motion.article
                            className="content-panel projects-featured"
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                        >
                            <img
                                src={latestProjects[0].image}
                                alt={latestProjects[0].title}
                            />
                            <div className="projects-featured__copy">
                                <span className="info-chip">Newest Project</span>
                                <h2>{latestProjects[0].title}</h2>
                                <p>{latestProjects[0].highlight}</p>
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <div className="projects-toolbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? "projects-filter is-active"
                                        : "projects-filter"
                                }
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {filteredProjects.length > 0 ? (
                        <div className="projects-grid">
                            {filteredProjects.map((project) => (
                                <Card key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            Belum ada project pada kategori ini.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;
