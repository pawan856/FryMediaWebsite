import { leadRepository } from "./repository";
import { scoreLead } from "./scoring";
import { canTransitionLeadStatus } from "./validation";
import { Lead, LeadAttribution, LeadInput, LeadStatus } from "./types";

export interface LeadService {
  createLead(input: Omit<LeadInput, "quality" | "status" | "notificationStatus">): Promise<{ persisted: boolean; lead?: Lead }>;
  getLead(id: string): Promise<Lead | null>;
  listLeads(): Promise<Lead[]>;
  updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | null>;
}

class DefaultLeadService implements LeadService {
  async createLead(input: Omit<LeadInput, "quality" | "status" | "notificationStatus">) {
    const lead: Lead = {
      ...input,
      id: crypto.randomUUID(),
      quality: scoreLead(input),
      status: "new",
      createdAt: new Date().toISOString(),
      notificationStatus: "pending",
    };
    return leadRepository.create(lead);
  }

  getLead(id: string) { return leadRepository.get(id); }
  listLeads() { return leadRepository.list(); }

  async updateLeadStatus(id: string, status: LeadStatus) {
    const existing = await leadRepository.get(id);
    if (!existing || !canTransitionLeadStatus(existing.status, status)) return null;
    return leadRepository.updateStatus(id, status);
  }
}

export const leadService = new DefaultLeadService();

export function getLeadSource(landingPage: string): LeadAttribution["source"] {
  if (landingPage === "/") return "homepage";
  if (landingPage.startsWith("/about")) return "about";
  if (landingPage.startsWith("/services/seo")) return "seo";
  if (landingPage.startsWith("/services/geo")) return "geo";
  if (landingPage.startsWith("/services")) return "services";
  if (landingPage.startsWith("/work")) return "work";
  if (landingPage.startsWith("/insights")) return "insights";
  if (landingPage.startsWith("/contact")) return "contact";
  return "other";
}

export function inferReferrer(referrer?: string): LeadAttribution["referrer"] {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host.includes("google.") || host.includes("bing.")) return "google";
    if (host.includes("linkedin.")) return "linkedin";
  } catch { return "other"; }
  return "other";
}