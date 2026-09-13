export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do you work solo, or embed with existing teams?",
    answer:
      "Both. Some engagements are a solo freelance build end to end; others have me embedded directly alongside your engineering team, especially for QA coaching and AI agent work where the goal is knowledge transfer, not a black box.",
  },
  {
    question: "How long does a typical engagement run?",
    answer:
      "It depends on scope more than a fixed number — a frontend build might run a few weeks, while a QA/coaching engagement often runs longer since the point is a testing culture that outlasts my involvement, not a one-time fix.",
  },
  {
    question: "What happens after handoff?",
    answer:
      "Every engagement ends with documentation and a runbook, not just a repository. Ongoing support is available if you want it, but the target is always a team that's self-sufficient without me.",
  },
  {
    question: "What stack do you build on?",
    answer:
      "Next.js and React for frontend work, Playwright for testing, and tool-calling AI agents built on whatever your team already runs. I don't introduce a new platform just to use it.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through the contact section below with a short description of what you need. I'll follow up to scope the engagement together before anything's committed.",
  },
];
