"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_OUT } from "@/lib/motion-variants";
import { cn } from "@/lib/cn";

interface RevealTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  /** Delay before the first line starts, in seconds. */
  delay?: number;
  /** Stagger between lines, in seconds. Spec calls for ~80ms. */
  staggerStep?: number;
  as?: "h1" | "h2" | "div";
}

/**
 * Line-by-line clip-path wipe reveal — used for the hero headline on load.
 * Each line sits in an overflow-hidden mask so the clip-path animation reads
 * as the text being wiped into view rather than a plain fade.
 *
 * Falls back to an instant, fully-visible render under reduced motion.
 */
export function RevealText({
  lines,
  className,
  lineClassName,
  delay = 0,
  staggerStep = 0.08,
  as = "div",
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotionSafe();
  const Wrapper = as;

  if (prefersReducedMotion) {
    return (
      <Wrapper className={className}>
        {lines.map((line, index) => (
          <span key={index} className={cn("block", lineClassName)}>
            {line}
          </span>
        ))}
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ clipPath: "inset(0 0 100% 0)", y: "0.2em" }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: "0em" }}
            transition={{
              duration: 0.8,
              ease: EASE_OUT,
              delay: delay + index * staggerStep,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
