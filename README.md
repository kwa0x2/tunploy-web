# tunploy-web

The website and documentation for [Tunploy](https://github.com/kwa0x2/tunploy), a self-hosted control panel for your own WireGuard VPN servers.

Built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev), exported as a static site.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
```

```sh
npm run lint
npm run types:check
```

## Build

```sh
NEXT_PUBLIC_SITE_URL=https://tunploy.example.com npm run build
```

The site is written to `out/` as plain HTML, CSS and JS, so any static host works: GitHub Pages, Cloudflare Pages, Netlify, Vercel, or nginx. `NEXT_PUBLIC_SITE_URL` is used for canonical links and social previews.

## Layout

| Path | What it is |
| --- | --- |
| `app/(home)/page.tsx` | The landing page |
| `content/docs/` | The documentation, one MDX file per page; `meta.json` sets the sidebar order |
| `public/screenshots/` | Panel screenshots, in a light and a dark take each |
| `lib/shared.ts` | Site name, URLs and the install command |

Docs pages can show a panel screenshot that follows the reader's theme:

```mdx
<PanelShot name="backups" alt="Settings → Backups" />
```

The screenshots show the real panel UI with demo data from documentation IP ranges (RFC 5737), not a live installation.
