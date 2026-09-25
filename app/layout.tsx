import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Provider } from '@/components/provider';
import { appName, siteUrl, tagline } from '@/lib/shared';
import './global.css';

const sans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} · Self-hosted WireGuard VPN panel`,
    template: `%s · ${appName}`,
  },
  description: `${tagline} Spin up WireGuard servers, add devices by QR code and see who is connected, without touching a config file.`,
  keywords: ['WireGuard', 'VPN', 'self-hosted', 'control panel', 'Docker', 'open source'],
  openGraph: {
    type: 'website',
    siteName: appName,
    images: '/og.png',
  },
  twitter: { card: 'summary_large_image', images: '/og.png' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
