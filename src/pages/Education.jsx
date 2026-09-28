import { motion } from "framer-motion";
import { useEffect } from "react";
import { educationTimeline } from "../data/portfolioData";
import {
    defaultViewport,
    sectionItem,
    sectionStagger,
} from "../utils/motion";

const Education = () => {
    useEffect(() => {
        const target = window.location.hash
            ? document.querySelector(window.location.hash)
            : null;
        if (!target) return;
        requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }, []);

    return (
        <main>
            <section
                className="bg-[#0A0A0A] py-16"
                style={{ borderBottom: "2.5px solid #0A0A0A" }}
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="mb-4 inline-block bg-[#FFE500] px-3 py-1 neo-border shadow-[3px_3px_0_#FFE500]">
                        <span className="font-['Bricolage_Grotesque'] text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">
                            Academic
                        </span>
                    </div>
                    <h1 className="mb-4 font-['Bricolage_Grotesque'] text-4xl font-extrabold leading-none text-white md:text-6xl">
                        RIWAYAT
                        <br />
                        <span className="text-[#FFE500]">PENDIDIKAN</span>
                    </h1>
                    <p className="max-w-lg font-['Inter'] text-white/60">
                        Perjalanan akademis yang membentuk fondasi teknis dan
                        soft skill saya sebagai developer.
                    </p>
                </div>
            </section>

            <section
                className="scroll-mt-20 bg-muted py-14 sm:py-16 lg:py-20"
                id="education-main-content"
            >
                <div className="mx-auto w-full max-w-6xl px-6">
                    <motion.div
                        className="mx-auto grid max-w-4xl gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        {educationTimeline.map((item, index) => (
                            <motion.article
                                key={item.school}
                                id={`education-step-${index}`}
                                className="grid gap-4 rounded-lg border-[2.5px] border-border bg-card p-4 shadow-[4px_4px_0_#0A0A0A] sm:grid-cols-[4.5rem_1fr] sm:items-start sm:gap-5 sm:p-6"
                                variants={sectionItem}
                            >
                                <div className="grid size-12 place-items-center rounded border-2 border-border bg-primary font-display text-sm font-extrabold sm:size-14">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <span className="inline-flex rounded border border-border bg-muted px-2.5 py-1 font-display text-xs font-semibold">
                                        {item.period}
                                    </span>
                                    <h2 className="mt-3 font-display text-lg leading-relaxed sm:text-xl">
                                        {item.school}
                                    </h2>
                                    <strong className="mt-1 block text-sm font-semibold">
                                        {item.program} - {item.location}
                                    </strong>
                                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Education;
