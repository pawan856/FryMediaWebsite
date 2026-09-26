export interface TouchAttribution {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  landingPage: string;
}

export interface SessionAttribution {
  firstTouch: TouchAttribution;
  lastTouch: TouchAttribution;
  referrer?: string;
}

export const attributionStorageKey = "fyrn:attribution";

export function readAttribution(value: string | null): SessionAttribution | null {
  if (!value) return null;
  try { return JSON.parse(value) as SessionAttribution; } catch { return null; }
}