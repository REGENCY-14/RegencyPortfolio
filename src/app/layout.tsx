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
  title: "Osman Zakaria — Frontend Development, QA & Test Automation, AI Agents",
  description:
    "Personal engineering portfolio spanning frontend development, QA & test automation, and AI agent building.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Osman Zakaria — Frontend Development, QA & Test Automation, AI Agents",
    description:
      "Personal engineering portfolio spanning frontend development, QA & test automation, and AI agent building.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-primary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
