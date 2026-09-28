const BackgroundAnimation = () => {
    return (
        <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
        >
            <span className="absolute -right-12 top-16 size-48 rotate-12 border-[2.5px] border-border bg-primary shadow-[8px_8px_0_#0A0A0A] sm:right-12 sm:top-20 sm:size-64" />
            <span className="absolute bottom-24 left-[8%] h-3 w-20 -rotate-12 bg-accent sm:left-[12%]" />
        </div>
    );
};

export default BackgroundAnimation;
