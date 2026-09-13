/**
 * Substitutes the reference site's subscription pricing tiers with "ways to
 * work with me" — no dollar amounts, per the brief.
 */
export interface Engagement {
  id: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
  process: string[];
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
    idealFor:
      "Teams that need a production-grade frontend built right the first time — a new product, a redesign, or a legacy app due for a rebuild.",
    process: [
      "Architectural audit of any existing code, or a scoping session if starting fresh",
      "Design system and component architecture, built incrementally and reviewable",
      "Automated Verification: Playwright smoke suite included, not billed as an extra",
      "Handoff with documentation your team can actually build on",
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
    idealFor:
      "Teams whose test suite is either nonexistent, flaky enough to be ignored, or slow enough that nobody waits for it before merging.",
    process: [
      "Audit of current coverage (or lack of it) and the riskiest untested flows",
      "Playwright suite built around hermetic, deterministic test environments",
      "CI integration tuned for fast, actionable failure output",
      "A walkthrough session so the suite is understood, not just inherited",
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
    idealFor:
      "Teams with one specific, repetitive engineering workflow they'd rather hand to a well-guarded agent than keep doing by hand.",
    process: [
      "Scope the single workflow the agent will own — no open-ended mandates",
      "Build on your existing tools and repos, not a new platform to adopt",
      "Guardrails and human-in-the-loop approval on anything production-facing",
      "Handoff with a runbook covering failure modes and escalation paths",
    ],
  },
];
