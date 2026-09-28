import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 140) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        toggleVisibility();
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                type="button"
                className="fixed bottom-20 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full border-2 border-border bg-primary text-foreground shadow-[4px_4px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0A0A0A]"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
            >
                <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
            </button>
        )
    );
};

export default ScrollToTopButton;
