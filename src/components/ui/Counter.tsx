"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Large serif numeral that counts up from 0 with an easeOut curve once it
 * enters the viewport (IntersectionObserver via framer-motion's `useInView`,
 * `once: true` — no replay on scroll-back). Reduced motion renders the
 * final value straight from JSX below, so the effect only ever has to
 * handle the animating case.
 */
export function Counter({ value, prefix = "", suffix = "", className, duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px -80px 0px" });
  const prefersReducedMotion = useReducedMotionSafe();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
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
      {Math.round(shown).toLocaleString()}
      {suffix}
    </span>
  );
}
