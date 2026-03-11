import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-sm font-semibold text-neutral-900 hover:opacity-70 transition-opacity">
              Satosushi
            </Link>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-xs">
              Simple software for online businesses.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">{section}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} Satosushi. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Built for online businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
