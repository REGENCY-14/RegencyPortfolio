import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ToolingMarquee } from "@/components/sections/ToolingMarquee";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { MissionStats } from "@/components/sections/MissionStats";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EngagementOptions } from "@/components/sections/EngagementOptions";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterCta } from "@/components/sections/FooterCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolingMarquee />
        <ServicesAccordion />
        <MissionStats />
        <WorkGrid />
        <TestimonialCarousel />
        <ProcessSteps />
        <EngagementOptions />
        <FaqSection />
      </main>
      <FooterCta />
    </>
  );
}
