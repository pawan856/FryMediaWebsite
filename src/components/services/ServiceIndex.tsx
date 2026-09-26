"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { ArrowUpRight, Lock } from "lucide-react";

interface ServiceItem {
  index: string;
  name: string;
  tagline: string;
  description: string;
  status: "active" | "emerging" | "coming_soon";
  link?: string;
  linkLabel?: string;
  tags: string[];
}

const serviceCatalog: ServiceItem[] = [
  {
    index: "01",
    name: "Search Engine Optimization",
    tagline: "Search visibility that compounds.",
    description:
      "Build sustainable search visibility, attract qualified traffic, and turn organic search intent into reliable business growth through systems engineering.",
    status: "active",
    link: "/services/seo",
    linkLabel: "Explore SEO",
    tags: ["Technical SEO", "Crawl Architecture", "Entity Graphs", "Core Web Vitals"],
  },
  {
    index: "02",
    name: "AI Search / GEO",
    tagline: "Preparing for generative discovery.",
    description:
      "An emerging capability focused on clearer entities, useful source material, and structured digital signals across changing discovery environments.",
    status: "emerging",
    link: "/services/geo",
    linkLabel: "Explore GEO",
    tags: ["Entity Clarity", "Source Quality", "Structured Information"],
  },
  {
    index: "03",
    name: "Digital Strategy",
    tagline: "Market modeling before execution.",
    description:
      "Data-modeled competitive advantage, user intent segmentation, and long-term digital growth roadmaps tailored for ambitious category leaders.",
    status: "coming_soon",
    tags: ["Intent Modeling", "SERP Intelligence", "Market Sizing"],
  },
  {
    index: "04",
    name: "Web Experience & Performance",
    tagline: "Sub-second digital systems.",
    description:
      "High-velocity Next.js web applications engineered with obsessive attention to Core Web Vitals, accessibility, and frictionless conversion pathways.",
    status: "coming_soon",
    tags: ["Next.js App Router", "Edge Caching", "WCAG AA"],
  },
  {
    index: "05",
    name: "Content Architecture",
    tagline: "Topic clusters built for authority.",
    description:
      "Semantic content frameworks designed to satisfy search intent, demonstrate topical expertise, and build durable category relevance.",
    status: "coming_soon",
    tags: ["Topical Clusters", "Entity Modeling", "Semantic Audits"],
  },
  {
    index: "06",
    name: "Performance Marketing",
    tagline: "High-intent customer acquisition.",
    description:
      "Quantitative search acquisition campaigns engineered around unit economics, commercial intent keywords, and qualified pipeline generation.",
    status: "coming_soon",
    tags: ["Paid Search", "Conversion Tracking", "Attribution Modeling"],
  },
];

export function ServiceIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05 });
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="service-index"
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
    >
      <Container size="wide">
        {/* Section Preface */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Service Catalog {"//"} Index
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Disciplines engineered
              <br />
              <span className="text-foreground-muted font-normal">to solve real growth friction.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              We focus our practice on deep technical competence. Search Engine Optimization
              is our active, flagship commercial service, supported by a scalable architecture
              for future capabilities.
            </p>
          </div>
        </div>

        {/* Editorial Service Rows */}
        <div className="space-y-0 divide-y divide-border border-t border-b border-border">
          {serviceCatalog.map((service, i) => (
            <ServiceRow
              key={service.index}
              service={service}
              index={i}
              inView={inView}
              isFocused={activeRow === i}
              onFocus={() => setActiveRow(i)}
              onMouseEnter={() => setActiveRow(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  inView,
  isFocused,
  onFocus,
  onMouseEnter,
}: {
  service: ServiceItem;
  index: number;
  inView: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onMouseEnter: () => void;
}) {
  const isActive = service.status === "active";

  const content = (
    <div
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-14 transition-all duration-500",
        isActive
          ? cn(
              "hover:bg-background-elevated/40 cursor-pointer",
              isFocused && "bg-background-elevated/40"
            )
          : "opacity-60 hover:opacity-75 cursor-default bg-background-elevated/10",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Top Sweep Accent on Hover */}
      {isActive && (
        <div
          className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
          aria-hidden="true"
        />
      )}

      {/* Index & Status Badge */}
      <div className="lg:col-span-2 flex lg:flex-col justify-between items-start gap-4">
        <span
          className={cn(
            "text-sm font-mono tracking-widest",
            isActive ? "text-accent font-semibold" : "text-foreground-dim"
          )}
        >
          {service.index}
        </span>
        {isActive ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Active Service
          </span>
        ) : service.status === "emerging" ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 rounded-sm">
            Emerging capability
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-foreground-dim border border-border/40 rounded-sm">
            <Lock className="w-3 h-3" />
            In Architecture
          </span>
        )}
      </div>

      {/* Title & Tagline */}
      <div className="lg:col-span-4 space-y-2">
        <h3
          className={cn(
            "text-heading-xl font-bold tracking-tight transition-colors duration-300",
            isActive
              ? "text-foreground group-hover:text-accent"
              : "text-foreground-muted"
          )}
        >
          {service.name}
        </h3>
        <p className="text-xs font-mono text-foreground-subtle tracking-wide uppercase">
          {service.tagline}
        </p>
      </div>

      {/* Description & Tags */}
      <div className="lg:col-span-4 space-y-4">
        <p className="text-sm text-foreground-muted leading-relaxed">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-foreground-subtle bg-background border border-border/60 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA / Action */}
      <div className="lg:col-span-2 flex items-center lg:justify-end pt-2 lg:pt-0">
        {isActive || service.status === "emerging" ? (
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent font-semibold group-hover:translate-x-1 transition-transform duration-300">
            <span>{service.linkLabel}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        ) : (
          <span className="text-[11px] font-mono tracking-wider uppercase text-foreground-dim">
            Planned Release
          </span>
        )}
      </div>
    </div>
  );

  if ((isActive || service.status === "emerging") && service.link) {
    return (
      <Link href={service.link} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
