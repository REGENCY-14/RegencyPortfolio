/**
 * Canonical site URL, shared by layout.tsx (metadataBase + JSON-LD),
 * sitemap.ts, and robots.ts — one place to update if a custom domain
 * ever replaces the Vercel URL.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://regency-portfolio-psi.vercel.app";
