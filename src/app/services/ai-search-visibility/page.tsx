import type { Metadata } from "next";
import { EditorialPage } from "@/components/shared/EditorialPage";
import { constructMetadata } from "@/lib/utils/seo";
import { aiSearchVisibilityPage } from "@/lib/content/architecture";
import { EditorialServiceStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = constructMetadata({
  title: "AI Search Visibility — FyrnMedia",
  description: aiSearchVisibilityPage.description,
  path: "/services/ai-search-visibility",
});

export default function AiSearchVisibilityPage() {
  return <><EditorialServiceStructuredData name={aiSearchVisibilityPage.name} description={aiSearchVisibilityPage.description} path="/services/ai-search-visibility" /><EditorialPage
    data={aiSearchVisibilityPage}
    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Search Visibility" }]}
    ctaHref="/audit"
    ctaLabel="Get Your AI Visibility Audit"
    featured
  /></>;
}