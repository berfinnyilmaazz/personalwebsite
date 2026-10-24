import { Mail, MapPin } from 'lucide-react';
import { faceFocus, images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './ui/Photo';
import Pill from './ui/Pill';
import SocialIcon from './ui/SocialIcon';

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section id="top" className="relative grid scroll-mt-32 items-start gap-6 lg:grid-cols-12">
      {/* Collage: cream frame + paper image card + floating stickers */}
      <div className="relative lg:col-span-7">
        <div className="pointer-events-none absolute -left-10 -top-10 size-72 rounded-full border border-ruby/20 sm:size-96" />
        <div className="pointer-events-none absolute -left-2 -top-2 size-56 rounded-full border border-ruby/10 sm:size-80" />

        <div className="relative rounded-[2.5rem] bg-cream p-3 shadow-2xl shadow-black/40 sm:p-4">
          <Photo
            src={images.hero}
            alt={`${profile.name} — 3D character with a laptop`}
            blend
            className="aspect-[4/3.6] w-full rounded-[2rem] sm:aspect-[4/3]"
            imgClassName="object-[50%_15%]"
          />

          <div className="absolute -bottom-8 left-6 w-28 -rotate-6 rounded-3xl bg-wine p-2 shadow-xl animate-float sm:left-8 sm:w-36">
            <Photo src={images.heroSmall} alt="" face={faceFocus.heroSmall} className="aspect-square rounded-2xl" />
          </div>

          <div className="absolute -right-2 top-6 rotate-3 rounded-2xl bg-wine-deep px-4 py-3 shadow-xl sm:-right-6">
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="flex items-center gap-1 text-[11px] text-cream/60">
              <MapPin className="size-3" /> {hero.location}
            </p>
          </div>
        </div>
      </div>

      {/* Text panel overlaps the collage on large screens */}
      <div className="relative z-10 mt-10 rounded-[2.5rem] border border-cream/10 bg-night/90 p-6 shadow-2xl backdrop-blur sm:p-8 lg:col-span-5 lg:-ml-20 lg:mt-24">
        <Pill>{hero.available}</Pill>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {hero.greeting} <span className="text-rose">{profile.shortName}</span>
        </h1>
        <p className="mt-2 font-mono text-sm text-rose/90">&lt;{hero.role} /&gt;</p>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">{hero.tagline}</p>

        <dl className="mt-6 grid grid-cols-3 gap-2">
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-2xl p-3 text-center ${i === 1 ? 'bg-cream text-wine-deep' : 'bg-wine/60'}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-xl font-bold">{s.value}</dd>
              <dd className={`text-[10px] leading-tight ${i === 1 ? 'text-mocha' : 'text-cream/60'}`}>{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ruby px-5 py-2.5 text-sm font-semibold shadow-lg shadow-ruby/30 transition hover:-translate-y-0.5 hover:bg-rose"
          >
            <SocialIcon type="linkedin" /> {hero.linkedin}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ruby px-5 py-2.5 text-sm font-semibold transition hover:bg-ruby/15"
          >
            <Mail className="size-4" /> {hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
