export interface WorkProject {
  slug: string;
  name: string;
  tags: string[];
  /** Omitted for projects with no existing screenshot asset (see WorkGrid). */
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
    slug: "bismuth",
    name: "Bismuth",
    tags: ["Frontend Development", "Next.js", "Marketing Site"],
    image: "/images/work/bismuth.jpg",
    role: "Frontend Developer",
    summary: "A market-entry consultancy site connecting global businesses with Africa's emerging markets.",
    overview:
      "Bismuth helps international businesses enter Africa's fastest-growing markets, backed by consultants from firms and schools like Harvard, Stanford, Google, and Goldman Sachs. My job was the frontend: a fast, credible marketing site built to convert visitors into booked consultations, not just look good in a pitch deck.",
    highlights: [
      "Built a responsive Next.js marketing site from a Figma design, desktop through mobile",
      "Designed the consultation booking flow as the site's single, unmissable conversion path",
      "Built a credibility section surfacing consultants' Harvard, Stanford, MIT, and Google backgrounds",
      "Optimized for fast first paint given the site's image-heavy, editorial-style hero sections",
    ],
  },
];
