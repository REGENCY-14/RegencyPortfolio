"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { staggerDelay } from "@/components/motion/variants";
import type { NavLink } from "@/data/nav";

interface MobileMenuOverlayProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

/**
 * Full-screen mobile nav: covers the viewport below the header, centered
 * links reveal staggered, backdrop and Escape both close it. Locks
 * background scroll while open — a full-screen overlay you can scroll
 * "through" to the page behind it defeats the point of it being modal.
 */
export function MobileMenuOverlay({ open, onClose, links }: MobileMenuOverlayProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-20 z-40 flex flex-col bg-background lg:hidden"
        >
          <nav
            aria-label="Mobile primary"
            className="flex flex-1 flex-col items-center justify-center gap-2"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: staggerDelay(index, 0.06) }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl tracking-[-0.02em] text-primary transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
