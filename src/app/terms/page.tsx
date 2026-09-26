import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";

export const metadata = constructMetadata({ title: "Terms of Engagement — FyrnMedia", path: "/terms", noIndex: true });

export default function TermsPage() {
  return <section className="border-b border-border py-32"><Container size="tight"><p className="text-xs font-mono uppercase tracking-widest text-accent">Terms</p><h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">Terms of engagement are being prepared.</h1><p className="mt-6 text-base leading-relaxed text-foreground-muted">This page is a production placeholder and must be replaced with reviewed terms before public launch or paid engagement.</p></Container></section>;
}