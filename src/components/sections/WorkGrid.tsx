"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WorkPlaceholderGraphic } from "@/components/icons/WorkPlaceholderGraphic";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { WORK_PROJECTS } from "@/data/work";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/motion/variants";

/**
 * Editorial card grid for Selected Work, replacing the earlier draggable
 * carousel per feedback — a fixed layout reads better for a small, curated
 * project list than a slideshow that hides most of it by default. Each card
 * is a self-contained editorial unit (image, category tag, title, summary,
 * role) rather than a slide, so it doesn't need active/inactive states.
 *
 * Images use object-contain on a neutral surface, not object-cover: the
 * project screenshots vary in aspect ratio (a plain site capture vs. a
 * multi-device mockup), and cropping to fill a fixed box zoomed in hard on
 * the wider ones (see the carousel's own object-contain fix before this
 * rewrite). Contain keeps every screenshot fully visible instead.
 *
 * Each card is a single bordered container (image, tag, title, summary, and
 * the role/case-study footer all inside one box) rather than loose content
 * stacked in a grid cell — with generous inter-card gaps on top of that. At
 * a glance, or on a resize where a wrapped line might otherwise land next
 * to the wrong neighbor, there's no ambiguity about which project a given
 * line of text belongs to.
 */
export function WorkGrid() {
  return (
    <section id="work" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Selected work</p>
        <h2 className="mb-16 font-display text-4xl tracking-[-0.02em] sm:text-5xl">
          Systems I&apos;ve <em className="not-italic font-bold">shipped</em>.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {WORK_PROJECTS.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="flex flex-col rounded-card border border-hairline bg-background p-5 transition-colors duration-200 hover:border-primary/30 sm:p-6"
            >
              <Link
                href={`/work/${project.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-card-sm bg-surface"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                ) : (
                  <>
                    <WorkPlaceholderGraphic className="size-full" />
                    <span className="absolute bottom-4 left-4 font-display text-2xl font-bold text-primary">
                      {project.name}
                    </span>
                  </>
                )}
              </Link>

              <span className="mt-6 w-fit rounded-full border border-hairline px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted">
                {project.tags[0]}
              </span>

              <h3 className="mt-4 font-display text-2xl tracking-[-0.01em]">{project.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{project.summary}</p>

              <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                <span className="text-xs uppercase tracking-[0.1em] text-muted">{project.role}</span>
                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center gap-2 text-sm text-primary"
                >
                  View case study
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
