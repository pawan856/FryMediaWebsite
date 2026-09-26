export interface SearchConsoleConfig {
  connected: boolean;
  propertyUrl?: string;
}

export const searchConsoleConfig: SearchConsoleConfig = {
  connected: Boolean(process.env.SEARCH_CONSOLE_PROPERTY_URL && process.env.SEARCH_CONSOLE_CLIENT_EMAIL && process.env.SEARCH_CONSOLE_PRIVATE_KEY),
  propertyUrl: process.env.SEARCH_CONSOLE_PROPERTY_URL,
};