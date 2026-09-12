import { ICON_STROKE_WIDTH } from "@/components/icons/constants";

/**
 * Abstract geometric wordmark glyph — three offset chevrons converging
 * toward a point, standing in for "frontend / QA / agents" folding into one
 * practice. Used in the header, footer, and as the favicon source.
 */
export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={className}
      role="img"
      aria-label="Site logo"
    >
      <path
        d="M6 21L16 11L26 21"
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 25L16 20L21 25"
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}
