import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const destinations = [
  { name: "Industries", description: "Approaches shaped around market context.", href: "/industries" },
  { name: "Work", description: "Published case studies when evidence is approved.", href: "/work" },
  { name: "Insights", description: "Guides and research when they are ready to publish.", href: "/insights" },
  { name: "Tools", description: "Practical helpers with transparent limitations.", href: "/tools" },
];

export function PlatformIndex() {
  return <section className="border-b border-border py-14 md:py-20">
    <Container size="wide">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Explore FyrnMedia</p><h2 className="mt-2 text-heading-xl font-semibold text-foreground">More ways into the work.</h2></div><Link href="/services" className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-accent">View all services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link></div>
      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => <li key={destination.href} className="border-t border-border"><TrackedLink href={destination.href} event={destination.href === "/work" ? "work_cta_click" : destination.href === "/insights" ? "insight_cta_click" : destination.href === "/industries" ? "industry_hub_click" : "tools_hub_click"} className="group flex min-h-28 items-start justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><span><span className="block text-base font-semibold text-foreground transition-colors group-hover:text-accent">{destination.name}</span><span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{destination.description}</span></span><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></TrackedLink></li>)}
      </ul>
    </Container>
  </section>;
}