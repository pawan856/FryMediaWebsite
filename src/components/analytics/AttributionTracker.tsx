"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { attributionStorageKey, readAttribution, SessionAttribution } from "@/lib/analytics/attribution";

export function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const existing = readAttribution(sessionStorage.getItem(attributionStorageKey));
    const searchParams = new URLSearchParams(window.location.search);
    const touch = { source: searchParams.get("utm_source") || undefined, medium: searchParams.get("utm_medium") || undefined, campaign: searchParams.get("utm_campaign") || undefined, term: searchParams.get("utm_term") || undefined, content: searchParams.get("utm_content") || undefined, landingPage: pathname };
    const attribution: SessionAttribution = existing ? { ...existing, lastTouch: touch } : { firstTouch: touch, lastTouch: touch, referrer: document.referrer.slice(0, 500) };
    sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution));
  }, [pathname]);

  return null;
}