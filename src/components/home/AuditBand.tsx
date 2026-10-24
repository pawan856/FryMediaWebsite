"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AuditBand() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    improve: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to /audit prefilled with values
    const params = new URLSearchParams();
    if (formData.name) params.set("name", formData.name);
    if (formData.email) params.set("email", formData.email);
    if (formData.website) params.set("website", formData.website);
    if (formData.improve) params.set("message", formData.improve);
    window.location.href = `/audit?${params.toString()}#request-audit`;
  };

  return (
    <section className="relative w-full border-b border-border bg-background-elevated/40 py-20 md:py-32">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="block w-6 h-px bg-accent" />
              <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold">
                Free AI Visibility Audit
              </span>
            </div>
            
            <h2 className="text-display-lg font-bold tracking-tighter text-foreground">
              See how visible you are today, in search and in AI answers.
            </h2>
            
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
              Our free AI Visibility Audit looks at how search engines and AI assistants currently find, understand and describe your brand. You’ll get a plain-English summary of what’s working, what’s holding you back and what to fix first.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">
                What you’ll get
              </h3>
              <ul className="space-y-2 text-sm text-foreground-muted list-disc list-inside">
                <li>How your brand appears for your priority questions in search and AI assistants</li>
                <li>Technical and content gaps that are blocking discovery</li>
                <li>How clearly your brand is defined across the web (entity signals)</li>
                <li>A prioritized shortlist of next steps</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 bg-background border border-border rounded-sm p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="audit-name" className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                  Name *
                </label>
                <input
                  id="audit-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="audit-email" className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                  Work email *
                </label>
                <input
                  id="audit-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="audit-website" className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                  Website URL *
                </label>
                <input
                  id="audit-website"
                  type="url"
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="audit-improve" className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                  What would you like to improve? (optional)
                </label>
                <textarea
                  id="audit-improve"
                  rows={3}
                  value={formData.improve}
                  onChange={(e) => setFormData({ ...formData, improve: e.target.value })}
                  placeholder="Tell us what discovery challenges or goals you have in mind"
                  className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-accent py-3.5 px-6 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                <span>Request My Free Audit</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <p className="text-xs text-foreground-subtle text-center pt-2">
                Your details are used only to prepare your audit. See our{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
