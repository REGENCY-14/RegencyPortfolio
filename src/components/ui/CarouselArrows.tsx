import { ArrowRight } from "@/components/icons/ArrowRight";
import { cn } from "@/lib/cn";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

/**
 * The circular back/next control pair reused by the services accordion and
 * both carousels — a bordered circle around the one arrow icon (rotated for
 * "back"), with a hover state that fills a light tint. Both buttons carry
 * real accessible labels; the arrow itself is decorative (`aria-hidden`,
 * handled inside ArrowRight).
 */
export function CarouselArrows({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  prevLabel = "Previous",
  nextLabel = "Next",
  className,
}: CarouselArrowsProps) {
  const buttonClass =
    "flex size-11 items-center justify-center rounded-full border border-hairline text-primary transition-colors duration-200 hover:bg-primary/10 disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button type="button" onClick={onPrev} disabled={prevDisabled} aria-label={prevLabel} className={buttonClass}>
        <ArrowRight className="rotate-180" />
      </button>
      <button type="button" onClick={onNext} disabled={nextDisabled} aria-label={nextLabel} className={buttonClass}>
        <ArrowRight />
      </button>
    </div>
  );
}
