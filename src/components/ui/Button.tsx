"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { cn } from "@/lib/cn";

type ButtonVariant = "chrome" | "outline";
type ButtonSize = "md" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing arrow icon — the CTA button always has one per the reference. */
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  chrome: "btn-chrome",
  outline: "border border-hairline text-primary hover:border-muted",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "h-12 px-7 text-sm",
  sm: "h-10 px-5 text-sm",
};

/**
 * The one button primitive for the whole site. `variant="chrome"` is the
 * glossy silver/dark-text CTA pill; `variant="outline"` covers secondary
 * actions. The shine sweep is baked into the chrome variant itself (every
 * chrome button gets it — the brief doesn't call for a version without),
 * built as a translated pseudo-element-style overlay so it only ever
 * animates `transform`.
 */
export function Button({
  variant = "chrome",
  size = "md",
  withArrow = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-[0.01em] transition-colors duration-200",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {variant === "chrome" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
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
