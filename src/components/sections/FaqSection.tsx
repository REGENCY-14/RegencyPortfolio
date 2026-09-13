"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { FAQ_ITEMS } from "@/data/faq";
import { cn } from "@/lib/cn";

/**
 * Single-expand FAQ accordion, addressing the questions a prospective
 * client usually has before reaching out — sits right before the footer
 * CTA so it's the last thing read before the contact form. Same
 * height+opacity spring collapse as the services accordion's row expand.
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <section id="faq" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Questions</p>
        <h2 className="mb-16 max-w-2xl font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Before you <em className="not-italic font-bold">reach out</em>.
        </h2>

        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className="border-b border-hairline">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl">{item.question}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={cn(
                      "size-5 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 220, damping: 26 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
