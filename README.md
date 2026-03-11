# Satosushi — Company Website

Next.js 14 + Tailwind CSS. White-background minimal SaaS studio website.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/products` | `app/products/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/privacy-policy` | `app/privacy-policy/page.tsx` |
| `/terms-of-service` | `app/terms-of-service/page.tsx` |
| `/refund-policy` | `app/refund-policy/page.tsx` |

## Adding a new product

Edit **`lib/products.ts`** and add a new entry to the `products` array:

```ts
{
  id: "my-product",           // unique slug
  name: "My Product",
  tagline: "One-line pitch.",
  description: "Two to three sentence description.",
  href: "https://myproduct.com",
  status: "live",             // "live" | "beta" | "coming-soon"
  category: "Analytics",
}
```

The product card will appear automatically on the Home page preview and the Products page — no other changes needed.

## Removing / retiring a product

Change `status` to `"coming-soon"` to soft-hide it, or delete the entry from `lib/products.ts` entirely.

## Brand details

- **Brand:** Satosushi
- **Tagline:** Simple software for online businesses
- **Contact:** hello@satosushi.co
- **Domain:** satosushi.co (update `metadataBase` in `app/layout.tsx`)

## Deployment

Works with Vercel out of the box — connect the repo and deploy.
