"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { attributionStorageKey, readAttribution, SessionAttribution } from "@/lib/analytics/attribution";

export function AttributionTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const existing = readAttribution(sessionStorage.getItem(attributionStorageKey));
    const touch = { source: searchParams.get("utm_source") || undefined, medium: searchParams.get("utm_medium") || undefined, campaign: searchParams.get("utm_campaign") || undefined, term: searchParams.get("utm_term") || undefined, content: searchParams.get("utm_content") || undefined, landingPage: pathname };
    const attribution: SessionAttribution = existing ? { ...existing, lastTouch: touch } : { firstTouch: touch, lastTouch: touch, referrer: document.referrer.slice(0, 500) };
    sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution));
  }, [pathname, searchParams]);

  return null;
}