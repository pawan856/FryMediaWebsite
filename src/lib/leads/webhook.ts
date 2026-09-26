import { Lead } from "./types";

export interface LeadWebhook {
  send(lead: Lead): Promise<boolean>;
}

export const leadWebhook: LeadWebhook = {
  async send(_lead) {
    return false;
  },
};