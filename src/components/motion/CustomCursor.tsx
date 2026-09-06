"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [role="button"], [data-cursor-hover]';

/**
 * Small dot + trailing ring cursor. Desktop-only (hover + fine pointer) and
 * a no-op under reduced motion, since it's purely decorative chrome. Native
 * cursor is hidden site-wide via the `data-custom-cursor` attribute this
 * component stamps on <body>, so there's never a "two cursors" flash.
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotionSafe();
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = (event: MediaQueryListEvent) => setEnabled(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      document.body.removeAttribute("data-custom-cursor");
      return;
    }
    document.body.setAttribute("data-custom-cursor", "true");

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visible) setVisible(true);
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
      document.body.removeAttribute("data-custom-cursor");
    };
  }, [enabled, prefersReducedMotion, visible, x, y]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden>
      <motion.div
        className="absolute rounded-full bg-sage"
        style={{ x, y, width: 6, height: 6, marginLeft: -3, marginTop: -3 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="absolute rounded-full border border-sage"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          marginLeft: hovering ? -22 : -14,
          marginTop: hovering ? -22 : -14,
          opacity: visible ? (hovering ? 0.6 : 0.35) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
    </div>
  );
}
