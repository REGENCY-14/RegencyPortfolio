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
  /** Live URL, when the project is publicly reachable — rendered as a
   * "Visit live site" link on the project's detail page. */
  liveUrl?: string;
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "aurex",
    name: "AUREX",
    tags: ["Frontend Architecture", "Dataviz", "Next.js"],
    image: "/images/work/aurex.jpg",
    liveUrl: "https://aurex-six-chi.vercel.app/",
    role: "Frontend Architect, QA & Product Owner",
    summary: "A private investment platform giving wealth-management clients real-time visibility into their portfolios.",
    overview:
      "AUREX is an exclusive investment platform where sophisticated investors track capital in real time. My job was the frontend architecture: a Next.js application fast enough that portfolio telemetry feels instantaneous, with bespoke dataviz components built for a wealth-management audience rather than skinned off a generic charting library. I also manually tested the build myself before release, since a dataviz bug is exactly the kind of thing that erodes trust with investors fast.",
    highlights: [
      "Architected the Next.js frontend from the ground up, including the design system",
      "Built custom portfolio/leaderboard dataviz components tuned to stay smooth under live data",
      "Delivered a responsive investor dashboard spanning tablet and mobile alongside desktop",
      "Worked directly with design to keep the editorial, gold-accented brand consistent end to end",
      "Manually tested the dashboard, dataviz components, and responsive breakpoints before release",
    ],
  },
  {
    slug: "mukalim",
    name: "MUKALIM",
    tags: ["Full-Stack", "E-Commerce", "Inventory"],
    image: "/images/work/mukalim.jpg",
    liveUrl: "https://mukalim-v2.vercel.app/",
    role: "Full-Stack Engineer & QA",
    summary: "A headless artisan-commerce storefront with real-time inventory sync.",
    overview:
      "MUKALIM sells globally-sourced spices and artisan goods, and needed a storefront and inventory console that could stay in sync as stock moved across warehouses. I built a headless commerce frontend alongside a real-time inventory management console, so the storefront never oversells and the ops team never has to guess. I also manually tested the checkout and inventory-sync paths myself, since a sync bug here means a customer paying for stock that's already gone.",
    highlights: [
      "Built the customer-facing storefront and the internal inventory console as one connected system",
      "Synchronized real-time stock across categories with batch orchestration, not manual reconciliation",
      "Implemented category/therapeutic-benefit browsing tuned for a specialty food & cosmetics catalog",
      "Handed off a full-stack codebase with tests covering the checkout and inventory-sync paths",
      "Manually tested checkout, stock sync, and category browsing across devices before handoff",
    ],
  },
  {
    slug: "bismuth",
    name: "Bismuth",
    tags: ["Frontend Development", "Next.js", "Marketing Site"],
    image: "/images/work/bismuth.jpg",
    liveUrl: "https://www.bismuthinc.com/",
    role: "Frontend Developer & QA",
    summary: "A market-entry consultancy site connecting global businesses with Africa's emerging markets.",
    overview:
      "Bismuth helps international businesses enter Africa's fastest-growing markets, backed by consultants from firms and schools like Harvard, Stanford, Google, and Goldman Sachs. My job was the frontend: a fast, credible marketing site built to convert visitors into booked consultations, not just look good in a pitch deck. I manually tested the site across devices myself before launch, since a broken booking flow on a consultancy site is a lost client, not just a bug.",
    highlights: [
      "Built a responsive Next.js marketing site from a Figma design, desktop through mobile",
      "Designed the consultation booking flow as the site's single, unmissable conversion path",
      "Built a credibility section surfacing consultants' Harvard, Stanford, MIT, and Google backgrounds",
      "Optimized for fast first paint given the site's image-heavy, editorial-style hero sections",
      "Manually tested the booking flow and responsive layout across desktop, tablet, and mobile",
    ],
  },
  {
    slug: "biizz",
    name: "Biizz",
    tags: ["QA", "Manual Testing", "E-Commerce"],
    image: "/images/work/biizz.jpg",
    liveUrl: "https://biizz.app/",
    role: "QA Engineer",
    summary: "An AI-assisted storefront platform for early-stage merchants across West and East Africa.",
    overview:
      "Biizz lets merchants in Ghana, Nigeria, and Kenya launch an online store in minutes, with an AI agent that answers customer questions and collects payment straight in WhatsApp. I performed manual testing across the storefront, dashboard, and payment flows, catching the issues that automated coverage alone would have missed before real money and real merchants were on the line.",
    highlights: [
      "Manually tested storefront setup, order management, and multi-store dashboard flows",
      "Verified Paystack and Junipay payment integrations across success, failure, and edge-case paths",
      "Tested the WhatsApp AI agent's product recommendations and in-chat payment collection",
      "Filed and tracked defects through resolution ahead of releases to live merchants",
    ],
  },
];
