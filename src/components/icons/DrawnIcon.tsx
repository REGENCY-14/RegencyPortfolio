"use client";

import { motion } from "framer-motion";
import { ICON_STROKE_WIDTH } from "@/components/icons/constants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export interface DrawnIconProps {
  className?: string;
  size?: number;
  /** Play the one-time stroke-draw-in. Parent only sets this true once per icon. */
  shouldDraw?: boolean;
}

interface DrawnIconRenderProps extends DrawnIconProps {
  viewBox: string;
  paths: string[];
  label: string;
}

/**
 * Shared rendering for every stroke-based custom icon (the 4 service icons
 * and 3 process icons): one stroke-width constant, one "draw itself in the
 * first time it becomes active" animation. Individual icon files just
 * supply their own path data and call this — so the animation logic lives
 * in exactly one place, not once per icon.
 */
export function DrawnIcon({ viewBox, paths, label, className, size = 32, shouldDraw }: DrawnIconRenderProps) {
  const prefersReducedMotion = useReducedMotionSafe();
  const animate = shouldDraw && !prefersReducedMotion;

  return (
    <svg viewBox={viewBox} width={size} height={size} fill="none" className={className} role="img" aria-label={label}>
      {paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          stroke="currentColor"
          strokeWidth={ICON_STROKE_WIDTH}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={animate ? { pathLength: 0 } : false}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 }}
        />
      ))}
    </svg>
  );
}
