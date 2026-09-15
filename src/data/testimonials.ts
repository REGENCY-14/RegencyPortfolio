export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/** Real client quotes, one per Selected Work project. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Osman rebuilt our frontend from the ground up and it shows in every interaction, our dataviz used to lag under load and now it doesn't, even with real-time portfolio data streaming in. He understood that for our investors, a slow dashboard is a trust problem, not just a performance one.",
    name: "Jeffery",
    role: "CEO, AUREX",
  },
  {
    quote:
      "We needed the storefront and inventory console to actually agree with each other, and Osman delivered exactly that. Stock updates in real time now, which means we stopped overselling items that were already out, and our ops team stopped doing that reconciliation by hand.",
    name: "Alex Rutabandama",
    role: "Client Representative, MUKALIM",
  },
  {
    quote:
      "Osman took our design and turned it into a site that actually converts, fast, credible, and built around getting visitors to book a consultation instead of just browsing. He also made sure it held up cleanly across devices, which mattered a lot given how many of our visitors come in on mobile.",
    name: "Dennis Ofori",
    role: "CEO, Bismuth",
  },
  {
    quote:
      "Before we launched, Osman went through our storefront, dashboard, and payment flows by hand and caught issues our automated tests never would have, especially around the WhatsApp AI agent and payment edge cases. That kind of thoroughness matters when real merchants' money is moving through the platform.",
    name: "Charles Owusu Bih",
    role: "CEO, Pentatech Axis",
  },
];
