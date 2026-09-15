import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { FooterCta } from "@/components/sections/FooterCta";
import { DetailHero } from "@/components/sections/DetailHero";
import { DetailChecklist } from "@/components/ui/DetailChecklist";
import { Button } from "@/components/ui/Button";
import { WorkPlaceholderGraphic } from "@/components/icons/WorkPlaceholderGraphic";
import { WORK_PROJECTS } from "@/data/work";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Osman Zakaria`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <DetailHero
          backHref="/#work"
          backLabel="Back to Selected Work"
          eyebrow={project.role}
          title={project.name}
          description={project.summary}
          image={project.image}
          imageAlt={`${project.name} project screenshot`}
          fallback={<WorkPlaceholderGraphic className="size-full" />}
          liveUrl={project.liveUrl}
        />

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-(--container-page)">
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-primary">{project.overview}</p>

            <h2 className="mb-6 mt-12 font-display text-2xl">Highlights</h2>
            <DetailChecklist items={project.highlights} />

            <Button href="/#contact" withArrow className="mt-12">
              Start a similar project
            </Button>
          </div>
        </section>
      </main>
      <FooterCta />
    </>
  );
}
