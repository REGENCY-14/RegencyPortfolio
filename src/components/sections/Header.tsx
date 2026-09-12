"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LogoMark } from "@/components/icons/LogoMark";
import { ThemeToggle } from "@/components/motion/ThemeToggle";
import { NAV_LINKS } from "@/data/nav";

/**
 * Sticky header: transparent over the hero, gains a hairline bottom border
 * and a solid backdrop as the page scrolls past it. No visible header CTA
 * button — matches the reference, which keeps the header to logo + nav +
 * menu icon and saves the CTA for the hero/footer (the theme toggle is the
 * one addition beyond the reference).
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  // Approximates "past the hero": the reference has no fixed hero height to
  // measure against, so this fades in over the first ~500px of scroll. Only
  // `opacity` is animated (on a `bg-background`/`border-hairline` layer, not
  // hand-computed rgba() strings), so the chrome repaints correctly
  // whichever theme is active instead of always fading to the dark colors.
  const chromeOpacity = useTransform(scrollY, [0, 480], [0, 1]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        aria-hidden
        style={{ opacity: chromeOpacity }}
        className="absolute inset-0 border-b border-hairline bg-background/85 backdrop-blur-md"
      />
      <div className="relative mx-auto flex h-20 w-full max-w-(--container-page) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3 text-primary">
          <LogoMark size={28} />
          <span className="font-display text-lg tracking-[-0.01em]">Osman Zakaria</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex size-9 items-center justify-center text-primary lg:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden>
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-hairline bg-background px-4 py-4 lg:hidden"
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-3 py-2 text-sm text-muted hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
