export const defaultViewport = {
    once: true,
    amount: 0.2,
};

export const heroStagger = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

export const heroItem = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const heroPanel = {
    hidden: { opacity: 0, x: 28, y: 18, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.12,
        },
    },
};

export const sectionStagger = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04,
        },
    },
};

export const sectionItem = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.52,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
