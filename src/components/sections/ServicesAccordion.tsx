"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NumberedLabel } from "@/components/ui/NumberedLabel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/cn";

/**
 * Desktop: a numbered accordion list on the left, its photo shown large in
 * a cross-fading panel on the right (icon overlaid as a small badge,
 * bottom-left, carrying the existing stroke-draw-in). The four source
 * photos come from different shoots with different color casts, so each
 * is desaturated + given a warm duotone wash — via the amber-tinted
 * overlay div, not a color filter that would need a separate asset per
 * theme — to read as one system instead of four clashing stock photos.
 * Mobile: a simple stacked list per row (per the brief, dropping the
 * floating hover-image effect and the accordion interaction — a small
 * static icon sits next to each row's copy instead).
 */
export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionSafe();

  // Tracks which rows have already played their one-time icon draw-in, so
  // revisiting a row later shows the icon fully drawn with no replay. Marked
  // via the icon panel's onAnimationComplete callback below (an event-driven
  // callback, not an effect), once that reveal actually finishes.
  const [drawnIndices, setDrawnIndices] = useState<Set<number>>(() => new Set());
  const shouldDraw = !drawnIndices.has(activeIndex);

  const goPrev = () => setActiveIndex((current) => (current - 1 + SERVICES.length) % SERVICES.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % SERVICES.length);

  const ActiveIcon = SERVICES[activeIndex].icon;

  return (
    <section id="services" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">What I do</p>
        <h2 className="mb-16 max-w-2xl font-display text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
          Three practices, <em className="not-italic font-bold">one</em> engineer.
        </h2>

        {/* Desktop: accordion + large cross-fading icon panel */}
        <div className="hidden gap-16 lg:grid lg:grid-cols-2">
          <div>
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={service.title} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="flex w-full items-center gap-6 py-6 text-left"
                  >
                    <NumberedLabel index={index + 1} />
                    <span
                      className={cn(
                        "font-display text-2xl transition-colors",
                        isActive ? "text-primary" : "text-muted",
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 26 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-md pb-6 pl-[3.25rem] text-sm leading-relaxed text-muted">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <CarouselArrows onPrev={goPrev} onNext={goNext} className="mt-8" prevLabel="Previous service" nextLabel="Next service" />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onAnimationComplete={() => setDrawnIndices((prev) => new Set(prev).add(activeIndex))}
                className="absolute inset-0"
              >
                <Image
                  src={SERVICES[activeIndex].image}
                  alt={SERVICES[activeIndex].imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover grayscale contrast-125"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-accent-glow/25 mix-blend-color" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden />
                <span className="absolute bottom-4 left-4 flex size-14 items-center justify-center rounded-full border border-hairline bg-background/90 text-primary backdrop-blur-sm">
                  <ActiveIcon size={28} shouldDraw={shouldDraw} />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet: static stacked list, no accordion interaction */}
        <div className="flex flex-col gap-8 lg:hidden">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="flex gap-4 border-b border-hairline pb-8">
              <service.icon size={32} className="shrink-0 text-primary" />
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <NumberedLabel index={index + 1} />
                  <span className="font-display text-xl">{service.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
