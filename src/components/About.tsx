import { ArrowRight } from 'lucide-react';
import { contacts, faceFocus, images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './ui/Photo';
import Reveal from './ui/Reveal';
import EmailMenu from './ui/EmailMenu';
import SectionTitle from './ui/SectionTitle';
import SocialIcon from './ui/SocialIcon';

const blob = 'rounded-[38%_62%_55%_45%/45%_40%_60%_55%]';
const tileClass =
  'flex w-full flex-col items-center gap-1 rounded-2xl border border-wine/15 px-1 py-3 text-center transition hover:-translate-y-1 hover:bg-wine hover:text-cream';

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid items-center gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="rounded-[2.5rem] bg-cream p-6 text-wine-deep shadow-2xl shadow-black/40 sm:p-10">
            <SectionTitle eyebrow={about.eyebrow} title={about.title} highlight={about.highlight} tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-mocha">{about.text}</p>

            <dl className="mt-6 grid gap-2 sm:grid-cols-2">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`rounded-2xl px-4 py-3 ${i % 3 === 0 ? 'bg-wine text-cream' : 'border border-wine/20'}`}
                >
                  <dt className={`text-[11px] uppercase tracking-wider ${i % 3 === 0 ? 'text-cream/60' : 'text-mocha'}`}>
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative lg:col-span-5 lg:-ml-16">
          <div className="absolute inset-6 -z-10 rounded-full bg-ruby/40 blur-3xl" />
          <div className={`mx-auto max-w-sm rotate-3 border-8 border-wine shadow-2xl transition duration-500 hover:rotate-0 ${blob}`}>
            <Photo
              src={images.about}
              alt={profile.name}
              blend
              className={`aspect-square ${blob}`}
              imgClassName="origin-[50%_8%] scale-[1.6]"
            />
          </div>
        </Reveal>
      </div>

      {/* Profile-style contact card, offset to break the grid */}
      <Reveal delay={100} className="mt-8 lg:-mt-6 lg:ml-auto lg:mr-10 lg:max-w-xl">
        <div className="rounded-[2.5rem] bg-wine p-3 shadow-2xl sm:p-4">
          <div className="rounded-[2rem] bg-cream p-5 text-wine-deep sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-bold sm:text-2xl">{about.findMe}</p>
                <p className="text-sm text-mocha">{about.findMeSub}</p>
              </div>
              <Photo src={images.avatar} alt="" face={faceFocus.avatar} className="size-14 shrink-0 rounded-full ring-4 ring-wine/30" />
            </div>
            <ul className="mt-5 grid grid-cols-3 gap-2">
              {contacts.map((c) => (
                <li key={c.type}>
                  {c.type === 'email' ? (
                    <EmailMenu align="right" className={tileClass}>
                      <SocialIcon type={c.type} className="size-5" />
                      <span className="text-[11px] font-medium">{c.label}</span>
                    </EmailMenu>
                  ) : (
                    <a href={c.href} target="_blank" rel="noreferrer" className={tileClass}>
                      <SocialIcon type={c.type} className="size-5" />
                      <span className="text-[11px] font-medium">{c.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 flex gap-2 px-1">
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cream/90 py-2.5 text-sm font-semibold text-wine-deep transition hover:bg-cream"
            >
              {about.letsTalk} <ArrowRight className="size-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-cream/90 py-2.5 text-sm font-semibold text-wine-deep transition hover:bg-cream"
            >
              {about.seeWork}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
