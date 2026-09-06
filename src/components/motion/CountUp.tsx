"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface CountUpProps {
  /** Numeric target to count up to. */
  value: number;
  /** Text to render before/after the number, e.g. prefix "", suffix "%". */
  prefix?: string;
  suffix?: string;
  /** Decimal places to keep (e.g. 1 for "99.4"). */
  decimals?: number;
  className?: string;
  duration?: number;
}

/**
 * Animates 0 → value with an easeOut curve once the element enters the
 * viewport, and never replays on scroll-back (useInView `once: true`).
 * Reduced motion renders the final value immediately.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  duration = 1.6,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px -80px 0px" });
  const prefersReducedMotion = useReducedMotionSafe();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced motion renders the final value straight from JSX below, so the
    // animated branch only ever needs to handle the animating case.
    if (!isInView || prefersReducedMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion]);

  const shown = prefersReducedMotion ? (isInView ? value : 0) : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
