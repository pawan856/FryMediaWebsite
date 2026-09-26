import { LeadInput } from "./types";

export interface LeadDuplicateGuard {
  isRecentDuplicate(input: Pick<LeadInput, "email" | "message">): Promise<boolean>;
}

/** Back this with a short-lived shared store in production; never persist raw messages for dedupe. */
export const leadDuplicateGuard: LeadDuplicateGuard = {
  async isRecentDuplicate(_input) { return false; },
};