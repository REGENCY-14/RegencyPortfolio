import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { SITE_URL } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Osman Zakaria: Frontend Development, QA & Test Automation, AI Agents",
  description:
    "Personal engineering portfolio spanning frontend development, QA & test automation, and AI agent building.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Osman Zakaria: Frontend Development, QA & Test Automation, AI Agents",
    description:
      "Personal engineering portfolio spanning frontend development, QA & test automation, and AI agent building.",
    type: "website",
  },
};

/** Person structured data for search engines. `sameAs` links to the real
 * GitHub and LinkedIn profiles in the footer (src/data/footer.ts). */
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Osman Zakaria",
  jobTitle: "Frontend Lead & QA Architect",
  url: SITE_URL,
  sameAs: ["https://github.com/REGENCY-14/", "https://www.linkedin.com/in/osman-zakaria-6577b4247"],
  knowsAbout: ["Frontend Development", "QA & Test Automation", "AI Agent Building"],
};

/**
 * Sets `data-theme="light"` on <html> before first paint, so there's no
 * flash of the wrong theme and no server/client mismatch for React to warn
 * about (paired with `suppressHydrationWarning` below, since this script
 * mutates the DOM outside React's knowledge). Dark is the default and
 * needs no attribute at all — it's what the @theme tokens already are.
 */
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var light=s?s==='light':window.matchMedia('(prefers-color-scheme: light)').matches;if(light)document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
