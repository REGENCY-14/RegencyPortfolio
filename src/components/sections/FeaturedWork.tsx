import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section id="featured-work" className="border-t border-hairline bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-(--container-page) flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-hairline pb-12 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="SELECTED COMMISSIONS & SYSTEMS" heading="Featured Engineering Work" />
          <RevealOnScroll index={2}>
            <a href="#" className="group flex items-center gap-2 text-sm font-medium text-sage">
              View all projects
              <svg viewBox="0 0 12 12" fill="none" className="size-3 transition-transform group-hover:translate-x-1" aria-hidden>
                <path
                  d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
