"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { TESTIMONIAL_SLIDES, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 7000;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-card border border-hairline bg-card p-8 sm:p-12">
      <div className="flex flex-col gap-4 pb-8">
        <span className="font-display text-5xl leading-none text-sage" aria-hidden>
          &ldquo;
        </span>
        <p className="font-display text-xl italic leading-[1.6] tracking-[-0.01em] text-ink sm:text-2xl">
          {testimonial.quote}
        </p>
      </div>
      <div className="flex items-center gap-4 border-t border-hairline pt-6">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-control border border-hairline bg-band-soft font-display text-base font-bold text-sage">
          {testimonial.initials}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-[0.01em] text-ink">{testimonial.name}</span>
          <span className="text-sm text-body">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Two-up testimonial carousel: crossfade + slight vertical slide between
 * slides, with morphing dots (active dot widens rather than just recoloring).
 * Autoplay pauses on hover/focus and is skipped entirely under reduced
 * motion, where the first slide simply stays put.
 */
export function Testimonials() {
  const prefersReducedMotion = useReducedMotionSafe();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIAL_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, paused]);

  const slide = TESTIMONIAL_SLIDES[index];

  return (
    <section
      id="testimonials"
      className="bg-cream px-4 py-24 sm:px-6 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-(--container-page) flex-col items-center gap-12">
        <SectionHeading
          eyebrow="REPUTATION & FEEDBACK"
          heading={
            <>
              Client &amp; Leadership
              <br />
              Perspectives
            </>
          }
          align="center"
          className="max-w-2xl"
        />

        <div className="relative w-full pt-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              {slide.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
          {TESTIMONIAL_SLIDES.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Show testimonial slide ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                dotIndex === index ? "w-6 bg-sage" : "w-2.5 border border-body bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
