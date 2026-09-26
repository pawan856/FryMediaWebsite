"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is SEO?",
    answer:
      "Search Engine Optimization (SEO) is the discipline of structuring your digital presence — technically, semantically, and authoritatively — so search engines understand, index, and rank your content for queries that match your commercial offerings.",
  },
  {
    question: "How long does SEO take to produce measurable impact?",
    answer:
      "Technical optimizations can surface sooner than broader topical authority work, but timing varies with the site, market, implementation speed, and search landscape. We define measurable signals and review them over time rather than promise a fixed result.",
  },
  {
    question: "Can SEO guarantee #1 rankings?",
    answer:
      "No legitimate consultancy can guarantee specific #1 positions. Search algorithms evaluate many dynamic signals and competitor maneuvers daily. FyrnMedia focuses on systematic technical execution, transparent telemetry, and adherence to search engine guidelines.",
  },
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO focuses on server configuration, rendering speeds, crawl budget governance, internal link graphs, and structured JSON-LD data. It ensures search engine crawlers can access and interpret your pages without technical impediment.",
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO is the practice of optimizing your brand's digital entity footprint for AI-driven answer engines like Google AI Overviews and Perplexity. It involves structuring unambiguous schema, establishing entity relationships in knowledge bases, and earning citations in authoritative sources.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on earning clicks on blue-link search result pages through keyword matching and PageRank. GEO focuses on helping large language models accurately retrieve and synthesize your brand's facts as authoritative answers to complex user prompts.",
  },
  {
    question: "Do you work with local and regional businesses?",
    answer:
      "Yes. For multi-location enterprises or region-specific businesses, we engineer localized landing pages, manage Google Business Profile architectures, and establish regional prominence signals that capture high-intent localized search traffic.",
  },
  {
    question: "What does an ongoing SEO engagement include?",
    answer:
      "Engagements are structured in focused 90-day sprints. Each sprint includes an initial technical diagnostic, priority remediation tickets for your engineering team, content cluster blueprints, authority development, and weekly attribution telemetry.",
  },
];

export function SeoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05 });

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
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
                Frequently Addressed
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Common questions about
              <br />
              <span className="text-accent">organic search strategy.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              Transparent answers regarding our methodology, technical scope,
              timeframes, and expectations.
            </p>
          </div>
        </div>

        {/* Accessible Accordion List */}
        <div className="max-w-4xl mx-auto divide-y divide-border border-t border-b border-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-base md:text-lg font-semibold text-foreground tracking-tight hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-sm border border-border flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 border-accent text-accent" : "text-foreground-muted"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={cn(
                    "faq-answer grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0 overflow-hidden pb-8 pt-1 pr-6 text-sm md:text-base text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
