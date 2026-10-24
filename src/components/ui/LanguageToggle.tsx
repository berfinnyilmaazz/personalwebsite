import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/types';

const options: Lang[] = ['en', 'tr'];

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.meta.switchTo} className="flex rounded-full border-2 border-cream/70 p-0.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-2.5 py-1.5 text-xs font-bold uppercase transition ${
            lang === option ? 'bg-cream text-wine' : 'text-cream/70 hover:text-cream'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
