"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide smooth scroll. Lenis intercepts native scroll, so GSAP's
 * ScrollTrigger (used by the tooling marquee and the mission-stats counter)
 * is told to resync on every Lenis tick. Cleans up both instances on
 * unmount to avoid leaks across route changes.
 *
 * Skipped entirely under reduced motion — native scroll is the correct
 * fallback, not an eased-but-shorter version of the same thing.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
