"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/**
 * The faint circuit/schematic line-art behind the hero portrait. Path data
 * is the exact export from Figma (asset 87a7b1d4…), inlined instead of used
 * as an <img> so each stroke can be animated individually as if sketched in.
 */
const PATHS = [
  "M96 280C96 388.175 183.825 476 292 476C400.175 476 488 388.175 488 280C488 171.825 400.175 84 292 84C183.825 84 96 171.825 96 280V280",
  "M49.3333 280C49.3333 413.931 158.069 522.667 292 522.667C425.931 522.667 534.667 413.931 534.667 280C534.667 146.069 425.931 37.3333 292 37.3333C158.069 37.3333 49.3333 146.069 49.3333 280V280",
  "M124 280H460M292 112V448M180 168L404 392M180 392L404 168",
  "M282.667 74.6667H301.333V74.6667V93.3333V93.3333H282.667V93.3333V74.6667V74.6667V74.6667",
  "M86.6667 270.667H105.333V270.667V289.333V289.333H86.6667V289.333V270.667V270.667V270.667",
  "M469.333 270.667H488V270.667V289.333V289.333H469.333V289.333V270.667V270.667V270.667",
  "M282.667 457.333H301.333V457.333V476V476H282.667V476V457.333V457.333V457.333",
  "M161.333 280C161.333 352.117 219.883 410.667 292 410.667C364.117 410.667 422.667 352.117 422.667 280C422.667 207.883 364.117 149.333 292 149.333C219.883 149.333 161.333 207.883 161.333 280V280",
];

export function HeroCircuitGraphic({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <svg viewBox="0 0 584 560" fill="none" className={className} aria-hidden>
      {PATHS.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          stroke="#C5C8BD"
          strokeOpacity={0.4}
          strokeWidth={index === 2 ? 0.47 : 0.7}
          initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.1, ease: "easeInOut", delay: 0.1 + index * 0.07 }
          }
        />
      ))}
    </svg>
  );
}
