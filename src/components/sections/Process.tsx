"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PopIcon } from "@/components/motion/PopIcon";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { viewportOnce } from "@/lib/motion-variants";
import { PROCESS_STEPS } from "@/data/process";
import { processIcons } from "@/components/icons/icon-paths";
import { cn } from "@/lib/cn";

const LINE_DURATION = 1.4;

export function Process() {
  const prefersReducedMotion = useReducedMotionSafe();
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, viewportOnce);

  return (
    <section id="process" className="border-t border-hairline bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-(--container-page) flex-col gap-16">
        <SectionHeading eyebrow="SYSTEMATIC EXECUTION" heading="How I Deliver Enduring Software" />

        <div ref={rowRef} className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dashed baseline connector, desktop only (matches the single-row layout). */}
          <div
            aria-hidden
            className="absolute left-6 right-6 top-[52px] hidden h-px border-t border-dashed border-hairline lg:block"
          />
          {/* Solid "fill" line that draws left-to-right as the row enters view. */}
          <motion.div
            aria-hidden
            className="absolute left-6 right-6 top-[52px] hidden h-px origin-left bg-sage lg:block"
            initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : undefined}
            transition={{ duration: prefersReducedMotion ? 0 : LINE_DURATION, ease: "easeInOut" }}
          />

          {PROCESS_STEPS.map((step, index) => {
            const lightDelay = prefersReducedMotion
              ? 0
              : (index / (PROCESS_STEPS.length - 1)) * LINE_DURATION;

            return (
              <RevealOnScroll key={step.index} index={index} step={0.08} className="relative flex flex-col gap-5">
                <span className="font-mono text-xs text-body">{step.index}</span>
                <motion.span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-control border bg-cream text-sage shadow-[0_1px_1px_rgba(0,0,0,0.05)]",
                    "border-hairline",
                  )}
                  animate={inView ? { borderColor: "#6B7A5E" } : undefined}
                  transition={{ delay: lightDelay, duration: 0.3 }}
                >
                  <PopIcon
                    d={processIcons[step.icon].d}
                    viewBox={processIcons[step.icon].viewBox}
                    delay={lightDelay}
                  />
                </motion.span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed tracking-[0.005em] text-body">{step.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
