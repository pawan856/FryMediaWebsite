export type DashboardRole = "admin" | "marketing" | "viewer";

/** Authentication is intentionally absent. Never expose a dashboard until this guard is backed by real auth. */
export function canAccessDashboard(_role?: DashboardRole) {
  return false;
}