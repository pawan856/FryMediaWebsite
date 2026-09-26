import { LeadInput, LeadQuality } from "./types";

const personalEmailDomains = new Set(["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com"]);

export function scoreLead(input: LeadInput): LeadQuality {
  let score = 0;
  if (input.service) score += 1;
  if (input.company) score += 1;
  if (input.website) score += 1;
  if (input.budget) score += 1;
  if (input.message.length >= 120) score += 1;
  const domain = input.email.split("@")[1]?.toLowerCase();
  if (domain && !personalEmailDomains.has(domain)) score += 1;
  return score >= 5 ? "high" : score >= 3 ? "medium" : "low";
}

export function isBusinessEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && !personalEmailDomains.has(domain));
}

export const leadQualityRules = "Quality is transparent: service, company, website, budget, message detail, and a non-personal email each contribute one signal. 5+ signals is high, 3-4 is medium, otherwise low.";