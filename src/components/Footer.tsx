import { ArrowRight, Sparkles } from 'lucide-react';
import { contacts, images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './ui/Photo';
import Reveal from './ui/Reveal';
import EmailMenu from './ui/EmailMenu';
import SocialIcon from './ui/SocialIcon';

const iconClass = 'grid size-9 place-items-center rounded-full bg-cream/5 transition hover:bg-ruby';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="mx-auto max-w-6xl scroll-mt-32 px-4 pb-8 sm:px-6">
      <Reveal>
        <div className="relative grid items-center gap-8 rounded-[2.5rem] bg-gradient-to-br from-ruby via-wine to-wine-deep p-8 shadow-2xl sm:p-12 md:grid-cols-[1fr_auto]">
          <Sparkles className="absolute left-8 top-8 size-8 rotate-12 text-cream/30" aria-hidden />
          <div className="relative text-center md:text-left">
            <h2 className="text-3xl font-bold sm:text-5xl">
              {t.contact.title} <span className="font-serif italic text-cream">{t.contact.highlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/75 md:mx-0">{t.contact.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <EmailMenu
                placement="top"
                align="left"
                className="inline-flex max-w-full items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-bold text-wine-deep shadow-xl transition hover:-translate-y-0.5"
              >
                <span className="truncate">{profile.email}</span> <ArrowRight className="size-4 shrink-0" />
              </EmailMenu>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-5 py-3 text-sm font-semibold transition hover:bg-cream/10"
              >
                <SocialIcon type="linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mx-auto w-52 rotate-3 rounded-[2rem] bg-cream p-2 shadow-2xl transition hover:rotate-0 sm:w-60">
            <Photo
              src={images.contact}
              alt={profile.name}
              blend
              className="aspect-[4/5] rounded-[1.6rem]"
              imgClassName="object-[50%_15%]"
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-cream/10 bg-night/80 px-6 py-3 sm:flex-row sm:rounded-full">
        <p className="text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-2">
          {contacts.map((c) => (
            <li key={c.type}>
              {c.type === 'email' ? (
                <EmailMenu placement="top" align="right" ariaLabel={c.label} className={iconClass}>
                  <SocialIcon type={c.type} />
                </EmailMenu>
              ) : (
                <a href={c.href} target="_blank" rel="noreferrer" aria-label={c.label} className={iconClass}>
                  <SocialIcon type={c.type} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
