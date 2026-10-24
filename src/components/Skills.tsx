import { Cloud, Code2, Database, Layout, Server, type LucideIcon } from 'lucide-react';
import { skillGroups, type SkillGroupKey } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

// Bento layout: uneven spans keep the grid lively; cards sit straight and tilt slightly on hover.
const cards: Record<SkillGroupKey, { icon: LucideIcon; span: string; look: string; light: boolean }> = {
  frontend: { icon: Layout, span: 'sm:col-span-2 lg:col-span-3', look: 'bg-cream hover:-rotate-1', light: true },
  backend: { icon: Server, span: 'lg:col-span-2', look: 'bg-night/80 border border-cream/10 hover:rotate-1', light: false },
  languages: { icon: Code2, span: 'lg:col-span-2', look: 'bg-wine hover:rotate-1', light: false },
  databases: { icon: Database, span: 'lg:col-span-1', look: 'bg-night/80 border border-cream/10 hover:-rotate-1', light: false },
  tools: { icon: Cloud, span: 'lg:col-span-2', look: 'bg-cream hover:rotate-1', light: true },
};

export default function Skills() {
  const { t } = useLanguage();
  const skills = t.skills;

  return (
    <section id="skills" className="scroll-mt-32">
      <Reveal>
        <SectionTitle
          eyebrow={skills.eyebrow}
          title={skills.title}
          highlight={skills.highlight}
          subtitle={skills.subtitle}
          align="center"
        />
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, i) => {
          const { icon: Icon, span, look, light } = cards[group.key];
          return (
            <li key={group.key} className={span}>
              <Reveal delay={i * 80} className="h-full">
                <div
                  className={`h-full rounded-[2rem] p-5 shadow-xl transition duration-300 hover:-translate-y-1 sm:p-6 ${look} ${
                    light ? 'text-wine-deep' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-xl ${light ? 'bg-wine text-cream' : 'bg-ruby/20 text-rose'}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-bold leading-tight">{skills.groups[group.key]}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          light ? 'bg-wine/10 text-wine-deep' : 'bg-cream/10 text-cream/85'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
