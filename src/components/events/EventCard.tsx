import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { IndustryEvent } from "@/data/events";
import { Badge } from "@/components/ui/Badge";

export function EventCard({ event }: { event: IndustryEvent }) {
  const photoCount = event.photos.length;

  return (
    <article className="group relative flex flex-col rounded-sm border border-border bg-background-elevated/70 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-background-surface hover:shadow-card-hover overflow-hidden">
      {/* Cover Image Container */}
      <Link
        href={`/events/${event.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-background-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={event.coverImage.src}
          alt={event.coverImage.alt}
          width={event.coverImage.width}
          height={event.coverImage.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 pointer-events-none" />
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Badges / Metadata */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{event.year}</Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-foreground-subtle" />
            <span>{event.location}</span>
          </Badge>
          <Badge variant="default">{event.participation}</Badge>
        </div>

        {/* Category */}
        <p className="mt-4 text-[11px] font-mono uppercase tracking-widest text-foreground-subtle">
          {event.category}
        </p>

        {/* Event Name */}
        <h2 className="mt-2 text-heading-lg font-bold text-foreground transition-colors group-hover:text-accent">
          <Link
            href={`/events/${event.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            {event.name}
          </Link>
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-3">
          {event.description}
        </p>

        {/* Card Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-mono text-foreground-subtle">
          <span className="inline-flex items-center gap-1.5">
            <Camera className="h-3.5 w-3.5 text-accent" />
            <span>
              {photoCount} {photoCount === 1 ? "Photograph" : "Photographs"}
            </span>
          </span>

          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover group-hover:translate-x-0.5"
            aria-label={`View ${event.name} gallery`}
          >
            <span>View gallery</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
