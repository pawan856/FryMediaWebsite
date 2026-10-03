export interface SiteLink {
  name: string;
  href: string;
  description?: string;
}

export interface ServiceGroup extends SiteLink {
  id: string;
  eyebrow: string;
  flagship?: boolean;
  items: SiteLink[];
}

export const serviceNavigation: ServiceGroup[] = [
  {
    id: "ai-search-visibility",
    name: "AI Search Visibility",
    eyebrow: "Flagship",
    href: "/services/ai-search-visibility",
    description: "Get discovered across search engines and AI answer systems.",
    flagship: true,
    items: [
      { name: "Answer Engine Optimization", href: "/aeo" },
      { name: "Generative Engine Optimization", href: "/geo" },
      { name: "Google AI Overviews", href: "/ai-overviews-optimization" },
      { name: "AI Visibility Audit", href: "/ai-visibility-audit" },
      { name: "Entity SEO", href: "/entity-seo" },
      { name: "AI Citation & Digital PR", href: "/ai-citation-building" },
    ],
  },
  {
    id: "seo",
    name: "SEO",
    eyebrow: "Organic growth",
    href: "/services/seo",
    description: "Technical, semantic and content systems for durable search visibility.",
    items: [
      { name: "Technical SEO", href: "/services/seo#technical-seo" },
      { name: "On-Page & Semantic SEO", href: "/services/seo#semantic-seo" },
      { name: "Content & Topical Authority", href: "/services/seo#topical-authority" },
      { name: "Link Building & Digital PR", href: "/services/seo#digital-pr" },
      { name: "Local SEO", href: "/services/seo#local-seo" },
      { name: "E-commerce SEO", href: "/services/seo#ecommerce-seo" },
      { name: "SaaS / B2B SEO", href: "/services/seo#saas-seo" },
      { name: "International SEO", href: "/services/seo#international-seo" },
    ],
  },
  {
    id: "content-marketing",
    name: "Content & Social",
    eyebrow: "Content systems",
    href: "/services/content-marketing",
    description: "Useful content and audience programs built around clear goals.",
    items: [
      { name: "AI-Assisted Content", href: "/services/content-marketing#ai-content" },
      { name: "Social Media", href: "/services/content-marketing#social-media" },
      { name: "Email & Automation", href: "/services/content-marketing#email" },
    ],
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    eyebrow: "Paid acquisition",
    href: "/services/performance-marketing",
    description: "Measurable paid acquisition, landing experiences and conversion work.",
    items: [
      { name: "Paid Search (PPC)", href: "/services/performance-marketing#paid-search" },
      { name: "Paid Social", href: "/services/performance-marketing#paid-social" },
      { name: "Conversion Optimization", href: "/services/performance-marketing#conversion" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    eyebrow: "Connected workflows",
    href: "/services/ai-automation",
    description: "Practical workflow automation that keeps people in control.",
    items: [
      { name: "AI Agents & Workflows", href: "/services/ai-automation#agents" },
      { name: "CRM & Lead Flow", href: "/services/ai-automation#crm" },
      { name: "AI Reporting", href: "/services/ai-automation#reporting" },
    ],
  },
  {
    id: "web-development",
    name: "Web & Technical Build",
    eyebrow: "Digital experience",
    href: "/services/web-development",
    description: "Fast, accessible and AI-ready websites built for evolving discovery.",
    items: [
      { name: "AI-Ready Websites", href: "/services/web-development#websites" },
      { name: "Migration & Replatforming", href: "/services/web-development#migration" },
    ],
  },
  {
    id: "analytics-strategy",
    name: "Analytics & Strategy",
    eyebrow: "Measurement",
    href: "/services/analytics-strategy",
    description: "Reliable measurement and decisions connected to business outcomes.",
    items: [
      { name: "GA4 & Server-Side Tracking", href: "/services/analytics-strategy#ga4" },
      { name: "Attribution & Revenue", href: "/services/analytics-strategy#attribution" },
      { name: "Digital Growth Strategy", href: "/services/analytics-strategy#growth-strategy" },
    ],
  },
];

export const industryNavigation: SiteLink[] = [
  { name: "SaaS & B2B Tech", href: "/industries/saas-b2b-tech" },
  { name: "E-commerce & D2C", href: "/industries/ecommerce-d2c" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Education", href: "/industries/education" },
  { name: "Financial Services", href: "/industries/financial-services" },
];

export const siteNavigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    description: "Growth infrastructure for the search era.",
    subItems: serviceNavigation.map(({ name, href, description }) => ({ name, href, description })),
  },
  { name: "Industries", href: "/industries" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Tools", href: "/tools" },
  {
    name: "About",
    href: "/about",
    children: [{ name: "Team", href: "/about/team" }],
  },
];

export const footerNavigation = {
  services: serviceNavigation.map(({ name, href }) => ({ name, href })),
  explore: [
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Glossary", href: "/glossary" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ],
  contact: [
    { name: "Let’s Talk", href: "/contact" },
    { name: "Free AI Visibility Audit", href: "/audit" },
  ],
  governance: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "Security", href: "/security" },
    { name: "HTML Sitemap", href: "/sitemap" },
  ],
};