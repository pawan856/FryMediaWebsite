import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { serviceNavigation } from "@/lib/constants/navigation";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const flagship = serviceNavigation.find((group) => group.flagship)!;
const otherServices = serviceNavigation.filter((group) => !group.flagship);

export function ServiceHub() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40" aria-hidden="true" />
        <Container size="wide" className="relative">
          <p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted">
            <span className="h-px w-6 bg-accent" />Services
          </p>
          <h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">
            Growth infrastructure for the search era.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted lg:col-span-7">
              FyrnMedia connects AI Search, SEO, content, performance, automation, web and analytics into a coherent growth system. Start with the discovery challenge that matters most; connect the disciplines as your needs evolve.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono uppercase tracking-widest text-foreground-subtle lg:col-span-5 lg:justify-end">
              {otherServices.map((service) => <span key={service.id}>{service.name}</span>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-12 md:py-16">
        <Container size="wide">
          <div className="grid gap-8 border-l-2 border-accent bg-background-elevated/50 p-6 md:grid-cols-12 md:gap-10 md:p-10">
            <div className="md:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-accent">Flagship / AI Search Visibility</p>
              <h2 className="mt-4 text-heading-xl font-semibold text-foreground">{flagship.description}</h2>
              <TrackedLink href={flagship.href} event="ai_search_visibility_click" className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                Explore AI Search Visibility <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </TrackedLink>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2 md:col-span-7">
              {flagship.items.map((item, index) => (
                <li key={item.href} className="border-b border-border">
                  <Link href={item.href} className="group flex min-h-12 items-center justify-between gap-3 text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <span><span className="mr-3 text-[10px] font-mono text-foreground-subtle">0{index + 1}</span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <Container size="wide">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Connected capabilities</p>
              <h2 className="mt-3 text-heading-xl font-semibold text-foreground">Built around the work, not the channel.</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-foreground-muted">Each service has a distinct role. The right mix depends on your audience, systems and current constraints.</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {otherServices.map((service, index) => (
              <article key={service.id} className="border-t border-border py-7 md:py-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">{service.eyebrow} / 0{index + 1}</p>
                    <h3 className="mt-3 text-heading-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-muted">{service.description}</p>
                  </div>
                  <Link href={service.href} className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border text-foreground transition-all hover:-translate-y-px hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`Explore ${service.name}`}>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {service.items.map((item) => <li key={item.href}><Link href={item.href} className="text-xs text-foreground-subtle transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{item.name}</Link></li>)}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container size="wide" className="flex flex-col gap-5 border-l-2 border-accent pl-6 md:flex-row md:items-center md:justify-between md:pl-8">
          <div><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">A useful first step</p><h2 className="mt-2 text-heading-lg font-semibold text-foreground">Tell us what needs to work better.</h2></div>
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link>
        </Container>
      </section>
    </>
  );
}