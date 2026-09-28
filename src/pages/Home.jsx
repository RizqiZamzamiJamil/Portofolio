import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ConfirmationModal from "../components/ConfirmationModal";
import {
    contactDetails,
    contactScopes,
    latestProjects,
    profile,
    projects,
    skillGroups,
    socialLinks,
} from "../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroPanel,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../utils/motion";

const getSkillGroup = (title) =>
    skillGroups.find((group) => group.title === title)?.skills ?? [];

const skillsMap = skillGroups.flatMap((group) =>
    group.skills.map((skill) => skill.name),
);

const Home = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        const messageBody = `Permisi, perkenalkan\n\nsaya ${name}\ndengan e-mail ${email}\n\n. Pesan Saya: ${message}`;
        const url = `https://api.whatsapp.com/send?phone=6282147083442&text=${encodeURIComponent(messageBody)}`;
        setShowConfirmModal(false);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main>
            {/* Hero */}
            <section className="flex min-h-[calc(100svh-var(--site-header-height))] flex-col bg-background">
                <div className="flex flex-1 items-center">
                    <div className="mx-auto grid w-full max-w-6xl items-center px-6 py-16 md:grid-cols-12 gap-6 md:gap-12 md:py-24">
                        {/* Left / Downside */}
                        <motion.div
                            className="order-2 min-w-0 md:order-1 md:col-span-8"
                            initial="hidden"
                            animate="visible"
                            variants={heroStagger}
                        >
                            {/* Available */}
                            <motion.div className="inline-flex items-center gap-2 bg-foreground text-primary px-3 md:px-4 py-2 neo-border neo-shadow mb-4 md:mb-6">
                                <span className="w-2 h-2 bg-[#4AFF91] rounded-full animate-pulse"></span>
                                <motion.span
                                    className="font-['Bricolage_Grotesque'] font-bold text-xs md:text-sm tracking-wider uppercase"
                                    variants={heroItem}
                                >
                                    Available for Work
                                </motion.span>
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                className="break-words font-display text-2xl text-center md:text-start font-extrabold leading-[0.94] text-foreground uppercase sm:text-5xl md:max-w-none md:text-6xl lg:text-[4rem] mb-3 md:mb-6"
                                variants={heroItem}
                            >
                                {profile.name}
                            </motion.h1>

                            {/* Role */}
                            <motion.div
                                className="flex items-center justify-center md:justify-normal gap-3 mb-4"
                                variants={heroItem}
                            >
                                <span
                                    className="h-0.5 w-5 bg-accent"
                                    aria-hidden="true"
                                />
                                <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-accent sm:text-lg">
                                    {profile.role}
                                </p>
                                <span
                                    className="h-0.5 w-5 bg-accent"
                                    aria-hidden="true"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                className="text-sm md:text-base text-justify leading-relaxed text-foreground/80 mb-4"
                                variants={heroItem}
                            >
                                {profile.heroDescription}
                            </motion.p>

                            <motion.a
                                href="#contact-me"
                                className="mb-6 inline-flex items-center justify-center border-2 border-border bg-foreground px-4 py-2 text-xs font-display font-bold uppercase tracking-wide text-primary neo-shadow transition-transform duration-200 hover:scale-105 hover:text-primary/80 md:px-6 md:text-base"
                                variants={heroItem}
                            >
                                Hubungi Saya
                            </motion.a>

                            <motion.div
                                className="flex flex-wrap items-center gap-3"
                                variants={sectionStagger}
                            >
                                <span className="hidden md:inline mr-1 text-sm text-foreground/65">
                                    Follow me:
                                </span>
                                {socialLinks.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={item.label}
                                        aria-label={item.label}
                                        className="inline-flex size-11 items-center justify-center border-2 border-border bg-card text-foreground shadow-[3px_3px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:bg-primary hover:shadow-[4px_4px_0_#0A0A0A]"
                                        variants={heroItem}
                                    >
                                        <i
                                            className={item.icon}
                                            aria-hidden="true"
                                        />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right / Upperside */}
                        <motion.div
                            className="order-1 flex min-w-0 justify-center md:order-2 md:col-span-4 md:justify-end"
                            initial="hidden"
                            animate="visible"
                            variants={heroPanel}
                        >
                            <div className="relative w-48 md:w-full max-w-80">
                                <div
                                    className="absolute -right-3 -top-3 size-full border-2 border-border bg-primary"
                                    aria-hidden="true"
                                />
                                <motion.figure
                                    className="relative aspect-[9/10] w-full overflow-hidden border-[2.5px] border-border bg-muted shadow-[6px_6px_0_#0A0A0A] md:aspect-auto md:h-96"
                                    variants={heroItem}
                                >
                                    <img
                                        className="size-full object-cover object-top grayscale contrast-110"
                                        src={profile.heroImage}
                                        alt={profile.name}
                                    />

                                    {/* Caption */}
                                    <figcaption className="absolute inset-x-0 bottom-0 bg-foreground px-3 py-2 font-display text-center text-[9px] md:text-xs font-bold uppercase tracking-[0.12em] text-primary">
                                        {profile.shortName.toLowerCase()} ·{" "}
                                        {profile.location}
                                    </figcaption>
                                </motion.figure>

                                {/* Floating badge */}
                                <aside className="absolute -left-12 top-8 hidden border-2 border-border bg-card px-4 py-3 shadow-[4px_4px_0_#0A0A0A] md:block">
                                    <p className="font-display text-xl font-extrabold text-foreground">
                                        {profile.graduation.label}
                                    </p>
                                    <p className="text-xs text-foreground/70">
                                        {profile.graduation.year}
                                    </p>
                                </aside>
                                <aside className="absolute -right-2 bottom-15 hidden border-2 border-border bg-accent px-4 py-3 text-card shadow-[4px_4px_0_#0A0A0A] md:block">
                                    <p className="font-display text-2xl font-extrabold">
                                        {projects.length}+
                                    </p>
                                    <p className="text-xs text-card/85">
                                        Projects
                                    </p>
                                </aside>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Running Tech */}
                <div
                    className="overflow-hidden border-y-[2.5px] border-border bg-foreground py-3"
                    aria-label="Teknologi yang digunakan"
                >
                    <div className="flex w-max animate-[marquee_30s_linear_infinite] whitespace-nowrap motion-reduce:animate-none">
                        {[...skillsMap, ...skillsMap].map((stack, index) => (
                            <span
                                className="mx-8 shrink-0 font-display text-sm font-bold uppercase tracking-[0.12em] text-primary"
                                key={`${stack}-${index}`}
                            >
                                ✦ {stack}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Me */}
            <section className="mx-auto grid w-full max-w-6xl gap-2 md:gap-12 px-6 py-10 md:py-20 md:grid-cols-2 md:items-center">
                {/* Left / Upperside */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={defaultViewport}
                    transition={{ duration: 0.45 }}
                >
                    <span className="mb-4 inline-flex border-2 border-border bg-accent px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-card shadow-[3px_3px_0_#0A0A0A]">
                        About Me
                    </span>
                    <h2 className="mb-6 font-display text-2xl md:text-4xl font-extrabold leading-tight text-foreground">
                        Siapa{" "}
                        <span className="underline decoration-primary decoration-4 underline-offset-4 uppercase">
                            {profile.shortName}
                        </span>
                        ?
                    </h2>
                    <div className="space-y-4 text-sm leading-relaxed text-foreground/80 text-justify">
                        <p>{profile.summary}</p>
                        <p>{profile.secondarySummary}</p>
                    </div>
                </motion.div>

                {/* Right - Downside */}
                <motion.div
                    className="relative h-64 select-none md:h-72"
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    variants={sectionStagger}
                >
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(#0A0A0A 2px, transparent 1px)",
                            backgroundSize: "16px 16px",
                        }}
                        aria-hidden="true"
                    />

                    {/* Badge Yellow */}
                    <motion.article
                        className="absolute left-[2%] top-[10%] z-[3] max-w-55 -rotate-3 border-2 border-border bg-primary px-4 py-3 shadow-[4px_4px_0_#0A0A0A]"
                        variants={sectionItem}
                    >
                        <p className="font-display text-[11px] font-extrabold leading-tight text-foreground">
                            {profile.graduation.program}
                        </p>
                        <p className="mt-0.5 text-[10px] text-foreground/70">
                            {profile.graduation.institution}
                        </p>
                    </motion.article>

                    {/* Badge Black */}
                    <motion.article
                        className="absolute left-[20%] top-[60%] z-[4] max-w-50 rotate-5 border-2 border-border bg-foreground px-4 py-3 text-primary shadow-[4px_4px_0_#FFE500]"
                        variants={sectionItem}
                    >
                        <p className="font-display text-[11px] font-extrabold leading-tight">
                            {profile.role}
                        </p>
                        <p className="mt-0.5 text-[10px] text-card/70">
                            {profile.heroBadges.slice(0, 3).join(" · ")}
                        </p>
                    </motion.article>

                    {/* Badge Red */}
                    <motion.article
                        className="absolute right-[10%] top-[30%] z-[3] max-w-47  border-2 border-border bg-accent px-4 py-3 text-card shadow-[4px_4px_0_#0A0A0A]"
                        variants={sectionItem}
                    >
                        <p className="font-display text-[11px] font-extrabold leading-tight">
                            {projects.length}+ Project Web
                        </p>
                        <p className="mt-0.5 text-[10px] text-card/75">
                            Pribadi · Magang · Skripsi
                        </p>
                    </motion.article>

                    {/* Ornaments */}
                    <span
                        className="absolute bottom-4 left-6 size-8 rotate-12 border-2 border-border bg-primary"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute bottom-8 right-8 size-5 -rotate-[8deg] border-2 border-border bg-accent"
                        aria-hidden="true"
                    />
                    <span
                        className="hidden md:inline absolute right-1/2 top-20 font-display text-7xl font-extrabold text-foreground/10"
                        aria-hidden="true"
                    >
                        {profile.shortName.charAt(0)}
                    </span>
                </motion.div>
            </section>

            {/* Techs / Skills */}
            <section className="bg-foreground py-10 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <motion.div
                        className="mb-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="mb-4 inline-flex border-2 border-border bg-primary px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] shadow-[3px_3px_0_#ffe500]"
                            variants={sectionItem}
                        >
                            Tech Stack
                        </motion.span>

                        <motion.h2
                            className="font-['Bricolage_Grotesque'] text-2xl font-extrabold leading-tight text-white md:text-4xl"
                            variants={sectionItem}
                        >
                            Stack & Tools{" "}
                            <span className="text-[#FFE500]">Utama</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 md:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        {/* Frontend */}
                        <motion.div
                            className="neo-card bg-[#1A1A1A] p-6"
                            style={{ borderColor: "#FFE500" }}
                            variants={sectionItem}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="neo-border flex h-8 w-8 items-center justify-center bg-[#FFE500] text-sm font-bold text-[#0A0A0A]">
                                    FE
                                </div>

                                <h3 className="font-['Bricolage_Grotesque'] text-lg font-extrabold text-white">
                                    Frontend
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {getSkillGroup("Frontend").map((skill) => (
                                    <span
                                        className="px-3 py-1.5 font-['Inter'] text-xs font-semibold uppercase tracking-wide text-[#FFE500]"
                                        style={{
                                            border: "1.5px solid #FFE500",
                                        }}
                                        key={skill.name}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend */}
                        <motion.div
                            className="neo-card bg-[#1A1A1A] p-6"
                            style={{ borderColor: "#FF3B00" }}
                            variants={sectionItem}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="neo-border flex h-8 w-8 items-center justify-center bg-[#FF3B00] text-sm font-bold text-white">
                                    BE
                                </div>

                                <h3 className="font-['Bricolage_Grotesque'] text-lg font-extrabold text-white">
                                    Backend
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {getSkillGroup("Backend").map((skill) => (
                                    <span
                                        className="px-3 py-1.5 font-['Inter'] text-xs font-semibold uppercase tracking-wide text-[#FF3B00]"
                                        style={{
                                            border: "1.5px solid #FF3B00",
                                        }}
                                        key={skill.name}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools */}
                        <motion.div
                            className="neo-card bg-[#1A1A1A] p-6"
                            style={{ borderColor: "#0057FF" }}
                            variants={sectionItem}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="neo-border flex h-8 w-8 items-center justify-center bg-[#0057FF] text-sm font-bold text-white">
                                    TL
                                </div>

                                <h3 className="font-['Bricolage_Grotesque'] text-lg font-extrabold text-white">
                                    Tools
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {getSkillGroup("Tools").map((skill) => (
                                    <span
                                        className="px-3 py-1.5 font-['Inter'] text-xs font-semibold uppercase tracking-wide text-[#0057FF]"
                                        style={{
                                            border: "1.5px solid #0057FF",
                                        }}
                                        key={skill.name}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Latest projects */}
            <section className="py-10 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                        <div className="max-w-2xl">
                            <span className="mb-4 inline-flex border-2 border-border bg-blue px-3 py-2 font-display text-card text-xs font-bold uppercase tracking-[0.12em] shadow-[3px_3px_0_#0a0a0a]">
                                Portfolio
                            </span>
                            <h2 className="mb-6 font-['Bricolage_Grotesque'] text-2xl md:text-4xl font-extrabold leading-tigh">
                                Proyek Terbaru
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                                Beberapa project terbaru dari pengalaman
                                personal, magang, dan pengembangan sistem web.
                            </p>
                        </div>

                        {/* More */}
                        <Link
                            to="/projects"
                            className="neo-btn hidden min-h-11 items-center justify-center bg-foreground px-5 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm md:inline-flex"
                        >
                            Semua Project{" "}
                            <span className="ml-1" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {latestProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                project={project}
                                delay={index * 0.06}
                            />
                        ))}
                    </div>

                    {/* More */}
                    <Link
                        to="/projects"
                        className="neo-btn mx-auto mt-5 flex w-fit min-h-11 items-center justify-center bg-foreground px-5 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm md:hidden"
                    >
                        Semua Project{" "}
                        <span className="ml-1" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </div>
            </section>

            {/* Contact me */}
            <section
                className="py-10 md:py-20 bg-muted border border-y-4"
                id="contact-me"
            >
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="mb-6 max-w-2xl">
                        <span className="mb-4 inline-flex border-2 border-border bg-primary px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] shadow-[3px_3px_0_#0a0a0a]">
                            Contact
                        </span>
                        <h2 className="mb-6 font-['Bricolage_Grotesque'] text-2xl md:text-4xl font-extrabold leading-tigh">
                            Hubungi Saya
                        </h2>
                    </div>
                    <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
                        <motion.article
                            className="rounded-lg border-[2.5px] border-border bg-card p-5 shadow-[5px_5px_0_#0A0A0A] sm:p-7"
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45 }}
                        >
                            <h3 className="mb-2 font-display text-base leading-relaxed sm:text-lg">
                                Mari diskusi kebutuhan kolaborasi atau peluang
                                kerja.
                            </h3>
                            <p className="mb-2 text-sm leading-6 text-foreground/70">
                                Form ini akan dikirim sebagai pesan WhatsApp.
                            </p>
                            <div className=" grid gap-0">
                                {contactDetails.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex min-w-0 items-center gap-3 rounded bg-background p-3"
                                    >
                                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded border-2 border-border bg-primary">
                                            <i
                                                className={item.icon}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <div className="min-w-0">
                                            <span className="block font-display text-xs font-medium text-foreground/60">
                                                {item.label}
                                            </span>
                                            <strong className="block break-words text-sm font-semibold">
                                                {item.value}
                                            </strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 border-t-2 border-border pt-4">
                                <span className="font-display text-xs font-semibold uppercase tracking-wide">
                                    Fokus diskusi
                                </span>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {contactScopes.map((item) => (
                                        <span
                                            className="rounded border-2 border-border bg-muted px-2.5 py-1.5 font-display text-xs font-medium"
                                            key={item}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>

                        <motion.article
                            className="rounded-lg border-[2.5px] border-border bg-card p-5 shadow-[5px_5px_0_#0A0A0A] sm:p-7"
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45, delay: 0.06 }}
                        >
                            <form
                                className="grid gap-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid gap-1.5">
                                    <label
                                        className="font-display text-sm font-semibold"
                                        htmlFor="name"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        className="min-h-12 rounded border-2 border-border bg-background px-3 text-sm placeholder:text-foreground/50 focus-visible:ring-2 focus-visible:ring-blue"
                                        id="name"
                                        type="text"
                                        placeholder="Masukkan nama kamu"
                                        required
                                        value={name}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-1.5">
                                    <label
                                        className="font-display text-sm font-semibold"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="min-h-12 rounded border-2 border-border bg-background px-3 text-sm placeholder:text-foreground/50 focus-visible:ring-2 focus-visible:ring-blue"
                                        id="email"
                                        type="email"
                                        placeholder="nama@email.com"
                                        required
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-1.5">
                                    <label
                                        className="font-display text-sm font-semibold"
                                        htmlFor="message"
                                    >
                                        Pesan
                                    </label>
                                    <textarea
                                        className="min-h-32 resize-y rounded border-2 border-border bg-background p-3 text-sm placeholder:text-foreground/50 focus-visible:ring-2 focus-visible:ring-blue"
                                        id="message"
                                        rows="5"
                                        placeholder="Ceritakan kebutuhan atau ide project kamu"
                                        required
                                        value={message}
                                        onChange={(event) =>
                                            setMessage(event.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex min-h-12 justify-self-start items-center justify-center rounded border-2 border-border bg-primary px-5 font-display text-sm font-semibold shadow-[4px_4px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0A0A0A]"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </motion.article>
                    </div>
                </div>
            </section>

            <ConfirmationModal
                show={showConfirmModal}
                handleClose={() => setShowConfirmModal(false)}
                handleConfirm={handleConfirm}
            />
        </main>
    );
};

export default Home;
