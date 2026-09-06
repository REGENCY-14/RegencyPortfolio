import type { processIcons } from "@/components/icons/icon-paths";

export interface ProcessStep {
  index: string;
  icon: keyof typeof processIcons;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    icon: "audit",
    title: "Architectural Audit",
    description: "Deconstruct performance bottlenecks, UI discrepancies, and test coverage gaps.",
  },
  {
    index: "02",
    icon: "design",
    title: "Design & Scaffolding",
    description: "Compose design tokens, type-safe primitives, and responsive layout foundations.",
  },
  {
    index: "03",
    icon: "verify",
    title: "Automated Verification",
    description: "Implement comprehensive Playwright suites, contract tests, and visual diffing.",
  },
  {
    index: "04",
    icon: "delivery",
    title: "Agentic Continuous Delivery",
    description: "Deploy autonomous CI agents for triage, self-healing tests, and rapid release.",
  },
];
