import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { educationTimeline, trainingPrograms } from "../data/portfolioData";
import { defaultViewport, sectionItem, sectionStagger } from "../utils/motion";

const featuredEducation = educationTimeline.slice(2).reverse();
const previousEducation = educationTimeline.slice(0, 2).reverse();

const Education = () => {
    const [isStacked, setIsStacked] = useState(() =>
        typeof window !== "undefined"
            ? window.matchMedia("(max-width: 767px)").matches
            : false,
    );
    const [expandedCards, setExpandedCards] = useState({});
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const target = window.location.hash
            ? document.querySelector(window.location.hash)
            : null;
        if (!target) return;
        requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateLayout = () => setIsStacked(mediaQuery.matches);

        mediaQuery.addEventListener("change", updateLayout);
        return () => mediaQuery.removeEventListener("change", updateLayout);
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
                className="scroll-mt-20 bg-muted py-7 sm:py-8 lg:py-10"
                id="education-main-content"
            >
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                    {/* heading */}
                    <div className="mb-7 flex items-center gap-3">
                        <div
                            className="neo-border h-10 w-4 shrink-0 bg-primary"
                            aria-hidden="true"
                        />
                        <div>
                            <h3 className="font-['Bricolage_Grotesque'] text-xl md:text-2xl font-extrabold text-[#0A0A0A]">
                                Pendidikan Terakhir
                            </h3>
                            <p className="font-['Inter'] text-[#0A0A0A]/55">
                                Kuliah dan Kejuruan
                            </p>
                        </div>
                    </div>

                    <motion.div
                        className="space-y-3 sm:space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        {featuredEducation.map((item, index) => {
                            const panelId = `education-detail-${3 - index}`;
                            const isOpen = Boolean(expandedCards[item.school]);
                            const isDetailVisible = !isStacked || isOpen;

                            return (
                                <motion.article
                                    key={item.school}
                                    id={`education-step-${3 - index}`}
                                    className="scroll-mt-24 border-[2.5px] border-border bg-card text-foreground shadow-[4px_4px_0_#0A0A0A]"
                                    variants={sectionItem}
                                >
                                    <div
                                        className="h-1.5 border-b-2 border-border bg-primary"
                                        aria-hidden="true"
                                    />
                                    <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                                        <div className="min-w-0 border-b-2 border-border p-4 sm:p-5 md:border-b-0 md:border-r-2">
                                            <span className="font-display text-xs font-bold uppercase tracking-wide text-foreground/60">
                                                {index === 0 ? "Kuliah" : "SMK"}
                                            </span>
                                            <h3 className="mt-1 font-display text-lg font-extrabold leading-tight sm:text-xl">
                                                {item.school}
                                            </h3>
                                            <p className="mt-1 font-display text-sm md:text-base font-bold text-blue">
                                                {item.program}
                                            </p>
                                            <dl className="mt-3 grid gap-1.5 font-sans text-sm">
                                                <div>
                                                    <dt className="font-semibold">
                                                        Periode
                                                    </dt>
                                                    <dd className="text-foreground/70">
                                                        {item.period}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="font-semibold">
                                                        Lokasi
                                                    </dt>
                                                    <dd className="text-foreground/70">
                                                        {item.location}
                                                    </dd>
                                                </div>
                                            </dl>
                                            {item.gpa && (
                                                <div className="mt-3 inline-flex items-baseline gap-2 border-2 border-border bg-primary px-2.5 py-1.5 shadow-[3px_3px_0_#0A0A0A]">
                                                    <span className="font-display text-xs font-bold">
                                                        IPK
                                                    </span>
                                                    <strong className="font-display text-base font-extrabold">
                                                        {item.gpa}
                                                    </strong>
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                className="mx-auto mt-3 flex min-h-11 w-fit items-center bg-transparent p-0 font-display text-sm font-bold text-[#0A0A0A]/55 decoration-2 underline-offset-4 transition-colors hover:text-foreground active:translate-y-px md:hidden"
                                                aria-controls={panelId}
                                                aria-expanded={isOpen}
                                                onClick={() =>
                                                    setExpandedCards(
                                                        (current) => ({
                                                            ...current,
                                                            [item.school]:
                                                                !current[
                                                                    item.school
                                                                ],
                                                        }),
                                                    )
                                                }
                                            >
                                                {isOpen
                                                    ? "Tutup Detail"
                                                    : "Lihat Detail"}
                                            </button>
                                        </div>

                                        <motion.div
                                            id={panelId}
                                            aria-hidden={!isDetailVisible}
                                            className="min-w-0 overflow-hidden md:overflow-visible"
                                            initial={false}
                                            animate={
                                                isDetailVisible
                                                    ? {
                                                          height: "auto",
                                                          opacity: 1,
                                                      }
                                                    : { height: 0, opacity: 0 }
                                            }
                                            transition={
                                                shouldReduceMotion
                                                    ? { duration: 0 }
                                                    : {
                                                          duration: 0.3,
                                                          ease: [
                                                              0.22, 1, 0.36, 1,
                                                          ],
                                                      }
                                            }
                                        >
                                            <div className="p-4 sm:p-5">
                                                <p className="font-sans text-sm leading-5 text-foreground/75">
                                                    {item.description}
                                                </p>

                                                <div className="mt-3">
                                                    <h4 className="font-display text-xs font-extrabold uppercase tracking-wide text-foreground">
                                                        Pencapaian
                                                    </h4>
                                                    <ul className="mt-1.5 space-y-1">
                                                        {item.achievements.map(
                                                            (achievement) => (
                                                                <li
                                                                    className="flex items-start gap-2 font-sans text-sm leading-5"
                                                                    key={
                                                                        achievement
                                                                    }
                                                                >
                                                                    <span
                                                                        className="mt-1.5 size-1.5 shrink-0 bg-foreground"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span>
                                                                        {
                                                                            achievement
                                                                        }
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>

                                                {item.courses && (
                                                    <div className="mt-3">
                                                        <h4 className="font-display text-xs font-extrabold uppercase tracking-wide text-foreground/60">
                                                            Mata kuliah relevan
                                                        </h4>
                                                        <ul className="mt-1.5 flex flex-wrap gap-1.5">
                                                            {item.courses.map(
                                                                (course) => (
                                                                    <li
                                                                        className="border-2 border-border px-2 py-0.5 font-sans text-xs leading-5"
                                                                        key={
                                                                            course
                                                                        }
                                                                    >
                                                                        {course}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}

                                                {item.experience && (
                                                    <p className="mt-3 border-l-4 border-accent pl-3 font-sans text-sm leading-5">
                                                        <strong>
                                                            Praktik industri:
                                                        </strong>{" "}
                                                        {item.experience}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                    {/* Other Education */}
                    <div className="mt-6 sm:mt-7">
                        {/* heading */}
                        <div className="mb-7 flex items-center gap-3">
                            <div
                                className="neo-border h-10 w-4 shrink-0 bg-accent"
                                aria-hidden="true"
                            />
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] text-xl md:text-2xl font-extrabold text-[#0A0A0A]">
                                    Pendidikan Lain
                                </h3>
                                <p className="font-['Inter'] text-[#0A0A0A]/55">
                                    Sekolah Dasar dan Menengah
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                            {previousEducation.map((item, index) => (
                                <article
                                    key={item.school}
                                    id={`education-step-${1 - index}`}
                                    className="scroll-mt-24 border-2 border-l-[6px] border-border border-l-accent bg-card px-3 py-2.5 shadow-[3px_3px_0_#0A0A0A] sm:px-4"
                                >
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                        <h3 className="font-display text-sm font-bold sm:text-base">
                                            {item.school}
                                        </h3>
                                        <span className="font-display text-xs font-semibold text-foreground/65">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="mt-0.5 font-sans text-xs text-foreground/70 sm:text-sm">
                                        {item.program} · {item.location}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Bootcamp */}
                    <div className="mt-6 sm:mt-7">
                        {/* heading */}
                        <div className="mb-7 flex items-center gap-3">
                            <div
                                className="neo-border h-10 w-4 shrink-0 bg-success"
                                aria-hidden="true"
                            />
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] text-xl md:text-2xl font-extrabold text-[#0A0A0A]">
                                    Pelatihan dan Bootcamp
                                </h3>
                                <p className="font-['Inter'] text-[#0A0A0A]/55">
                                    Pendidikan diluar sekolah
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                            {trainingPrograms.map((program, index) => (
                                <article
                                    key={`${program.provider}-${program.year}`}
                                    className="flex items-center gap-3 border-2 border-border border-l-[6px] border-l-success bg-card p-3 shadow-[3px_3px_0_#0A0A0A] sm:p-4"
                                >
                                    <img
                                        className="w-8 h-8"
                                        src={program.logo}
                                        alt=""
                                    />
                                    <div className="min-w-0">
                                        <h3 className="font-display text-sm font-bold leading-tight sm:text-base">
                                            {program.title}
                                        </h3>
                                        <p className="mt-0.5 font-sans text-xs text-blue sm:text-sm">
                                            {program.provider} · {program.year}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Education;
