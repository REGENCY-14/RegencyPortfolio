import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { GrainOverlay } from "@/components/motion/GrainOverlay";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elena Vance — Staff Frontend Architect & QA Lead",
  description:
    "Bridging bespoke UI craftsmanship, industrial-grade Playwright test automation, and autonomous AI agents that accelerate production releases.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SmoothScrollProvider>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
