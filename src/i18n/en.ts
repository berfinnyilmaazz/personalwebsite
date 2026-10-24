import type { Content } from './types';

export const en: Content = {
  meta: { title: 'Berfin Yılmaz — Fullstack Developer', switchTo: 'Türkçe' },
  nav: [
    { href: '#about', label: 'About', hint: 'who I am' },
    { href: '#experience', label: 'Experience', hint: 'where I work' },
    { href: '#skills', label: 'Skills', hint: 'what I use' },
    { href: '#projects', label: 'Projects', hint: 'what I built' },
    { href: '#education', label: 'Education', hint: 'what I learned' },
  ],
  hero: {
    available: 'Open to new opportunities',
    greeting: "Hi, I'm",
    role: 'Fullstack Developer',
    tagline:
      'I build SaaS platforms, real-time systems and GIS applications with React.js, Vue.js/Nuxt.js, .NET Core and Azure.',
    location: 'Istanbul, Türkiye',
    stats: [
      { value: '2+', label: 'Years Experience' },
      { value: '3', label: 'Companies' },
      { value: '11th', label: 'of 752 · TEKNOFEST' },
    ],
    linkedin: 'LinkedIn',
    contact: 'Contact Me',
  },
  about: {
    eyebrow: 'About me',
    title: 'From Code To',
    highlight: 'Live Products',
    text: 'Fullstack Developer with 2+ years of hands-on experience building SaaS platforms, real-time systems and GIS applications. Co-founder of a live restaurant SaaS product used by multiple businesses in Turkey and contributor to a municipal project-tracking application built with Flutter and .NET. I deliver high-performance, user-centric products across frontend, API development and relational databases.',
    facts: [
      { label: 'Based in', value: 'Istanbul, Türkiye' },
      { label: 'Degree', value: 'B.Sc. Computer Engineering' },
      { label: 'Languages', value: 'Turkish (Native) · English (B2)' },
      { label: 'Currently', value: 'Co-Founder @ Foomoons' },
    ],
    findMe: 'Get in touch',
    findMeSub: "Let's build something together",
    letsTalk: "Let's Talk",
    seeWork: 'See my work',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Professional',
    highlight: 'Experience',
    now: 'Now',
    items: [
      {
        role: 'Fullstack Developer & Co-Founder',
        company: 'Foomoons (SaaS Startup)',
        location: 'Türkiye',
        period: 'July 2024 – Present',
        current: true,
        bullets: [
          'Co-founded and shipped a live SaaS platform used by multiple restaurants across Turkey to digitalize billing, real-time ordering and sales analytics.',
          'Built responsive web interfaces, QR-based digital menus and admin dashboards in React.js and Tailwind CSS, integrating .NET RESTful APIs via Axios for real-time order flow, sales reporting and operational status updates.',
          'Took ownership of Belta, a municipal project-tracking application built with Flutter/Dart, C# .NET and Azure SQL; shipped new features and improvements on an existing production codebase.',
          'Optimized performance and UX across desktop and tablet, and owned deployment, releases and ongoing system maintenance.',
        ],
      },
      {
        role: 'Fullstack Developer Intern (Erasmus+)',
        company: 'Priot Digital Systems',
        location: 'Maribor, Slovenia',
        period: 'January 2026 – March 2026',
        bullets: [
          'Developed a web-based GIS map viewer with Nuxt.js (Vue.js), Leaflet and GeoServer to visualize and analyze spatial datasets.',
          'Implemented a multi-user real-time collaboration layer with editing locks and heartbeat mechanisms using SignalR and WebSockets, preventing concurrent-edit conflicts.',
          'Engineered backend services in .NET Core and PostgreSQL, including advanced data mapping for AI-driven extraction tools.',
          'Built a modular k6/JavaScript framework automating load and stress tests across 6 key user flows, validating stability under high traffic.',
        ],
      },
      {
        role: 'Software Developer Intern',
        company: 'Halkalı Kağıt',
        location: 'Istanbul, Türkiye',
        period: 'July 2023',
        bullets: [
          'Designed and developed the corporate website with HTML5, CSS3, Bootstrap and JavaScript on the frontend and ASP.NET/C# on the backend.',
          'Gained hands-on experience with virtualization technologies (VMware, vSphere) for creating and managing virtual machines.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Expertise',
    title: 'Technical',
    highlight: 'Skills',
    subtitle: 'Technologies and tools I use to build products end-to-end',
    groups: {
      frontend: 'Frontend & Mobile',
      backend: 'Backend',
      languages: 'Languages',
      databases: 'Databases',
      tools: 'Cloud & Tools',
    },
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured',
    highlight: 'Projects',
    viewCode: 'View code',
    items: [
      {
        title: 'The Projuncture',
        description:
          'Project collaboration platform (graduation project) with authentication, profiles, project publishing, a team request/approval workflow and a kanban-style dashboard with task boards, member lists and comments.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
        url: 'https://github.com/berfinnyilmaazz/TheProjuncture',
        badge: 'Graduation Project',
      },
      {
        title: 'Smart Wi-Fi Coverage',
        description:
          'A 2D simulation and optimization algorithm for Wi-Fi router placement using signal modeling and obstacle detection.',
        tags: ['Algorithms', 'Simulation', 'Optimization'],
        badge: 'TEKNOFEST Finalist · 11th / 752',
      },
      {
        title: 'AI-Powered Tarot Reading',
        description:
          'A Python application delivering personalized readings from JSON-based data, with daily readings and interactive card views.',
        tags: ['Python', 'NLP', 'Machine Learning'],
        url: 'https://github.com/berfinnyilmaazz/Tarot-Reading-with-AI-Algorithms',
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Education &',
    highlight: 'Certificates',
    degree: 'B.Sc. in Computer Engineering',
    school: 'Karabük University',
    location: 'Karabük, Türkiye',
    period: 'September 2021 – May 2026',
    badge: 'Class of 2026 🎓',
    certsTitle: 'Certifications & Awards',
    verify: 'Verify',
    certs: [
      {
        title: 'Claude Code in Action',
        issuer: 'Anthropic · May 2026',
        description: 'Agentic software development workflows with Claude Code.',
        url: 'https://verify.skilljar.com/c/2huwjc86pc4c',
      },
      {
        title: 'Claude with the Anthropic API',
        issuer: 'Anthropic · May 2026',
        description: 'Building AI-powered applications on the Anthropic API.',
        url: 'https://verify.skilljar.com/c/g73chst7pc2c',
      },
      {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic · May 2026',
        description: 'MCP architecture: connecting AI models to tools and data sources.',
        url: 'https://verify.skilljar.com/c/ruddoz8ddskr',
      },
      {
        title: 'Introduction to Agent Skills',
        issuer: 'Anthropic · May 2026',
        description: 'Extending AI agents with reusable, composable skills.',
        file: '/certificates/anthropic-agent-skills.pdf',
      },
      {
        title: 'Database Design and Database Programming with SQL',
        issuer: 'Oracle Academy · August 2023',
        description: 'Database administration, SQL optimization and data management.',
        file: '/certificates/oracle-database-sql.pdf',
      },
      {
        title: 'TEKNOFEST 2024 Finalist',
        issuer: 'TEKNOFEST · 2024',
        description: 'Ranked 11th among 752 teams nationwide.',
      },
    ],
  },
  contact: {
    title: "Let's build something",
    highlight: 'together',
    text: 'Have a project in mind, an opportunity, or just want to say hi? My inbox is always open.',
  },
  emailMenu: { gmail: 'Write in Gmail', app: 'Open mail app', copy: 'Copy address', copied: 'Copied!' },};
