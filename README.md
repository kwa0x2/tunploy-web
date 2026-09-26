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

## API reference

`content/docs/api/reference/` is generated from Tunploy's OpenAPI description; don't edit it by hand. When the API changes, pull the new description and regenerate:

```sh
npm run api:sync                  # from github.com/kwa0x2/tunploy, branch main
npm run api:sync -- ../tunploy    # or from a local checkout
```

This rewrites `openapi/tunploy.json` (and `public/openapi.json`, offered as a download) and the reference pages; commit the result. The Insomnia collection in `public/tunploy-insomnia.json` is a copy of the tunploy repo's `docs/insomnia.json`.

## Deploy with Dokploy

The repository has a `Dockerfile` that builds the site and serves it with nginx on port 80.

1. In Dokploy, create an **Application** and connect this GitHub repository, branch `main`.
2. Set **Build Type** to **Dockerfile** (path `Dockerfile`).
3. On the **Environment** tab, add `NEXT_PUBLIC_SITE_URL=https://your-domain` as a build-time argument (build args). The Dockerfile reads it as `ARG`; without it the site builds with `localhost` in its social previews.
4. Under **Domains**, add your domain with **Container Port** `80` and HTTPS on.
5. Press **Deploy**. With auto-deploy on, every push to `main` redeploys.

Any other Docker host works the same way:

```sh
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://tunploy.example.com -t tunploy-web .
docker run -d -p 8080:80 tunploy-web
```

## Layout

| Path | What it is |
| --- | --- |
| `app/(home)/page.tsx` | The landing page |
| `content/docs/` | The documentation, one MDX file per page; `meta.json` sets the sidebar order |
| `public/screenshots/` | Panel screenshots, in a light and a dark take each |
| `lib/shared.ts` | Site name, URLs and the install command |
| `openapi/tunploy.json` | The API description the reference pages render from |
| `scripts/sync-openapi.mjs` | Pulls the API description and regenerates the reference |

Docs pages can show a panel screenshot that follows the reader's theme:

```mdx
<PanelShot name="backups" alt="Settings → Backups" />
```

The screenshots show the real panel UI with demo data from documentation IP ranges (RFC 5737), not a live installation.
