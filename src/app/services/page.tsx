import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { ServiceHub } from "@/components/services/ServiceHub";

export const metadata: Metadata = constructMetadata({
  title: "Digital Growth Services — FyrnMedia",
  description:
    "Explore FyrnMedia services across AI Search Visibility, SEO, content, performance marketing, automation, web development, and analytics strategy.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServiceHub />;
}
