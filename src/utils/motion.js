export const navVar = {
    hidden: {
        opacity: 0.2,
        y: -55,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            delay: 1,
        },
    },
};

export const staggerCont = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const textVar = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "linear",
            duration: 1,
            delay,
        },
    },
});

export const textVar2 = (delay) => ({
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "string",
            duration: 1,
            delay,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
        },
    },
});

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "down" ? "-100%" : direction === "up" ? "100%" : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
        },
    },
});
