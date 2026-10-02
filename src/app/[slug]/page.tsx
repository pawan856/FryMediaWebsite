import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/shared/EditorialPage";
import { constructMetadata } from "@/lib/utils/seo";
import { capabilityPages, getCapabilityPage } from "@/lib/content/architecture";
import { EditorialServiceStructuredData } from "@/components/seo/StructuredData";

export function generateStaticParams() {
  return capabilityPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getCapabilityPage(slug);
  if (!page) return constructMetadata({ title: "FyrnMedia", path: `/${slug}`, noIndex: true });
  return constructMetadata({ title: `${page.name} — FyrnMedia`, description: page.description, path: `/${page.slug}` });
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCapabilityPage(slug);
  if (!data) notFound();
  const breadcrumbs = slug === "ai-visibility-audit"
    ? [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Search Visibility", href: "/services/ai-search-visibility" }, { label: data.name }]
    : [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Search Visibility", href: "/services/ai-search-visibility" }, { label: data.name }];
  return <><EditorialServiceStructuredData name={data.name} description={data.description} path={`/${data.slug}`} /><EditorialPage
    data={data}
    breadcrumbs={breadcrumbs}
    ctaHref={slug === "ai-visibility-audit" ? "/contact?service=ai_visibility_audit" : "/contact?service=ai_visibility_audit"}
    ctaLabel={slug === "ai-visibility-audit" ? "Get Your AI Visibility Audit" : "Talk through your search visibility"}
    featured={slug === "ai-visibility-audit"}
  /></>;
}