"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";

function getHttpUrl(value: string) {
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  const url = new URL(candidate);
  if (!url.hostname.includes(".") || url.username || url.password) throw new Error("Enter a valid website domain.");
  return url;
}

export function ToolsInterface() {
  const [brandDomain, setBrandDomain] = useState("");
  const [robotsDomain, setRobotsDomain] = useState("");
  const [visibilityMessage, setVisibilityMessage] = useState("");
  const [robotsUrl, setRobotsUrl] = useState("");
  const [error, setError] = useState("");

  const requestVisibilityReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const url = getHttpUrl(brandDomain);
      track(analyticsEvents.toolStarted, { page: "/tools", source: "ai_search_visibility_checker" });
      setBrandDomain(url.toString());
      setVisibilityMessage(`No scan was run for ${url.hostname}. Live search-source integrations are not connected, so this tool does not generate a score or claim results.`);
    } catch {
      setError("Enter a valid website domain.");
    }
  };

  const openRobotsFile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const url = getHttpUrl(robotsDomain);
      const robots = new URL("/robots.txt", url.origin);
      track(analyticsEvents.toolStarted, { page: "/tools", source: "robots_txt_checker" });
      setRobotsUrl(robots.toString());
    } catch {
      setError("Enter a valid website domain.");
    }
  };

  const inputClass = "mt-2 min-h-12 w-full border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent";

  return <div className="grid gap-x-12 md:grid-cols-2">
    <section className="border-t border-border py-7 md:py-9" aria-labelledby="visibility-checker-heading">
      <p className="text-[10px] font-mono uppercase tracking-widest text-accent">Tool 01 / AI Search</p>
      <h2 id="visibility-checker-heading" className="mt-3 text-heading-lg font-semibold text-foreground">AI Search Visibility Checker</h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">Prepare a brand review around your domain. A live source-checking API is not connected yet, so no visibility score or scan result is fabricated.</p>
      <form onSubmit={requestVisibilityReview} className="mt-6">
        <label htmlFor="brand-domain" className="text-sm font-medium text-foreground">Website domain</label>
        <input id="brand-domain" type="text" value={brandDomain} onChange={(event) => setBrandDomain(event.target.value)} placeholder="example.com" required className={inputClass} />
        <button type="submit" className="group mt-4 inline-flex min-h-11 items-center gap-2 bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">Prepare visibility review <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></button>
      </form>
      {visibilityMessage && <div className="mt-5 border-l-2 border-accent bg-background-elevated/50 p-4" role="status"><p className="text-sm leading-relaxed text-foreground-muted">{visibilityMessage}</p><Link href={`/contact?service=ai_visibility_audit&website=${encodeURIComponent(brandDomain.trim())}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Request a real audit <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>}
    </section>

    <section className="border-t border-border py-7 md:py-9" aria-labelledby="robots-checker-heading">
      <p className="text-[10px] font-mono uppercase tracking-widest text-accent">Tool 02 / Crawling</p>
      <h2 id="robots-checker-heading" className="mt-3 text-heading-lg font-semibold text-foreground">AI Crawler / robots.txt Checker</h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">Open the actual robots.txt file for a domain and review its crawler directives. This does not test crawler behavior or guarantee indexing.</p>
      <form onSubmit={openRobotsFile} className="mt-6">
        <label htmlFor="robots-domain" className="text-sm font-medium text-foreground">Website domain</label>
        <input id="robots-domain" type="text" value={robotsDomain} onChange={(event) => setRobotsDomain(event.target.value)} placeholder="example.com" required className={inputClass} />
        <button type="submit" className="group mt-4 inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Open robots.txt <ExternalLink className="h-4 w-4" aria-hidden="true" /></button>
      </form>
      {robotsUrl && <div className="mt-5 border-l-2 border-accent bg-background-elevated/50 p-4" role="status"><p className="text-sm text-foreground-muted">Open the domain’s published robots.txt file:</p><a href={robotsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex break-all text-sm font-medium text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{robotsUrl}</a></div>}
    </section>
    {error && <p className="mt-4 text-sm text-accent md:col-span-2" role="alert">{error}</p>}
  </div>;
}