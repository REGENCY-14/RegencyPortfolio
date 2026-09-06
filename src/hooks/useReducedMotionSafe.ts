"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Thin wrapper around framer-motion's `useReducedMotion` so every animated
 * component imports one hook from one place. Returns `true` when the user has
 * requested reduced motion — callers should fall back to instant/opacity-only
 * transitions in that case.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
