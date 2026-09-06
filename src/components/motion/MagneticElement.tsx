"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/cn";

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  /** How far the element can shift toward the cursor, in pixels. */
  strength?: number;
}

/**
 * Wraps an inline element (nav link text, small CTA labels) so it drifts a
 * few pixels toward the cursor while hovered — the "magnetic hover" effect.
 * Resets with a spring on pointer leave. No-op under reduced motion.
 */
export function MagneticElement({ children, className, strength = 10 }: MagneticElementProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.3 });

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const relativeX = event.clientX - (bounds.left + bounds.width / 2);
    const relativeY = event.clientY - (bounds.top + bounds.height / 2);
    x.set((relativeX / bounds.width) * strength);
    y.set((relativeY / bounds.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.span>
  );
}
