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
    id: "scanta",
    name: "Scanta",
    tagline: "The QR code, reconsidered.",
    description:
      "Generate static QR codes or dynamic ones you can edit anytime. Track scans with geographic analytics and map your own domain — perfect for campaigns and printed materials that need to evolve.",
    href: "https://scanta.satosushi.co",
    status: "live",
    category: "Marketing",
  },
  {
    id: "sitepulse",
    name: "SitePulse",
    tagline: "Know the second your site goes down.",
    description:
      "Flat-priced uptime monitoring for indie devs and small teams. Monitor websites and APIs, get email alerts on failures, and share a public status page with customers.",
    href: "https://sitepulse.satosushi.co",
    status: "live",
    category: "Monitoring",
  },
  {
    id: "pageinsight",
    name: "PageInsight",
    tagline: "Real-time analytics for Notion pages.",
    description:
      "Track views, sessions, live readers, locations, and time-on-page for public or shared Notion pages with a tiny embed-based tracker.",
    href: "https://pageinsight.satosushi.co",
    status: "live",
    category: "Analytics",
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
