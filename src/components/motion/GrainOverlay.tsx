"use client";

/**
 * Fixed, viewport-covering film-grain texture for tactile depth. Pure CSS/SVG
 * (an inline feTurbulence filter), so there's no image request and nothing to
 * animate — it costs no extra GPU work. Desktop-only per spec: hidden below
 * the `hover: hover` breakpoint where touch devices live, and it never
 * intercepts pointer events.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain-overlay pointer-events-none fixed inset-0 z-[998] opacity-[0.035] mix-blend-multiply"
    >
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
