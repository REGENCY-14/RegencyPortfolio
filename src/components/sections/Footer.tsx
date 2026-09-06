import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { FOOTER_LEGAL, FOOTER_NAV, FOOTER_PLATFORMS } from "@/data/footer";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-body">{title}</p>
      {links.map((link) => (
        <Link key={link.label} href={link.href} className="text-sm text-label hover:text-sage-dark">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-band-soft px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-(--container-page) flex-col gap-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-monogram.png" alt="" width={32} height={32} className="size-8" />
              <span className="flex flex-col">
                <span className="font-display text-2xl tracking-[-0.02em] text-ink">Elena Vance</span>
                <span className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-body">
                  Frontend Lead &amp; QA Architect
                </span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed tracking-[0.005em] text-label">
              Orchestrating resilient frontend architectures, editorial design systems, and
              automated testing ecosystems with museum-grade precision.
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Navigation" links={FOOTER_NAV} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Platforms" links={FOOTER_PLATFORMS} />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-body">Technical Dispatches</p>
            <p className="text-sm leading-relaxed tracking-[0.005em] text-label">
              Quarterly long-form architectural critiques, QA telemetry strategies, and design
              token essays.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-hairline pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-label">© 2025 Elena Vance. Built with rigor and intentional craft.</p>
          <div className="flex items-center gap-6">
            {FOOTER_LEGAL.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-label hover:text-sage-dark">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
