import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ArrowRight } from "@/components/icons/ArrowRight";

interface DetailHeroProps {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  /** Rendered in the same image slot when `image` is omitted (e.g. a
   * project with no screenshot asset yet). */
  fallback?: React.ReactNode;
  /** Public URL for the live project, when there is one — renders a
   * "Visit live site" link under the description. */
  liveUrl?: string;
}

/**
 * Shared top-of-page block for every detail screen (work project, service,
 * engagement option): a back link to the relevant home-page section, an
 * eyebrow + heading + summary, and an optional hero image. Kept as one
 * component so the three detail route groups don't each redefine the same
 * layout with slightly different spacing.
 */
export function DetailHero({
  backHref,
  backLabel,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  fallback,
  liveUrl,
}: DetailHeroProps) {
  return (
    <section className="border-t border-hairline px-4 pb-16 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-(--container-page)">
        <Link href={backHref} className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-primary">
          <ArrowRight className="rotate-180" />
          {backLabel}
        </Link>

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl tracking-[-0.02em] sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-primary"
          >
            Visit live site
            <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}

        {(image || fallback) && (
          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-card bg-surface">
            {image ? (
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover"
                priority
              />
            ) : (
              fallback
            )}
          </div>
        )}
      </div>
    </section>
  );
}
