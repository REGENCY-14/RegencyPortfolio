export interface WorkProject {
  name: string;
  tags: string[];
  /** Omitted for projects with no existing screenshot asset (see WorkCarousel). */
  image?: string;
}

export const WORK_PROJECTS: WorkProject[] = [
  { name: "AUTS", tags: ["QA Leadership", "Playwright", "CI/CD"], image: "/images/work/auts.png" },
  { name: "AUREX", tags: ["Frontend Architecture", "Dataviz", "Next.js"], image: "/images/work/aurex.jpg" },
  { name: "MUKALIM", tags: ["Full-Stack", "E-Commerce", "Inventory"], image: "/images/work/mukalim.jpg" },
  { name: "Biltlinx", tags: ["AI Agents", "Automation"] },
];
