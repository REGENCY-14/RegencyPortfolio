"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagneticElement } from "@/components/motion/MagneticElement";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/nav";
import { cn } from "@/lib/cn";

/**
 * Sticky, translucent-blur site header. Nav links get a magnetic hover pull;
 * the primary CTA gets the shine sweep. Collapses to a simple mobile menu
 * below `lg` since the source Figma frame is desktop-only.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-cream-translucent backdrop-blur-[6px]">
      <div className="mx-auto flex h-20 w-full max-w-(--container-page) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <Image src="/images/logo-monogram.png" alt="" width={32} height={32} className="size-8" priority />
          <span className="flex flex-col">
            <span className="font-display text-2xl tracking-[-0.02em] text-ink">Elena Vance</span>
            <span className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-body">
              Frontend Lead &amp; QA Architect
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border-b-2 pb-1.5 text-sm transition-colors",
                index === 0
                  ? "border-sage font-semibold text-sage-dark"
                  : "border-transparent font-medium text-label hover:border-hairline",
              )}
            >
              <MagneticElement strength={8}>{link.label}</MagneticElement>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" size="sm" shine className="hidden sm:inline-flex">
            Initiate Project
          </Button>
          <Link
            href="#contact"
            aria-label="Contact"
            className="flex size-8 items-center justify-center rounded-control bg-sage-dark text-white"
          >
            <svg viewBox="0 0 12 12" fill="currentColor" className="size-3" aria-hidden>
              <path d="M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6V6M0 12V9.9C0 9.475 0.109375 9.08437 0.328125 8.72812C0.546875 8.37187 0.8375 8.1 1.2 7.9125C1.975 7.525 2.7625 7.23438 3.5625 7.04063C4.3625 6.84688 5.175 6.75 6 6.75C6.825 6.75 7.6375 6.84688 8.4375 7.04063C9.2375 7.23438 10.025 7.525 10.8 7.9125C11.1625 8.1 11.4531 8.37187 11.6719 8.72812C11.8906 9.08437 12 9.475 12 9.9V12H0V12Z" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex size-8 items-center justify-center rounded-control border border-hairline lg:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden>
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-hairline bg-cream px-4 py-4 lg:hidden"
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-control px-3 py-2 text-sm font-medium text-label hover:bg-band"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" size="sm" className="mt-2 w-full">
            Initiate Project
          </Button>
        </nav>
      )}
    </header>
  );
}
