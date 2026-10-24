import React from "react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    q: "What does Fyrn Media do?",
    a: "Fyrn Media is a digital growth partner that helps brands get found and chosen in search and AI answers. Our seven services cover AI search visibility, SEO, content and social, performance marketing, AI automation, web development, and analytics and strategy, delivered as one connected plan.",
  },
  {
    q: "What is AI search visibility?",
    a: "AI search visibility is how clearly search engines and AI assistants can find, understand and cite your brand when people ask questions. It combines answer engine optimization (AEO), generative engine optimization (GEO), entity SEO and credible third-party sources, on top of sound technical SEO.",
  },
  {
    q: "What’s the difference between SEO and GEO?",
    a: "SEO helps your pages rank in traditional search results. GEO helps your brand be understood and referenced in AI-generated answers. They share the same foundations (technical health, useful content, trustworthy sources), so we treat them as one program rather than two.",
  },
  {
    q: "Can you guarantee rankings or AI citations?",
    a: "No, and be cautious of anyone who does. Search engines and AI systems make their own decisions. We improve the signals you can control, such as technical health, content quality, entity clarity and credibility, and we report on observable results against goals agreed up front.",
  },
  {
    q: "Who is Fyrn Media best suited for?",
    a: "Ambitious businesses that already have a website and want more qualified enquiries, better visibility or clarity on how AI is changing discovery. That is typically B2B and SaaS companies, e-commerce brands and service businesses.",
  },
  {
    q: "How does the free AI Visibility Audit work?",
    a: "Share your website and what you want to improve. We review how search engines and AI assistants currently surface your brand and send you a plain-English summary of strengths, gaps and next steps. There is no obligation to continue.",
  },
  {
    q: "How long does it take to see results?",
    a: "Some technical fixes show up within weeks. Content, authority and AI-answer visibility usually build over several months. We set realistic milestones during discovery and report progress against them, so you’re never guessing.",
  },
  {
    q: "How do we get started?",
    a: "Request the free audit or use Let’s Talk. We’ll learn about your goals, share what we see and recommend a sensible first step, which may be a single service rather than a full program. We have teams in London, New York and Singapore.",
  },
];

export function FAQ() {
  return (
    <section className="relative w-full border-b border-border bg-background-elevated/20 py-20 md:py-32">
      <Container size="wide">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-accent flex-shrink-0" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              FAQ
            </span>
          </div>
          <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground-muted leading-relaxed">
            Straightforward answers to the questions we hear most often.
          </p>
        </div>

        {/* Visible text for all answers - no click-to-load / accordion hidden text */}
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 divide-y md:divide-y-0 divide-border">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="pt-6 md:pt-0">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-accent font-semibold pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
