interface LegalLayoutProps {
  badge: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  badge,
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="border-b border-neutral-100 pb-12 mb-12">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
          {badge}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
          {title}
        </h1>
        <p className="text-sm text-neutral-400">Last updated: {lastUpdated}</p>
      </div>
      <div className="prose-legal">{children}</div>
    </div>
  );
}

/* Inline prose styles via Tailwind utility classes applied directly in the children */
