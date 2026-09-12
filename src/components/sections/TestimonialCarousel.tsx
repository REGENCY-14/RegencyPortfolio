"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { DraggableCarousel } from "@/components/motion/DraggableCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { DigitRoll } from "@/components/ui/DigitRoll";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { TESTIMONIALS } from "@/data/testimonials";

/**
 * Large serif quote type, one testimonial per view. Each slide's copy
 * crossfades + slides slightly on activation (layered on top of embla's own
 * drag mechanics); the numbered index counter rolls per-digit on change.
 * Autoplay is skipped entirely under reduced motion — it's the one ambient,
 * non-user-driven loop in this carousel.
 */
export function TestimonialCarousel() {
  const prefersReducedMotion = useReducedMotionSafe();
  const plugins = useMemo(
    () => (prefersReducedMotion ? [] : [Autoplay({ delay: 6000, stopOnInteraction: true })]),
    [prefersReducedMotion],
  );

  return (
    <section id="testimonials" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">What people say</p>

        <DraggableCarousel slideCount={TESTIMONIALS.length} loop plugins={plugins}>
          {({ viewportRef, selectedIndex, scrollPrev, scrollNext }) => (
            <>
              <div ref={viewportRef} className="overflow-hidden">
                <div className="flex">
                  {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="min-w-0 shrink-0 grow-0 basis-full px-4">
                      <motion.div
                        animate={{ opacity: index === selectedIndex ? 1 : 0, y: index === selectedIndex ? 0 : 12 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="font-display text-2xl leading-relaxed tracking-[-0.01em] sm:text-3xl">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <p className="mt-6 text-sm font-medium text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted">{testimonial.role}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6">
                <CarouselArrows
                  onPrev={scrollPrev}
                  onNext={scrollNext}
                  prevLabel="Previous testimonial"
                  nextLabel="Next testimonial"
                />
                <span className="flex items-baseline gap-1 font-mono text-sm text-muted" aria-hidden>
                  <DigitRoll value={String(selectedIndex + 1).padStart(2, "0")} />
                  <span> / {String(TESTIMONIALS.length).padStart(2, "0")}</span>
                </span>
                <span className="sr-only" role="status">
                  Showing testimonial {selectedIndex + 1} of {TESTIMONIALS.length}
                </span>
              </div>
            </>
          )}
        </DraggableCarousel>
      </div>
    </section>
  );
}
