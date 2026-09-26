export interface ContactRateLimiter {
  check(identifier: string): Promise<{ allowed: boolean; retryAfter?: number }>;
  checkEmail(email: string): Promise<{ allowed: boolean; retryAfter?: number }>;
}

/** Connect this interface to a shared store such as Redis before production deployment. */
export const contactRateLimiter: ContactRateLimiter = {
  async check(_identifier) {
    return { allowed: true };
  },
  async checkEmail(_email) {
    return { allowed: true };
  },
};