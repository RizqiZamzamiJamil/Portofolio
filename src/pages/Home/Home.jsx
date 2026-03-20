import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../../components/Background/BackgroundAnimation";
import Card from "../../components/Card/Card";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import ScrollToTopButton from "../../components/ScrollTop/ScrollToTopButton";
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
import CertificateCarousel from "./CertificateCarousel";
import "./Style.css";

const revealUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

const staggerList = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

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
                        variants={staggerList}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={revealUp}
                        >
                            {profile.role}
                        </motion.span>

                        <motion.h1
                            className="home-hero__title"
                            variants={revealUp}
                        >
                            Membangun web experience yang lebih <span>rapi</span>,
                            halus, dan terstruktur dengan Laravel sebagai stack
                            utama.
                        </motion.h1>

                        <motion.p
                            className="home-hero__description"
                            variants={revealUp}
                        >
                            {profile.heroDescription}
                        </motion.p>

                        <motion.div
                            className="home-hero__badges"
                            variants={revealUp}
                        >
                            {profile.heroBadges.map((badge) => (
                                <span key={badge} className="home-hero__badge">
                                    {badge}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="home-hero__actions"
                            variants={revealUp}
                        >
                            <a href="#contact-me" className="portfolio-button">
                                Let&apos;s Collaborate
                            </a>
                            <a
                                href={profile.cvUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="portfolio-button portfolio-button--ghost"
                            >
                                View CV
                            </a>
                        </motion.div>

                        <motion.div
                            className="home-hero__socials"
                            variants={revealUp}
                        >
                            {socialLinks.map((item) => (
                                <SosmedButton
                                    key={item.label}
                                    link={item.url}
                                    icon={item.icon}
                                    label={item.label}
                                />
                            ))}
                        </motion.div>

                        <motion.div
                            className="home-hero__stats"
                            variants={staggerList}
                        >
                            {portfolioStats.map((item) => (
                                <motion.article
                                    key={item.label}
                                    className="home-hero__stat"
                                    variants={revealUp}
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
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="home-hero__card content-panel">
                            <span className="info-chip">
                                Available for fullstack opportunities
                            </span>
                            <div className="home-hero__portrait">
                                <img src={profile.heroImage} alt={profile.name} />
                            </div>
                            <div className="home-hero__card-copy">
                                <p>Main workflow</p>
                                <h2>Laravel, React, PHP, JavaScript, dan sistem yang terasa matang dipakai.</h2>
                                <ul>
                                    <li>Lulus tahun 2025 dari Politeknik Negeri Malang.</li>
                                    <li>Sering mengerjakan web berbasis kebutuhan bisnis nyata.</li>
                                    <li>Nyaman merapikan struktur kode sekaligus pengalaman pengguna.</li>
                                </ul>
                            </div>
                        </div>

                        <motion.div
                            className="home-hero__floating home-hero__floating--top"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <strong>Wisudawan Terbaik</strong>
                            <span>Milestone akademik 2025</span>
                        </motion.div>

                        <motion.div
                            className="home-hero__floating home-hero__floating--bottom"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity }}
                        >
                            <strong>Based in Malang</strong>
                            <span>Open for collaboration</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">About Me</span>
                        <h2 className="section-heading__title">
                            Fullstack web developer yang nyaman menggabungkan
                            <span> tampilan rapi</span> dan logika backend yang
                            kuat.
                        </h2>
                        <p className="section-heading__description">
                            Saya lebih suka membangun portfolio yang terasa
                            matang: konten jelas, struktur terukur, dan tiap
                            section punya alasan visual yang kuat.
                        </p>
                    </div>

                    <div className="about-grid">
                        <motion.article
                            className="content-panel about-card"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="about-card__image">
                                <img src={profile.aboutImage} alt={profile.name} />
                            </div>
                            <div className="about-card__copy">
                                <span className="info-chip">Profil Singkat</span>
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
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <span className="spotlight-card__tag">
                                    Achievement Spotlight
                                </span>
                                <h3>Wisudawan terbaik tahun 2025.</h3>
                                <p>
                                    Saya ingin pencapaian ini tidak berhenti
                                    sebagai gelar, tapi lanjut menjadi standar
                                    kualitas saat mengerjakan produk digital.
                                </p>
                            </motion.article>

                            <motion.article
                                className="content-panel strengths-card"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
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
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">Milestones</span>
                        <h2 className="section-heading__title">
                            Pencapaian yang membentuk cara saya <span>bekerja</span>.
                        </h2>
                    </div>

                    <div className="achievement-grid">
                        {achievementHighlights.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className="achievement-card content-panel"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <div className="achievement-card__icon">
                                    <i className={item.icon} aria-hidden="true"></i>
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
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">My Skills</span>
                        <h2 className="section-heading__title">
                            Skill chart yang lebih <span>mulus</span> dan lebih
                            enak dibaca.
                        </h2>
                        <p className="section-heading__description">
                            Saya susun skill section ini untuk menunjukkan
                            keseimbangan antara frontend, backend, dan delivery
                            mindset yang saya pakai saat membangun product.
                        </p>
                    </div>

                    <div className="skills-layout">
                        <motion.article
                            className="content-panel skills-intro"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="info-chip">Skill Map</span>
                            <h3>
                                Seimbang antara polishing UI dan menjaga fondasi
                                backend tetap rapi.
                            </h3>
                            <p>
                                Fokus utama saya ada di pengembangan website
                                fullstack. Dari layout, komponen, interaksi, sampai
                                struktur logic dan pengelolaan data, saya suka
                                membuat semuanya terasa menyatu.
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
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">
                            Latest Projects
                        </span>
                        <h2 className="section-heading__title">
                            Project terbaru sekarang diambil otomatis dari data
                            project yang <span>paling baru</span>.
                        </h2>
                        <p className="section-heading__description">
                            Section ini tidak lagi diisi manual satu per satu.
                            Selama metadata project diperbarui, kartu terbaru di
                            home akan ikut sinkron.
                        </p>
                    </div>

                    <div className="latest-projects__top">
                        <p>
                            Semua card di bawah ini diurutkan dari project dengan
                            tanggal update terbaru.
                        </p>
                        <Link
                            to="/projects"
                            className="portfolio-button portfolio-button--ghost"
                        >
                            View All Projects
                        </Link>
                    </div>

                    <div className="latest-projects__grid">
                        {latestProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                project={project}
                                featuredLabel={index === 0 ? "Newest" : "Recent"}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CertificateCarousel />

            <section className="section-shell" id="contact-me">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">Contact Me</span>
                        <h2 className="section-heading__title">
                            Siap ngobrol soal project, kolaborasi, atau peluang
                            kerja yang <span>relevan</span>.
                        </h2>
                    </div>

                    <div className="contact-layout">
                        <motion.article
                            className="content-panel contact-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="info-chip">Let&apos;s Talk</span>
                            <h3>
                                Terbuka untuk freelance, kolaborasi, maupun role
                                fullstack web developer.
                            </h3>
                            <p>
                                Kalau kamu punya ide, kebutuhan website, atau
                                ingin diskusi soal kemungkinan kerja sama, kirim
                                pesan saja. Setelah submit, form ini akan langsung
                                mengarahkan ke WhatsApp.
                            </p>

                            <div className="contact-card__list">
                                {contactDetails.map((item) => (
                                    <div key={item.label} className="contact-item">
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
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.08 }}
                        >
                            <form className="portfolio-form" onSubmit={handleSubmit}>
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

                                <button type="submit" className="portfolio-button">
                                    Kirim Pesan
                                </button>
                            </form>
                        </motion.article>
                    </div>
                </div>
            </section>

            <ScrollToTopButton />
            <ConfirmationModal
                show={showConfirmModal}
                handleClose={() => setShowConfirmModal(false)}
                handleConfirm={handleConfirm}
            />
        </main>
    );
};

export default Home;
