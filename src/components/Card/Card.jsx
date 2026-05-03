import { motion } from "framer-motion";
import "./Style.css";

const formatProjectDate = (value) =>
    new Intl.DateTimeFormat("id-ID", {
        month: "short",
        year: "numeric",
    }).format(new Date(value));

const normalizeUrl = (value) => (value ? value.trim().replace(/\/$/, "") : "");

const projectAccentMap = {
    Fullstack: "7, 93, 168",
    Frontend: "109, 40, 217",
    Mobile: "4, 120, 87",
};

const stackAccentMap = {
    "Alpine.js": "8, 145, 178",
    API: "217, 119, 6",
    Bootstrap: "109, 40, 217",
    "CodeIgniter 4": "190, 18, 60",
    Express: "71, 85, 105",
    Flutter: "2, 132, 199",
    Laravel: "234, 88, 12",
    Livewire: "124, 58, 237",
    React: "14, 165, 233",
    "Tailwind CSS": "8, 145, 178",
    Vue: "5, 150, 105",
};

const Card = ({ project, featuredLabel, delay = 0 }) => {
    const normalizedLiveUrl = normalizeUrl(project.liveUrl);
    const normalizedCodeUrl = normalizeUrl(project.codeUrl);
    const hasLivePreview =
        Boolean(normalizedLiveUrl) && normalizedLiveUrl !== normalizedCodeUrl;
    const hasCodePreview = Boolean(normalizedCodeUrl);
    const accentRgb =
        project.accent || projectAccentMap[project.category] || "14, 165, 233";

    return (
        <motion.article
            className="project-card"
            style={{ "--project-accent-rgb": accentRgb }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            whileHover={{ y: -8 }}
        >
            <div className="project-card__media">
                <img src={project.image} alt={project.title} />
                <div className="project-card__badges">
                    <span className="project-card__badge project-card__badge--category">
                        {project.category}
                    </span>
                    {featuredLabel ? (
                        <span className="project-card__badge project-card__badge--accent">
                            {featuredLabel}
                        </span>
                    ) : null}
                </div>
            </div>

            <div className="project-card__body">
                <div className="project-card__meta">
                    <span>{project.role}</span>
                    <span>{formatProjectDate(project.updatedAt)}</span>
                </div>

                <div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                </div>

                <div className="project-card__tags">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            style={{
                                "--tag-accent-rgb":
                                    stackAccentMap[item] || accentRgb,
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-card__actions">
                    {hasLivePreview ? (
                        <a
                            href={normalizedLiveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                        >
                            View Project
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                aria-hidden="true"
                            ></i>
                        </a>
                    ) : null}

                    {hasCodePreview ? (
                        <a
                            href={normalizedCodeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link project-card__link--secondary"
                        >
                            Source Code
                            <i
                                className="fa-solid fa-code"
                                aria-hidden="true"
                            ></i>
                        </a>
                    ) : null}
                </div>
            </div>
        </motion.article>
    );
};

export default Card;
