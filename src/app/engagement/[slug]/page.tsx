import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { FooterCta } from "@/components/sections/FooterCta";
import { DetailHero } from "@/components/sections/DetailHero";
import { DetailChecklist } from "@/components/ui/DetailChecklist";
import { NumberedLabel } from "@/components/ui/NumberedLabel";
import { Button } from "@/components/ui/Button";
import { ENGAGEMENTS } from "@/data/engagements";

interface EngagementDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ENGAGEMENTS.map((engagement) => ({ slug: engagement.id }));
}

export async function generateMetadata({ params }: EngagementDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const engagement = ENGAGEMENTS.find((item) => item.id === slug);
  if (!engagement) return {};
  return {
    title: `${engagement.title} — Osman Zakaria`,
    description: engagement.description,
  };
}

export default async function EngagementDetailPage({ params }: EngagementDetailPageProps) {
  const { slug } = await params;
  const engagement = ENGAGEMENTS.find((item) => item.id === slug);
  if (!engagement) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <DetailHero
          backHref="/#engagement"
          backLabel="Back to Engagement Options"
          eyebrow="Ways to work together"
          title={engagement.title}
          description={engagement.description}
        />

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-(--container-page)">
            <p className="max-w-2xl text-lg leading-relaxed text-primary">{engagement.idealFor}</p>

            <h2 className="mb-6 mt-12 font-display text-2xl">What&apos;s included</h2>
            <DetailChecklist items={engagement.features} />

            <h2 className="mb-6 mt-16 font-display text-2xl">How it runs</h2>
            <ol className="flex flex-col gap-6">
              {engagement.process.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <NumberedLabel index={index + 1} className="mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed text-muted">{step}</span>
                </li>
              ))}
            </ol>

            <Button href="/#contact" withArrow className="mt-12">
              Start a conversation
            </Button>
          </div>
        </section>
      </main>
      <FooterCta />
    </>
  );
}
