import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse all software products built and maintained by Satosushi. Simple, focused tools for online businesses.",
};

export default function ProductsPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const betaProducts = products.filter((p) => p.status === "beta");
  const soonProducts = products.filter((p) => p.status === "coming-soon");

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="border-b border-neutral-100 pb-16 mb-16">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
          Products
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 max-w-lg leading-tight">
          Every tool we build and maintain.
        </h1>
        <p className="text-neutral-500 leading-relaxed max-w-xl">
          Each product is independent. Pick the one that fits your workflow.
          New tools are added over time — and old ones are retired when they no
          longer serve their purpose.
        </p>
      </div>

      {/* Live */}
      {liveProducts.length > 0 && (
        <div className="mb-16">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">
            Available now
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Beta */}
      {betaProducts.length > 0 && (
        <div className="mb-16">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">
            In beta
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {betaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Coming soon */}
      {soonProducts.length > 0 && (
        <div className="mb-16">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">
            Coming soon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soonProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* How to add note (dev-facing comment in code, not shown) */}
      {/* To add a new product: edit lib/products.ts and add a new entry to the array */}

      {/* Bottom note */}
      <div className="border-t border-neutral-100 pt-16">
        <p className="text-sm text-neutral-400">
          Have a product idea or feedback?{" "}
          <a
            href="/contact"
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch.
          </a>
        </p>
      </div>
    </div>
  );
}
