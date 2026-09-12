import { cn } from "@/lib/cn";

/** Renders an index as "(01)" — the numbered-row motif shared by the
 * services accordion and the process steps. */
export function NumberedLabel({ index, className }: { index: number; className?: string }) {
  return (
    <span className={cn("font-mono text-sm text-muted", className)}>({String(index).padStart(2, "0")})</span>
  );
}
