"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { viewportOnce } from "@/lib/motion-variants";
import { cn } from "@/lib/cn";
import type { IconPath } from "@/components/icons/icon-paths";

interface PopIconProps extends IconPath {
  className?: string;
  delay?: number;
}

/**
 * The Process step icons are filled solid glyphs, not stroked outlines, so a
 * stroke-dasharray "draw" (see DrawIcon) can't apply to them faithfully.
 * Instead they pop into place (scale + fade) the first time they scroll into
 * view, then join the same slow idle pulse used elsewhere in the section —
 * same visual language, adapted to filled artwork.
 */
export function PopIcon({ d, viewBox, className, delay = 0 }: PopIconProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <motion.svg
      viewBox={viewBox}
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden
      initial={prefersReducedMotion ? undefined : { scale: 0.4, opacity: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: [0, 1, 0.9, 1] }}
      viewport={viewportOnce}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              scale: { duration: 0.5, ease: "backOut", delay },
              opacity: { duration: 0.5, delay },
            }
      }
    >
      <path d={d} />
    </motion.svg>
  );
}
