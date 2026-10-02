import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { footerNavigation, industryNavigation, serviceNavigation, siteNavigation } from "@/lib/constants/navigation";
import { constructMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = constructMetadata({ title: "HTML Sitemap — FyrnMedia", description: "Browse FyrnMedia pages, services and industry information.", path: "/sitemap", noIndex: true });

function SitemapList({ title, links }: { title: string; links: Array<{ name: string; href: string }> }) {
  return <section className="border-t border-border py-6"><h2 className="text-base font-semibold text-foreground">{title}</h2><ul className="mt-3 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">{links.map((link) => <li key={`${title}-${link.href}`}><Link href={link.href} className="flex min-h-10 items-center text-sm text-foreground-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{link.name}</Link></li>)}</ul></section>;
}

export default function HtmlSitemapPage() {
  const primaryLinks = siteNavigation.filter((link) => link.href !== "/services").map(({ name, href }) => ({ name, href }));
  const serviceLinks = serviceNavigation.flatMap((group) => [{ name: group.name, href: group.href }, ...group.items]);
  const utilityLinks = [
    ...footerNavigation.contact,
    ...footerNavigation.governance,
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "HTML Sitemap" }]} />
    <section className="border-b border-border py-16 md:py-20"><Container size="wide"><p className="text-xs font-mono uppercase tracking-widest text-accent">FyrnMedia</p><h1 className="mt-5 text-display-xl font-bold tracking-tighter text-foreground">HTML sitemap.</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted">A structured index of public pages and services.</p></Container></section>
    <section className="py-8 md:py-12"><Container size="wide"><SitemapList title="Explore" links={[{ name: "Home", href: "/" }, ...primaryLinks]} /><SitemapList title="Services" links={[{ name: "All services", href: "/services" }, ...serviceLinks]} /><SitemapList title="Industries" links={industryNavigation} /><SitemapList title="Company and information" links={utilityLinks} /></Container></section>
  </>;
}