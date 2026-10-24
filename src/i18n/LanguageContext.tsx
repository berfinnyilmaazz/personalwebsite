import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en } from './en';
import { tr } from './tr';
import type { Content, Lang } from './types';

const dictionaries: Record<Lang, Content> = { en, tr };
const STORAGE_KEY = 'lang';

type LanguageValue = { lang: Lang; setLang: (lang: Lang) => void; t: Content };

const LanguageContext = createContext<LanguageValue | null>(null);

function initialLang(): Lang {
  // ?lang=tr / ?lang=en lets a shared link force a language.
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'en' || fromUrl === 'tr') return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'tr') return saved;
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not persisting the choice is acceptable.
    }
  }, [lang, t]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
