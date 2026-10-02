import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = constructMetadata({ title: "Cookie Information — FyrnMedia", description: "Cookie and storage information for the FyrnMedia website.", path: "/cookies", noIndex: true });

export default function CookiesPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookies" }]} />
    <section className="border-b border-border py-16 md:py-24"><Container size="tight"><p className="text-xs font-mono uppercase tracking-widest text-accent">Website information</p><h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">Cookie information.</h1><p className="mt-6 text-base leading-relaxed text-foreground-muted">A jurisdiction-reviewed cookie notice is being prepared before production launch. This page does not claim that every browser or analytics configuration uses the same storage choices.</p><p className="mt-5 text-sm leading-relaxed text-foreground-muted">For questions about this notice, contact <a className="text-accent underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p></Container></section>
  </>;
}