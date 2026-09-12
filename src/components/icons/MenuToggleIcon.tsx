"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * The header's mobile menu trigger: three bars that morph into an X when
 * `open` is true (top/bottom bars rotate 45°/-45° and recenter, the middle
 * bar fades out) rather than swapping between two separate icons.
 */
export function MenuToggleIcon({ open, className }: { open: boolean; className?: string }) {
  const prefersReducedMotion = useReducedMotionSafe();
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <motion.path
        d="M3 5h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
        transition={transition}
      />
      <motion.path
        d="M3 10h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: open ? 0 : 1 }}
        transition={transition}
      />
      <motion.path
        d="M3 15h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
        transition={transition}
      />
    </svg>
  );
}
