const SosmedButton = ({ link, icon, label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-border bg-card text-base text-foreground shadow-[3px_3px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:bg-primary hover:shadow-[4px_4px_0_#0A0A0A]"
            aria-label={label}
            title={label}
        >
            <i className={icon} aria-hidden="true"></i>
        </a>
    );
};

export default SosmedButton;
