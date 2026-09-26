import { contactBudgets, contactServices } from "@/lib/contact/types";
import { leadStatuses, LeadStatus } from "./types";

export function validateLeadStatus(status: string): status is LeadStatus {
  return leadStatuses.includes(status as LeadStatus);
}

export function canTransitionLeadStatus(from: LeadStatus, to: LeadStatus) {
  if (from === to) return true;
  if (from === "new") return to === "contacted" || to === "lost";
  if (from === "contacted") return to === "qualified" || to === "lost";
  if (from === "qualified") return to === "proposal" || to === "lost";
  if (from === "proposal") return to === "won" || to === "lost";
  return false;
}

export function validateLeadInput(input: { service: string; budget: string }) {
  return contactServices.includes(input.service as (typeof contactServices)[number]) && (!input.budget || contactBudgets.includes(input.budget as (typeof contactBudgets)[number]));
}