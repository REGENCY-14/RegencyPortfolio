"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { staggerDelay } from "@/components/motion/variants";
import { CONTACT_EMAIL } from "@/data/footer";
import type { NavLink } from "@/data/nav";

interface MobileMenuOverlayProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Full-screen mobile nav, left-aligned and bottom-weighted rather than
 * centered — large bold links up top, a contact/email line and a
 * copyright row anchored to the bottom, matching the reference the user
 * shared. Covers the viewport below the header; backdrop, Escape, and a
 * link click all close it. Locks background scroll while open — a
 * full-screen overlay you can scroll "through" to the page behind it
 * defeats the point of it being modal.
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
          className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-background px-6 pb-8 pt-12 lg:hidden"
        >
          <nav aria-label="Mobile primary" className="flex flex-col items-start gap-5">
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
                  className="font-sans text-5xl font-bold tracking-[-0.02em] text-primary transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : staggerDelay(links.length, 0.06) }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.08em] text-muted">
              <span>Remote, worldwide</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="w-fit border-b border-primary text-primary">
                Email me
              </a>
            </div>
            <div className="flex items-center justify-between border-t border-hairline pt-4 text-xs uppercase tracking-[0.08em] text-muted">
              <span>© {CURRENT_YEAR} Osman Zakaria</span>
              <span>All rights reserved</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
