import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ToolingMarquee } from "@/components/sections/ToolingMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolingMarquee />
      </main>
    </>
  );
}
