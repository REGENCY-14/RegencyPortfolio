"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * The hero's background layer: a fluted vertical-stripe texture (CSS
 * gradient, not a static image, so it can drift) plus the one warm amber
 * glow on the whole site, radiating from behind the headline. Both loops
 * are transform/opacity-only and low-amplitude — "a sense of depth, not
 * obvious motion" per the brief.
 *
 * Reduced motion: renders both layers static, no loops.
 */
export function HeroBackdrop() {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-y-0 -inset-x-4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(var(--color-stripe), 0.05) 0px, rgba(var(--color-stripe), 0.05) 1px, transparent 1px, transparent 28px)",
        }}
        animate={prefersReducedMotion ? undefined : { x: [0, 14, 0] }}
        transition={
          prefersReducedMotion ? undefined : { duration: 40, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute left-1/2 top-1/3 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)" }}
        initial={{ opacity: 0.85 }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.85, 1, 0.85] }}
        transition={
          prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
