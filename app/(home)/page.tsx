import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';
import {
  Activity,
  ArrowRight,
  BellRing,
  Blocks,
  CalendarClock,
  DatabaseBackup,
  Globe,
  KeyRound,
  Lock,
  QrCode,
  RefreshCcw,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { CopyCommand } from '@/components/home/copy-command';
import { BrowserFrame, Screenshot } from '@/components/home/screenshot';
import { LogoMark } from '@/components/logo';
import { installCommand, repoUrl } from '@/lib/shared';
import { cn } from '@/lib/cn';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <Hero />
      <Steps />
      <Features />
      <Api />
      <Ownership />
      <Faq />
      <FinalCta />
    </main>
  );
}

function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <p className="text-sm font-medium text-fd-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-fd-muted-foreground text-pretty sm:text-lg">{children}</p>}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-medium text-brand-foreground shadow-sm shadow-amber-500/20 transition hover:brightness-105"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-10 items-center gap-2 rounded-lg border bg-fd-background px-4 text-sm font-medium transition-colors hover:bg-fd-accent"
    >
      {children}
    </a>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_50%_at_50%_0%,--theme(--color-amber-400/0.18),transparent)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,--theme(--color-amber-400/0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[linear-gradient(to_right,--theme(--color-neutral-500/0.08)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-neutral-500/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <Container className="flex flex-col items-center text-center">
        <a
          href={repoUrl}
          className="inline-flex items-center gap-2 rounded-full border bg-fd-background/70 py-1 pr-3 pl-1 text-xs font-medium text-fd-muted-foreground backdrop-blur transition-colors hover:text-fd-foreground"
        >
          <span className="rounded-full bg-brand px-2 py-0.5 text-brand-foreground">Open source</span>
          MIT licensed · self-hosted
          <ArrowRight className="size-3" />
        </a>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Your own WireGuard VPN.{' '}
          <span className="bg-linear-to-br from-yellow-500 to-amber-600 bg-clip-text text-transparent dark:from-yellow-300 dark:to-amber-500">
            No config files.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-fd-muted-foreground text-pretty">
          Tunploy runs as a single Docker container on your Linux server. Spin up WireGuard servers,
          add devices with a QR code and see who is connected and how much they use, all from one
          web panel.
        </p>

        <div className="mt-8 w-full max-w-2xl">
          <CopyCommand command={installCommand} />
          <p className="mt-2.5 text-xs text-fd-muted-foreground">
            Any Linux with kernel 5.6 or newer · amd64 and arm64 · Docker is installed for you
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <PrimaryButton href="/docs">
            Get started <ArrowRight className="size-4" />
          </PrimaryButton>
          <SecondaryButton href={repoUrl}>
            <GitHubIcon className="size-4" /> View on GitHub
          </SecondaryButton>
        </div>
      </Container>

      <Container className="mt-16 max-w-7xl">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-8 bottom-1/2 -z-10 rounded-[3rem] bg-amber-400/15 blur-3xl dark:bg-amber-400/10"
          />
          <BrowserFrame>
            <Screenshot
              name="overview"
              alt="The Tunploy overview: six VPN servers, eighteen devices, twelve online and this month's traffic"
              priority
            />
          </BrowserFrame>
          <div className="absolute -right-2 -bottom-10 hidden w-[19%] overflow-hidden rounded-[1.75rem] border-4 border-fd-foreground/80 bg-fd-card shadow-2xl lg:block">
            <Screenshot
              name="mobile"
              alt="The overview on a phone"
              width={780}
              height={1688}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

const steps = [
  {
    title: 'Install',
    body: 'Run one command as root. It installs Docker if missing, checks the WireGuard kernel module, starts Tunploy and asks for your admin account.',
    code: 'curl -fsSL …/install.sh | sudo sh',
  },
  {
    title: 'Deploy a server',
    body: 'Open the panel, choose New server, give it a name and press Deploy. Each VPN runs in its own container on its own UDP port.',
    code: 'Servers → New server → Deploy',
  },
  {
    title: 'Scan and connect',
    body: 'Add a device and scan its QR code with the WireGuard app, or download the .conf for a laptop. It shows up as online within seconds.',
    code: 'Add peer → scan QR → Online',
  },
];

function Steps() {
  return (
    <section id="how-it-works" className="border-y bg-fd-card/40 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How it works" title="From a fresh VPS to a working VPN in minutes">
          You don&apos;t install WireGuard or write a config by hand. The tools ship inside
          Tunploy&apos;s image, and the kernel module is already part of Linux.
        </SectionHeading>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col rounded-2xl border bg-fd-background p-6">
              <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm text-fd-muted-foreground">{step.body}</p>
              <code className="mt-5 block truncate rounded-lg border bg-fd-muted/60 px-3 py-2 font-mono text-xs text-fd-muted-foreground">
                {step.code}
              </code>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ShotCard({
  icon: Icon,
  title,
  body,
  shot,
  alt,
  crop = 'absolute top-0 left-0 w-[150%]',
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
  shot: string;
  alt: string;
  // Where the screenshot sits in its window: zoomed in so the panel text stays legible.
  crop?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border bg-fd-card', className)}>
      <div className="p-6 pb-0">
        <FeatureIcon icon={Icon} />
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm text-fd-muted-foreground">{body}</p>
      </div>
      <div className="relative mt-6 ml-6 aspect-[16/9] flex-1 overflow-hidden rounded-tl-xl border-t border-l">
        <Screenshot name={shot} alt={alt} className={cn('h-auto max-w-none', crop)} />
      </div>
    </div>
  );
}

function FeatureIcon({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <span className="grid size-9 place-items-center rounded-lg bg-amber-400/15 text-amber-700 dark:text-amber-300">
      <Icon className="size-4.5" />
    </span>
  );
}

const smallFeatures = [
  {
    icon: CalendarClock,
    title: 'Limits and expiry',
    body: 'Turn devices off, give them a monthly data limit or an end date. Tunploy blocks them on time.',
  },
  {
    icon: Globe,
    title: 'HTTPS from the panel',
    body: 'Point a domain at the server and the panel gets its own Let’s Encrypt certificate, renewed on its own.',
  },
  {
    icon: ShieldCheck,
    title: 'Two-factor sign-in',
    body: 'Protect the panel with any authenticator app: Google Authenticator, 1Password, Aegis, Bitwarden.',
  },
  {
    icon: BellRing,
    title: 'Email notifications',
    body: 'Hear when a server goes down, a device hits its limit or a sign-in fails. Bursts arrive as one email.',
  },
  {
    icon: DatabaseBackup,
    title: 'Encrypted backups',
    body: 'One file with every server, key and setting. Download it, or ship it to any S3 bucket on a schedule.',
  },
  {
    icon: RefreshCcw,
    title: 'Updates that roll back',
    body: 'Update from the panel in about a minute. If the new version doesn’t start, the old one comes back.',
  },
  {
    icon: Terminal,
    title: 'A server-side CLI',
    body: 'Reset the admin password, restore a backup, follow logs or uninstall with the tunploy command.',
  },
  {
    icon: KeyRound,
    title: 'Scoped API keys',
    body: 'Let a billing backend or a bot create devices, with keys that can only do what you allowed.',
  },
];

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Features" title="Everything you need to run a VPN, nothing you don't">
          Tunploy handles the containers, keys, ports and firewall rules. You get a clean panel for
          the parts that matter.
        </SectionHeading>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          <ShotCard
            className="lg:col-span-3"
            icon={Server}
            title="One panel, many machines"
            body="Add another VPS by its SSH login and run VPN servers there too, say one in Frankfurt and one in New York. Nothing is installed on it but Docker, and host keys are pinned."
            shot="nodes"
            alt="The Nodes page with Frankfurt, New York and Singapore online"
          />
          <ShotCard
            className="lg:col-span-2"
            icon={QrCode}
            title="Devices by QR code"
            body="Add a device and scan it with the WireGuard app, or download its .conf."
            shot="qr"
            alt="A QR code for a device, ready to scan with the WireGuard app"
            crop="absolute top-1/2 left-1/2 w-[210%] -translate-x-1/2 -translate-y-1/2"
          />
          <ShotCard
            className="lg:col-span-2"
            icon={Activity}
            title="Live status and usage"
            body="See which devices are online, from which country, and their daily and monthly traffic."
            shot="server-detail"
            crop="absolute top-0 left-0 w-[210%]"
            alt="A server's peers with their status, location and traffic this month"
          />
          <ShotCard
            className="lg:col-span-3"
            icon={Blocks}
            title="An activity log for everything"
            body="Connections, changes and sign-ins in one place, including what an API key did on your behalf."
            shot="activity"
            alt="The activity log with connections, a failed sign-in and a backup"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {smallFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-fd-card p-6">
              <FeatureIcon icon={f.icon} />
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-fd-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const scopes = [
  ['devices:read', 'list devices, read their config and usage'],
  ['devices:write', 'create, change, turn off and delete devices'],
  ['servers:read', 'list servers and how many devices still fit'],
  ['events:read', 'read device, server and node events'],
];

function Api() {
  return (
    <section id="api" className="border-y bg-fd-card/40 py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-fd-primary">HTTP API</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Sell VPN access, or hand it out automatically
          </h2>
          <p className="mt-4 text-fd-muted-foreground text-pretty sm:text-lg">
            A site that sells VPN access, a Telegram bot, an HR tool that gives new staff a VPN:
            anything can manage devices through <code className="font-mono text-[0.9em]">/api/v1</code>{' '}
            with a key you scope in the panel.
          </p>
          <ul className="mt-8 space-y-3">
            {scopes.map(([scope, text]) => (
              <li key={scope} className="flex gap-3 text-sm">
                <code className="shrink-0 rounded-md border bg-fd-background px-2 py-0.5 font-mono text-xs">
                  {scope}
                </code>
                <span className="text-fd-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <SecondaryButton href="/docs/api">
              Read the API reference <ArrowRight className="size-4" />
            </SecondaryButton>
          </div>
        </div>

        <CodeWindow />
      </Container>
    </section>
  );
}

// Hand-coloured rather than highlighted at build time: it's one fixed snippet.
function CodeWindow() {
  const k = 'text-amber-600 dark:text-amber-300';
  const s = 'text-emerald-700 dark:text-emerald-300';
  const m = 'text-fd-muted-foreground';
  return (
    <div className="overflow-hidden rounded-2xl border bg-fd-background shadow-xl shadow-black/5 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b px-4 py-3 text-xs text-fd-muted-foreground">
        <Terminal className="size-3.5" /> Create a device for a customer
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
        <code>
          <span className={k}>curl</span> https://vpn.example.com/api/v1/devices \{'\n'}
          {'  '}-H <span className={s}>&quot;Authorization: Bearer tp_…&quot;</span> \{'\n'}
          {'  '}-H <span className={s}>&quot;Idempotency-Key: order-1042&quot;</span> \{'\n'}
          {'  '}-H <span className={s}>&quot;Content-Type: application/json&quot;</span> \{'\n'}
          {'  '}-d <span className={s}>&apos;{'{'}&quot;server_id&quot;: 1, &quot;external_id&quot;: &quot;user_123&quot;,</span>
          {'\n'}
          {'        '}
          <span className={s}>&quot;data_limit&quot;: 53687091200,</span>
          {'\n'}
          {'        '}
          <span className={s}>&quot;expires_at&quot;: &quot;2026-10-25T00:00:00Z&quot;{'}'}&apos;</span>
          {'\n\n'}
          <span className={m}># 201 Created</span>
          {'\n'}
          {'{'}
          {'\n'}
          {'  '}<span className={k}>&quot;id&quot;</span>: 42,{'\n'}
          {'  '}<span className={k}>&quot;server_id&quot;</span>: 1,{'\n'}
          {'  '}<span className={k}>&quot;external_id&quot;</span>: <span className={s}>&quot;user_123&quot;</span>,{'\n'}
          {'  '}<span className={k}>&quot;status&quot;</span>: <span className={s}>&quot;active&quot;</span>,{'\n'}
          {'  '}<span className={k}>&quot;config&quot;</span>: <span className={s}>&quot;[Interface]\nPrivateKey = …&quot;</span>
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  );
}

const ownership = [
  {
    icon: Lock,
    title: 'No sign-up page',
    body: 'The admin account can only be created on the server, so nobody who stumbles on the panel can claim it.',
  },
  {
    icon: KeyRound,
    title: 'Keys stay with you',
    body: 'API keys are stored as hashes and shown once. Devices can bring their own key pair, so the private key never reaches the panel.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backups you can read',
    body: 'Plain .tar.gz files, optionally sealed with AES-256-GCM and an argon2id passphrase. Restore on any new server.',
  },
  {
    icon: Globe,
    title: 'Quiet by default',
    body: 'Tunploy only reaches out to check GitHub for releases and to fetch a GeoIP database, and both can be turned off.',
  },
];

function Ownership() {
  return (
    <section id="security" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Yours, end to end" title="Your servers, your keys, your data">
          Tunploy is not a VPN provider. It is software you run on machines you control, and it is
          open source under the MIT license.
        </SectionHeading>
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ownership.map((o) => (
            <div key={o.title}>
              <FeatureIcon icon={o.icon} />
              <h3 className="mt-4 font-semibold">{o.title}</h3>
              <p className="mt-1.5 text-sm text-fd-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Is Tunploy free?',
    a: 'Yes. Tunploy is open source under the MIT license. You pay only for the servers you run it on.',
  },
  {
    q: 'What do I need to run it?',
    a: 'A Linux server with a public IP (amd64 or arm64) and Linux 5.6 or newer, such as Ubuntu 20.04+ or Debian 11+. You need root over SSH and a UDP port open for each VPN server, starting at 51820.',
  },
  {
    q: 'Do I have to install WireGuard myself?',
    a: 'No. The WireGuard tools ship inside Tunploy’s image and the kernel module is already part of Linux 5.6+. The install script only adds Docker if it is missing.',
  },
  {
    q: 'Can I run VPN servers on more than one machine?',
    a: 'Yes. Add each machine as a node with its SSH login. The panel adds its own key, installs Docker if needed and runs VPN servers there. Nothing else is installed on the node.',
  },
  {
    q: 'Do devices disconnect when I update?',
    a: 'No. VPN servers run in their own containers and keep running while the panel updates, so connected devices stay connected. If the new version fails to start, Tunploy rolls back on its own.',
  },
  {
    q: 'My server already runs nginx, Caddy or Traefik. Is that a problem?',
    a: (
      <>
        No. Install with <code className="font-mono text-[0.9em]">TUNPLOY_HTTPS=false</code>, point
        your proxy at <code className="font-mono text-[0.9em]">127.0.0.1:3000</code> and tell Tunploy
        which addresses your proxy connects from.{' '}
        <Link href="/docs/guides/https#behind-your-own-reverse-proxy" className="text-fd-primary underline underline-offset-2">
          See the guide
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do I move to a new server?',
    a: 'Install Tunploy there, connect the same S3 bucket and restore the newest backup. Every server, device and key comes back with it. Then point your DNS at the new address.',
  },
];

function Faq() {
  return (
    <section id="faq" className="border-t bg-fd-card/40 py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 divide-y rounded-2xl border bg-fd-background">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                {f.q}
                <span
                  aria-hidden="true"
                  className="grid size-6 shrink-0 place-items-center rounded-full border text-fd-muted-foreground transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-5 text-sm text-fd-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-fd-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_80%_at_50%_100%,--theme(--color-amber-400/0.18),transparent)]"
          />
          <div className="relative">
            <LogoMark className="mx-auto size-12 rounded-xl" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Your VPN is one command away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fd-muted-foreground">
              Run it on a fresh VPS, sign in, and create your first server. The whole thing takes a
              few minutes.
            </p>
            <div className="mx-auto mt-8 max-w-2xl">
              <CopyCommand command={installCommand} />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PrimaryButton href="/docs/installation">
                Installation guide <ArrowRight className="size-4" />
              </PrimaryButton>
              <SecondaryButton href={repoUrl}>
                <GitHubIcon className="size-4" /> Star on GitHub
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
