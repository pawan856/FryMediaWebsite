export const siteConfig = {
  name: "FyrnMedia",
  legalName: "FyrnMedia Digital Growth & Search Architecture",
  description:
    "FyrnMedia is a digital growth studio specialising in technical SEO, organic search engineering, and high-performance web systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fyrnmedia.com",
  ogImage: undefined,
  twitterHandle: undefined,
  address: "International Studios: London • New York • Singapore",
  contactEmail: "inquiries@fyrnmedia.com",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      subItems: [
        {
          name: "Search Engine Optimization",
          href: "/services/seo",
          description: "Technical SEO, semantic graph architecture, and algorithmic resilience.",
        },
        {
          name: "AI Search / GEO",
          href: "/services/geo",
          description: "An emerging capability for clearer entities, useful sources, and structured discovery signals.",
        },
        {
          name: "Digital Strategy",
          href: "/services#service-index",
          description: "Data-modeled competitive advantage and search market capture (In Architecture).",
        },
        {
          name: "Web Experience & Performance",
          href: "/services#service-index",
          description: "Sub-second Next.js web applications engineered for ruthless conversion (In Architecture).",
        },
      ],
    },
    { name: "SEO", href: "/services/seo" },
  ],
  footerLinks: {
    capabilities: [
      { name: "Search Engine Optimization", href: "/services/seo" },
      { name: "Technical SEO Architecture", href: "/services/seo" },
      { name: "Semantic Search & Entity Graphs", href: "/services/seo" },
      { name: "Full Services Matrix", href: "/services" },
      { name: "Diagnostic Process", href: "/services/seo#seo-system" },
    ],
    company: [
      { name: "Agency Overview", href: "/about" },
      { name: "Selected Work", href: "/work" },
      { name: "Insights", href: "/insights" },
      { name: "Philosophy & Principles", href: "/about#philosophy" },
      { name: "Services Catalog", href: "/services" },
      { name: "Brand Vision", href: "/about#vision" },
      { name: "Start a Conversation", href: "/contact" },
    ],
    governance: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Engagement", href: "/terms" },
      { name: "Security Standards", href: "#" },
      { name: "Cookie Governance", href: "#" },
    ],
  },
};
