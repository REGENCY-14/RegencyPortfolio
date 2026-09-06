import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ContactCircuitGraphic } from "@/components/icons/ContactCircuitGraphic";

const CONTACT_DETAILS = [
  { icon: "/icons/contact-mail.svg", label: "elena.vance@architect.io", href: "mailto:elena.vance@architect.io" },
  { icon: "/icons/contact-phone.svg", label: "+1 (415) 890-2410", href: "tel:+14158902410" },
  { icon: "/icons/contact-pin.svg", label: "San Francisco, CA & Remote", href: undefined },
] as const;

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-hairline bg-band px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-(--container-page) grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <RevealOnScroll index={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">INITIATE COLLABORATION</p>
          </RevealOnScroll>

          <h2 className="gradient-sweep-text pt-3 pb-8 font-display text-4xl leading-[1.15] tracking-[-0.02em] sm:text-5xl">
            Ready to elevate your
            <br />
            engineering standard?
          </h2>

          <RevealOnScroll index={1}>
            <div className="flex flex-wrap items-center gap-6 border-b border-hairline-soft pb-6">
              {CONTACT_DETAILS.map((detail) => {
                const content = (
                  <span className="flex items-center gap-2 text-sm tracking-[0.005em] text-ink">
                    <Image src={detail.icon} alt="" width={16} height={16} className="size-4" aria-hidden />
                    {detail.label}
                  </span>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="hover:text-sage-dark">
                    {content}
                  </a>
                ) : (
                  <span key={detail.label}>{content}</span>
                );
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll index={2} className="pt-8 inline-block">
            <Button href="#contact" shine>
              Schedule Technical Consultation
            </Button>
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-5">
          <ContactCircuitGraphic className="mx-auto h-auto w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
