"use client";

import { Sun, Moon } from "lucide-react";

/**
 * Dark/light toggle. Deliberately holds no React state: the current theme
 * lives entirely in `data-theme` on <html> (set by the anti-FOUC script in
 * layout.tsx and flipped here on click) and in localStorage. Both icons are
 * always rendered, stacked, and CSS (see globals.css) shows/hides +
 * crossfades between them off that one attribute — so there's nothing to
 * keep in sync between server and client, and no hydration mismatch to
 * work around.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    if (next === "light") {
      root.dataset.theme = "light";
    } else {
      delete root.dataset.theme;
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private browsing, disabled cookies) —
      // the toggle still works for the session, it just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="relative flex size-9 items-center justify-center text-primary"
    >
      <Sun size={18} className="theme-icon theme-icon-sun absolute" aria-hidden />
      <Moon size={18} className="theme-icon theme-icon-moon absolute" aria-hidden />
    </button>
  );
}
