import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    title: "One tool, one job",
    description:
      "Each product solves a single, well-defined problem. No feature sprawl, no hidden configuration. You get exactly what the product says it does.",
  },
  {
    title: "Quick to start",
    description:
      "Most of our products can be set up in under ten minutes. No sales call, no onboarding checklist — just sign up and start using it.",
  },
  {
    title: "Predictable pricing",
    description:
      "Flat monthly or annual plans with no usage surprises. Every plan includes a clear description of what is and isn't included.",
  },
  {
    title: "Actively maintained",
    description:
      "We run and maintain every product we publish. Bug fixes ship fast. When something changes, we communicate it clearly.",
  },
];

const audiences = [
  "Founders building and validating SaaS products",
  "Solo operators running lean online businesses",
  "Small teams that want reliable tools without vendor lock-in",
  "Creators and consultants who bill and communicate online",
  "Anyone who prefers focused software over all-in-one platforms",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="min-h-[88vh] flex flex-col justify-center border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">
              Satosushi
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.08] mb-8">
              Simple software
              <br />
              for online
              <br />
              businesses.
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed mb-12 max-w-lg">
              We build focused software products for founders, creators, and
              small teams running businesses online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
              >
                Browse products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-neutral-600 text-sm font-medium rounded-lg border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we do ────────────────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
                What we do
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-6">
                Independent software products for online businesses.
              </h2>
            </div>
            <div>
              <p className="text-neutral-500 leading-relaxed mb-5">
                Satosushi is a software company. We build, launch, and maintain
                a suite of independent SaaS products — each one designed to
                handle a specific task that online businesses deal with regularly.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Our products are separate, subscription-based tools. You choose
                what you need. Nothing is bundled, and nothing is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products preview ──────────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
                Our products
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
                Tools we build and maintain.
              </h2>
            </div>
            <Link
              href="/products"
              className="shrink-0 text-sm text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5"
            >
              View all products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why our tools ─────────────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-16">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Why our tools
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 max-w-xl">
              How we think about building software.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map((feature) => (
              <div key={feature.title}>
                <div className="w-6 h-px bg-neutral-900 mb-5" />
                <h3 className="text-base font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for ─────────────────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
                Built for
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 leading-tight">
                People who build things on the internet.
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                {audiences.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
              Pick the product
              <br />
              that fits your work.
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Each product is sold and billed independently. Subscribe to what
              you need, cancel what you don&apos;t. Every new subscription includes
              a 14-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
              >
                See all products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-neutral-600 text-sm font-medium rounded-lg border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
