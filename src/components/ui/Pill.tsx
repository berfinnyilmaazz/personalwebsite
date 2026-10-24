import type { ReactNode } from 'react';

export default function Pill({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  const styles =
    tone === 'dark'
      ? 'border-ruby/30 bg-ruby/10 text-cream/80'
      : 'border-wine/20 bg-wine/10 text-wine';
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      <span className="size-1.5 rounded-full bg-ruby" />
      {children}
    </span>
  );
}
