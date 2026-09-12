"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/icons/LogoMark";
import { Button } from "@/components/ui/Button";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_OUT, viewportOnce } from "@/components/motion/variants";
import { CONTACT_EMAIL, FOOTER_NAV, SOCIAL_LINKS } from "@/data/footer";

/**
 * Full-bleed closing band inside one large rounded dark card: heading does
 * a soft scale-in as it scrolls into view, CTA button reuses the chrome
 * shine sweep already built into <Button>. Footer content sits below the
 * card, outside it — logo, bio line, social icons, nav, contact, copyright.
 */
export function FooterCta() {
  const prefersReducedMotion = useReducedMotionSafe();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-col items-center gap-8 rounded-card bg-surface px-6 py-20 text-center sm:px-12"
        >
          <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            Let&apos;s build something that <em className="not-italic font-bold">holds up</em>.
          </h2>
          <Button href={`mailto:${CONTACT_EMAIL}`} withArrow size="md">
            Get in touch
          </Button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="#top" className="flex items-center gap-3">
              <LogoMark size={28} />
              <span className="font-display text-lg">Osman Zakaria</span>
            </Link>
            <p className="max-w-xs text-sm text-muted">
              Frontend development, QA &amp; test automation, and AI agent building, one
              practice.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-primary"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {FOOTER_NAV.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
              {CONTACT_EMAIL}
            </a>
            <span>Remote, worldwide</span>
          </div>
        </div>

        <div className="mt-16 border-t border-hairline pt-6 text-center text-xs text-muted">
          © {year} Osman Zakaria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
