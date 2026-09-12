import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ToolingMarquee } from "@/components/sections/ToolingMarquee";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolingMarquee />
        <ServicesAccordion />
      </main>
    </>
  );
}
