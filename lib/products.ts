export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: "live" | "beta" | "coming-soon";
  category: string;
}

export const products: Product[] = [
  {
    id: "waitboost",
    name: "WaitBoost",
    tagline: "Turn waitlists into momentum.",
    description:
      "Launch smarter with a referral-powered waitlist. Collect early interest, reward sharing, and build a ready-to-buy audience before you ship.",
    href: "https://waitboost.com",
    status: "live",
    category: "Growth",
  },
  {
    id: "formkit",
    name: "FormKit",
    tagline: "Beautiful forms, zero friction.",
    description:
      "Create embeddable forms for lead capture, surveys, and feedback in minutes. Integrates with your stack — no code required.",
    href: "#",
    status: "coming-soon",
    category: "Productivity",
  },
  {
    id: "inboxly",
    name: "Inboxly",
    tagline: "Email automation for small teams.",
    description:
      "Send beautifully simple transactional and marketing emails. Set up sequences, track opens, and stay out of the spam folder.",
    href: "#",
    status: "coming-soon",
    category: "Email",
  },
];
