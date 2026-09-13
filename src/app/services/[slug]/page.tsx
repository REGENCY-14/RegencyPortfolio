import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { FooterCta } from "@/components/sections/FooterCta";
import { DetailHero } from "@/components/sections/DetailHero";
import { DetailChecklist } from "@/components/ui/DetailChecklist";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Osman Zakaria`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <DetailHero
          backHref="/#services"
          backLabel="Back to What I Do"
          eyebrow="What I Do"
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
        />

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-(--container-page)">
            <p className="max-w-2xl text-lg leading-relaxed text-primary">{service.overview}</p>

            <h2 className="mb-6 mt-12 font-display text-2xl">What&apos;s included</h2>
            <DetailChecklist items={service.included} />

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
