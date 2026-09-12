import type { ComponentType } from "react";
import { DiscoverIcon } from "@/components/icons/DiscoverIcon";
import { BuildIcon } from "@/components/icons/BuildIcon";
import { ShipIcon } from "@/components/icons/ShipIcon";
import type { DrawnIconProps } from "@/components/icons/DrawnIcon";

export interface ProcessStep {
  title: string;
  description: string;
  icon: ComponentType<DrawnIconProps>;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discover & Scope",
    description: "Audit the current codebase and test coverage, then scope the work that actually moves the needle.",
    icon: DiscoverIcon,
  },
  {
    title: "Build & Test",
    description: "Ship the interface and the Playwright suite that guards it side by side — never one without the other.",
    icon: BuildIcon,
  },
  {
    title: "Ship & Automate",
    description: "Wire it into CI, hand off the runbook, and put an agent on watch for what humans shouldn't have to catch by hand.",
    icon: ShipIcon,
  },
];
