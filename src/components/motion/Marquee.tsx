"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  /** Pixels per second — constant linear speed regardless of content width. */
  speed?: number;
  className?: string;
}

/**
 * Infinite horizontal marquee: the track is duplicated so the loop point is
 * invisible, driven by one continuous linear GSAP tween (transform-only —
 * `xPercent`, never `left`/`width`). Pauses on hover, and the tween is never
 * created at all under reduced motion (the track just renders once, static).
 */
export function Marquee({ children, speed = 40, className }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return;

    const track = trackRef.current;
    const distance = track.scrollWidth / 2;
    const duration = distance / speed;

    const tween = gsap.fromTo(
      track,
      { x: 0 },
      { x: -distance, duration, ease: "none", repeat: -1 },
    );

    return () => {
      tween.kill();
    };
  }, [prefersReducedMotion, speed]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => gsap.getTweensOf(trackRef.current).forEach((t) => t.pause())}
      onMouseLeave={() => gsap.getTweensOf(trackRef.current).forEach((t) => t.resume())}
    >
      <div ref={trackRef} className="flex w-max items-center">
        <div className="flex shrink-0 items-center">{children}</div>
        {!prefersReducedMotion && <div className="flex shrink-0 items-center" aria-hidden>{children}</div>}
      </div>
    </div>
  );
}
