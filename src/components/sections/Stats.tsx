import { CountUp } from "@/components/motion/CountUp";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { STATS } from "@/data/stats";

export function Stats() {
  return (
    <section id="impact" className="border-y border-hairline bg-band px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-(--container-page) grid-cols-2 gap-12 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <RevealOnScroll key={stat.label} index={index} step={0.1} className="flex flex-col items-center text-center">
            <CountUp
              value={stat.value}
              decimals={stat.decimals}
              suffix={stat.suffix}
              className="font-display text-5xl tracking-[-0.03em] text-ink sm:text-6xl lg:text-[72px]"
            />
            <p className="pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-body">{stat.label}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
