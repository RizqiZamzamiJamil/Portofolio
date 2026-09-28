import { Link } from "react-router-dom";
import brandLogo from "../assets/logo_v2_white.png";

const navItems = [
    { label: "Home", to: "/" },
    { label: "Project", to: "/projects" },
    { label: "Education", to: "/education" },
    { label: "Experience", to: "/experience" },
];

export default function Footer() {
    return (
        <footer className="bg-foreground py-8 text-background">
            <div
                className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left"
            >
                <Link
                    to="/"
                    className="inline-flex min-h-11 shrink-0 items-center gap-3"
                    aria-label="Rizam Dev, beranda"
                >
                    <img
                        className="size-11 object-contain"
                        src={brandLogo}
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="font-display text-sm font-bold leading-relaxed sm:text-base">
                        Rizam Dev
                    </span>
                </Link>

                <p className="font-sans text-xs leading-5 text-background/60">
                    © {new Date().getFullYear()} Rizqi Zamzami Jamil. Fullstack
                    Developer &amp; Content Creator.
                </p>

                <nav
                    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
                    aria-label="Navigasi footer"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center px-1 font-display text-xs font-semibold text-background/70 transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
