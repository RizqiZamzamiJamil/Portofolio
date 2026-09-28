import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useOutlet } from "react-router-dom";
import brandLogo from "../assets/logo_v2.png";

const navItems = [
    { label: "Home", to: "/" },
    { label: "Project", to: "/projects" },
    { label: "Education", to: "/education" },
    { label: "Experience", to: "/experience" },
];

export default function Header() {
    const { pathname } = useLocation();
    const outlet = useOutlet();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => setIsMenuOpen(false), [pathname]);

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-50 border-b-[2.5px] border-border bg-primary"
                onKeyDown={(event) => {
                    if (event.key === "Escape") setIsMenuOpen(false);
                }}
            >
                <nav
                    className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
                    aria-label="Navigasi utama"
                >
                    <Link
                        to="/"
                        className="inline-flex min-h-11 shrink-0 items-center gap-3"
                        aria-label="Rizam Dev, beranda"
                    >
                        <span className="grid size-10 place-items-center border-2 border-border bg-primary p-1 shadow-[3px_3px_0_#0A0A0A]">
                            <img
                                className="size-6 object-contain"
                                src={brandLogo}
                                alt=""
                                aria-hidden="true"
                            />
                        </span>
                        <span className="font-display text-xl font-bold leading-relaxed">
                            Rizam Dev
                        </span>
                    </Link>

                    <div className="hidden items-center gap-2 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    `inline-flex min-h-11 items-center justify-center border-2 border-border px-3 font-display text-sm font-semibold transition-colors ${isActive ? "bg-foreground text-primary shadow-[3px_3px_0_#0A0A0A]" : "text-foreground hover:bg-foreground hover:text-primary"}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <button
                        id="mobile-navigation-toggle"
                        type="button"
                        className="inline-flex size-11 shrink-0 items-center justify-center border-2 border-border bg-card shadow-[2px_2px_0_#0A0A0A] md:hidden"
                        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                        aria-controls={
                            isMenuOpen ? "mobile-navigation" : undefined
                        }
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <i
                            className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
                            aria-hidden="true"
                        />
                    </button>
                </nav>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            id="mobile-navigation"
                            className="absolute inset-x-0 top-full border-t-2 border-border bg-primary py-4 shadow-[0_5px_0_#0A0A0A] md:hidden"
                            aria-label="Navigasi seluler"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.16 }}
                        >
                            <div className="mx-auto grid w-full max-w-[1600px] gap-2 px-4 sm:px-6 lg:px-12 2xl:px-20">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end={item.to === "/"}
                                        className={({ isActive }) =>
                                            `inline-flex min-h-11 w-full items-center justify-start border-2 border-border px-4 font-display text-sm font-semibold transition-colors ${isActive ? "bg-foreground text-primary shadow-[3px_3px_0_#0A0A0A]" : "text-foreground hover:bg-foreground hover:text-primary"}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            <div aria-hidden="true" className="h-[var(--site-header-height)]" />
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                >
                    {outlet}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
