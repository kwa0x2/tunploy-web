import { createOpenAPI } from 'fumadocs-openapi/server';

// Synced from the tunploy repo with `npm run api:sync`.
export const openapi = createOpenAPI({
  input: ['./openapi/tunploy.json'],
});
