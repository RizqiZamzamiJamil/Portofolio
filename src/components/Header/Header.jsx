import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useOutlet } from "react-router-dom";
import brandLogo from "../../assets/logo.png";
import "./Style.css";

const navigationItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Education", to: "/education" },
    { label: "Experience", to: "/experience" },
];

const Header = () => {
    const location = useLocation();
    const outlet = useOutlet();
    const isActive = (path) =>
        path === "/"
            ? location.pathname === path
            : location.pathname.startsWith(path);

    return (
        <>
            <header className="site-header">
                <nav className="container site-nav" aria-label="Primary">
                    <Link to="/" className="site-brand">
                        <span className="site-brand__icon">
                            <img src={brandLogo} alt="" aria-hidden="true" />
                        </span>
                        <span>
                            Rizam
                            <span className="site-brand__accent">.Dev</span>
                        </span>
                    </Link>

                    <div className="site-nav__links">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.to}
                                className={
                                    isActive(item.to)
                                        ? "site-nav__link is-active"
                                        : "site-nav__link"
                                }
                                to={item.to}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <a
                        className="site-nav__cta"
                        href="https://drive.google.com/file/d/1J5-z9hUHXmMpZxg_RZIV9GZGptyGIuYq/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View CV
                    </a>
                </nav>
            </header>

            <div className="site-shell">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.pathname}
                        className="route-transition"
                        initial={{
                            opacity: 0,
                            y: 30,
                            scale: 0.992,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            y: -18,
                            scale: 0.992,
                            filter: "blur(8px)",
                        }}
                        transition={{
                            duration: 0.42,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {outlet}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Header;
