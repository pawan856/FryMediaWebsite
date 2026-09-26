import { Lead, LeadInput, LeadStatus } from "./types";

export interface LeadRepository {
  create(lead: Lead): Promise<{ persisted: boolean; lead?: Lead }>;
  get(id: string): Promise<Lead | null>;
  list(): Promise<Lead[]>;
  updateStatus(id: string, status: LeadStatus): Promise<Lead | null>;
}

/** Replace with a database-backed repository before production lead capture. */
export const leadRepository: LeadRepository = {
  async create(_lead) { return { persisted: false }; },
  async get(_id) { return null; },
  async list() { return []; },
  async updateStatus(_id, _status) { return null; },
};