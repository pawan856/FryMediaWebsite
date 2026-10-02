"use client";

import { useEffect } from "react";
import type { AnalyticsEvent } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";

export function ContentViewTracker({ event, page }: { event: AnalyticsEvent; page: string }) {
  useEffect(() => {
    track(event, { page });
  }, [event, page]);

  return null;
}