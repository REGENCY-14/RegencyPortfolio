"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps the page in Lenis smooth-scroll and keeps GSAP's ScrollTrigger in
 * sync with it (Lenis intercepts native scroll, so ScrollTrigger needs to be
 * told when it moves). Renders children unchanged — this is purely a side
 * effect provider, no DOM wrapper needed.
 *
 * Skips Lenis entirely when the user prefers reduced motion: native scroll
 * with instant jumps is the correct fallback rather than a "reduced" easing.
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
