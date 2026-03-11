import Link from "next/link";
import type { Product } from "@/lib/products";

const statusStyles: Record<Product["status"], string> = {
  live: "bg-emerald-50 text-emerald-700",
  beta: "bg-amber-50 text-amber-700",
  "coming-soon": "bg-neutral-100 text-neutral-500",
};

const statusLabels: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

export default function ProductCard({ product }: { product: Product }) {
  const isExternal = product.href.startsWith("http");
  const isDisabled = product.status === "coming-soon";

  return (
    <div className="group border border-neutral-200 rounded-xl p-8 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
            {product.category}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">
            {product.name}
          </h3>
        </div>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[product.status]}`}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      <p className="text-sm font-medium text-neutral-700 mb-2">{product.tagline}</p>
      <p className="text-sm text-neutral-500 leading-relaxed mb-8">{product.description}</p>

      {isDisabled ? (
        <span className="inline-flex items-center text-sm text-neutral-400 cursor-not-allowed select-none">
          Not available yet
        </span>
      ) : (
        <Link
          href={product.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors group/link"
        >
          Visit {product.name}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="translate-x-0 group-hover/link:translate-x-0.5 transition-transform"
          >
            <path
              d="M2 7H12M12 7L8 3M12 7L8 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
