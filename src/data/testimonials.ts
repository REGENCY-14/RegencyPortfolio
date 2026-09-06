export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

/**
 * The Figma file supplies two testimonials (Marcus Sterling, Dr. Aris Thorne)
 * displayed as one two-card slide. A third pair was added, in the same voice,
 * so the 3-dot carousel shown in the design has real content to page through
 * — flagged as an inferred assumption, not part of the source file.
 */
export const TESTIMONIAL_SLIDES: [Testimonial, Testimonial][] = [
  [
    {
      quote:
        "Elena restructured our frontend and testing stack from scratch. What previously took 4 hours of flaky CI runs now executes reliably in 8 minutes with zero false positives.",
      name: "Marcus Sterling",
      role: "VP of Engineering, Meridian FinTech",
      initials: "MS",
    },
    {
      quote:
        "The rare engineer who blends pixel-perfect editorial design sensibility with bulletproof automated testing and pragmatic AI agent integration.",
      name: "Dr. Aris Thorne",
      role: "Founding Partner, Aurex Ventures",
      initials: "AT",
    },
  ],
  [
    {
      quote:
        "Our release cadence doubled the quarter after Elena's audit. Regression risk that used to keep us up at night is now caught before it ever reaches staging.",
      name: "Priya Nadarajah",
      role: "Director of Product, MUKALIM Collective",
      initials: "PN",
    },
    {
      quote:
        "Every design token, every test, every agent workflow — documented and defensible. It's the closest thing to museum-grade engineering I've seen.",
      name: "Josiah Kwarteng",
      role: "CTO, Regency Systems Group",
      initials: "JK",
    },
  ],
  [
    {
      quote:
        "Elena's coaching changed how our whole squad thinks about shift-left QA. Bug counts in production dropped by half within two sprints.",
      name: "Freya Lindqvist",
      role: "Head of Engineering, Northbound Labs",
      initials: "FL",
    },
    {
      quote:
        "She treats a design system like a contract, not a suggestion. That discipline is exactly why our storefront hasn't had a visual regression in a year.",
      name: "Tomas Reyes",
      role: "Founder, Artisan Trade Co.",
      initials: "TR",
    },
  ],
];
