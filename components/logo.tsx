import { cn } from '@/lib/cn';

// The same mark as the panel's, so the site and the product look like one thing.
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid size-7 shrink-0 place-items-center rounded-lg bg-linear-to-br from-yellow-300 to-amber-500 text-yellow-950 shadow-sm shadow-amber-500/30',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[70%]" aria-hidden="true">
        <path
          d="M4 8.5c4-3 12-3 16 0M6.5 13c3-2.2 8-2.2 11 0M12 18.5v.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <LogoMark />
      <span className="text-base font-semibold tracking-tight">Tunploy</span>
    </span>
  );
}
