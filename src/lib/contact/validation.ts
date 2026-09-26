import { contactBudgets, contactServices, ContactFormData, ContactSubmission } from "./types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactFieldNames = [
  "name",
  "email",
  "company",
  "website",
  "service",
  "message",
  "budget",
  "website_confirm",
  "landingPage",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmTerm",
  "utmContent",
  "referrer",
  "firstTouch",
  "lastTouch",
] as const;

export function validateContactPayload(
  input: unknown
): { success: true; data: ContactSubmission } | { success: false; errors: Record<string, string> } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { success: false, errors: { form: "Please submit the form again." } };
  }

  const record = input as Record<string, unknown>;
  const unexpected = Object.keys(record).filter(
    (key) => !contactFieldNames.includes(key as (typeof contactFieldNames)[number])
  );
  if (unexpected.length) {
    return { success: false, errors: { form: "Please submit the form again." } };
  }

  const stringValue = (key: string) => (typeof record[key] === "string" ? record[key].trim() : "");
  const name = stringValue("name");
  const email = stringValue("email");
  const company = stringValue("company");
  const website = stringValue("website");
  const service = stringValue("service");
  const message = stringValue("message");
  const budget = stringValue("budget");
  const websiteConfirm = stringValue("website_confirm");
  const landingPage = stringValue("landingPage").slice(0, 300);
  const utmSource = stringValue("utmSource").slice(0, 120);
  const utmMedium = stringValue("utmMedium").slice(0, 120);
  const utmCampaign = stringValue("utmCampaign").slice(0, 160);
  const utmTerm = stringValue("utmTerm").slice(0, 160);
  const utmContent = stringValue("utmContent").slice(0, 160);
  const referrer = stringValue("referrer").slice(0, 500);
  const firstTouch = stringValue("firstTouch").slice(0, 1000);
  const lastTouch = stringValue("lastTouch").slice(0, 1000);
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email || !emailPattern.test(email)) errors.email = "Please enter a valid work email.";
  if (website) {
    try {
      const parsed = new URL(website);
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
    } catch {
      errors.website = "Please enter a valid website URL.";
    }
  }
  if (!contactServices.includes(service as ContactSubmission["service"])) {
    errors.service = "Please select what you need help with.";
  }
  if (message.length < 20) errors.message = "Please share a little more about what you need.";
  if (message.length > 5000) errors.message = "Please keep your message under 5,000 characters.";
  if (budget && !contactBudgets.includes(budget as Exclude<ContactSubmission["budget"], "">)) {
    errors.budget = "Please select a valid budget range.";
  }

  if (Object.keys(errors).length) return { success: false, errors };
  return { success: true, data: { name, email, company, website, service: service as ContactSubmission["service"], message, budget: budget as ContactSubmission["budget"], landingPage, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, referrer, firstTouch, lastTouch } };
}

export function validateContactForm(data: ContactFormData) {
  return validateContactPayload(data);
}