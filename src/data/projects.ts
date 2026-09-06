export interface Project {
  index: string;
  tag: string;
  title: string[];
  description: string;
  meta: string;
  image: string;
  alt: string;
}

/** Featured Work cards — AUTS, AUREX, MUKALIM, per the Figma source. */
export const PROJECTS: Project[] = [
  {
    index: "01",
    tag: "QA LEADERSHIP · PLAYWRIGHT AUTOMATION",
    title: ["AUTS Enterprise Reliability", "Engine"],
    description:
      "Engineered a distributed end-to-end testing matrix reducing pipeline regression latency by 68% across multi-tenant services.",
    meta: "01 / RELIABILITY MATRIX",
    image: "/images/project-auts.png",
    alt: "AUTS Enterprise Reliability Engine dashboard interface",
  },
  {
    index: "02",
    tag: "FRONTEND ARCHITECTURE · WEALTH PLATFORM",
    title: ["AUREX Private Investment", "Club"],
    description:
      "High-frequency portfolio telemetry dashboard with sub-50ms render cycles and bespoke editorial dataviz components.",
    meta: "02 / CAPITAL TELEMETRY",
    image: "/images/project-aurex.png",
    alt: "AUREX Private Investment Club portal",
  },
  {
    index: "03",
    tag: "FULL-STACK REDESIGN · E-COMMERCE & ADMIN",
    title: ["MUKALIM Artisan Commerce", "& Inventory"],
    description:
      "Holistic headless storefront and real-time inventory management console with synchronized batch orchestration.",
    meta: "03 / ARTISAN COMMERCE",
    image: "/images/project-mukalim.png",
    alt: "MUKALIM Artisan Commerce and Inventory Management interface",
  },
];
