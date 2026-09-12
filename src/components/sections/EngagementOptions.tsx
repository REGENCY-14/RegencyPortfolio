"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { Button } from "@/components/ui/Button";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { ENGAGEMENTS } from "@/data/engagements";
import { cn } from "@/lib/cn";

/**
 * Replaces the reference site's subscription pricing tiers with "ways to
 * work with me" — tab selector, feature checklist, no dollar amounts
 * anywhere. Tab switch cross-fades the checklist in with a short stagger;
 * each checkmark (the same motif as the QA service icon) pops in one at a
 * time rather than all appearing at once.
 */
export function EngagementOptions() {
  const [activeId, setActiveId] = useState(ENGAGEMENTS[0].id);
  const prefersReducedMotion = useReducedMotionSafe();
  const active = ENGAGEMENTS.find((engagement) => engagement.id === activeId) ?? ENGAGEMENTS[0];

  return (
    <section className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Ways to work together</p>
        <h2 className="mb-12 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Engagement <em className="italic">options</em>.
        </h2>

        <div role="tablist" aria-label="Engagement options" className="mb-10 flex flex-wrap gap-2">
          {ENGAGEMENTS.map((engagement) => (
            <button
              key={engagement.id}
              type="button"
              role="tab"
              aria-selected={engagement.id === activeId}
              onClick={() => setActiveId(engagement.id)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                engagement.id === activeId
                  ? "border-primary bg-primary text-background"
                  : "border-hairline text-muted hover:text-primary",
              )}
            >
              {engagement.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="rounded-card bg-surface p-8 sm:p-12"
          >
            <p className="max-w-xl text-lg leading-relaxed text-primary">{active.description}</p>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } } }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {active.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={{
                    hidden: prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <CheckIcon size={18} className="mt-0.5 shrink-0 text-primary" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <Button href="#contact" className="mt-10" withArrow>
              Start a conversation
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
