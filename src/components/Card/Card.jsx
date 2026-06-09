import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import StackLogo from "../StackLogo/StackLogo";
import { getStackAccent } from "../../data/stackLogos";
import "./Style.css";

const formatProjectDate = (value) =>
    new Intl.DateTimeFormat("id-ID", {
        month: "long",
        year: "numeric",
    }).format(new Date(value));

const normalizeUrl = (value) => (value ? value.trim().replace(/\/$/, "") : "");

const ProjectDetailModal = ({ project, onClose }) => {
    const normalizedLiveUrl = normalizeUrl(project.liveUrl);
    const normalizedCodeUrl = normalizeUrl(project.codeUrl);
    const hasLivePreview =
        Boolean(normalizedLiveUrl) && normalizedLiveUrl !== normalizedCodeUrl;
    const hasCodePreview = Boolean(normalizedCodeUrl);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    return createPortal(
        <AnimatePresence>
            <motion.div
                className="project-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.article
                    className="project-modal__dialog"
                    style={{ "--project-accent-rgb": project.accent }}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 18, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        className="project-modal__close"
                        onClick={onClose}
                        aria-label="Tutup detail project"
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>

                    <div className="project-modal__media">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-modal__copy">
                        <div className="project-modal__eyebrow">
                            <span>{project.label}</span>
                            <span>{formatProjectDate(project.updatedAt)}</span>
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.detailDescription || project.listDescription}</p>

                        <dl className="project-modal__facts">
                            <div>
                                <dt>Posisi</dt>
                                <dd>{project.position}</dd>
                            </div>
                            <div>
                                <dt>Pola kerja</dt>
                                <dd>{project.collaboration}</dd>
                            </div>
                        </dl>

                        <div className="project-modal__stack">
                            {project.stack.map((item) => {
                                const stackAccent = getStackAccent(
                                    item,
                                    project.accent
                                );

                                return (
                                    <span
                                        key={item}
                                        style={{
                                            "--stack-accent-rgb":
                                                stackAccent,
                                        }}
                                    >
                                        <StackLogo stack={item} size="chip" />
                                        {item}
                                    </span>
                                );
                            })}
                        </div>

                        {hasLivePreview || hasCodePreview ? (
                            <div className="project-modal__actions">
                                {hasLivePreview ? (
                                    <a
                                        href={normalizedLiveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio-button"
                                    >
                                        Live Project
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
                                        className="portfolio-button portfolio-button--ghost"
                                    >
                                        Source Code
                                        <i
                                            className="fa-solid fa-code"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </motion.article>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

const Card = ({ project, featuredLabel, delay = 0 }) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const logoStack = project.logoStack || project.mainStack;
    const logoAccent = useMemo(
        () => getStackAccent(logoStack, project.accent),
        [logoStack, project.accent]
    );

    return (
        <>
            <motion.article
                className="project-card"
                data-project-id={project.id}
                style={{
                    "--project-accent-rgb": project.accent || logoAccent,
                    "--project-logo-rgb": logoAccent,
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, ease: "easeOut", delay }}
            >
                <div className="project-card__logo" aria-hidden="true">
                    <StackLogo stack={logoStack} size="project" />
                </div>

                <div className="project-card__body">
                    <div className="project-card__meta">
                        <span>{featuredLabel || project.label}</span>
                        <span>{formatProjectDate(project.updatedAt)}</span>
                    </div>

                    <div className="project-card__copy">
                        <h3>{project.title}</h3>
                        <p>{project.listDescription}</p>
                    </div>

                    <div className="project-card__work">
                        <span>{project.position}</span>
                        <span>{project.collaboration}</span>
                    </div>

                    <div className="project-card__footer">
                        <span className="project-card__main-stack">
                            <StackLogo stack={project.mainStack} size="chip" />
                            {project.mainStack}
                        </span>
                        <button
                            type="button"
                            className="project-card__button"
                            onClick={() => setIsDetailOpen(true)}
                        >
                            View detail
                            <i
                                className="fa-solid fa-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
            </motion.article>

            {isDetailOpen ? (
                <ProjectDetailModal
                    project={project}
                    onClose={() => setIsDetailOpen(false)}
                />
            ) : null}
        </>
    );
};

export default Card;
