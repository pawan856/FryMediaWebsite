import { Lead } from "./types";
import { leadConfirmationText, newLeadNotificationText } from "./emailTemplates";

export interface LeadNotificationService {
  notifyBusiness(lead: Lead): Promise<boolean>;
  confirmLead(lead: Lead): Promise<boolean>;
}

export const leadNotificationService: LeadNotificationService = {
  async notifyBusiness(_lead) {
    void newLeadNotificationText(_lead);
    return false;
  },
  async confirmLead(_lead) {
    void leadConfirmationText();
    return false;
  },
};