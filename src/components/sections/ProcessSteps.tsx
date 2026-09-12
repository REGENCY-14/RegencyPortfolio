"use client";

import { motion } from "framer-motion";
import { NumberedLabel } from "@/components/ui/NumberedLabel";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { viewportOnce, EASE_OUT } from "@/components/motion/variants";
import { PROCESS_STEPS } from "@/data/process";

/**
 * Numbered steps with generous vertical spacing — matches the reference's
 * vertical rhythm rather than a tight horizontal row. Each step's number,
 * icon, and text fade/slide in together as it scrolls into view, staggered
 * top to bottom.
 */
export function ProcessSteps() {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <section className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">How I work</p>
        <h2 className="mb-20 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Three steps, <em className="not-italic font-bold">every</em> time.
        </h2>

        <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:gap-20">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: index * 0.12 }}
              className="flex items-start gap-6"
            >
              <step.icon size={40} className="mt-1 shrink-0 text-primary" />
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <NumberedLabel index={index + 1} />
                  <h3 className="font-display text-2xl">{step.title}</h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
