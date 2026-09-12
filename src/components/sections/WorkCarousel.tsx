"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DraggableCarousel } from "@/components/motion/DraggableCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { WORK_PROJECTS } from "@/data/work";
import { cn } from "@/lib/cn";

/**
 * Draggable, one-project-per-view carousel. The active slide reads
 * larger/full-opacity; neighbors dim and shrink slightly. Tag pills fade in
 * staggered once the slide settles (keyed by selectedIndex, so it replays
 * on every slide change — that's the "what just became relevant" cue).
 */
export function WorkCarousel() {
  return (
    <section id="work" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Selected work</p>
        <h2 className="mb-16 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Systems I&apos;ve <em className="not-italic font-bold">shipped</em>.
        </h2>

        <DraggableCarousel slideCount={WORK_PROJECTS.length}>
          {({ viewportRef, selectedIndex, scrollTo, scrollPrev, scrollNext, canScrollPrev, canScrollNext }) => (
            <>
              <div ref={viewportRef} className="overflow-hidden">
                <div className="flex touch-pan-y">
                  {WORK_PROJECTS.map((project, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <div
                        key={project.name}
                        className="min-w-0 shrink-0 grow-0 basis-[85%] px-3 sm:basis-[70%] lg:basis-[55%]"
                      >
                        <motion.div
                          animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.92 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-surface">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={`${project.name} project screenshot`}
                                fill
                                sizes="(min-width: 1024px) 55vw, 85vw"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex size-full items-center justify-center">
                                <span className="font-display text-3xl font-bold text-muted">{project.name}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="mt-6 font-display text-2xl tracking-[-0.01em]">{project.name}</h3>
                          {isActive && (
                            <motion.div
                              key={selectedIndex}
                              initial="hidden"
                              animate="visible"
                              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                              className="mt-4 flex flex-wrap gap-2"
                            >
                              {project.tags.map((tag) => (
                                <motion.span
                                  key={tag}
                                  variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                                  className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <CarouselArrows
                  onPrev={scrollPrev}
                  onNext={scrollNext}
                  prevDisabled={!canScrollPrev}
                  nextDisabled={!canScrollNext}
                  prevLabel="Previous project"
                  nextLabel="Next project"
                />
                <div className="flex items-center gap-2">
                  {WORK_PROJECTS.map((project, index) => (
                    <button
                      key={project.name}
                      type="button"
                      onClick={() => scrollTo(index)}
                      aria-label={`Go to ${project.name}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        index === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-hairline",
                      )}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </DraggableCarousel>
      </div>
    </section>
  );
}
