"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LogoMark } from "@/components/icons/LogoMark";
import { MenuToggleIcon } from "@/components/icons/MenuToggleIcon";
import { ThemeToggle } from "@/components/motion/ThemeToggle";
import { MobileMenuOverlay } from "@/components/motion/MobileMenuOverlay";
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
        <Link href="/#top" className="flex items-center gap-3 text-primary">
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
            className="flex size-9 items-center justify-center rounded-full text-primary transition-colors lg:hidden data-[open=true]:bg-primary data-[open=true]:text-background"
            data-open={mobileOpen}
          >
            <MenuToggleIcon open={mobileOpen} className="size-5" />
          </button>
        </div>
      </div>

      <MobileMenuOverlay open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
