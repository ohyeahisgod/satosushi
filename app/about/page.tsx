import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Satosushi is a software company that builds and maintains independent SaaS products for online businesses.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="border-b border-neutral-100 pb-16 mb-16 max-w-2xl">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          We build software for online businesses.
        </h1>
        <p className="text-neutral-500 leading-relaxed">
          Satosushi is a software company. We develop and maintain a growing
          portfolio of independent SaaS products — each one designed to solve
          a specific operational problem for founders, creators, and small teams
          running businesses online.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 border-b border-neutral-100 pb-24">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-5">
            Why we exist
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-5">
            A lot of software is over-engineered for the customers it targets.
            Complex setup, unclear pricing, and features you&apos;ll never use.
            For a small team or solo operator, that overhead gets in the way.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            We built Satosushi to offer a different option: straightforward
            software at reasonable prices, designed for people who want to get
            something working quickly and move on.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-5">
            How we work
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-5">
            Each product has its own scope, pricing, and subscription. They
            share common standards for reliability and support, but are
            otherwise fully independent. There&apos;s no platform lock-in and no
            bundling requirement.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            We treat the products we release as long-term commitments. That
            means regular maintenance, documented changelogs, and a real
            support channel — not just a launch-and-forget approach.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-24 border-b border-neutral-100 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12">
          What we believe in
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Scope over scope creep",
              body: "We define a product by what it does not do as much as by what it does. Staying focused keeps things reliable.",
            },
            {
              title: "Low friction from day one",
              body: "No required demos, no sales process for self-serve plans. Documentation should answer most questions on its own.",
            },
            {
              title: "Straightforward pricing",
              body: "What you see on the pricing page is what you pay. No setup fees, no hidden limits, no surprise invoices.",
            },
          ].map((v) => (
            <div key={v.title}>
              <div className="w-6 h-px bg-neutral-900 mb-5" />
              <h3 className="text-base font-semibold text-neutral-900 mb-3">{v.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-lg">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
          See what we&apos;ve built
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed mb-8">
          Browse our current products, or get in touch if you have a question
          about a specific tool or a billing issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
          >
            See all products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-neutral-600 text-sm font-medium rounded-lg border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
