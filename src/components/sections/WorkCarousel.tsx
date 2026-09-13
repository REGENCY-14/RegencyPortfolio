"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DraggableCarousel } from "@/components/motion/DraggableCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { WorkPlaceholderGraphic } from "@/components/icons/WorkPlaceholderGraphic";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { WORK_PROJECTS } from "@/data/work";
import { cn } from "@/lib/cn";

/**
 * Draggable, one-project-per-view carousel. The active slide reads
 * larger/full-opacity; neighbors dim and shrink slightly. Tag pills fade in
 * staggered once the slide settles (keyed by selectedIndex, so it replays
 * on every slide change — that's the "what just became relevant" cue).
 *
 * The slide track itself is full-bleed (breaks out of the page's max-width
 * container to the true viewport edges — see the `left-1/2 ... w-screen`
 * trick on the viewport div below) so neighboring slides peek all the way
 * to the edge of the screen; the heading and controls above/below it stay
 * within the normal padded container.
 *
 * `100vw` is defined as the viewport width *including* the scrollbar, so
 * on a browser with a non-overlay scrollbar (most desktop browsers outside
 * of headless testing) the full-bleed div renders a few pixels wider than
 * the page itself and pushes a horizontal scrollbar onto the whole
 * document. `overflow-x-hidden` on this section (not on body/html — that
 * would risk the header's position:sticky the same way the old
 * height:100% bug did) clips just that harmless sliver locally instead.
 */
export function WorkCarousel() {
  return (
    <section id="work" className="overflow-x-hidden border-t border-hairline py-24">
      <div className="mx-auto max-w-(--container-page) px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Selected work</p>
        <h2 className="mb-16 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Systems I&apos;ve <em className="not-italic font-bold">shipped</em>.
        </h2>
      </div>

      <DraggableCarousel slideCount={WORK_PROJECTS.length}>
        {({ viewportRef, selectedIndex, scrollTo, scrollPrev, scrollNext, canScrollPrev, canScrollNext }) => (
          <>
            <div ref={viewportRef} className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
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
                            <>
                              <WorkPlaceholderGraphic className="size-full" />
                              <span className="absolute bottom-4 left-4 font-display text-2xl font-bold text-primary">
                                {project.name}
                              </span>
                            </>
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
                        <Link
                          href={`/work/${project.slug}`}
                          className="group mt-4 inline-flex w-fit items-center gap-2 text-sm text-primary"
                        >
                          View case study
                          <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto max-w-(--container-page) px-4 sm:px-6 lg:px-8">
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
            </div>
          </>
        )}
      </DraggableCarousel>
    </section>
  );
}
