import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
