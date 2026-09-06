import type { specializationIcons } from "@/components/icons/icon-paths";

export interface Specialization {
  icon: keyof typeof specializationIcons;
  title: string;
  description: string;
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    icon: "frontend",
    title: "Frontend Development",
    description:
      "Type-safe Next.js and React architectures, custom design systems, micro-frontends, and sub-second Web Vitals optimization.",
  },
  {
    icon: "qa",
    title: "QA & Test Automation",
    description:
      "Playwright test harnesses, synthetic monitoring pipelines, deterministic visual regression suites, and hermetic staging environments.",
  },
  {
    icon: "ai",
    title: "AI Agent Building",
    description:
      "Custom LLM tool-calling agents for automated bug triage, self-healing test scripts, and generative code review workflows.",
  },
  {
    icon: "coaching",
    title: "Delivery & QA Coaching",
    description:
      "Upskilling engineering squads in testing hygiene, continuous delivery cadences, and shift-left quality assurance practices.",
  },
];
