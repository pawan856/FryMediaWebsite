import { ContactBudget, ContactService } from "@/lib/contact/types";
import { MarketCode } from "@/lib/markets/types";

export const leadStatuses = ["new", "contacted", "qualified", "proposal", "won", "lost"] as const;
export type LeadStatus = (typeof leadStatuses)[number];
export type LeadQuality = "low" | "medium" | "high";
export type LeadSource = "homepage" | "about" | "services" | "seo" | "geo" | "ai_visibility_audit" | "industries" | "tools" | "work" | "insights" | "contact" | "other";

export interface LeadAttribution {
  source: LeadSource;
  firstTouch: { source?: string; medium?: string; campaign?: string; term?: string; content?: string; landingPage: string };
  lastTouch: { source?: string; medium?: string; campaign?: string; term?: string; content?: string; landingPage: string };
  referrer?: "google" | "linkedin" | "direct" | "other";
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  website: string;
  service: ContactService;
  market: MarketCode;
  message: string;
  budget: ContactBudget | "";
  attribution: LeadAttribution;
  quality: LeadQuality;
  status: LeadStatus;
  createdAt: string;
  notificationStatus: "pending" | "sent" | "failed";
  notes?: string[];
}

export interface LeadActivity {
  type: "lead_created" | "status_changed" | "note_added" | "email_sent";
  createdAt: string;
  status?: LeadStatus;
}

export interface LeadInput extends Omit<Lead, "id" | "quality" | "status" | "createdAt" | "notificationStatus"> {}