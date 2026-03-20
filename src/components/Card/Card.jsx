import { motion } from "framer-motion";
import "./Style.css";

const formatProjectDate = (value) =>
    new Intl.DateTimeFormat("id-ID", {
        month: "short",
        year: "numeric",
    }).format(new Date(value));

const normalizeUrl = (value) => (value ? value.trim().replace(/\/$/, "") : "");

const projectAccentMap = {
    Fullstack: "249, 115, 22",
    Frontend: "8, 145, 178",
    Mobile: "99, 102, 241",
};

const Card = ({ project, featuredLabel, delay = 0 }) => {
    const normalizedLiveUrl = normalizeUrl(project.liveUrl);
    const normalizedCodeUrl = normalizeUrl(project.codeUrl);
    const hasLivePreview =
        Boolean(normalizedLiveUrl) && normalizedLiveUrl !== normalizedCodeUrl;
    const hasCodePreview = Boolean(normalizedCodeUrl);
    const accentRgb = projectAccentMap[project.category] || "245, 158, 11";

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
                        <span key={item}>{item}</span>
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
                            Live Preview
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
                            <i className="fa-solid fa-code" aria-hidden="true"></i>
                        </a>
                    ) : null}
                </div>
            </div>
        </motion.article>
    );
};

export default Card;
