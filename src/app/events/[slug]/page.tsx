import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, Tag, UserCheck } from "lucide-react";
import { constructMetadata } from "@/lib/utils/seo";
import { Breadcrumbs, EventStructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { EventPhotoGallery } from "@/components/events/EventPhotoGallery";
import { getEventBySlug, getPublishedEvents } from "@/data/events";

export function generateStaticParams() {
  return getPublishedEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return constructMetadata({
      title: "Event Not Found — FyrnMedia",
      path: `/events/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${event.name} (${event.year}) — Events Gallery — FyrnMedia`,
    description: event.description,
    path: `/events/${event.slug}`,
    image: event.coverImage.src,
  });
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.name },
        ]}
      />
      <EventStructuredData event={event} />

      {/* Event Header Information */}
      <section className="border-b border-border py-14 md:py-20">
        <Container size="wide">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent" className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>{event.year}</span>
            </Badge>

            <Badge variant="outline" className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-foreground-subtle" />
              <span>{event.location}</span>
            </Badge>

            <Badge variant="default" className="flex items-center gap-1.5">
              <UserCheck className="h-3 w-3 text-accent" />
              <span>{event.participation}</span>
            </Badge>

            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground-subtle ml-1">
              <Tag className="h-3 w-3" />
              <span>{event.category}</span>
            </span>
          </div>

          {/* Event Title */}
          <h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">
            {event.name}
          </h1>

          {/* Description & Overview */}
          <div className="mt-5 max-w-3xl space-y-3">
            <p className="text-lg md:text-xl leading-relaxed text-foreground-muted font-normal">
              {event.description}
            </p>
            {event.detailedOverview && (
              <p className="text-sm md:text-base leading-relaxed text-foreground-subtle">
                {event.detailedOverview}
              </p>
            )}
          </div>

          {/* Gallery Info Bar */}
          <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs font-mono text-foreground-subtle">
            <span>
              Gallery Archive &bull; {event.photos.length} Photographs
            </span>
            <span className="hidden sm:inline-block">
              Click any photo to open full-screen lightbox
            </span>
          </div>
        </Container>
      </section>

      {/* Gallery Section — Equal treatment for all photos */}
      <section className="py-12 md:py-20">
        <Container size="wide">
          <EventPhotoGallery
            photos={event.photos}
            eventName={event.name}
          />

          {/* Bottom Navigation & Connections */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-10">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all events</span>
            </Link>

            <Link
              href="/contact?topic=events"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1"
            >
              <span>Connect about upcoming search events</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
