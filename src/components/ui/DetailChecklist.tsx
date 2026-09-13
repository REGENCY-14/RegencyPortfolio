import { CheckIcon } from "@/components/icons/CheckIcon";
import { cn } from "@/lib/cn";

interface DetailChecklistProps {
  items: string[];
  className?: string;
}

/** Checkmark + text rows, shared by every detail screen's "what's included" /
 * highlights / process list — one place for that pattern instead of three. */
export function DetailChecklist({ items, className }: DetailChecklistProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <CheckIcon size={18} className="mt-0.5 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
