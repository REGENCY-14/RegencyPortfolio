export interface WorkProject {
  slug: string;
  name: string;
  tags: string[];
  /** Omitted for projects with no existing screenshot asset (see WorkCarousel). */
  image?: string;
  role: string;
  summary: string;
  overview: string;
  highlights: string[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "aurex",
    name: "AUREX",
    tags: ["Frontend Architecture", "Dataviz", "Next.js"],
    image: "/images/work/aurex.jpg",
    role: "Frontend Architect",
    summary: "A private investment platform with sub-50ms portfolio dataviz.",
    overview:
      "AUREX is an exclusive investment platform where sophisticated investors track capital in real time. My job was the frontend architecture: a Next.js application fast enough that portfolio telemetry feels instantaneous, with bespoke dataviz components built for a wealth-management audience rather than skinned off a generic charting library.",
    highlights: [
      "Architected the Next.js frontend from the ground up, including the design system",
      "Built custom portfolio/leaderboard dataviz components tuned for sub-50ms render cycles",
      "Delivered a responsive investor dashboard spanning tablet and mobile alongside desktop",
      "Worked directly with design to keep the editorial, gold-accented brand consistent end to end",
    ],
  },
  {
    slug: "mukalim",
    name: "MUKALIM",
    tags: ["Full-Stack", "E-Commerce", "Inventory"],
    image: "/images/work/mukalim.jpg",
    role: "Full-Stack Engineer",
    summary: "A headless artisan-commerce storefront with real-time inventory sync.",
    overview:
      "MUKALIM sells globally-sourced spices and artisan goods, and needed a storefront and inventory console that could stay in sync as stock moved across warehouses. I built a headless commerce frontend alongside a real-time inventory management console, so the storefront never oversells and the ops team never has to guess.",
    highlights: [
      "Built the customer-facing storefront and the internal inventory console as one connected system",
      "Synchronized real-time stock across categories with batch orchestration, not manual reconciliation",
      "Implemented category/therapeutic-benefit browsing tuned for a specialty food & cosmetics catalog",
      "Handed off a full-stack codebase with tests covering the checkout and inventory-sync paths",
    ],
  },
  {
    slug: "biltlinx",
    name: "Biltlinx",
    tags: ["AI Agents", "Automation"],
    role: "AI Agent Engineer",
    summary: "A tool-calling agent workflow scoped to real engineering triage.",
    overview:
      "Biltlinx is where I build and ship the AI-agent side of my practice: tool-calling agents scoped to one real workflow at a time — bug triage, self-healing test repair, code review — rather than a general-purpose assistant that demos well and does nothing reliably in production.",
    highlights: [
      "Built agents on top of existing team tooling instead of a new platform to adopt",
      "Guardrails and human-in-the-loop approval by default on anything that touches production",
      "Delivered with a runbook and clear escalation paths, not just a repo and a shrug",
      "Ongoing collaboration with a small team of developers refining the agent's tool set",
    ],
  },
];
