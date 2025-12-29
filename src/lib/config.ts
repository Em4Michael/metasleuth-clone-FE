// src/lib/config.ts

export const ENV_VARIABLES = {
  OTEL_BASE_URL: 'OTEL_BASE_URL', // this is the env var name
  // Add other keys the project uses, e.g.:
  // API_BASE_URL: 'API_BASE_URL',
  // etc.
} as const;