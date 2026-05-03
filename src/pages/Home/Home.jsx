import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../../components/Background/BackgroundAnimation";
import Card from "../../components/Card/Card";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import SosmedButton from "../../components/Sosmed/SosmedButton";
import {
    achievementHighlights,
    contactDetails,
    coreStrengths,
    latestProjects,
    portfolioStats,
    profile,
    skillCategories,
    skills,
    socialLinks,
} from "../../data/portfolioData";
import {
    defaultViewport,
    heroItem,
    heroPanel,
    heroStagger,
    sectionItem,
    sectionStagger,
} from "../../utils/motion";
import "./Style.css";

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
        const url = `https://api.whatsapp.com/send?phone=6282147083442&text=${encodeURIComponent(
            messageBody
        )}`;

        setShowConfirmModal(false);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="page-shell home-page">
            <section className="section-shell home-hero">
                <BackgroundAnimation />
                <div className="container home-hero__grid">
                    <motion.div
                        className="home-hero__content"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={heroItem}
                        >
                            Overview
                        </motion.span>

                        <motion.h1
                            className="home-hero__title"
                            variants={heroItem}
                        >
                            Fullstack Developer
                        </motion.h1>

                        <motion.p
                            className="home-hero__description"
                            variants={heroItem}
                        >
                            {profile.heroDescription}
                        </motion.p>

                        <motion.div
                            className="home-hero__badges"
                            variants={sectionStagger}
                        >
                            {profile.heroBadges.map((badge) => (
                                <motion.span
                                    key={badge}
                                    className="home-hero__badge"
                                    variants={heroItem}
                                >
                                    {badge}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="home-hero__actions"
                            variants={sectionStagger}
                        >
                            <motion.a
                                href="#contact-me"
                                className="portfolio-button"
                                variants={heroItem}
                            >
                                Let&apos;s Collaborate
                            </motion.a>
                            <motion.a
                                href={profile.cvUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="portfolio-button portfolio-button--ghost"
                                variants={heroItem}
                            >
                                View CV
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="home-hero__socials"
                            variants={sectionStagger}
                        >
                            {socialLinks.map((item) => (
                                <motion.div
                                    key={item.label}
                                    variants={heroItem}
                                >
                                    <SosmedButton
                                        link={item.url}
                                        icon={item.icon}
                                        label={item.label}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="home-hero__stats"
                            variants={sectionStagger}
                        >
                            {portfolioStats.map((item) => (
                                <motion.article
                                    key={item.label}
                                    className="home-hero__stat"
                                    variants={heroItem}
                                >
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                    <small>{item.detail}</small>
                                </motion.article>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="home-hero__visual"
                        initial="hidden"
                        animate="visible"
                        variants={heroPanel}
                    >
                        <motion.div
                            className="home-hero__visual-media"
                            variants={heroItem}
                        >
                            <div className="home-hero__portrait">
                                <img
                                    src={profile.heroImage}
                                    alt={profile.name}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="home-hero__workflow content-panel"
                            variants={sectionStagger}
                        >
                            <motion.p variants={heroItem}>
                                Main workflow
                            </motion.p>
                            <motion.h2 variants={heroItem}>
                                Laravel, React, PHP, dan JavaScript.
                            </motion.h2>
                            <ul>
                                <motion.li variants={heroItem}>
                                    Lulus 2025 dari Politeknik Negeri Malang.
                                </motion.li>
                                <motion.li variants={heroItem}>
                                    Sering membangun web untuk kebutuhan nyata.
                                </motion.li>
                                <motion.li variants={heroItem}>
                                    Fokus pada struktur kode dan UX yang rapi.
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="home-hero__floating home-hero__floating--top"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: [0, -10, 0] }}
                            transition={{
                                opacity: { duration: 0.45, delay: 0.45 },
                                y: { duration: 4, repeat: Infinity, delay: 0.45 },
                            }}
                        >
                            <strong>Wisudawan Terbaik Prodi</strong>
                            <span>Wisuda Polinema ke-70</span>
                        </motion.div>

                        <motion.div
                            className="home-hero__floating home-hero__floating--bottom"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{
                                opacity: { duration: 0.45, delay: 0.58 },
                                y: {
                                    duration: 4.8,
                                    repeat: Infinity,
                                    delay: 0.58,
                                },
                            }}
                        >
                            <strong>Based in Kediri</strong>
                            <span>Open for collaboration</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            About Me
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            <span>UI rapi</span> dan backend solid.
                        </motion.h2>
                        <motion.p
                            className="section-heading__description"
                            variants={sectionItem}
                        >
                            Laravel, React, dan web yang nyaman dipakai.
                        </motion.p>
                    </motion.div>

                    <div className="about-grid">
                        <motion.article
                            className="content-panel about-card"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="about-card__image">
                                <img
                                    src={profile.aboutImage}
                                    alt={profile.name}
                                />
                            </div>
                            <div className="about-card__copy">
                                <span className="info-chip">
                                    Profil Singkat
                                </span>
                                <h3>{profile.name}</h3>
                                <p>{profile.summary}</p>
                                <p>{profile.secondarySummary}</p>
                                <div className="about-card__actions">
                                    <a
                                        href={profile.cvUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio-button"
                                    >
                                        Curriculum Vitae
                                    </a>
                                    <Link
                                        to="/education"
                                        className="portfolio-button portfolio-button--ghost"
                                    >
                                        Education Journey
                                    </Link>
                                </div>
                            </div>
                        </motion.article>

                        <div className="about-side">
                            <motion.article
                                className="content-panel spotlight-card"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <span className="spotlight-card__tag">
                                    Achievement Spotlight
                                </span>
                                <h3>Wisudawan Terbaik Prodi pada Wisuda ke-70</h3>
                                <p>
                                    Pencapaian ini saya jadikan standar saat
                                    mengerjakan produk digital.
                                </p>
                            </motion.article>

                            <motion.article
                                className="content-panel strengths-card"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3>Apa yang saya bawa ke tim</h3>
                                <div className="strengths-card__list">
                                    {coreStrengths.map((item) => (
                                        <div
                                            key={item.title}
                                            className="strengths-card__item"
                                        >
                                            <strong>{item.title}</strong>
                                            <p>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Milestones
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Pencapaian utama saya.
                        </motion.h2>
                    </motion.div>

                    <div className="achievement-grid">
                        {achievementHighlights.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="achievement-card content-panel"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                            >
                                <div className="achievement-card__icon">
                                    <i
                                        className={item.icon}
                                        aria-hidden="true"
                                    ></i>
                                </div>
                                <span>{item.value}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            My Skills
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Skill utama saya.
                        </motion.h2>
                        <motion.p
                            className="section-heading__description"
                            variants={sectionItem}
                        >
                            Frontend, backend, dan delivery untuk web product.
                        </motion.p>
                    </motion.div>

                    <div className="skills-layout">
                        <motion.article
                            className="content-panel skills-intro"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="info-chip">Skill Map</span>
                            <h3>UI rapi. Backend terstruktur.</h3>
                            <p>
                                Fokus saya ada di web fullstack dengan UI jelas,
                                interaksi ringan, dan alur data rapi.
                            </p>
                            <div className="skills-intro__chips">
                                {skillCategories.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </motion.article>

                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.article
                                    key={skill.name}
                                    className="skill-card content-panel"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.06,
                                    }}
                                >
                                    <div className="skill-card__header">
                                        <div
                                            className="skill-card__ring"
                                            style={{
                                                "--skill-angle": `${skill.level * 3.6}deg`,
                                                "--skill-color": skill.color,
                                            }}
                                        >
                                            <div className="skill-card__ring-center">
                                                {skill.level}%
                                            </div>
                                        </div>

                                        <div className="skill-card__copy">
                                            <div className="skill-card__label">
                                                <i
                                                    className={skill.iconClass}
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>{skill.name}</h3>
                                            </div>
                                            <p>{skill.description}</p>
                                        </div>
                                    </div>

                                    <div className="skill-card__bar">
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.level}%`,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.9,
                                                delay: 0.1 + index * 0.05,
                                            }}
                                            style={{
                                                background: `linear-gradient(90deg, ${skill.color}, #f59e0b)`,
                                            }}
                                        ></motion.span>
                                    </div>

                                    <small>{skill.focus}</small>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--accent">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Latest Projects
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Project terbaru dari portofolio saya.
                        </motion.h2>
                        <motion.p
                            className="section-heading__description"
                            variants={sectionItem}
                        >
                            Diambil otomatis dari data project dengan update
                            paling baru.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="latest-projects__top"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.p variants={sectionItem}>
                            Urut dari update terbaru.
                        </motion.p>
                        <motion.div variants={sectionItem}>
                            <Link
                                to="/projects"
                                className="portfolio-button portfolio-button--ghost"
                            >
                                View All Projects
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="latest-projects__grid">
                        {latestProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                project={project}
                                featuredLabel={
                                    index === 0 ? "Newest" : "Recent"
                                }
                                delay={index * 0.08}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell" id="contact-me">
                <div className="container">
                    <motion.div
                        className="section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Contact Me
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Terbuka untuk kolaborasi dan peluang kerja.
                        </motion.h2>
                    </motion.div>

                    <div className="contact-layout">
                        <motion.article
                            className="content-panel contact-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="info-chip">Let&apos;s Talk</span>
                            <h3>
                                Terbuka untuk freelance, kolaborasi, maupun role
                                fullstack web developer.
                            </h3>
                            <p>
                                Kalau kamu punya ide, kebutuhan website, atau
                                ingin diskusi soal kerja sama, kirim pesan saja.
                                Form ini akan langsung mengarah ke WhatsApp.
                            </p>

                            <div className="contact-card__list">
                                {contactDetails.map((item) => (
                                    <div
                                        key={item.label}
                                        className="contact-item"
                                    >
                                        <div className="contact-item__icon">
                                            <i
                                                className={item.icon}
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                        <div>
                                            <span>{item.label}</span>
                                            <strong>{item.value}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.article>

                        <motion.article
                            className="content-panel contact-form-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.5, delay: 0.08 }}
                        >
                            <form
                                className="portfolio-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="portfolio-form__field">
                                    <label htmlFor="name">Nama</label>
                                    <input
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

                                <div className="portfolio-form__field">
                                    <label htmlFor="email">Email</label>
                                    <input
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

                                <div className="portfolio-form__field">
                                    <label htmlFor="message">Pesan</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Ceritakan kebutuhan atau ide project kamu"
                                        required
                                        value={message}
                                        onChange={(event) =>
                                            setMessage(event.target.value)
                                        }
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="portfolio-button"
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
