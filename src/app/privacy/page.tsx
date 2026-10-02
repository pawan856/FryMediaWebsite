import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";
import { Breadcrumbs } from "@/components/seo/StructuredData";

export const metadata = constructMetadata({ title: "Privacy Information — FyrnMedia", path: "/privacy", noIndex: true });

export default function PrivacyPage() {
  return <><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} /><section className="border-b border-border pb-32 pt-10"><Container size="tight"><p className="text-xs font-mono uppercase tracking-widest text-accent">Privacy</p><h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">Privacy information is being prepared.</h1><p className="mt-6 text-base leading-relaxed text-foreground-muted">This page is a production placeholder and must be replaced with a business- and jurisdiction-reviewed privacy policy before public launch.</p></Container></section></>;
}