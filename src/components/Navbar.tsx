import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { faceFocus, images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import EmailMenu from './ui/EmailMenu';
import LanguageToggle from './ui/LanguageToggle';
import Photo from './ui/Photo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-3 z-40 mx-auto mb-10 max-w-6xl px-4 pt-3 sm:px-6">
      <nav className="relative flex items-center justify-between gap-3 rounded-full border border-cream/10 bg-wine/85 p-2 shadow-xl shadow-black/30 backdrop-blur-md">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-full pr-3 transition hover:bg-cream/5"
          aria-label="Back to top"
        >
          <Photo src={images.avatar} alt={profile.name} face={faceFocus.avatar} className="size-11 shrink-0 rounded-full border-2 border-cream/70" />
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block truncate text-sm font-semibold">{profile.name}</span>
            <span className="block truncate text-[11px] text-cream/60">{t.hero.role}</span>
          </span>
        </a>

        <ul className="hidden items-center lg:flex">
          {t.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block rounded-full px-3.5 py-1.5 leading-tight transition hover:bg-cream/10">
                <span className="block text-sm font-semibold">{link.label}</span>
                <span className="block text-[11px] text-cream/55">{link.hint}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden sm:block">
            <EmailMenu
              align="right"
              ariaLabel="E-mail"
              className="grid size-11 place-items-center rounded-full border-2 border-cream/70 transition hover:bg-cream hover:text-wine"
            >
              <Mail className="size-5" />
            </EmailMenu>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full bg-cream/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <ul className="absolute inset-x-0 top-full mt-2 grid grid-cols-2 gap-2 rounded-3xl border border-cream/10 bg-wine p-3 shadow-xl lg:hidden">
            {t.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-cream/5 px-4 py-3 leading-tight"
                >
                  <span className="block text-sm font-semibold">{link.label}</span>
                  <span className="block text-[11px] text-cream/55">{link.hint}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
