'use client';
import { createOpenAPIPage } from 'fumadocs-openapi/ui';

// The panel's API sends no CORS headers and keys belong on a server, so there is no
// in-browser playground; each operation shows ready-to-copy requests instead.
export const APIPage = createOpenAPIPage({
  playground: { enabled: false },
});
