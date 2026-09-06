import { cn } from "@/lib/cn";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  heading: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
}

/**
 * The "eyebrow label + serif heading" pattern repeated at the top of every
 * content section (Featured Work, Specializations, Testimonials, Process,
 * Contact CTA). Centralizing it keeps type scale and spacing identical
 * across sections without every section re-declaring the same markup.
 */
export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-1", align === "center" && "items-center text-center", className)}>
      <RevealOnScroll index={0}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">{eyebrow}</p>
      </RevealOnScroll>
      <RevealOnScroll index={1}>
        <h2 className={cn("font-display text-4xl leading-[1.25] tracking-[-0.02em] text-ink md:text-5xl", headingClassName)}>
          {heading}
        </h2>
      </RevealOnScroll>
    </div>
  );
}
