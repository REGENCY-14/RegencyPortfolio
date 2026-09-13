import { Header } from "@/components/sections/Header";
import { FooterCta } from "@/components/sections/FooterCta";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mb-6 font-display text-4xl tracking-[-0.02em] sm:text-5xl">This page doesn&apos;t exist.</h1>
        <p className="mb-10 max-w-md text-muted">
          The page you&apos;re looking for might have moved, or never existed. Let&apos;s get you back on track.
        </p>
        <Button href="/" withArrow>
          Back to home
        </Button>
      </main>
      <FooterCta />
    </>
  );
}
