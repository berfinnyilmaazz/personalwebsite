import { Award, BadgeCheck, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './ui/Photo';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

export default function Education() {
  const { t } = useLanguage();
  const edu = t.education;

  return (
    <section id="education" className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-12">
      <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-5">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-ruby/30" />
        <div className="absolute inset-6 rounded-full border border-ruby/20" />
        <div className="relative m-10 overflow-hidden rounded-full border-8 border-wine shadow-2xl">
          <Photo
            src={images.graduation}
            alt={profile.name}
            blend
            className="aspect-square"
            imgClassName="origin-[50%_5%] scale-[1.45]"
          />
        </div>
        <span className="absolute bottom-6 right-2 rotate-6 rounded-2xl bg-cream px-3 py-2 text-xs font-bold text-wine-deep shadow-lg">
          {edu.badge}
        </span>
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal>
          <SectionTitle eyebrow={edu.eyebrow} title={edu.title} highlight={edu.highlight} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 rounded-[2rem] bg-cream p-5 text-wine-deep shadow-xl sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-wine text-cream">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-sm font-medium text-wine">{edu.school}</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-mocha">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" /> {edu.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-cream/60">{edu.certsTitle}</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {edu.certs.map((cert, i) => (
            <li key={cert.title} className={i % 2 ? 'sm:ml-8' : ''}>
              <Reveal delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-night/80 p-4 transition hover:border-ruby/40 hover:bg-wine/40">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ruby/15 text-rose">
                    <Award className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="text-sm font-semibold">{cert.title}</p>
                      <p className="text-[11px] text-cream/50">{cert.issuer}</p>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-cream/60">{cert.description}</p>
                    {(cert.url || cert.file) && (
                      <a
                        href={cert.url ?? cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:underline"
                      >
                        <BadgeCheck className="size-3.5" /> {edu.verify}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
