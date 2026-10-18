import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { constructMetadata } from "@/lib/utils/seo";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/events/EventCard";
import { getPublishedEvents } from "@/data/events";

export const metadata: Metadata = constructMetadata({
  title: "Events & Industry Presence — FyrnMedia",
  description:
    "Conferences, industry gatherings, and search community events attended by FyrnMedia.",
  path: "/events",
});

export default function EventsPage() {
  const publishedEvents = getPublishedEvents();

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      {/* Header Hero Section */}
      <section className="border-b border-border py-16 md:py-24">
        <Container size="wide">
          <p className="text-xs font-mono uppercase tracking-widest text-accent">
            Industry presence
          </p>
          <h1 className="mt-5 text-display-xl font-bold tracking-tighter text-foreground">
            Events &amp; conferences.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-foreground-muted">
            Moments, discussions, and industry gatherings where FyrnMedia
            connects with ideas, practitioners, and developments across the
            search and digital growth community.
          </p>
        </Container>
      </section>

      {/* Events Listing Section */}
      <section className="py-16 md:py-24">
        <Container size="wide">
          {publishedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-dashed border-border p-12 text-center">
              <p className="text-sm font-mono text-foreground-subtle">
                Upcoming event notes and galleries will appear here.
              </p>
            </div>
          )}

          {/* Contextual Collaboration Callout */}
          <div className="mt-20 border-t border-border pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-sm bg-background-elevated/40 border border-border p-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">
                  Speaking &amp; Gatherings
                </p>
                <h3 className="mt-2 text-heading-md font-semibold text-foreground">
                  Organizing a conference, panel, or podcast?
                </h3>
                <p className="mt-1 text-sm text-foreground-muted max-w-xl">
                  We frequently participate in discussions on AI search
                  visibility, technical SEO architectures, and search engine
                  evolution.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover self-start md:self-auto shrink-0"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
