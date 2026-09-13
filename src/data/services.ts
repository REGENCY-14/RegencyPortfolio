import type { ComponentType } from "react";
import { FrontendIcon } from "@/components/icons/FrontendIcon";
import { QaIcon } from "@/components/icons/QaIcon";
import { AiAgentIcon } from "@/components/icons/AiAgentIcon";
import { DeliveryIcon } from "@/components/icons/DeliveryIcon";
import type { DrawnIconProps } from "@/components/icons/DrawnIcon";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<DrawnIconProps>;
  image: string;
  imageAlt: string;
  overview: string;
  included: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    description:
      "Type-safe React and Next.js applications, component systems built to last, and interfaces that feel as considered as they look.",
    icon: FrontendIcon,
    image: "/images/services/frontend.jpg",
    imageAlt: "Close-up of a component-based frontend codebase on screen",
    overview:
      "I build production frontends the way I'd want to inherit one: typed end to end, componentized around a real design system rather than one-off pages, and tuned for the Web Vitals that actually affect real users on real connections.",
    included: [
      "Next.js / React application architecture, from scratch or inherited",
      "Component-driven design systems with documented, reusable primitives",
      "Performance passes targeting Core Web Vitals, not just Lighthouse scores",
      "Accessible, semantic markup as a default, not an afterthought",
    ],
  },
  {
    slug: "qa-test-automation",
    title: "QA & Test Automation",
    description:
      "Playwright suites, CI pipelines that actually catch regressions, and a testing culture that scales with the codebase instead of fighting it.",
    icon: QaIcon,
    image: "/images/services/qa.jpg",
    imageAlt: "Laptop running a test suite against application code",
    overview:
      "Most test suites rot because they're bolted on after the fact. I build Playwright coverage as part of the architecture — hermetic environments, deterministic assertions, and CI feedback fast enough that engineers actually trust and act on it.",
    included: [
      "End-to-end Playwright suites scoped to your highest-risk user flows",
      "CI pipeline integration with fast, actionable failure output",
      "Visual regression coverage where pixel drift actually matters",
      "Flake elimination — hermetic test environments, not retries as a band-aid",
    ],
  },
  {
    slug: "ai-agent-building",
    title: "AI Agent Building",
    description:
      "Tool-calling agents for triage, self-healing tests, and code review, built to hand off real work, not just demo well.",
    icon: AiAgentIcon,
    image: "/images/services/ai.jpg",
    imageAlt: "Abstract network of connected nodes representing an agent's reasoning graph",
    overview:
      "I scope AI agents to one real, measurable workflow at a time — bug triage, self-healing test repair, code review — built on the tools your team already uses, with guardrails and a human in the loop by default rather than a general-purpose assistant that impresses in a demo and stalls in production.",
    included: [
      "Tool-calling agents scoped to a single, well-defined workflow",
      "Built on your existing stack — no new platform for your team to adopt",
      "Guardrails and human-in-the-loop approval on anything production-facing",
      "Delivered with a runbook and escalation path, not just a repository",
    ],
  },
  {
    slug: "delivery-qa-coaching",
    title: "Delivery & QA Coaching",
    description:
      "Working alongside engineering teams to raise the testing bar and tighten delivery cadence: knowledge transfer, not just a handoff.",
    icon: DeliveryIcon,
    image: "/images/services/coaching.jpg",
    imageAlt: "Engineer walking a team through a delivery plan on a whiteboard",
    overview:
      "I work embedded alongside engineering teams — not as an outside auditor dropping a report and leaving — to raise the testing bar and tighten delivery cadence in a way the team can sustain on its own once I'm gone.",
    included: [
      "Hands-on pairing to establish testing hygiene the team actually keeps up",
      "Shift-left QA practices built into the existing delivery cadence",
      "Playwright/CI mentoring so testing knowledge doesn't sit with one person",
      "A concrete cadence and metrics for tracking delivery health after the engagement",
    ],
  },
];
