import type { Transition, Variants } from "framer-motion";

/**
 * Shared animation vocabulary. Every section pulls its easing curves, stagger
 * timings, and reveal variants from here instead of redefining them locally —
 * keeps the "alive but not jittery" feel consistent site-wide.
 */

/** The house easing curve: a confident, slightly theatrical ease-out. */
export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.6,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

/**
 * Fade + rise, the baseline reveal for section chrome (eyebrows, headings).
 * `custom` (a per-item stagger delay in seconds, see `staggerDelay`) is read
 * by the transition function so <RevealOnScroll index={i} /> "just works"
 * without callers juggling a separate transition prop.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay: custom },
  }),
};

/** 3D tilt-in used by Featured Work cards. */
export const tiltIn: Variants = {
  hidden: { opacity: 0, rotateX: 8, y: 32 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT, delay: custom },
  }),
};

/** Stagger helper — pass an index-based delay to children via custom prop. */
export function staggerDelay(index: number, step = 0.08, base = 0) {
  return base + index * step;
}

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
