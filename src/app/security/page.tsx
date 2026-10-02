import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = constructMetadata({ title: "Security — FyrnMedia", description: "Security information and contact details for reporting a concern about the FyrnMedia website.", path: "/security", noIndex: true });

export default function SecurityPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security" }]} />
    <section className="border-b border-border py-16 md:py-24"><Container size="tight"><p className="text-xs font-mono uppercase tracking-widest text-accent">Responsible disclosure</p><h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">Security matters.</h1><p className="mt-6 text-base leading-relaxed text-foreground-muted">The public site applies baseline browser security headers and validates contact submissions server-side. Do not include sensitive personal or account information in a report.</p><h2 className="mt-12 text-heading-lg font-semibold text-foreground">Report a website security concern</h2><p className="mt-4 text-sm leading-relaxed text-foreground-muted">Send a concise description, affected URL and safe reproduction steps to <a className="text-accent underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}?subject=Website%20security%20report`}>{siteConfig.contactEmail}</a>. Please allow time for review before public disclosure.</p></Container></section>
  </>;
}