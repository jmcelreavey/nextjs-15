export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const STAGGER_CHILDREN = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const SCALE_IN = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};
