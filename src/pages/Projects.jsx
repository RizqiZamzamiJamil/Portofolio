import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Card from "../components/Card";
import {
    personalProjects,
    projectLabels,
    workedProjects,
} from "../data/portfolioData";
import { defaultViewport, sectionItem, sectionStagger } from "../utils/motion";

const Projects = () => {
    const [activeLabel, setActiveLabel] = useState("Semua");
    const filteredWorkedProjects = useMemo(() => {
        const filtered =
            activeLabel === "Semua"
                ? workedProjects
                : workedProjects.filter(
                      (project) => project.label === activeLabel,
                  );
        return [...filtered].sort(
            (left, right) =>
                new Date(right.updatedAt) - new Date(left.updatedAt),
        );
    }, [activeLabel]);

    return (
        <main>
            <section
                className="bg-[#0A0A0A] py-16"
                style={{ borderBottom: "2.5px solid #0A0A0A" }}
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="mb-4 inline-block bg-[#FFE500] px-3 py-1 neo-border shadow-[3px_3px_0_#FFE500]">
                        <span className="font-['Bricolage_Grotesque'] text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">
                            Portfolio
                        </span>
                    </div>
                    <h1 className="mb-4 font-['Bricolage_Grotesque'] text-4xl font-extrabold leading-none text-white md:text-6xl">
                        SEMUA
                        <br />
                        <span className="text-[#FFE500]">PROJECT</span>
                    </h1>
                    <p className="max-w-lg font-['Inter'] text-white/60">
                        Kumpulan project dari berbagai kegiatan - kuliah,
                        pelatihan, magang, hingga proyek pribadi yang berguna
                        untuk umum.
                    </p>
                </div>
            </section>

            <section
                className="scroll-mt-20 py-14 sm:py-16 lg:py-20 bg-muted border-b-4"
                id="projects-main-content"
            >
                <div className="mx-auto w-full max-w-6xl px-6">
                    <motion.div
                        className="mb-7 max-w-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="mb-4 inline-flex border-2 border-border bg-primary  px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] shadow-[3px_3px_0_#0a0a0a]"
                            variants={sectionItem}
                        >
                            Proyek Pribadi
                        </motion.span>
                        <motion.h2
                            className="mt-3 font-display text-lg leading-relaxed sm:text-xl"
                            variants={sectionItem}
                        >
                            Proyek yang saya bangun sebagai portofolio pribadi.
                        </motion.h2>
                    </motion.div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

            <section className="py-14 sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <motion.div
                        className="mb-6 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <div className="max-w-2xl">
                            <motion.span
                                className="mb-4 inline-flex border-2 border-border bg-foreground text-primary px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] shadow-[3px_3px_0_#0a0a0a]"
                                variants={sectionItem}
                            >
                                Pernah Dikerjakan
                            </motion.span>
                            <motion.h2
                                className="mt-3 font-display text-lg leading-relaxed sm:text-xl"
                                variants={sectionItem}
                            >
                                Project dari pengalaman kuliah, pelatihan,
                                magang, skripsi, dan proyek lain.
                            </motion.h2>
                        </div>
                        <motion.div
                            className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap"
                            variants={sectionStagger}
                            aria-label="Filter proyek"
                        >
                            {projectLabels.map((label) => (
                                <motion.button
                                    key={label}
                                    type="button"
                                    className={`min-h-11 rounded border-2 border-border px-3 text-xs font-bold transition-colors sm:text-sm ${activeLabel === label ? "bg-primary shadow-[2px_2px_0_#0A0A0A]" : "bg-card hover:bg-primary/50"}`}
                                    aria-pressed={activeLabel === label}
                                    onClick={() => setActiveLabel(label)}
                                    variants={sectionItem}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {filteredWorkedProjects.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
                            className="rounded border-2 border-dashed border-border bg-card p-8 text-center text-sm text-foreground/70"
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
