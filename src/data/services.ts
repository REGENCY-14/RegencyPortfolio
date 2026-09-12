import type { ComponentType } from "react";
import { FrontendIcon } from "@/components/icons/FrontendIcon";
import { QaIcon } from "@/components/icons/QaIcon";
import { AiAgentIcon } from "@/components/icons/AiAgentIcon";
import { DeliveryIcon } from "@/components/icons/DeliveryIcon";
import type { DrawnIconProps } from "@/components/icons/DrawnIcon";

export interface Service {
  title: string;
  description: string;
  icon: ComponentType<DrawnIconProps>;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Type-safe React and Next.js applications, component systems built to last, and interfaces that feel as considered as they look.",
    icon: FrontendIcon,
    image: "/images/services/frontend.jpg",
    imageAlt: "Close-up of a component-based frontend codebase on screen",
  },
  {
    title: "QA & Test Automation",
    description:
      "Playwright suites, CI pipelines that actually catch regressions, and a testing culture that scales with the codebase instead of fighting it.",
    icon: QaIcon,
    image: "/images/services/qa.jpg",
    imageAlt: "Laptop running a test suite against application code",
  },
  {
    title: "AI Agent Building",
    description:
      "Tool-calling agents for triage, self-healing tests, and code review, built to hand off real work, not just demo well.",
    icon: AiAgentIcon,
    image: "/images/services/ai.jpg",
    imageAlt: "Abstract network of connected nodes representing an agent's reasoning graph",
  },
  {
    title: "Delivery & QA Coaching",
    description:
      "Working alongside engineering teams to raise the testing bar and tighten delivery cadence: knowledge transfer, not just a handoff.",
    icon: DeliveryIcon,
    image: "/images/services/coaching.jpg",
    imageAlt: "Engineer walking a team through a delivery plan on a whiteboard",
  },
];
