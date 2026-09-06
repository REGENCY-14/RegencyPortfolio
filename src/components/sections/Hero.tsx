"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/RevealText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const HEADLINE_LINES = ["Engineering", "resilient systems,", "verified by design."];

/**
 * Hero / above-the-fold section. Headline reveals line-by-line on load
 * (RevealText); everything else in the left column fades up right behind it
 * on a short stagger so the page doesn't feel like one big simultaneous pop.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotionSafe();
  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

  return (
    <section id="top" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
      <div
        aria-hidden
        className="absolute bottom-16 left-4 top-16 hidden w-px bg-hairline sm:block"
      >
        <span className="absolute -left-[2.5px] top-12 size-1.5 rounded-full bg-sage" />
        <span className="absolute -left-[2.5px] top-64 size-1.5 rounded-full bg-hairline" />
      </div>

      <div className="mx-auto grid max-w-(--container-page) grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.div {...fadeUp(0)} className="pb-3">
            <Badge dot className="bg-band/60">
              STAFF FRONTEND ARCHITECT &amp; QA LEAD
            </Badge>
          </motion.div>

          <RevealText
            as="h1"
            lines={HEADLINE_LINES}
            delay={0.15}
            staggerStep={0.08}
            className="font-display text-[44px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[72px]"
          />

          <motion.p
            {...fadeUp(0.55)}
            className="max-w-lg pb-12 pt-6 text-lg leading-[1.6] tracking-[-0.005em] text-body"
          >
            Bridging the chasm between bespoke UI craftsmanship, industrial-grade test
            automation with Playwright, and autonomous AI agents designed to accelerate
            production releases.
          </motion.p>

          <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center gap-4">
            <Button href="#featured-work" shine>
              Explore Case Studies
            </Button>
            <Button href="#specializations" variant="outline">
              View Architecture Stack
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
