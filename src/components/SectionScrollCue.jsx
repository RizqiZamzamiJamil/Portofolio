const SectionScrollCue = ({ label, targetId }) => {
    return (
        <a
            className="absolute bottom-10 left-1/2 z-10 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 rounded-full border-2 border-border bg-foreground px-4 py-2 font-display text-primary text-xs font-semibold shadow-[3px_3px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0A0A0A] focus-visible:outline-2 focus-visible:outline-offset-2"
            href={`#${targetId}`}
        >
            <span>{label}</span>
            <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className="size-4"
            >
                <path
                    d="M12 5v14m7-7-7 7-7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        </a>
    );
};

export default SectionScrollCue;
