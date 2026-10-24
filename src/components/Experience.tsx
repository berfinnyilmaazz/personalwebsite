import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { images, profile } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './ui/Photo';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const offsets = ['', 'lg:ml-10', 'lg:ml-4'];

export default function Experience() {
  const { t } = useLanguage();
  const exp = t.experience;

  return (
    <section id="experience" className="grid scroll-mt-32 gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <SectionTitle eyebrow={exp.eyebrow} title={exp.title} highlight={exp.highlight} />
          </Reveal>
          <Reveal delay={150} className="mt-8 hidden lg:block">
            <div className="-rotate-3 rounded-[2.5rem] bg-cream p-3 shadow-2xl shadow-black/40">
              <Photo
                src={images.experience}
                alt={profile.name}
                blend
                className="aspect-[3/4] rounded-[2rem]"
                imgClassName="object-[50%_10%]"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <ol className="relative flex flex-col gap-6 border-l-2 border-dashed border-ruby/30 pl-6 sm:pl-8 lg:col-span-8">
        {exp.items.map((job, i) => (
          <li key={job.company} className={`relative ${offsets[i % offsets.length]}`}>
            <span
              className={`absolute -left-[2.15rem] top-6 grid size-5 place-items-center rounded-full border-4 border-ink sm:-left-[2.65rem] ${
                job.current ? 'bg-ruby' : 'bg-cream/40'
              }`}
            />
            <Reveal delay={i * 100}>
              <article
                className={`rounded-[2rem] p-5 shadow-xl sm:p-7 ${
                  job.current ? 'bg-cream text-wine-deep' : 'border border-cream/10 bg-night/80'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{job.role}</h3>
                    <p className={`flex items-center gap-1.5 text-sm font-medium ${job.current ? 'text-wine' : 'text-rose'}`}>
                      <Briefcase className="size-3.5" /> {job.company}
                    </p>
                  </div>
                  {job.current && (
                    <span className="rotate-3 rounded-full bg-wine px-3 py-1 text-xs font-bold text-cream">{exp.now}</span>
                  )}
                </div>

                <div className={`mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs ${job.current ? 'text-mocha' : 'text-cream/50'}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" /> {job.location}
                  </span>
                </div>

                <ul className={`mt-4 flex flex-col gap-2 text-sm leading-relaxed ${job.current ? 'text-wine-deep/85' : 'text-cream/70'}`}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full ${job.current ? 'bg-wine' : 'bg-ruby'}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
