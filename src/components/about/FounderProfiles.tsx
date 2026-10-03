"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const founders = [
  {
    initials: "AB",
    name: "Aditya Bhatt",
    portrait: "/images/founders/aditya.jpg",
    role: "Founder",
    expertise: "SEO · AI Search · Content Strategy · AEO · GEO",
    bio: "Aditya works at the intersection of SEO, content strategy and AI search, helping brands build content and visibility systems designed for the evolving search landscape.",
    linkedIn: "https://www.linkedin.com/in/aditya-bhatt-1678b0199/",
  },
  {
    initials: "PKS",
    name: "Pawan Kumar Singh",
    portrait: "/images/founders/pawan.jpg",
    role: "CTO & Co-Founder",
    expertise: "Full-Stack Development · AI Engineering · Backend Systems · Web Development",
    bio: "Pawan is a Full-Stack Developer and AI Engineer focused on building scalable digital products, backend systems and practical AI-powered solutions.",
    linkedIn: "https://www.linkedin.com/in/pawan-kumar-singh-688055208/",
  },
];

export function FounderProfiles({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2 lg:gap-8", className)}>
      {founders.map((founder, index) => (
        <FounderProfileCard key={founder.name} founder={founder} index={index} />
      ))}
    </div>
  );
}

function FounderProfileCard({
  founder,
  index,
}: {
  founder: (typeof founders)[number];
  index: number;
}) {
  const [portraitUnavailable, setPortraitUnavailable] = useState(false);

  return (
    <article className="group overflow-hidden border border-border bg-background transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-[3px] hover:border-accent/30 hover:shadow-[0_18px_42px_rgba(24,60,46,0.08)] motion-reduce:transition-none">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-[#edf3eb]">
        <div
          className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,60,46,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        {!portraitUnavailable && (
          <Image
            src={founder.portrait}
            alt={`${founder.name}, ${founder.role} at FyrnMedia`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="z-10 object-cover object-[center_28%] transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
            onError={() => setPortraitUnavailable(true)}
          />
        )}
        <span className="absolute left-5 top-5 z-20 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
          FyrnMedia / 0{index + 1}
        </span>
        {portraitUnavailable && (
          <span
            className="relative font-semibold leading-none text-[#28583e]/80"
            style={{ fontSize: "clamp(5rem, 15vw, 10rem)" }}
            aria-hidden="true"
          >
            {founder.initials}
          </span>
        )}
        <span className="absolute bottom-5 right-5 z-20 h-8 w-8 border-b border-r border-accent/40" aria-hidden="true" />
        <span className="absolute bottom-5 left-5 z-20 h-8 w-8 border-b border-l border-accent/40" aria-hidden="true" />
      </div>

      <div className="p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
              {founder.role}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
              {founder.name}
            </h3>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
                Expertise
              </p>
              <p className="mt-2 text-xs leading-relaxed text-accent md:text-sm">
                {founder.expertise}
              </p>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">
              {founder.bio}
            </p>
            <Link
              href={founder.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-6 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
            </Link>
      </div>
    </article>
  );
}

export function FoundersSection() {
  return (
    <section className="border-y border-border py-20 md:py-28" aria-labelledby="founders-heading">
      <Container size="wide">
        <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
              The people behind FyrnMedia
            </p>
            <h2 id="founders-heading" className="mt-4 max-w-2xl text-heading-xl font-semibold text-foreground">
              Technology meets search.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-foreground-muted md:col-span-5 md:justify-self-end">
            FyrnMedia brings together engineering, AI and search strategy to build digital systems for the way discovery is changing.
          </p>
        </div>
        <FounderProfiles />
        <div className="mt-8 flex justify-end">
          <Link
            href="/about/team"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Meet the founders
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}