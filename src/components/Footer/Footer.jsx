import { Link } from "react-router-dom";
import brandLogo from "../../assets/logo.png";
import { profile, socialLinks } from "../../data/portfolioData";
import SosmedButton from "../Sosmed/SosmedButton";
import "./Style.css";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Education", to: "/education" },
];

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container site-footer__grid">
                <div className="site-footer__brand">
                    <Link to="/" className="site-footer__logo">
                        <span className="site-footer__logo-icon">
                            <img src={brandLogo} alt="" aria-hidden="true" />
                        </span>
                        <span>
                            {profile.shortName}
                            <span className="site-footer__logo-accent">.Dev</span>
                        </span>
                    </Link>

                    <p>
                        Fullstack web developer yang senang membangun website
                        rapi, responsif, dan terstruktur dengan Laravel sebagai
                        stack utama.
                    </p>

                    <div className="site-footer__socials">
                        {socialLinks.map((item) => (
                            <SosmedButton
                                key={item.label}
                                link={item.url}
                                icon={item.icon}
                                label={item.label}
                            />
                        ))}
                    </div>
                </div>

                <div className="site-footer__column">
                    <h3>Navigasi</h3>
                    <div className="site-footer__links">
                        {quickLinks.map((item) => (
                            <Link key={item.to} to={item.to}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="site-footer__column">
                    <h3>Contact</h3>
                    <div className="site-footer__links">
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        <a
                            href="https://wa.me/6282147083442"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {profile.phone}
                        </a>
                        <span>{profile.location}</span>
                    </div>
                </div>
            </div>

            <div className="container site-footer__bottom">
                <p>
                    Copyright 2026 Rizqi Zamzami Jamil. Built with React and
                    refined for a smoother portfolio experience.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
