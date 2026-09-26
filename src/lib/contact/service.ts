import { ContactSubmission } from "./types";

export interface ContactSubmissionService {
  submit(data: ContactSubmission): Promise<{ delivered: boolean }>;
}

class ConfiguredContactSubmissionService implements ContactSubmissionService {
  async submit(_data: ContactSubmission) {
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) return { delivered: false };

    // Delivery provider integration belongs here. No provider is configured yet.
    return { delivered: false };
  }
}

export const contactSubmissionService = new ConfiguredContactSubmissionService();