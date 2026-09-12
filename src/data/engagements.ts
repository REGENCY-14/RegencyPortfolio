/**
 * Substitutes the reference site's subscription pricing tiers with "ways to
 * work with me" — no dollar amounts, per the brief.
 */
export interface Engagement {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const ENGAGEMENTS: Engagement[] = [
  {
    id: "frontend",
    title: "Freelance Frontend Build",
    description: "A production Next.js frontend, built and handed off with the tests to keep it that way.",
    features: [
      "Component architecture & design system setup",
      "Core Web Vitals tuned for real users",
      "Playwright smoke suite included at handoff",
      "Documented, typed, and ready for your team",
    ],
  },
  {
    id: "qa",
    title: "QA / Test Automation Engagement",
    description: "Turn a flaky or nonexistent test suite into a Playwright pipeline your team trusts.",
    features: [
      "End-to-end test strategy for your existing app",
      "CI integration with clear, actionable failures",
      "Visual regression coverage where it matters",
      "Team walkthrough so it doesn't stay a black box",
    ],
  },
  {
    id: "ai",
    title: "AI Agent Tooling Project",
    description: "A tool-calling agent scoped to one real workflow: bug triage, test healing, or code review.",
    features: [
      "Scoped to a single, measurable workflow",
      "Built on your existing tools, not a new platform",
      "Guardrails and human-in-the-loop by default",
      "Handed off with a runbook, not just a repo",
    ],
  },
];
