export const profile = {
  name: 'Fernandes K J',
  first: 'Fernandes',
  roles: ['Software Development Engineer', 'Android SDK Engineer', 'Backend Developer', 'Fintech & Payments Builder'],
  tagline:
    'I build secure, high-throughput Android SDKs and backend systems for fintech and payments — production-ready, fast and reliable.',
  summary:
    "Software Development Engineer with 2+ years of experience building BillDesk's Android Payment Gateway SDK with Kotlin, Jetpack Compose and MVVM/MVI, and backend services with Java, Spring Boot, Kafka and REST APIs. Strong in payment flows (UPI, NetBanking, Cards), application security, event-driven architecture and performance optimization.",
  email: 'fernandeskj007@gmail.com',
  phone: '+91 7025059876',
  location: 'Kochi, Kerala, India',
  linkedin: 'https://www.linkedin.com/in/fernandes7/',
  github: 'https://github.com/Fernandes7',
  resume: '/Fernandes_KJ_Resume.pdf',
  photo: '/profile.jpg', // ponytail: drop your photo at public/profile.jpg; initials show until then
}

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '3M+', label: 'Daily Transactions Powered' },
  { value: '200+', label: 'Billers Supported' },
  { value: '400+', label: 'EMVCo Testcases Passed' },
]

export const skills = [
  { title: 'Languages', icon: 'code', items: ['Kotlin', 'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { title: 'Mobile', icon: 'mobile', items: ['Android SDK', 'Jetpack Compose', 'MVVM / MVI', 'Android Studio'] },
  { title: 'Backend', icon: 'server', items: ['Spring Boot', 'Spring Batch', 'Microservices', 'REST APIs', 'Node.js', 'Fastify', 'Express'] },
  { title: 'Data & Messaging', icon: 'db', items: ['Apache Kafka', 'Oracle', 'PostgreSQL', 'MongoDB', 'Prisma', 'SQL Performance Tuning'] },
  { title: 'Frontend', icon: 'web', items: ['React', 'Vue.js', 'Tailwind CSS', 'Next.js'] },
  { title: 'Payments & Security', icon: 'shield', items: ['UPI (NPCI CL)', 'EMVCo 3DS', 'Tokenization', 'SSL Pinning', 'Root/Tamper Detection'] },
  { title: 'AI & Tools', icon: 'ai', items: ['LangChain', 'Deep Agents', 'RAG', 'MCP', 'Git', 'Docker', 'Linux'] },
]

// Headline skill tiles (like the reference's skill cards)
export const topSkills = [
  { name: 'Kotlin', level: 'Expert', pct: 92 },
  { name: 'Jetpack Compose', level: 'Expert', pct: 90 },
  { name: 'Java', level: 'Advanced', pct: 88 },
  { name: 'Spring Boot', level: 'Advanced', pct: 85 },
  { name: 'Apache Kafka', level: 'Advanced', pct: 80 },
  { name: 'React', level: 'Advanced', pct: 82 },
]

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Hatio Innovations (BillDesk Subsidiary)',
    period: 'Aug 2024 – Present',
    stack: ['Android', 'Jetpack Compose', 'MVVM', 'MVI', 'Kotlin', 'Java', 'Spring Boot', 'Kafka', 'Vue.js', 'React', 'REST APIs'],
    projects: [
      {
        name: 'BillDesk Payment Gateway SDK',
        points: [
          "Built BillDesk's Android Payment Gateway SDK from the ground up — a core integration platform in an ecosystem handling 3M+ transactions daily across 200+ billers.",
          'Designed the SDK on MVVM + MVI architecture for a more performant, maintainable codebase.',
          'Own the payment methods module: Cards, NetBanking 2.0, UPI Intent, BHIM UPI, and a One-Time Mandate flow built from scratch.',
          'Improved SDK rendering performance by 21.38% (derivedState, GraphicsLayer, class stability) while shipping new payment integrations.',
          'Engineered security infrastructure: Root detection, SSL pinning, anti-tampering (Frida) detection and a base-URL enforcement interceptor.',
          'Helped pass 400+ testcases to achieve EMVCo 3-D Secure (3DS) certification; supported SDK integration into IRCTC\'s RailOne app.',
        ],
      },
      {
        name: 'BHIM UPI Plugin SDK',
        points: [
          'Built the foundational architecture and delivered the complete Widget-based and QR-based payment journey end-to-end.',
          "Developed Profile flow and widget-exposed payment flows, integrating NPCI's Common Library (CL) APIs for native UPI.",
          'Enabled native in-app UPI, faster checkout via intent + QR; led SDK integration for IOCL (Indian Oil) and MMRD apps.',
        ],
      },
      {
        name: 'NetBanking 2.0 SDK & Admin Portal',
        points: [
          'Built the NetBanking 2.0 SDK enabling bank apps like IDFC and HDFC to invoke seamless embedded transactions.',
          'Developed intent-based and QR-based payment flows with OTP authentication and live bank-side callbacks.',
          'Designed the Admin Portal with Java 17 / Spring Boot microservices, Spring Batch jobs, schedulers and Kafka event pipelines.',
          'Own the Ledger System module — ledger postings, reconciliation logic and IBMB data formatting.',
          'Tuned Oracle SQL queries, indexes, execution plans and stored procedures — critical queries from minutes to milliseconds.',
          'Built a Kafka-driven worker engine with Apache POI converting 1M+ row Excel files into bank-specified IBMB format.',
        ],
      },
    ],
  },
  {
    role: 'Software Developer Associate (Remote)',
    company: 'Mantis Technologies Pvt. Ltd.',
    period: 'Aug 2023 – Jul 2024',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    projects: [
      {
        name: 'Kerala RTC Online Booking',
        points: [
          'Contributed to a React-based UI migration for the Kerala RTC online ticket booking platform, improving performance and UX.',
          'Participated in PostgreSQL database design for bus stand and service management; built mock REST APIs for early integration testing.',
          'Integrated the BillDesk payment gateway into the checkout and payment flow.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Pocket PG | Find My Hostel',
    desc: 'Scalable full-stack hostel booking platform with real-time booking APIs, AI sentiment analysis to flag fake reviews, and map integration.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'AI'],
    link: 'https://findmyhostel.in',
    accent: ['#22d3ee', '#6366f1'],
    icon: 'hostel',
  },
  {
    title: 'Food Snap AI',
    desc: 'Calorie estimation platform using Google Gemini for food recognition and the Edamam API for nutrition data, with cached backend for scale.',
    tags: ['React', 'TypeScript', 'Express', 'Gemini'],
    accent: ['#34d399', '#06b6d4'],
    icon: 'food',
  },
  {
    title: 'No-Sudo Software Installer',
    desc: 'Secure CLI tool with backend-driven command execution and role-based access control — install whitelisted software without sudo.',
    tags: ['CLI', 'RBAC', 'Linux', 'Security'],
    accent: ['#f472b6', '#8b5cf6'],
    icon: 'cli',
  },
  {
    title: 'BillDesk Payment Gateway SDK',
    desc: 'Production Android SDK for merchants: Cards, NetBanking, UPI, mandates — hardened with SSL pinning, root & Frida detection. EMVCo 3DS certified.',
    tags: ['Kotlin', 'Compose', 'MVI', 'Security'],
    accent: ['#38bdf8', '#0ea5e9'],
    icon: 'sdk',
    work: true,
  },
]

export const achievements = [
  { title: 'EMVCo 3DS Certified', text: 'Helped pass 400+ testcases for 3-D Secure certification on card transactions.', icon: 'award' },
  { title: '21.38% Faster Rendering', text: 'Compose performance tuning in a live payment SDK without slowing feature delivery.', icon: 'zap' },
  { title: 'Minutes → Milliseconds', text: 'Oracle query, index and stored-procedure tuning on critical ledger paths.', icon: 'db' },
  { title: 'Trusted by Big Names', text: 'SDKs integrated into IRCTC RailOne, IOCL, MMRD, HDFC and IDFC bank apps.', icon: 'users' },
]

export const education = {
  school: 'Christ College of Engineering, Irinjalakuda',
  uni: 'APJ Abdul Kalam Technological University',
  degree: 'B.Tech in Computer Science & Engineering',
  period: '2020 – 2024',
  cgpa: '9.45 / 10',
}
