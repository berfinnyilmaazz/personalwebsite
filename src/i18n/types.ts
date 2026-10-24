import type { SkillGroupKey } from '../data';

export type Lang = 'en' | 'tr';

type Heading = { eyebrow: string; title: string; highlight: string };

export type Content = {
  meta: { title: string; switchTo: string };
  nav: { href: string; label: string; hint: string }[];
  hero: {
    available: string;
    greeting: string;
    role: string;
    tagline: string;
    location: string;
    stats: { value: string; label: string }[];
    linkedin: string;
    contact: string;
  };
  about: Heading & {
    text: string;
    facts: { label: string; value: string }[];
    findMe: string;
    findMeSub: string;
    letsTalk: string;
    seeWork: string;
  };
  experience: Heading & {
    items: { role: string; company: string; location: string; period: string; current?: boolean; bullets: string[] }[];
    now: string;
  };
  skills: Heading & { subtitle: string; groups: Record<SkillGroupKey, string> };
  projects: Heading & {
    items: { title: string; description: string; tags: string[]; url?: string; badge?: string }[];
    viewCode: string;
  };
  education: Heading & {
    degree: string;
    school: string;
    location: string;
    period: string;
    badge: string;
    certsTitle: string;
    verify: string;
    /** `url` is an online verification page; `file` is a PDF served from /public. */
    certs: { title: string; issuer: string; description: string; url?: string; file?: string }[];
  };
  emailMenu: { gmail: string; app: string; copy: string; copied: string };
  contact: { title: string; highlight: string; text: string };
};
