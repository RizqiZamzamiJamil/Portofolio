import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { getProjectCategory } from "../data/portfolioData";
import { getStackBadgeStyle } from "../data/stackLogos";
import { getProjectDateLabel } from "../utils/projectDate";
import ProjectDetailModal from "./ProjectDetailModal";

const Card = ({ project, delay = 0 }) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const category = getProjectCategory(project);
    const primaryStacks = (project.stack || []).slice(0, 3);
    const closeModal = useCallback(() => setIsDetailOpen(false), []);

    return (
        <>
            <motion.article
                className="neo-card flex h-full flex-col bg-white"
                data-project-id={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay }}
            >
                <div
                    className="h-2 border-b-2 border-border"
                    style={{ backgroundColor: category.background }}
                />

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="font-display text-[11px] font-bold uppercase tracking-widest text-foreground/55 sm:text-xs">
                            {getProjectDateLabel(project)}
                        </span>
                        <span
                            className="shrink-0 border-2 border-border px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider shadow-[1.5px_1.5px_0_#0A0A0A] sm:text-[11px]"
                            style={{
                                backgroundColor: category.background,
                                color: category.foreground,
                            }}
                        >
                            {category.cardLabel}
                        </span>
                    </div>

                    <h3 className="mb-2 font-display text-lg font-extrabold leading-tight text-foreground">
                        {project.title}
                    </h3>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/70">
                        {project.listDescription}
                    </p>

                    {primaryStacks.length > 0 ? (
                        <div className="mb-4 flex flex-wrap gap-1.5">
                            {primaryStacks.map((stack) => (
                                <span
                                    className="border-2 border-border px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wide shadow-[1.5px_1.5px_0_#0A0A0A] sm:text-[11px]"
                                    key={stack}
                                    style={getStackBadgeStyle(stack)}
                                >
                                    {stack}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    <button
                        type="button"
                        onClick={() => setIsDetailOpen(true)}
                        className="neo-btn min-h-11 w-full bg-foreground py-2 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"
                    >
                        Lihat Detail <span aria-hidden="true">→</span>
                    </button>
                </div>
            </motion.article>

            {isDetailOpen ? (
                <ProjectDetailModal project={project} onClose={closeModal} />
            ) : null}
        </>
    );
};

export default Card;
