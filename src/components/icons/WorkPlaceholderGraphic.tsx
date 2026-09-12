"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface Node {
  x: number;
  y: number;
  accent?: boolean;
}

const NODES: Node[] = [
  { x: 60, y: 80 },
  { x: 160, y: 50, accent: true },
  { x: 160, y: 150 },
  { x: 260, y: 90, accent: true },
  { x: 260, y: 200 },
  { x: 340, y: 60 },
  { x: 340, y: 160, accent: true },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [3, 6],
  [4, 6],
];

/**
 * Fills the image slot for a Selected Work project with no real screenshot
 * asset (Biltlinx) — a node-graph/workflow visual in the site's own dark +
 * amber palette, rather than a stock photo. Real stock photography either
 * turned out to be someone else's actual code (wrong to present as this
 * site's project) or clashed with the palette, so this stays hand-drawn and
 * on-brand instead, in the same spirit as the site's other custom graphics.
 */
export function WorkPlaceholderGraphic({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="260" fill="var(--color-surface)" />
      {EDGES.map(([from, to], index) => (
        <motion.line
          key={index}
          x1={NODES[from].x}
          y1={NODES[from].y}
          x2={NODES[to].x}
          y2={NODES[to].y}
          stroke="var(--color-hairline)"
          strokeWidth={1.5}
          initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: "easeInOut" }}
        />
      ))}
      {NODES.map((node, index) => (
        <motion.circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={node.accent ? 9 : 6}
          fill={node.accent ? "var(--color-accent-glow)" : "var(--color-background)"}
          stroke={node.accent ? "var(--color-accent-glow)" : "var(--color-hairline)"}
          strokeWidth={1.5}
          initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease: "backOut" }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        />
      ))}
    </svg>
  );
}
