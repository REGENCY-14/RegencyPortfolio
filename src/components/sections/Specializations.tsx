import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { DrawIcon } from "@/components/motion/DrawIcon";
import { SPECIALIZATIONS } from "@/data/specializations";
import { specializationIcons } from "@/components/icons/icon-paths";

export function Specializations() {
  return (
    <section id="specializations" className="border-t border-hairline bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-(--container-page) flex-col gap-16">
        <SectionHeading eyebrow="TECHNICAL COMPETENCIES" heading="Core Disciplines & Methodologies" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZATIONS.map((item, index) => (
            <RevealOnScroll key={item.title} index={index} step={0.1}>
              <div className="flex h-full flex-col gap-6 rounded-card border border-hairline-soft bg-white/50 p-6">
                <IconTile>
                  <DrawIcon
                    d={specializationIcons[item.icon].d}
                    viewBox={specializationIcons[item.icon].viewBox}
                    delay={0.15 * index}
                  />
                </IconTile>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed tracking-[0.005em] text-body">{item.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
