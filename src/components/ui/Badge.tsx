import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /** Small leading dot, used by the hero eyebrow and floating annotation pills. */
  dot?: boolean;
}

/** Pill-shaped label used for eyebrows, hero annotation pills, and stat callouts. */
export function Badge({ children, className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-control border border-hairline bg-card px-4 py-1.5 text-xs font-medium tracking-[0.02em] text-ink shadow-[0_1px_1px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden />}
      {children}
    </span>
  );
}
