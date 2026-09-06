"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HeroCircuitGraphic } from "@/components/icons/HeroCircuitGraphic";
import { HeroConnector } from "@/components/icons/HeroConnector";
import { Badge } from "@/components/ui/Badge";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/** A single low-amplitude drifting geometric accent ("+" or "·"). */
function FloatingMark({
  symbol,
  className,
  duration = 6,
  delay = 0,
}: {
  symbol: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotionSafe();
  return (
    <motion.span
      className={className}
      style={{ fontFamily: "var(--font-mono)" }}
      aria-hidden
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
      transition={
        prefersReducedMotion ? undefined : { duration, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {symbol}
    </motion.span>
  );
}

/**
 * The hero's right column: circuit backdrop, cursor-parallax portrait,
 * annotation pills, and the connector lines that draw toward them.
 * Split out of Hero.tsx to keep that file focused on headline copy/layout.
 */
export function HeroVisual() {
  const prefersReducedMotion = useReducedMotionSafe();
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse" || !containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.set(relX * 8);
    rotateX.set(relY * -8);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex h-[560px] items-center justify-center [perspective:1000px]"
    >
      <HeroCircuitGraphic className="absolute inset-0 size-full" />

      <div
        aria-hidden
        className="absolute size-[384px] rounded-control bg-[rgba(234,232,226,0.7)] blur-[20px]"
      />

      <FloatingMark symbol="+" className="absolute right-12 top-4 text-sm text-body/40" duration={7} />
      <FloatingMark symbol="+" className="absolute bottom-16 right-16 text-sm text-body/40" duration={8} delay={1} />
      <FloatingMark symbol="·" className="absolute left-4 top-[120px] text-xs text-body/40" duration={5.5} delay={0.4} />
      <FloatingMark symbol="·" className="absolute bottom-4 left-[176px] text-xs text-body/40" duration={6.5} delay={1.4} />

      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="relative size-[384px] overflow-hidden rounded-control border border-hairline bg-[#f5f3ed] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
      >
        <Image
          src="/images/portrait-elena.png"
          alt="Elena Vance, Staff Frontend Architect & QA Lead"
          fill
          sizes="384px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/15 mix-blend-saturation" />
      </motion.div>

      <HeroConnector variant="curve" className="left-[112px] top-[48px] h-16 w-24" delay={0.9} />
      <HeroConnector variant="straight" className="right-[144px] top-1/2 h-10 w-20 -translate-y-1/2 translate-y-5" delay={1.0} />

      <motion.div
        className="absolute left-6 top-6"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: -6, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      >
        <Badge dot>99.8% Test Determinism</Badge>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-4"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 6, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.35 }}
      >
        <Badge>
          <svg viewBox="0 0 15 14" fill="#536147" className="size-3.5" aria-hidden>
            <path d="M5.06667 14L3.8 11.8667L1.4 11.3333L1.63333 8.86667L0 7L1.63333 5.13333L1.4 2.66667L3.8 2.13333L5.06667 0L7.33333 0.966667L9.6 0L10.8667 2.13333L13.2667 2.66667L13.0333 5.13333L14.6667 7L13.0333 8.86667L13.2667 11.3333L10.8667 11.8667L9.6 14L7.33333 13.0333L5.06667 14M5.63333 12.3L7.33333 11.5667L9.06667 12.3L10 10.7L11.8333 10.2667L11.6667 8.4L12.9 7L11.6667 5.56667L11.8333 3.7L10 3.3L9.03333 1.7L7.33333 2.43333L5.6 1.7L4.66667 3.3L2.83333 3.7L3 5.56667L1.76667 7L3 8.4L2.83333 10.3L4.66667 10.7L5.63333 12.3M6.63333 9.36667L10.4 5.6L9.46667 4.63333L6.63333 7.46667L5.2 6.06667L4.26667 7L6.63333 9.36667Z" />
          </svg>
          Playwright Core / Next.js
        </Badge>
      </motion.div>

      <motion.div
        className="absolute right-2 top-1/2 -translate-y-1/2"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 6, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        <Badge>
          <svg viewBox="0 0 12 12" fill="none" className="size-3" aria-hidden>
            <circle cx="6" cy="6" r="5.25" stroke="#1B1C18" strokeWidth="1" />
            <path d="M1 6h10M6 1a8 8 0 0 1 0 10M6 1a8 8 0 0 0 0 10" stroke="#1B1C18" strokeWidth="1" />
          </svg>
          Autonomous QA Agents
        </Badge>
      </motion.div>
    </div>
  );
}
