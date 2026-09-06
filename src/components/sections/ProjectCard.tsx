"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { tiltIn } from "@/lib/motion-variants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import type { Project } from "@/data/projects";

const imagePan: Variants = {
  rest: { scale: 1, x: 0 },
  hover: { scale: 1.08, x: -10, transition: { duration: 3.5, ease: "easeInOut" } },
};

const arrowRotate: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 45, transition: { duration: 0.3, ease: "easeOut" } },
};

/**
 * A single Featured Work card: 3D tilt-in on scroll (staggered by `index`
 * via the parent), a slow parallax pan on the mockup image while hovered,
 * and an arrow that rotates 45° into its outlined circle on hover. Hover
 * state lives on the outer `motion.article` and propagates to the image and
 * arrow via shared variant names, so only one hover listener is needed.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <RevealOnScroll variants={tiltIn} index={index} step={0.15} className="[perspective:1200px]">
      <motion.article
        initial="rest"
        whileHover={prefersReducedMotion ? undefined : "hover"}
        animate="rest"
        className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-card"
      >
        <div className="relative h-[286px] w-full overflow-hidden border-b border-hairline bg-surface-muted">
          <motion.div className="absolute inset-0" variants={imagePan}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.05em] text-sage">{project.tag}</p>
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.01em] text-ink">
              {project.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="text-sm leading-relaxed tracking-[0.005em] text-body">{project.description}</p>
          </div>

          <div className="flex items-center justify-between border-t border-hairline-soft pt-4">
            <span className="text-xs tracking-[0.02em] text-body">{project.meta}</span>
            <span className="flex size-8 items-center justify-center rounded-control border border-hairline transition-colors duration-300 group-hover:border-sage group-hover:bg-sage">
              <motion.svg
                viewBox="0 0 12 12"
                fill="none"
                className="size-3 text-sage transition-colors duration-300 group-hover:text-white"
                variants={arrowRotate}
                aria-hidden
              >
                <path
                  d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                  fill="currentColor"
                />
              </motion.svg>
            </span>
          </div>
        </div>
      </motion.article>
    </RevealOnScroll>
  );
}
