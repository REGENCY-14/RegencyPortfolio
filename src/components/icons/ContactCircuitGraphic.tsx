"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { viewportOnce } from "@/lib/motion-variants";

const RING_NODES = [
  { cx: 160.33, cy: 101 },
  { cx: 320.33, cy: 101 },
  { cx: 160.33, cy: 221 },
  { cx: 320.33, cy: 221 },
  { cx: 240.33, cy: 281 },
];

const SQUARE_NODES = [
  { x: 379.33, y: 90 },
  { x: 59.33, y: 210 },
];

/**
 * The "algorithmic nodes" schematic beside the Contact CTA heading. Rebuilt
 * as one inline SVG (positions computed from the exported fragment insets)
 * so the whole graphic can share a single entrance timeline and the center
 * node can carry a slow looping glow-pulse, rather than stitching together
 * nine separately-positioned <img> tags.
 */
export function ContactCircuitGraphic({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <svg viewBox="0 0 478.667 320" fill="none" className={className} aria-hidden>
      {/* background grid */}
      <motion.g
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8 }}
      >
        {[0, 60, 120, 180, 240].map((y) => (
          <path key={`h${y}`} d={`M79.33 ${40 + y}H399.33`} stroke="#6B7A5E" strokeOpacity={0.3} strokeWidth={0.75} strokeDasharray="3 4" />
        ))}
        {[0, 80, 160, 240, 320].map((x) => (
          <path key={`v${x}`} d={`M${79.33 + x} 40V280`} stroke="#6B7A5E" strokeOpacity={0.3} strokeWidth={0.75} strokeDasharray="3 4" />
        ))}
        <path
          d="M159.78 100.6L239.78 160.6L319.78 100.6M239.78 160.6V280.6M159.78 220.6L239.78 160.6L319.78 220.6"
          stroke="#6B7A5E"
          strokeOpacity={0.3}
          strokeWidth={1.5}
        />
      </motion.g>

      {/* connector ticks, drawn like the rest of the site's schematic lines */}
      <motion.path
        d="M325.33 100H379.33"
        stroke="#6B7A5E"
        strokeWidth={1.5}
        initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.path
        d="M79.33 220H153.33"
        stroke="#6B7A5E"
        strokeWidth={1.5}
        initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      {/* ring + square nodes pop in sequentially */}
      {RING_NODES.map((node, index) => (
        <motion.circle
          key={`ring-${index}`}
          cx={node.cx}
          cy={node.cy}
          r={6}
          fill="#F2F0EA"
          stroke="#6B7A5E"
          strokeWidth={2}
          initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, delay: 0.8 + index * 0.08, ease: "backOut" }}
          style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
        />
      ))}
      {SQUARE_NODES.map((node, index) => (
        <motion.rect
          key={`square-${index}`}
          x={node.x}
          y={node.y}
          width={20}
          height={20}
          rx={4}
          fill="white"
          stroke="#6B7A5E"
          strokeWidth={1.5}
          initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, delay: 1.0 + index * 0.08, ease: "backOut" }}
          style={{ transformOrigin: `${node.x + 10}px ${node.y + 10}px` }}
        />
      ))}

      {/* center node with a looping glow-pulse */}
      <motion.circle
        cx={239.33}
        cy={160}
        r={16}
        fill="#6B7A5E"
        initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.25 }}
        viewport={viewportOnce}
        animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.5, 0.25], scale: [1, 1.25, 1] }}
        transition={
          prefersReducedMotion
            ? { duration: 0.3 }
            : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }
        style={{ transformOrigin: "239.33px 160px" }}
      />
      <motion.circle
        cx={239.33}
        cy={160}
        r={10}
        fill="#6B7A5E"
        initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, delay: 0.5, ease: "backOut" }}
      />
      <circle cx={239.33} cy={160} r={4} fill="white" />
    </svg>
  );
}
