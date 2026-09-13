import Image from "next/image";
import { Counter } from "@/components/ui/Counter";
import { STATS } from "@/data/stats";
import { cn } from "@/lib/cn";

interface CollagePhoto {
  src: string;
  alt: string;
  rotate: string;
  offset: string;
  className: string;
}

/**
 * Two overlapping real photos standing in for the reference's photo
 * collage. Generic workspace/craft imagery — not a photo of a specific
 * person, since no real photo exists for this rebuild and fabricating one
 * would misrepresent the site. Same grayscale + amber duotone treatment as
 * the services accordion's photography, so both sections read as one
 * consistent system despite the source photos having different native
 * color casts.
 */
function WorkCollage() {
  const photos: CollagePhoto[] = [
    {
      src: "/images/mission/desk.jpg",
      alt: "A considered, minimal workspace setup",
      rotate: "-rotate-6",
      offset: "translate-y-4",
      className: "z-0",
    },
    {
      src: "/images/mission/hands-keyboard.jpg",
      alt: "Close-up of hands typing",
      rotate: "rotate-3",
      offset: "-translate-y-2 translate-x-6",
      className: "z-10",
    },
  ];

  return (
    <div className="relative mx-auto h-64 w-full max-w-xs sm:max-w-sm">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className={cn(
            "absolute inset-x-6 top-0 h-40 overflow-hidden rounded-card-sm border border-hairline shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]",
            photo.rotate,
            photo.offset,
            photo.className,
          )}
        >
          <Image src={photo.src} alt={photo.alt} fill sizes="320px" className="object-cover grayscale contrast-125" />
          <div className="absolute inset-0 bg-accent-glow/25 mix-blend-color" aria-hidden />
        </div>
      ))}
    </div>
  );
}

export function MissionStats() {
  return (
    <section id="mission" className="border-t border-hairline px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-(--container-page) grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Mission</p>
          <p className="font-display text-2xl leading-relaxed tracking-[-0.01em] sm:text-3xl">
            I believe good software is built the same way it&apos;s tested: deliberately, with
            evidence, and without shortcuts that come due later. That&apos;s the thread through
            every interface I ship, every suite I write, and every agent I build to keep both
            honest.
          </p>
        </div>
        <WorkCollage />
      </div>

      <div className="mx-auto mt-20 grid max-w-(--container-page) grid-cols-1 gap-10 border-t border-hairline pt-16 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="font-display text-5xl tracking-[-0.02em] text-primary sm:text-6xl"
            />
            <p className="mt-3 text-sm uppercase tracking-[0.12em] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
