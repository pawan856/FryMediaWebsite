import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/shared/EditorialPage";
import { constructMetadata } from "@/lib/utils/seo";
import { getServicePage, servicePages } from "@/lib/content/architecture";
import { EditorialServiceStructuredData } from "@/components/seo/StructuredData";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return constructMetadata({ title: "Services — FyrnMedia", path: `/services/${slug}`, noIndex: true });
  return constructMetadata({ title: `${page.name} — FyrnMedia`, description: page.description, path: `/services/${page.slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getServicePage(slug);
  if (!data) notFound();
  return <><EditorialServiceStructuredData name={data.name} description={data.description} path={`/services/${data.slug}`} /><EditorialPage data={data} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: data.name }]} /></>;
}