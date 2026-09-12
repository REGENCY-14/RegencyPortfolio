"use client";

import { motion } from "framer-motion";
import { HeroBackdrop } from "@/components/motion/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_OUT } from "@/components/motion/variants";

/** Headline lines with the emphasized words marked as `_word_`. */
const HEADLINE_LINES = ["Interfaces engineered with", "_precision_, tested without", "_compromise_."];

function HeadlineLine({ line }: { line: string }) {
  const parts = line.split(/(_[^_]+_)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("_") ? (
          <em key={index} className="not-italic font-bold">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

/**
 * Above-the-fold hero. Headline reveals line-by-line with a staggered
 * clip-path wipe on load; everything else (badge, subhead, CTA) fades up
 * right behind it on a short stagger.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-40 sm:px-6 lg:px-8 lg:pt-52">
      <HeroBackdrop />

      <div className="relative mx-auto flex max-w-(--container-page) flex-col items-center text-center">
        <motion.span
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-8 inline-flex items-center rounded-full border border-hairline px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          Build · Test · Automate
        </motion.span>

        <h1 className="font-display text-[42px] leading-[1.1] tracking-[-0.02em] text-primary sm:text-6xl lg:text-[80px]">
          {HEADLINE_LINES.map((line, index) => (
            <span key={index} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 100% 0)", y: "0.2em" }}
                animate={{ clipPath: "inset(0 0 0% 0)", y: "0em" }}
                transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.15 + index * 0.08 }}
              >
                <HeadlineLine line={line} />
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.55 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I design and ship frontend systems, build the Playwright suites that guard them, and
          the AI agents that keep both moving, for teams who refuse to choose between fast and
          reliable.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.7 }}
          className="mt-10"
        >
          <Button href="#work" withArrow>
            See Selected Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
