import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/shared/EditorialPage";
import { constructMetadata } from "@/lib/utils/seo";
import { getIndustry, industries } from "@/lib/content/architecture";

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustry(slug);
  if (!page) return constructMetadata({ title: "Industries — FyrnMedia", path: `/industries/${slug}`, noIndex: true });
  return constructMetadata({ title: `${page.name} — FyrnMedia`, description: page.description, path: `/industries/${page.slug}` });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) notFound();
  return <EditorialPage data={data} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: data.name }]} />;
}