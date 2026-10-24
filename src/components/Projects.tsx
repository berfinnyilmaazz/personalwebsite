import { Brain, FolderKanban, Trophy, Wifi, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import SocialIcon from './ui/SocialIcon';

// Keyed by position so both languages share the same visuals.
const visuals: { icon: LucideIcon; span: string; look: string; light: boolean }[] = [
  { icon: FolderKanban, span: 'lg:row-span-2', look: 'bg-cream hover:-rotate-1', light: true },
  { icon: Wifi, span: '', look: 'bg-wine hover:rotate-1', light: false },
  { icon: Brain, span: '', look: 'bg-night/80 border border-cream/10 hover:-rotate-1', light: false },
];

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects;

  return (
    <section id="projects" className="scroll-mt-32">
      <Reveal>
        <SectionTitle eyebrow={projects.eyebrow} title={projects.title} highlight={projects.highlight} />
      </Reveal>

      <ul className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.items.map((project, i) => {
          const { icon: Icon, span, look, light } = visuals[i % visuals.length] ?? visuals[0]!;
          return (
            <li key={project.title} className={span}>
              <Reveal delay={i * 100} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-[2rem] p-6 shadow-xl transition duration-300 hover:-translate-y-1 sm:p-8 ${look} ${
                    light ? 'text-wine-deep' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl ${light ? 'bg-wine text-cream' : 'bg-ruby/20 text-rose'}`}
                    >
                      <Icon className="size-7" />
                    </span>
                    {project.badge && (
                      <span
                        className={`flex rotate-2 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${
                          light ? 'bg-wine text-cream' : 'bg-cream text-wine-deep'
                        }`}
                      >
                        <Trophy className="size-3" /> {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`mt-6 font-bold ${i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
                  <p className={`mt-3 flex-1 text-sm leading-relaxed ${light ? 'text-mocha' : 'text-cream/70'}`}>
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            light ? 'bg-wine/10 text-wine-deep' : 'bg-cream/10 text-cream/85'
                          }`}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${
                          light ? 'bg-wine text-cream' : 'bg-cream text-wine-deep'
                        }`}
                      >
                        <SocialIcon type="github" /> {projects.viewCode}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
