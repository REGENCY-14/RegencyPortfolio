import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { FooterCta } from "@/components/sections/FooterCta";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { RESUME } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — Osman Zakaria",
  description: RESUME.summary,
};

/**
 * Full resume as an on-site page, not just a PDF link — real content in the
 * site's own type system and spacing, per the user's request. The PDF is
 * still offered as a download for anyone who wants a portable copy, but
 * it's a secondary action here, not the primary way to read this page.
 */
export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-t border-hairline px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-(--container-page)">
            <Link href="/#top" className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-primary">
              <ArrowRight className="rotate-180" />
              Back to home
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Resume</p>
            <h1 className="max-w-3xl font-display text-4xl tracking-[-0.02em] sm:text-5xl">{RESUME.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{RESUME.title}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <a href={RESUME.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
              <a href={RESUME.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                GitHub
              </a>
              <span>{RESUME.phone}</span>
            </div>

            <Button href={RESUME.pdfHref} download withArrow className="mt-8" size="sm">
              Download PDF
            </Button>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-(--container-page)">
            <p className="max-w-2xl text-lg leading-relaxed text-primary">{RESUME.summary}</p>

            {/* Education */}
            <h2 className="mb-6 mt-16 font-display text-2xl">Education</h2>
            <div className="border-t border-hairline pt-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-display text-xl">{RESUME.education.school}</h3>
                <span className="text-sm text-muted">{RESUME.education.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{RESUME.education.major}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {RESUME.education.coursework.map((course) => (
                  <span key={course} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <h2 className="mb-6 mt-16 font-display text-2xl">Experience</h2>
            <div className="flex flex-col gap-10">
              {RESUME.experience.map((job) => (
                <div key={`${job.company}-${job.period}`} className="border-t border-hairline pt-6">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-xl">
                      {job.role} <span className="text-muted">· {job.company}</span>
                    </h3>
                    <span className="shrink-0 text-sm text-muted">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <h2 className="mb-6 mt-16 font-display text-2xl">Projects</h2>
            <div className="flex flex-col gap-10">
              {RESUME.projects.map((project) => (
                <div key={project.name} className="border-t border-hairline pt-6">
                  <h3 className="font-display text-xl">
                    {project.name} <span className="text-muted">· {project.org}</span>
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h2 className="mb-6 mt-16 font-display text-2xl">Skills</h2>
            <div className="border-t border-hairline pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">Languages &amp; Tools</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {RESUME.skills.languages.map((skill) => (
                  <span key={skill} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.15em] text-muted">QA &amp; Testing</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {RESUME.skills.qa.map((skill) => (
                  <span key={skill} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Campus involvement */}
            <h2 className="mb-6 mt-16 font-display text-2xl">Campus Involvement</h2>
            <div className="flex flex-col gap-6">
              {RESUME.involvement.map((item) => (
                <div
                  key={`${item.org}-${item.date}`}
                  className="flex flex-col justify-between gap-1 border-t border-hairline pt-6 sm:flex-row sm:items-baseline"
                >
                  <div>
                    <h3 className="font-display text-lg">
                      {item.org} <span className="text-muted">· {item.role}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.place}</p>
                  </div>
                  <span className="shrink-0 text-sm text-muted">{item.date}</span>
                </div>
              ))}
            </div>

            <Button href="/#contact" withArrow className="mt-16">
              Start a conversation
            </Button>
          </div>
        </section>
      </main>
      <FooterCta />
    </>
  );
}
