"use client";

import { useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type { EmblaCarouselType, EmblaPluginType } from "embla-carousel";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export interface DraggableCarouselState {
  viewportRef: UseEmblaCarouselType[0];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

interface DraggableCarouselProps {
  slideCount: number;
  loop?: boolean;
  plugins?: EmblaPluginType[];
  children: (state: DraggableCarouselState) => React.ReactNode;
}

/** Subscribes a primitive snapshot to embla's select/reInit events via
 * useSyncExternalStore — the React-approved way to mirror an external
 * system's state, instead of setState-in-effect (which the initial sync
 * would otherwise require). */
function useEmblaSnapshot<T>(emblaApi: EmblaCarouselType | undefined, getSnapshot: (api: EmblaCarouselType) => T, fallback: T): T {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onStoreChange);
      emblaApi.on("reInit", onStoreChange);
      return () => {
        emblaApi.off("select", onStoreChange);
        emblaApi.off("reInit", onStoreChange);
      };
    },
    () => (emblaApi ? getSnapshot(emblaApi) : fallback),
    () => fallback,
  );
}

/**
 * One shared home for embla's setup/cleanup, reused by the Selected Work
 * and Testimonial carousels — each just renders its own slide markup via
 * the render-prop, driven off this shared drag/selection state. Embla's
 * momentum drag already degrades gracefully under reduced motion (it's
 * user-driven, not an ambient loop), so nothing is disabled there; the
 * *autoplay* used by the testimonial carousel is what respects
 * reduced-motion, at that call site.
 */
export function DraggableCarousel({ slideCount, loop = false, plugins, children }: DraggableCarouselProps) {
  const prefersReducedMotion = useReducedMotionSafe();
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: "center",
      skipSnaps: false,
      duration: prefersReducedMotion ? 1 : undefined,
    },
    // Autoplay-style plugins are opt-in per carousel; callers that pass one
    // are expected to skip it under reduced motion themselves (see
    // TestimonialCarousel), since only they know which plugin is "ambient
    // looping" versus something else.
    plugins,
  );

  const selectedIndex = useEmblaSnapshot(emblaApi, (api) => api.selectedScrollSnap(), 0);
  const canScrollPrev = useEmblaSnapshot(emblaApi, (api) => api.canScrollPrev(), false);
  const canScrollNext = useEmblaSnapshot(emblaApi, (api) => api.canScrollNext(), slideCount > 1);

  return (
    <>
      {children({
        viewportRef,
        selectedIndex,
        scrollTo: (index) => emblaApi?.scrollTo(index),
        scrollPrev: () => emblaApi?.scrollPrev(),
        scrollNext: () => emblaApi?.scrollNext(),
        canScrollPrev,
        canScrollNext,
      })}
    </>
  );
}
