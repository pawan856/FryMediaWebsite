import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FounderProfiles } from "@/components/about/FounderProfiles";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = constructMetadata({
  title: "The Founders — FyrnMedia",
  description:
    "Meet the two founders bringing together search strategy, AI and engineering at FyrnMedia.",
  path: "/about/team",
});

const disciplines = ["Engineering", "AI", "Search", "Growth"];

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border pb-20 pt-36 md:pb-28 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,60,46,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Container size="wide" className="relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
            People / FyrnMedia
          </p>
          <h1 className="mt-6 max-w-4xl text-display-lg font-semibold leading-tight text-foreground">
            Built at the intersection of technology and search.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted md:text-lg">
            Search strategy and engineering, working together to make changing discovery useful for ambitious brands.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="team-founders-heading">
        <Container size="wide">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
                Search × AI × Engineering
              </p>
              <h2 id="team-founders-heading" className="mt-4 text-heading-xl font-semibold text-foreground">
                Founder profiles
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-foreground-subtle md:block">01—02 / Founders</span>
          </div>
          <FounderProfiles />
        </Container>
      </section>

      <section className="border-y border-border bg-[#edf3eb] py-20 md:py-28" aria-labelledby="how-we-work-heading">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
                How we work
              </p>
              <h2 id="how-we-work-heading" className="mt-4 text-heading-xl font-semibold text-foreground">
                One connected practice.
              </h2>
            </div>
            <ol className="grid gap-0 md:col-span-8 md:grid-cols-2">
              {disciplines.map((discipline, index) => (
                <li key={discipline} className="flex items-center gap-5 border-t border-border py-5 md:py-7">
                  <span className="font-mono text-xs text-foreground-subtle">0{index + 1}</span>
                  <span className="text-xl font-medium text-foreground md:text-2xl">{discipline}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="tight" className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
            FyrnMedia
          </p>
          <h2 className="mt-4 text-display-md font-semibold text-foreground">
            Let&apos;s build what&apos;s next.
          </h2>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-semibold text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </>
  );
}