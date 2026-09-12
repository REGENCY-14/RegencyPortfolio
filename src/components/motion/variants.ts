import type { Transition, Variants } from "framer-motion";

/**
 * Shared animation vocabulary for the rebuild. Every section pulls its
 * easing curves and reveal variants from here instead of redefining
 * transitions locally (DRY per the brief's Core Rules).
 */

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** Fade + rise, the baseline reveal for section chrome and staggered rows. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay: custom },
  }),
};

/** Wraps a group of children so they stagger in one after another. */
export const staggerContainer = (step = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: step },
  },
});

export function staggerDelay(index: number, step = 0.08, base = 0) {
  return base + index * step;
}

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
