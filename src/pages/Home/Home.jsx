import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../../components/Background/BackgroundAnimation";
import Card from "../../components/Card/Card";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import SosmedButton from "../../components/Sosmed/SosmedButton";
import StackLogo from "../../components/StackLogo/StackLogo";
import {
    contactDetails,
    contactScopes,
    coreStrengths,
    latestProjects,
    portfolioStats,
    profile,
    skillGroups,
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
                            Portfolio
                        </motion.span>

                        <motion.h1
                            className="home-hero__title"
                            variants={heroItem}
                        >
                            {profile.name}
                        </motion.h1>

                        <motion.p
                            className="home-hero__role"
                            variants={heroItem}
                        >
                            {profile.role}
                        </motion.p>

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
                                <motion.span key={badge} variants={heroItem}>
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
                                Kontak Saya
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="home-hero__socials"
                            variants={sectionStagger}
                        >
                            {socialLinks.map((item) => (
                                <motion.div key={item.label} variants={heroItem}>
                                    <SosmedButton
                                        link={item.url}
                                        icon={item.icon}
                                        label={item.label}
                                    />
                                </motion.div>
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
                            className="home-hero__portrait"
                            variants={heroItem}
                        >
                            <img src={profile.heroImage} alt={profile.name} />
                        </motion.div>

                        <motion.div
                            className="home-hero__stats"
                            variants={sectionStagger}
                        >
                            {portfolioStats.map((item) => (
                                <motion.article key={item.label} variants={heroItem}>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                    <small>{item.detail}</small>
                                </motion.article>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <div className="about-layout">
                        <motion.article
                            className="about-copy"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45 }}
                        >
                            <span className="section-heading__eyebrow">
                                About
                            </span>
                            <h2>Fullstack Web Developer</h2>
                            <p>{profile.summary}</p>
                            <p>{profile.secondarySummary}</p>
                            <div className="about-copy__actions">
                                <Link to="/projects" className="portfolio-button">
                                    Lihat Projects
                                </Link>
                                <Link
                                    to="/experience"
                                    className="portfolio-button portfolio-button--ghost"
                                >
                                    Experience
                                </Link>
                            </div>
                        </motion.article>

                        <motion.div
                            className="strengths-list"
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            variants={sectionStagger}
                        >
                            {coreStrengths.map((item) => (
                                <motion.article
                                    key={item.title}
                                    className="strength-item"
                                    variants={sectionItem}
                                >
                                    <strong>{item.title}</strong>
                                    <p>{item.description}</p>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted">
                <div className="container">
                    <motion.div
                        className="section-heading section-heading--left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Skills
                        </motion.span>
                        <motion.h2
                            className="section-heading__title"
                            variants={sectionItem}
                        >
                            Stack Dan Tools Utama
                        </motion.h2>
                        <motion.p
                            className="section-heading__description"
                            variants={sectionItem}
                        >
                            Teknologi yang saya gunakan untuk membangun interface,
                            backend, dan workflow pengembangan web.
                        </motion.p>
                    </motion.div>

                    <div className="skill-groups">
                        {skillGroups.map((group, groupIndex) => (
                            <motion.article
                                key={group.title}
                                className="skill-group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={defaultViewport}
                                transition={{
                                    duration: 0.42,
                                    delay: groupIndex * 0.06,
                                }}
                            >
                                <div className="skill-group__head">
                                    <h3>{group.title}</h3>
                                </div>

                                <div className="skill-group__list">
                                    {group.skills.map((skill) => (
                                        <div
                                            className="skill-row"
                                            data-level={skill.level}
                                            tabIndex="0"
                                            key={`${group.title}-${skill.name}`}
                                            style={{
                                                "--skill-brand-color": skill.color,
                                            }}
                                        >
                                            <div className="skill-row__icon">
                                                <StackLogo
                                                    stack={skill.name}
                                                    size="skill"
                                                />
                                            </div>
                                            <div className="skill-row__copy">
                                                <strong>{skill.name}</strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container">
                    <motion.div
                        className="latest-projects__top"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <div className="section-heading section-heading--left">
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
                                Proyek Terbaru
                            </motion.h2>
                            <motion.p
                                className="section-heading__description"
                                variants={sectionItem}
                            >
                                Beberapa project terbaru dari pengalaman personal,
                                magang, dan pengembangan sistem web.
                            </motion.p>
                        </div>

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
                                featuredLabel={index === 0 ? "Newest" : project.label}
                                delay={index * 0.08}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell section-shell--muted" id="contact-me">
                <div className="container">
                    <motion.div
                        className="section-heading section-heading--left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        variants={sectionStagger}
                    >
                        <motion.span
                            className="section-heading__eyebrow"
                            variants={sectionItem}
                        >
                            Contact
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
                            className="contact-card"
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45 }}
                        >
                            <h3>Mari diskusi kebutuhan web atau peluang kerja.</h3>
                            <p>
                                Form ini akan dikirim sebagai pesan WhatsApp.
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

                            <div className="contact-card__scope">
                                <span>Fokus diskusi</span>
                                <div>
                                    {contactScopes.map((item) => (
                                        <strong key={item}>{item}</strong>
                                    ))}
                                </div>
                            </div>
                        </motion.article>

                        <motion.article
                            className="contact-form-card"
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={defaultViewport}
                            transition={{ duration: 0.45, delay: 0.06 }}
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

            <ConfirmationModal
                show={showConfirmModal}
                handleClose={() => setShowConfirmModal(false)}
                handleConfirm={handleConfirm}
            />
        </main>
    );
};

export default Home;
