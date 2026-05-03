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
    id: "launchpad",
    name: "LaunchPad",
    tagline: "A calmer way to validate new ideas.",
    description:
      "Create lightweight landing pages, collect early interest, and track launch signals before committing to a full product build.",
    href: "#",
    status: "coming-soon",
    category: "Growth",
  },
  {
    id: "signaldesk",
    name: "SignalDesk",
    tagline: "Keep customer feedback in one focused place.",
    description:
      "Collect, tag, and review customer requests from forms, email, and shared links without turning feedback into a heavyweight project board.",
    href: "#",
    status: "coming-soon",
    category: "Operations",
  },
  {
    id: "replykit",
    name: "ReplyKit",
    tagline: "Reusable support replies for small teams.",
    description:
      "Organize common responses, billing notes, and onboarding snippets so small teams can answer customers quickly and consistently.",
    href: "#",
    status: "coming-soon",
    category: "Support",
  },
  {
    id: "metriclite",
    name: "MetricLite",
    tagline: "Simple metrics for focused products.",
    description:
      "Track core product numbers like activation, churn notes, and weekly usage without building a custom analytics stack.",
    href: "#",
    status: "coming-soon",
    category: "Analytics",
  },
  {
    id: "policyvault",
    name: "PolicyVault",
    tagline: "Plain-language policies for tiny SaaS teams.",
    description:
      "Keep terms, refund rules, privacy notes, and customer-facing policy pages organized across multiple small software products.",
    href: "#",
    status: "coming-soon",
    category: "Compliance",
  },
];
