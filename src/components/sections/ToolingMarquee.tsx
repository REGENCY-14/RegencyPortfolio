import { Marquee } from "@/components/motion/Marquee";
import { TOOLS } from "@/data/tools";

export function ToolingMarquee() {
  return (
    <section aria-label="Tools and platforms" className="border-y border-hairline py-10">
      <p className="mx-auto mb-8 max-w-(--container-page) px-4 text-center text-xs uppercase tracking-[0.2em] text-muted sm:px-6 lg:px-8">
        Tools &amp; platforms I work with
      </p>
      <Marquee>
        {TOOLS.map((tool) => (
          <span
            key={tool}
            className="mx-8 font-display text-2xl italic tracking-[-0.01em] text-muted sm:text-3xl"
          >
            {tool}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
