import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Tunploy';
export const tagline = 'A self-hosted control panel for your own WireGuard VPN servers.';

// Where this site is served from. Set NEXT_PUBLIC_SITE_URL at build time for correct
// canonical links and social previews.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const repoUrl = 'https://github.com/kwa0x2/tunploy';
export const releasesUrl = `${repoUrl}/releases`;
export const installCommand =
  'curl -fsSL https://raw.githubusercontent.com/kwa0x2/tunploy/main/install.sh | sudo sh';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// The repository holding this site, for "edit on GitHub" links on docs pages.
export const gitConfig = {
  user: 'kwa0x2',
  repo: 'tunploy-web',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
