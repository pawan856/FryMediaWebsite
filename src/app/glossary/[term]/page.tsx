import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/shared/EditorialPage";
import { glossaryTerms } from "@/lib/content/architecture";
import { constructMetadata } from "@/lib/utils/seo";

export function generateStaticParams() {
  return glossaryTerms.map(({ slug }) => ({ term: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }): Promise<Metadata> {
  const { term } = await params;
  const definition = glossaryTerms.find((item) => item.slug === term);
  if (!definition) return constructMetadata({ title: "Glossary — FyrnMedia", path: `/glossary/${term}`, noIndex: true });
  return constructMetadata({ title: `${definition.term} — FyrnMedia Glossary`, description: definition.short, path: `/glossary/${definition.slug}` });
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const definition = glossaryTerms.find((item) => item.slug === term);
  if (!definition) notFound();
  return <EditorialPage
    data={{ slug: definition.slug, name: definition.term, eyebrow: "Glossary / Search and discovery", title: definition.term, description: definition.short, lead: definition.detail, sections: [{ id: "definition", title: "In practice", body: definition.detail, points: ["Use the term in its specific context", "Check current platform documentation where behavior changes", "Avoid treating visibility as a guaranteed outcome"] }], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "Browse the glossary", href: "/glossary" }] }}
    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary" }, { label: definition.term }]}
    ctaHref="/contact?service=ai_visibility_audit"
    ctaLabel="Discuss search visibility"
  />;
}