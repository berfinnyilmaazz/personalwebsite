import type { Content } from './types';

export const tr: Content = {
  meta: { title: 'Berfin Yılmaz — Fullstack Developer', switchTo: 'English' },
  nav: [
    { href: '#about', label: 'Hakkımda', hint: 'ben kimim' },
    { href: '#experience', label: 'Deneyim', hint: 'nerede çalıştım' },
    { href: '#skills', label: 'Yetkinlikler', hint: 'neler kullanırım' },
    { href: '#projects', label: 'Projeler', hint: 'neler yaptım' },
    { href: '#education', label: 'Eğitim', hint: 'neler öğrendim' },
  ],
  hero: {
    available: 'Yeni fırsatlara açığım',
    greeting: 'Merhaba, ben',
    role: 'Fullstack Developer',
    tagline:
      'React.js, Vue.js/Nuxt.js, .NET Core ve Azure ile SaaS platformları, gerçek zamanlı sistemler ve CBS (GIS) uygulamaları geliştiriyorum.',
    location: 'İstanbul, Türkiye',
    stats: [
      { value: '2+', label: 'Yıl Deneyim' },
      { value: '3', label: 'Şirket' },
      { value: '11.', label: '752 takım · TEKNOFEST' },
    ],
    linkedin: 'LinkedIn',
    contact: 'İletişime Geç',
  },
  about: {
    eyebrow: 'Hakkımda',
    title: 'Koddan',
    highlight: 'Canlı Ürünlere',
    text: "React.js, Vue.js/Nuxt.js, .NET Core ve Azure teknolojileriyle SaaS platformları, gerçek zamanlı sistemler ve CBS (GIS) uygulamaları geliştiren 2+ yıl deneyimli bir Fullstack Developer'ım. Türkiye'de birden fazla işletmenin aktif olarak kullandığı bir restoran SaaS ürününün kurucu ortağı; Flutter ve .NET ile geliştirilen bir belediye proje takip uygulamasının geliştirme sorumlusuyum. Frontend, API geliştirme ve ilişkisel veritabanları alanlarında yüksek performanslı, kullanıcı odaklı ürünler geliştiriyorum.",
    facts: [
      { label: 'Konum', value: 'İstanbul, Türkiye' },
      { label: 'Eğitim', value: 'Bilgisayar Mühendisliği, Lisans' },
      { label: 'Diller', value: 'Türkçe (Anadil) · İngilizce (B2)' },
      { label: 'Şu an', value: 'Kurucu Ortak @ Foomoons' },
    ],
    findMe: 'Bana ulaş',
    findMeSub: 'Birlikte bir şeyler üretelim',
    letsTalk: 'Konuşalım',
    seeWork: 'Projelerim',
  },
  experience: {
    eyebrow: 'Kariyer',
    title: 'İş',
    highlight: 'Deneyimi',
    now: 'Halen',
    items: [
      {
        role: 'Fullstack Developer & Kurucu Ortak',
        company: 'Foomoons (SaaS Girişimi)',
        location: 'Türkiye',
        period: 'Temmuz 2024 – Halen',
        current: true,
        bullets: [
          'Türkiye genelinde birden fazla restoranın kullandığı; adisyon, gerçek zamanlı sipariş ve satış analitiği süreçlerini dijitalleştiren canlı bir SaaS platformunu kurucu ortak olarak hayata geçirdim.',
          "React.js ve Tailwind CSS ile responsive web arayüzleri, QR tabanlı dijital menüler ve yönetim panelleri geliştirdim; Axios üzerinden .NET RESTful API'leri entegre ederek gerçek zamanlı sipariş akışı ve satış raporlamayı sağladım.",
          "Flutter/Dart, C# .NET ve Azure SQL ile geliştirilen belediye proje takip uygulaması Belta'nın geliştirme sorumluluğunu devraldım; canlı kod tabanında yeni özellikler ve iyileştirmeler yayına aldım.",
          'Masaüstü ve tablet için performans ve kullanıcı deneyimini optimize ettim; dağıtım, sürüm yönetimi ve sistem bakımını üstlendim.',
        ],
      },
      {
        role: 'Fullstack Developer Stajyeri (Erasmus+)',
        company: 'Priot Digital Systems',
        location: 'Maribor, Slovenya',
        period: 'Ocak 2026 – Mart 2026',
        bullets: [
          'Nuxt.js (Vue.js), Leaflet ve GeoServer ile konumsal veri setlerini görselleştiren ve analiz eden web tabanlı bir CBS (GIS) harita görüntüleyicisi geliştirdim.',
          'SignalR ve WebSockets ile düzenleme kilidi ve heartbeat mekanizmalı, çok kullanıcılı gerçek zamanlı iş birliği katmanı kurarak eş zamanlı düzenleme çakışmalarını önledim.',
          '.NET Core ve PostgreSQL ile backend servisleri geliştirdim; yapay zekâ tabanlı veri çıkarım araçları için gelişmiş veri eşleme (data mapping) çözümleri tasarladım.',
          '6 kritik kullanıcı akışı için yük ve stres testlerini otomatikleştiren modüler bir k6/JavaScript test altyapısı kurarak yüksek trafik altındaki kararlılığı doğruladım.',
        ],
      },
      {
        role: 'Yazılım Geliştirme Stajyeri',
        company: 'Halkalı Kağıt',
        location: 'İstanbul, Türkiye',
        period: 'Temmuz 2023',
        bullets: [
          'Frontend tarafında HTML5, CSS3, Bootstrap ve JavaScript, backend tarafında ASP.NET/C# kullanarak kurumsal web sitesini tasarladım ve geliştirdim.',
          'Sanal makine oluşturma ve yönetimi konusunda sanallaştırma teknolojileriyle (VMware, vSphere) uygulamalı deneyim kazandım.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Uzmanlık',
    title: 'Teknik',
    highlight: 'Yetkinlikler',
    subtitle: 'Ürünleri uçtan uca geliştirirken kullandığım teknolojiler ve araçlar',
    groups: {
      frontend: 'Frontend & Mobil',
      backend: 'Backend',
      languages: 'Programlama Dilleri',
      databases: 'Veritabanları',
      tools: 'Bulut & Araçlar',
    },
  },
  projects: {
    eyebrow: 'Portfolyo',
    title: 'Öne Çıkan',
    highlight: 'Projeler',
    viewCode: 'Koda bak',
    items: [
      {
        title: 'The Projuncture',
        description:
          'Kimlik doğrulama, profil yönetimi, proje yayınlama, ekip üyeliği için istek/onay akışı ve görev panoları, üye listeleri ve yorumlar içeren kanban tarzı panoya sahip proje iş birliği platformu (bitirme projesi).',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
        url: 'https://github.com/berfinnyilmaazz/TheProjuncture',
        badge: 'Bitirme Projesi',
      },
      {
        title: 'Akıllı Wi-Fi Kapsama',
        description:
          'Sinyal modelleme ve engel tespitiyle Wi-Fi router yerleşimini optimize eden 2B simülasyon ve algoritma.',
        tags: ['Algoritma', 'Simülasyon', 'Optimizasyon'],
        badge: 'TEKNOFEST Finalisti · 752 takımda 11.',
      },
      {
        title: 'Yapay Zekâ Destekli Tarot',
        description:
          'JSON tabanlı veriden kişiselleştirilmiş yorumlar üreten, günlük okuma ve etkileşimli kart görünümleri sunan bir Python uygulaması.',
        tags: ['Python', 'NLP', 'Makine Öğrenmesi'],
        url: 'https://github.com/berfinnyilmaazz/Tarot-Reading-with-AI-Algorithms',
      },
    ],
  },
  education: {
    eyebrow: 'Eğitim',
    title: 'Eğitim &',
    highlight: 'Sertifikalar',
    degree: 'Bilgisayar Mühendisliği, Lisans',
    school: 'Karabük Üniversitesi',
    location: 'Karabük, Türkiye',
    period: 'Eylül 2021 – Mayıs 2026',
    badge: '2026 Mezunu 🎓',
    certsTitle: 'Sertifikalar & Ödüller',
    verify: 'Doğrula',
    certs: [
      {
        title: 'Claude Code in Action',
        issuer: 'Anthropic · Mayıs 2026',
        description: 'Claude Code ile ajan tabanlı yazılım geliştirme iş akışları.',
        url: 'https://verify.skilljar.com/c/2huwjc86pc4c',
      },
      {
        title: 'Claude with the Anthropic API',
        issuer: 'Anthropic · Mayıs 2026',
        description: 'Anthropic API üzerinde yapay zekâ destekli uygulamalar geliştirme.',
        url: 'https://verify.skilljar.com/c/g73chst7pc2c',
      },
      {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic · Mayıs 2026',
        description: 'MCP mimarisi: yapay zekâ modellerini araçlara ve veri kaynaklarına bağlama.',
        url: 'https://verify.skilljar.com/c/ruddoz8ddskr',
      },
      {
        title: 'Introduction to Agent Skills',
        issuer: 'Anthropic · Mayıs 2026',
        description: 'Yapay zekâ ajanlarını yeniden kullanılabilir yeteneklerle (skills) genişletme.',
        file: '/certificates/anthropic-agent-skills.pdf',
      },
      {
        title: 'Database Design and Database Programming with SQL',
        issuer: 'Oracle Academy · Ağustos 2023',
        description: 'Veritabanı yönetimi, SQL optimizasyonu ve veri yönetimi.',
        file: '/certificates/oracle-database-sql.pdf',
      },
      {
        title: 'TEKNOFEST 2024 Finalisti',
        issuer: 'TEKNOFEST · 2024',
        description: 'Ulusal çapta 752 takım arasında 11. sıra.',
      },
    ],
  },
  contact: {
    title: 'Birlikte bir şeyler',
    highlight: 'üretelim',
    text: 'Aklında bir proje, bir fırsat var ya da sadece merhaba mı demek istiyorsun? Mesajlarına her zaman açığım.',
  },
  emailMenu: { gmail: 'Gmail ile yaz', app: 'Mail uygulamasında aç', copy: 'Adresi kopyala', copied: 'Kopyalandı!' },};
