import Link from 'next/link';
import { Logo } from '@/components/logo';
import { releasesUrl, repoUrl, tagline } from '@/lib/shared';

const columns = [
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '/#features' },
      { text: 'API', href: '/#api' },
      { text: 'FAQ', href: '/#faq' },
      { text: 'Releases', href: releasesUrl },
    ],
  },
  {
    title: 'Docs',
    links: [
      { text: 'Installation', href: '/docs/installation' },
      { text: 'Create your first VPN', href: '/docs/first-vpn' },
      { text: 'API reference', href: '/docs/api' },
      { text: 'Troubleshooting', href: '/docs/troubleshooting' },
    ],
  },
  {
    title: 'Project',
    links: [
      { text: 'GitHub', href: repoUrl },
      { text: 'Issues', href: `${repoUrl}/issues` },
      { text: 'MIT License', href: `${repoUrl}/blob/main/LICENSE` },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-fd-muted-foreground">{tagline}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-fd-muted-foreground">
              {col.links.map((l) => (
                <li key={l.text}>
                  {l.href.startsWith('/') ? (
                    <Link href={l.href} className="transition-colors hover:text-fd-foreground">
                      {l.text}
                    </Link>
                  ) : (
                    <a href={l.href} className="transition-colors hover:text-fd-foreground">
                      {l.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <p className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-fd-muted-foreground sm:px-6">
          <a
            href="https://core.cro.ie/e-commerce/company/5802085"
            className="underline-offset-2 transition-colors hover:text-fd-foreground hover:underline"
          >
            Netta Technologies
          </a>{' '}
          · © 2026 Alper Karakoyun · Released under the MIT License.
        </p>
      </div>
    </footer>
  );
}
