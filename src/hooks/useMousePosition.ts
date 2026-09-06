"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the viewport-relative mouse position. Used by the custom cursor and
 * by any element that wants a cursor-driven parallax/tilt effect. Returns
 * `null` until the first pointer move so consumers can skip rendering on
 * touch devices (no pointermove ever fires there).
 */
export function useMousePosition(): MousePosition | null {
  const [position, setPosition] = useState<MousePosition | null>(null);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
