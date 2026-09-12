import { Counter } from "@/components/ui/Counter";
import { STATS } from "@/data/stats";
import { cn } from "@/lib/cn";

/**
 * Three small overlapping "window" panels standing in for the reference's
 * photo collage. No real photography exists for this rebuild, and
 * fabricating a fake photo of a person would misrepresent the site — these
 * abstract browser/editor mockups keep the collage's layout rhythm without
 * inventing a person who doesn't exist in any provided asset.
 */
function WorkCollage() {
  const panels = [
    { rotate: "-rotate-6", offset: "translate-y-4", accent: "bg-accent-glow/70" },
    { rotate: "rotate-3", offset: "-translate-y-2 translate-x-6", accent: "bg-primary/40" },
    { rotate: "-rotate-2", offset: "translate-y-10 translate-x-2", accent: "bg-muted/50" },
  ];

  return (
    <div className="relative mx-auto h-64 w-full max-w-xs sm:max-w-sm">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-x-6 top-0 h-40 rounded-card-sm border border-hairline bg-surface p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]",
            panel.rotate,
            panel.offset,
          )}
          style={{ zIndex: index }}
        >
          <div className="mb-3 flex gap-1.5">
            <span className="size-2 rounded-full bg-hairline" />
            <span className="size-2 rounded-full bg-hairline" />
            <span className="size-2 rounded-full bg-hairline" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-1.5 w-3/4 rounded-full", panel.accent)} />
            <span className="h-1.5 w-1/2 rounded-full bg-hairline" />
            <span className="h-1.5 w-2/3 rounded-full bg-hairline" />
          </div>
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
