import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Specializations } from "@/components/sections/Specializations";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { ContactCta } from "@/components/sections/ContactCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedWork />
        <Specializations />
        <Stats />
        <Testimonials />
        <Process />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
