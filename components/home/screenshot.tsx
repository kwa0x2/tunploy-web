import Image from 'next/image';
import { cn } from '@/lib/cn';

// Panel screenshots come in a light and a dark take; show the one matching the site theme.
export function Screenshot({
  name,
  alt,
  width = 2400,
  height = 1500,
  className,
  priority,
}: {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const common = { alt, width, height, priority, sizes: '(min-width: 1024px) 1100px, 100vw' };
  return (
    <>
      <Image
        src={`/screenshots/${name}-light.webp`}
        {...common}
        className={cn('dark:hidden', className)}
      />
      <Image
        src={`/screenshots/${name}-dark.webp`}
        {...common}
        className={cn('hidden dark:block', className)}
      />
    </>
  );
}

export function BrowserFrame({
  url = 'vpn.example.com',
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border bg-fd-card shadow-2xl shadow-black/10 dark:shadow-black/50',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b bg-fd-muted/60 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-fd-foreground/15" />
          <span className="size-2.5 rounded-full bg-fd-foreground/15" />
          <span className="size-2.5 rounded-full bg-fd-foreground/15" />
        </div>
        <div className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-1.5 rounded-md bg-fd-background/80 px-3 py-1 text-xs text-fd-muted-foreground">
          <svg viewBox="0 0 16 16" className="size-3" fill="currentColor" aria-hidden="true">
            <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z" />
          </svg>
          {url}
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
