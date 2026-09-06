"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "dark";
type ButtonSize = "md" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adds the hover shine/sweep sheen (used by the header "Initiate Project" CTA). */
  shine?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-sage text-white hover:bg-sage-dark",
  outline: "border border-sage text-ink hover:bg-sage/5",
  dark: "bg-sage-dark text-white hover:bg-ink",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "h-12 px-8 text-sm",
  sm: "h-10 px-6 text-sm",
};

/**
 * The one button primitive for the whole site — every call site chooses a
 * `variant`/`size` rather than hand-rolling Tailwind classes, so hover states
 * and the shine sweep stay consistent (Open/Closed: extend via props).
 * Renders a Next.js `Link` when `href` is passed, a native `button` otherwise.
 */
export function Button({
  variant = "primary",
  size = "md",
  shine = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-control font-medium tracking-[0.01em] transition-colors duration-200",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {shine && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
