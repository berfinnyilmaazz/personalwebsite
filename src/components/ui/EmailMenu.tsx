import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Copy, Mail, SquareArrowOutUpRight } from 'lucide-react';
import { profile } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';

type EmailMenuProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  placement?: 'top' | 'bottom';
  align?: 'left' | 'center' | 'right';
};

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

const alignClass = {
  left: 'left-0',
  center: 'left-1/2 -translate-x-1/2',
  right: 'right-0',
};

/**
 * A plain mailto: link does nothing on machines without a default mail app,
 * so the email trigger offers Gmail, mailto and copy-to-clipboard instead.
 */
export default function EmailMenu({ children, className = '', ariaLabel, placement = 'bottom', align = 'center' }: EmailMenuProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API needs a secure context; fall back to a hidden textarea.
      const area = document.createElement('textarea');
      area.value = profile.email;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const item =
    'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm font-medium text-wine-deep transition hover:bg-wine hover:text-cream';

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 w-60 rounded-2xl border border-wine/15 bg-cream p-1.5 shadow-2xl shadow-black/40 ${alignClass[align]} ${
            placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
        >
          <p className="truncate px-3 pb-1 pt-1.5 text-[11px] text-mocha">{profile.email}</p>
          <a role="menuitem" href={gmailUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className={item}>
            <SquareArrowOutUpRight className="size-4 shrink-0" /> {t.emailMenu.gmail}
          </a>
          <a role="menuitem" href={`mailto:${profile.email}`} onClick={() => setOpen(false)} className={item}>
            <Mail className="size-4 shrink-0" /> {t.emailMenu.app}
          </a>
          <button role="menuitem" type="button" onClick={copy} className={item}>
            {copied ? <Check className="size-4 shrink-0" /> : <Copy className="size-4 shrink-0" />}
            {copied ? t.emailMenu.copied : t.emailMenu.copy}
          </button>
        </div>
      )}
    </div>
  );
}
