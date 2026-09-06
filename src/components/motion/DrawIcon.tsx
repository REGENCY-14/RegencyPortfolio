"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { viewportOnce } from "@/lib/motion-variants";
import { cn } from "@/lib/cn";

interface DrawIconProps {
  /** A single-path stroked icon (viewBox + path `d`), e.g. from src/components/icons. */
  d: string;
  viewBox: string;
  className?: string;
  strokeWidth?: number;
  /** Delay before this icon starts drawing, for staggering a row of icons. */
  delay?: number;
}

/**
 * Renders a stroke-based icon that draws itself in via stroke-dasharray /
 * stroke-dashoffset the first time it scrolls into view, then settles into a
 * slow idle opacity pulse (0.9–1) so the section doesn't go static. Used by
 * the Specializations column icons.
 *
 * Reduced motion: renders the fully-drawn icon with no pulse.
 */
export function DrawIcon({ d, viewBox, className, strokeWidth = 1.5, delay = 0 }: DrawIconProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <svg viewBox={viewBox} fill="none" className={cn("h-6 w-6", className)} aria-hidden>
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0.9 }}
        whileInView={
          prefersReducedMotion
            ? undefined
            : { pathLength: 1, opacity: [0.9, 1, 0.9] }
        }
        viewport={viewportOnce}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                pathLength: { duration: 0.9, ease: "easeInOut", delay },
                opacity: {
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 0.9,
                },
              }
        }
      />
    </svg>
  );
}
