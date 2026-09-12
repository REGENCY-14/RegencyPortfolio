import { ICON_STROKE_WIDTH } from "@/components/icons/constants";

/**
 * The one directional icon used across the CTA button and both carousels'
 * arrow controls. Rotate 180° (`className="rotate-180"`) for a "back" arrow
 * instead of shipping a second mirrored file.
 */
export function ArrowRight({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="none" className={className} aria-hidden>
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
