"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { fadeUp, staggerDelay, viewportOnce } from "@/lib/motion-variants";
import { cn } from "@/lib/cn";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Stagger index — multiplied by `step` seconds for a per-item delay. */
  index?: number;
  step?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Generic scroll-triggered reveal wrapper. Defaults to the shared fade-up
 * variant; pass `variants` (e.g. `tiltIn`) for a section-specific treatment.
 * Reduced motion collapses to an instant opacity fade — no transform, no
 * viewport re-trigger logic to worry about.
 */
export function RevealOnScroll({
  children,
  className,
  variants = fadeUp,
  index = 0,
  step = 0.1,
  as = "div",
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotionSafe();
  const Component = motion[as as "div"];

  if (prefersReducedMotion) {
    const Static = as as keyof React.JSX.IntrinsicElements;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      custom={staggerDelay(index, step)}
    >
      {children}
    </Component>
  );
}
