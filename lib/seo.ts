export const siteConfig = {
  name: "Satosushi",
  url: "https://www.satosushi.co",
  description:
    "Satosushi builds simple, focused software tools for online businesses. No bloat, no complexity, just tools that work.",
  email: "hello@satosushi.co",
};

export const defaultOpenGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Satosushi - Simple software for online businesses",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};
