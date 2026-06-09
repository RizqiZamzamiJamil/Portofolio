import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
    const headerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path) =>
        path === "/"
            ? location.pathname === path
            : location.pathname.startsWith(path);

    useLayoutEffect(() => {
        const header = headerRef.current;

        if (!header) {
            return undefined;
        }

        const updateHeaderHeight = () => {
            document.documentElement.style.setProperty(
                "--site-header-height",
                `${header.getBoundingClientRect().height}px`
            );
        };

        updateHeaderHeight();

        const resizeObserver =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(updateHeaderHeight)
                : null;

        resizeObserver?.observe(header);
        window.addEventListener("resize", updateHeaderHeight);

        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener("resize", updateHeaderHeight);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="site-header" ref={headerRef}>
                <nav className="container site-nav" aria-label="Primary">
                    <Link to="/" className="site-brand">
                        <span className="site-brand__icon">
                            <img src={brandLogo} alt="" aria-hidden="true" />
                        </span>
                        <span>
                            Rizam
                            <span className="site-brand__accent">Dev</span>
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

                    <div className="site-nav__actions">
                        <a
                            className="site-nav__cta"
                            href="https://drive.google.com/file/d/1J5-z9hUHXmMpZxg_RZIV9GZGptyGIuYq/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View CV
                        </a>
                        <button
                            type="button"
                            className={
                                isMenuOpen
                                    ? "site-nav__toggle is-open"
                                    : "site-nav__toggle"
                            }
                            aria-label={
                                isMenuOpen
                                    ? "Tutup menu navigasi"
                                    : "Buka menu navigasi"
                            }
                            aria-controls="mobile-navigation"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((current) => !current)}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isMenuOpen ? (
                    <>
                        <motion.button
                            type="button"
                            className="site-sidebar__backdrop"
                            aria-label="Tutup menu navigasi"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        />
                        <motion.aside
                            className="site-sidebar"
                            id="mobile-navigation"
                            aria-label="Mobile navigation"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                        >
                            <div className="site-sidebar__head">
                                <span>Menu</span>
                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Tutup menu navigasi"
                                >
                                    <i
                                        className="fa-solid fa-xmark"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                            <div className="site-sidebar__links">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.to}
                                        className={
                                            isActive(item.to)
                                                ? "site-sidebar__link is-active"
                                                : "site-sidebar__link"
                                        }
                                        to={item.to}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <a
                                className="site-sidebar__cta"
                                href="https://drive.google.com/file/d/1J5-z9hUHXmMpZxg_RZIV9GZGptyGIuYq/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View CV
                                <i
                                    className="fa-solid fa-arrow-up-right-from-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </motion.aside>
                    </>
                ) : null}
            </AnimatePresence>

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
