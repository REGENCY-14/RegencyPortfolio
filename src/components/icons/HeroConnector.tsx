"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/cn";

const CONNECTORS = {
  curve: { viewBox: "0 0 96 64", d: "M2.28571 9.14286C38.8571 9.14286 48 54.8571 89.1429 59.4286" },
  straight: { viewBox: "0 0 80 40", d: "M80 20H5" },
} as const;

interface HeroConnectorProps {
  variant: keyof typeof CONNECTORS;
  className?: string;
  delay?: number;
}

/** Dashed line that draws toward a floating annotation pill. */
export function HeroConnector({ variant, className, delay = 0 }: HeroConnectorProps) {
  const prefersReducedMotion = useReducedMotionSafe();
  const { viewBox, d } = CONNECTORS[variant];

  return (
    <svg viewBox={viewBox} fill="none" className={cn("absolute", className)} aria-hidden>
      <motion.path
        d={d}
        stroke="#75786F"
        strokeWidth={variant === "curve" ? 0.9 : 1}
        strokeDasharray={variant === "curve" ? "2.74 2.74" : "3 3"}
        initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeInOut", delay }}
      />
    </svg>
  );
}
