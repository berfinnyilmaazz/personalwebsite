// Language-independent data. Translated text lives in src/i18n/.

export const profile = {
  name: 'Berfin Yılmaz',
  shortName: 'Berfin',
  email: 'berfinyilmaz050@gmail.com',
  linkedin: 'https://www.linkedin.com/in/berfin-y%C4%B1lmaz-4a2560234',
};

export const images = {
  avatar: '/images/disneyberfinpp.jpg',
  hero: '/images/disneyberfincasual.jpg',
  heroSmall: '/images/disneyberfinbusinessred.jpg',
  about: '/images/disneyberfinbusiness.jpg',
  experience: '/images/disneyberfinbusinessred.jpg',
  graduation: '/images/disneyberfingraduado.jpg',
  contact: '/images/disneyberfinphone.jpg',
};

// transform-origin values that centre each face when zoomed; measured per render.
export const faceFocus = {
  avatar: '50% 11%',
  heroSmall: '48% 9%',
};

export type ContactType = 'linkedin' | 'github' | 'email';

export const contacts: { type: ContactType; href: string; label: string }[] = [
  { type: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { type: 'github', href: 'https://github.com/berfinnyilmaazz', label: 'GitHub' },
  { type: 'email', href: `mailto:${profile.email}`, label: 'E-mail' },
];

export type SkillGroupKey = 'languages' | 'frontend' | 'backend' | 'databases' | 'tools';

export const skillGroups: { key: SkillGroupKey; items: string[] }[] = [
  { key: 'frontend', items: ['React.js', 'Redux', 'Context API', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Bootstrap', 'Leaflet', 'Flutter'] },
  { key: 'backend', items: ['.NET Core', 'ASP.NET', 'Node.js', 'RESTful APIs', 'SignalR', 'WebSockets'] },
  { key: 'languages', items: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Dart', 'SQL', 'HTML5', 'CSS3', 'SASS'] },
  { key: 'databases', items: ['PostgreSQL', 'MS SQL', 'Azure SQL', 'Oracle SQL', 'MySQL / MariaDB', 'MongoDB'] },
  { key: 'tools', items: ['Microsoft Azure', 'Docker', 'Traefik', 'Git', 'GitHub', 'GeoServer', 'k6', 'Postman', 'Firebase', 'Figma', 'VMware'] },
];
