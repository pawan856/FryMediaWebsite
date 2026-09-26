import { Lead } from "./types";

export function newLeadNotificationText(lead: Lead) {
  return [
    "New FyrnMedia enquiry",
    `Name: ${lead.name}`,
    `Company: ${lead.company || "Not provided"}`,
    `Service: ${lead.service}`,
    `Website: ${lead.website || "Not provided"}`,
    `Budget: ${lead.budget || "Not provided"}`,
    `Source: ${lead.attribution.source}`,
  ].join("\n");
}

export function leadConfirmationText() {
  return "Thanks for reaching out to FyrnMedia. We have your message and will review it shortly.";
}