import { footerNavigation, siteNavigation } from "@/lib/constants/navigation";

export const siteConfig = {
  name: "FyrnMedia",
  legalName: "FyrnMedia Digital Growth",
  description:
    "FyrnMedia makes AI useful in everyday life through AI search visibility, organic growth, content, technology, and measurement.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fyrnmedia.com",
  ogImage: undefined,
  twitterHandle: undefined,
  address: "International Studios: London • New York • Singapore",
  contactEmail: "inquiries@fyrnmedia.com",
  navLinks: siteNavigation,
  footerLinks: {
    capabilities: footerNavigation.services,
    company: footerNavigation.explore,
    governance: footerNavigation.governance,
  },
};
