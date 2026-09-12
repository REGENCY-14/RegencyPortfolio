"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/cn";

/**
 * Renders a short numeric/text label (e.g. "01") that does a quick vertical
 * roll transition per-character whenever the string changes — the
 * testimonial carousel's index counter. Reduced motion swaps the text
 * instantly with no roll.
 */
export function DigitRoll({ value, className }: { value: string; className?: string }) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <span className={cn("inline-flex overflow-hidden", className)}>
      {value.split("").map((char, position) => (
        <span key={position} className="relative inline-block h-[1em] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={char}
              initial={prefersReducedMotion ? undefined : { y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { y: "-100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}
