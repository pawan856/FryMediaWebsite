import { footerNavigation, siteNavigation } from "@/lib/constants/navigation";

export const siteConfig = {
  name: "Fyrn Media",
  legalName: "Fyrn Media",
  description:
    "Fyrn Media helps ambitious brands get found across Google and AI answer engines. AI search visibility, SEO, content and web builds. Get a free audit.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.fyrnmedia.com",
  ogImage: undefined,
  twitterHandle: undefined,
  address: "London · New York · Singapore",
  contactEmail: "inquiries@fyrnmedia.com",
  navLinks: siteNavigation,
  footerLinks: {
    capabilities: footerNavigation.services,
    company: footerNavigation.explore,
    governance: footerNavigation.governance,
  },
};
