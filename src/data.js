export const profile = {
  name: 'Fernandes K J',
  short: 'Fernandes',
  title: 'Software Development Engineer',
  roles: ['Software Development Engineer','Android SDK Engineer', 'Payments & Fintech Developer', 'Backend Developer'],
  motto: ['Building with Curiosity.', 'Thinking Beyond Code.', 'Growing Through Experiences.'],
  bio: "Software engineer by profession, curious explorer by nature. I enjoy understanding how things work, questioning the obvious, and turning ideas into something meaningful. For me, engineering is not just about writing code — it's about curiosity, creativity, and the willingness to explore what's possible.",
  email: 'fernandeskj007@gmail.com',
  phone: '+91 7025059876',
  location: 'Kochi, Kerala, India',
  linkedin: 'https://www.linkedin.com/in/fernandes7/',
  github: 'https://github.com/Fernandes7',
  instagram: 'https://www.instagram.com/ferno_oxplozd/',
  twitter: '',   // TODO: paste Twitter/X profile URL — icon shows once set
  resume: '/Fernandes_KJ_Resume.pdf',
}

export const aboutStats = [
  { value: '3+', label: 'Years Experience', icon: 'briefcase' },
  { value: '15+', label: 'Projects Delivered', icon: 'activity' },
  { value: '4+', label: 'Production Projects', icon: 'layers' },
  { value: '9.45', label: 'B.Tech CGPA', icon: 'award' },
]

export const about = {
  bio: 'Software Development Engineer at Hatio Innovations, a BillDesk subsidiary — building the Android payment SDKs that merchants and banks rely on, and the backend systems behind them.',
  focus: [
    { title: 'Payment SDKs', text: 'Cards, UPI, NetBanking & mandates in an ecosystem processing 3M+ transactions a day.', icon: 'card' },
    { title: 'Mobile Security', text: 'SSL pinning, root & Frida detection and EMVCo 3DS-certified card flows.', icon: 'shield' },
    { title: 'Backend at Scale', text: 'Spring Boot microservices, Spring Batch jobs and Kafka pipelines for million-row workloads.', icon: 'server' },
  ],
}

export const services = [
  { title: 'Android SDK Development', text: 'Production SDKs in Kotlin & Jetpack Compose with clean MVVM / MVI architecture merchants can drop in.', icon: 'android', tint: '#22c55e' },
  { title: 'Payment Integrations', text: 'Cards, UPI Intent, BHIM UPI (NPCI CL), NetBanking 2.0, QR and one-time mandate flows end-to-end.', icon: 'card', tint: '#8b5cf6' },
  { title: 'Mobile App Security', text: 'SSL pinning, root & tamper (Frida) detection, URL enforcement, EMVCo 3DS-certified card flows.', icon: 'shield', tint: '#3b82f6' },
  { title: 'Backend & Microservices', text: 'Java 17 / Spring Boot services, REST APIs, Spring Batch jobs and schedulers built for scale.', icon: 'server', tint: '#10b981' },
  { title: 'Full-Stack Web', text: 'React, Next.js, Vue and Node.js apps with Tailwind UIs, Prisma / MongoDB / PostgreSQL backends.', icon: 'web', tint: '#06b6d4' },
  { title: 'AI-Powered Apps', text: 'LangChain, RAG, MCP and Gemini — from sentiment analysis on reviews to food recognition.', icon: 'ai', tint: '#ec4899' },
]

// Real brand icons (react-icons/si) rendered in their brand colours
export const techGroups = {
  Mobile: ['Kotlin', 'Android', 'Jetpack Compose', 'Android Studio', 'Gradle', 'Firebase'],
  Backend: ['Java', 'Spring Boot', 'Apache Kafka', 'Node.js', 'Express', 'Fastify', 'Maven', 'JUnit5'],
  Data: ['PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'Prisma', 'SQLite'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  'AI & Tools': ['Python', 'LangChain', 'Gemini', 'Docker', 'Git', 'Linux', 'Postman', 'IntelliJ IDEA', 'Jira', 'Figma'],
}

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Hatio Innovations',
    summary: "Building BillDesk's Android Payment Gateway SDK and backend services — Cards, UPI, NetBanking and mandate flows for an ecosystem handling 3M+ transactions a day, hardened for security and EMVCo 3DS certified.",
    sub: 'BillDesk Subsidiary',
    logo: '/logos/hatio.svg',
    period: 'Aug 2024 – Present',
    type: 'Full-time · Kochi',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM / MVI', 'Java 17', 'Spring Boot', 'Kafka', 'Oracle', 'Vue.js', 'React'],
    projects: [
      {
        name: 'Payment Gateway SDK',
        points: [
          "Built BillDesk's Android Payment Gateway SDK from the ground up — a core integration platform in an ecosystem handling 3M+ transactions daily across 200+ billers.",
          'Architected the SDK on MVVM + MVI for a more performant and maintainable codebase.',
          'Own the payment-methods module: Cards, NetBanking 2.0, UPI Intent, BHIM UPI and a One-Time Mandate flow built from scratch.',
          'Improved SDK rendering performance by 21.38% (derivedState, graphicsLayer, class stability) while shipping new payment methods.',
          'Engineered security: root detection, SSL pinning, anti-tampering (Frida) detection and a base-URL enforcement interceptor.',
          "Helped pass 400+ testcases to achieve EMVCo 3-D Secure (3DS) certification; supported integration into IRCTC's RailOne app.",
        ],
      },
      {
        name: 'BHIM UPI Plugin SDK',
        points: [
          'Built the foundational architecture and delivered the complete widget-based and QR-based payment journeys end-to-end.',
          "Developed the Profile flow and widget-exposed payment flows on NPCI's Common Library (CL) APIs for native UPI.",
          'Enabled native in-app UPI with faster checkout via intent + QR; led SDK integration for IOCL (Indian Oil) and MMRD apps.',
        ],
      },
      {
        name: 'NetBanking 2.0 SDK & Admin',
        points: [
          'Built the NetBanking 2.0 SDK letting bank apps like IDFC and HDFC invoke seamless embedded transactions.',
          'Developed intent-based and QR-based payment flows with OTP authentication and live bank-side callbacks.',
          'Designed the Admin Portal on Java 17 / Spring Boot microservices with Spring Batch, schedulers and Kafka event pipelines.',
          'Own the Ledger System module — ledger postings, reconciliation logic and IBMB data formatting.',
          'Tuned Oracle SQL, indexes, execution plans and stored procedures — critical queries from minutes to milliseconds.',
          'Built a Kafka-driven worker engine with Apache POI that converts 1M+ row Excel files into bank-specified IBMB format.',
        ],
      },
    ],
  },
  {
    role: 'Software Developer Engineer',
    company: 'Erasmith Technologies',
    summary: 'Worked as a Junior SDE on user-monitoring and customer-service projects, building APIs and managing proxy-server databases — after a web internship shipping React projects and Python Flask APIs.',
    logo: '/logos/erasmith.png',
    sub: 'Apprenticeship & Internship',
    period: 'Feb 2024 – Aug 2024',
    stack: ['Python', 'Flask', 'React', 'Android', 'Redis', 'PostgreSQL', 'SQL'],
    projects: [
      {
        name: 'SDE Apprenticeship · Apr – Aug 2024',
        points: [
          'Worked as a Junior SDE (remote, Irinjalakuda) on user-monitoring and customer-service oriented projects.',
          'Took part in API creation and proxy-server database management.',
        ],
      },
      {
        name: 'Web Developer Intern · Feb – Apr 2024',
        points: [
          'Worked on various React projects such as Hyphen View (on-site, Thrissur).',
          'Worked across Redis, SQL and PostgreSQL databases.',
          'Built APIs in Python using Flask.',
        ],
      },
    ],
  },
  {
    role: 'Software Developer Associate',
    company: 'Mantis Technologies',
    summary: 'Helped migrate the Kerala RTC online booking platform to React, took part in PostgreSQL design for bus-stand operations, and integrated the BillDesk payment gateway into checkout.',
    logo: '/logos/mantis.png',
    sub: 'Remote',
    period: 'Aug 2023 – Jul 2024',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    projects: [
      {
        name: 'Kerala RTC Online Booking',
        points: [
          'Contributed to the React-based UI migration of the Kerala RTC online ticket booking platform, improving performance and UX.',
          'Took part in PostgreSQL database design for bus-stand and service management; built mock REST APIs for early integration testing.',
          'Integrated the BillDesk payment gateway into the checkout and payment flow.',
        ],
      },
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Fynext Innovations',
    summary: 'Full-stack work on KAU, a farm-operations platform with Node.js, Fastify and Prisma APIs, and RateUp, a customer-engagement product with a configurable React form builder.',
    logo: '/logos/fynext.png',
    sub: 'Remote',
    period: 'Aug 2023 – Dec 2023',
    stack: ['React.js', 'Node.js', 'Fastify', 'Prisma ORM', 'MongoDB', 'REST APIs'],
    projects: [
      {
        name: 'KAU · Farm Operations Platform',
        points: [
          'Built backend REST APIs with Node.js, Fastify and Prisma ORM for the KAU app, powering farm-operations management and crop-selection workflows.',
          'Designed API endpoints for application data, business logic and frontend–backend communication.',
          'Used Prisma ORM with MongoDB for schema management and structured data access.',
          'Added request validation and handling for consistent, reliable API interactions; organised backend logic into reusable modules.',
        ],
      },
      {
        name: 'RateUp · Customer Engagement',
        points: [
          'Built a customizable form builder in React supporting dynamic form creation, multiple input types and configurable workflows.',
          'Developed reusable React components that cut duplication and sped up new feature development.',
          'Implemented client-side validation to prevent invalid submissions and keep the UX consistent.',
          'Integrated the UI with backend REST APIs for form submission and data processing.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    title: 'BillDesk Payment SDK',
    type: 'Payment Gateway (PG) Android SDK',
    desc: "Contributed to BillDesk's production-grade Payment Gateway Android SDK, built with Kotlin and Jetpack Compose — reusable, merchant-integrable payment components that let businesses accept digital payments in their Android apps.",
    tags: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Payments'],
    image: '/work/billdesk-sdk.webp',
    work: true,
  },
  {
    title: 'Pocket PG',
    type: 'AI-Based Hostel Booking · Dec 2023 – Mar 2024',
    desc: 'Helps students and working professionals discover, compare and book hostels through an interactive map. AI sentiment analysis of reviews generates hostel ratings for informed decisions. Built with Roshan & Minna Elizabeth.',
    tags: ['TypeScript', 'MongoDB', 'Next.js', 'Sentiment AI'],
    image: '/work/pocket-pg.webp',
    live: 'https://findmyhostel.in',
    code: 'https://github.com/Fernandes7/Pocket-PG-Frontend',
  },
  {
    title: 'Blue',
    type: 'AI Agent Orchestration Platform',
    desc: 'Multi-agent platform where users select specialized AI agents, spawn them by name and capability, and orchestrate coordinated workflows that delegate tasks and return structured results.',
    features: ['Dynamic agent selection & spawning', 'Role-based specialized agents', 'Multi-agent orchestration', 'Automated task delegation', 'Centralized activity monitoring'],
    tags: ['AI Agents', 'Multi-Agent', 'Orchestration'],
    image: '/work/blue.webp',
  },
  {
    title: 'Ad Attribution Tracker',
    type: 'Android App · SDK Simulator',
    desc: 'SDK-style event tracker with dedup rules, Room persistence and a WorkManager ingestion pipeline with retries — live queue & stats.',
    tags: ['Kotlin', 'Compose', 'Room', 'WorkManager'],
    image: '/work/ad-tracker.jpg',
    code: 'https://github.com/Fernandes7/Native-Android-Event-Mock-Simulator',
  },
  {
    title: '3D Model Viewer',
    type: 'Android App · 3D Graphics',
    desc: 'View multiple .glb models at once as draggable, pinch-resizable cards with arcball rotation, zoom and part labels.',
    tags: ['Kotlin', 'Compose', 'SceneView', 'Filament'],
    image: '/work/3d-viewer.png',
    imageFit: 'logo',
    bg: 'linear-gradient(135deg,#1e1b4b,#4338ca 60%,#7c3aed)',
    code: 'https://github.com/Fernandes7/Android-3D-Model-Viewer',
  },
  {
    title: 'Kafka Order Pipeline',
    type: 'Backend · Event Streaming',
    desc: 'Spring Boot order API publishing events to Kafka, fanned out to inventory, notification and analytics consumer groups.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'Java'],
    mock: 'kafka',
    code: 'https://github.com/Fernandes7/Spring-Boot-Kafka-Project',
  },
  {
    title: 'Food Snap AI',
    type: 'AI Web App',
    desc: 'Snap a meal, get calories: Google Gemini recognises food, Edamam supplies nutrition, with a cached Express backend.',
    tags: ['React', 'TypeScript', 'Gemini', 'Express'],
    image: '/work/food-snap.jpg',
    imagePos: 'center 45%',
  },
  {
    title: 'No-Sudo Installer',
    type: 'CLI · Security Tooling',
    desc: 'Secure CLI with backend-driven command execution and role-based access — devs install whitelisted software without sudo.',
    tags: ['CLI', 'RBAC', 'Linux', 'Node.js'],
    mock: 'cli',
  },
]

export const process = [
  { title: 'Discover', text: 'Understand the payment flow, users and failure modes.' },
  { title: 'Plan', text: 'Architecture, module seams and the right data flow.' },
  { title: 'Design Architecture', text: 'Pick the pattern that fits — clean layers, one-way data flow.', tags: ['MVVM', 'MVI', 'MVC'] },
  { title: 'Build', text: 'Kotlin, Compose and Spring Boot — small, readable changes.' },
  { title: 'Secure & Test', text: 'Pinning, tamper checks and certification test suites.' },
  { title: 'Ship & Improve', text: 'Release, measure, profile — then iterate in production.' },
]

// Process section — application foundation, listed TOP → BOTTOM (rendered bottom-up so the foundation lands first)
export const architecture = {
  client: {
    title: 'Client · Android SDK',
    layers: [
      { name: 'UI', tech: 'Jetpack Compose', note: 'Stateless composables, stable models', icon: 'compose' },
      { name: 'State', tech: 'MVVM + MVI', note: 'Intent → ViewModel → immutable State', icon: 'state' },
      { name: 'Domain', tech: 'Payment modules', note: 'Cards · UPI · NetBanking · Mandates', icon: 'card' },
      { name: 'Data', tech: 'Repository', note: 'Single source of truth', icon: 'db' },
      { name: 'Security', tech: 'Interceptors', note: 'SSL pinning · Root/Frida checks · URL guard', icon: 'shield' },
    ],
  },
  link: 'HTTPS · REST · SSL pinned',
  server: {
    title: 'Server · Backend',
    layers: [
      { name: 'API', tech: 'Spring Boot REST', note: 'Validated endpoints & callbacks', icon: 'spring' },
      { name: 'Services', tech: 'Microservices', note: 'Spring Batch jobs & schedulers', icon: 'server' },
      { name: 'Events', tech: 'Apache Kafka', note: 'Async pipelines & worker engines', icon: 'kafka' },
      { name: 'Ledger', tech: 'Reconciliation', note: 'Postings, recon & bank formats', icon: 'ledger' },
      { name: 'Storage', tech: 'Oracle · PostgreSQL', note: 'Tuned queries, indexes & plans', icon: 'oracle' },
    ],
  },
}

// Home "My Expertise" — skill bars + core tool icons (names must exist in TECH in App.jsx)
export const expertise = {
  bars: [
    { name: 'Kotlin & Android', pct: 92 },
    { name: 'Jetpack Compose', pct: 90 },
    { name: 'Java & Spring Boot', pct: 85 },
    { name: 'React & Node.js', pct: 82 },
    { name: 'Apache Kafka', pct: 80 },
  ],
  tools: ['Kotlin', 'Android', 'Jetpack Compose', 'Java', 'Spring Boot', 'Apache Kafka', 'React', 'Node.js', 'PostgreSQL', 'Oracle', 'Docker', 'Git'],
}


export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  school: 'Christ College of Engineering, Irinjalakuda',
  uni: 'APJ Abdul Kalam Technological University',
  period: '2020 – 2024',
  cgpa: '9.45',
}

// Leadership beyond code — Clash of Clans clan leadership (from LinkedIn)
export const clan = {
  title: 'Entertainment with Responsibility',
  org: 'Clash of Clans · Clan Leadership',
  meta: 'Part-time · Malaysia · Remote',
  stats: [
    { value: '1000+', label: 'War Stars', icon: 'stars' },
    { value: '6+', label: 'Years Playing', icon: 'castle' },
    { value: '2', label: 'Leadership Ranks', icon: 'crown' },
  ],
  ranks: [
    { rank: 'Co-Leader', period: 'Jan 2023 – Feb 2024', icon: 'crown', summary: 'Ran Clan Wars — planned attacks, coordinated members and mentored the team.' },
    { rank: 'Elder', period: 'Aug 2022 – Dec 2022', icon: 'shield', summary: 'Kept troop donations flowing and joined Clan Wars regularly.' },
  ],
}

// Personal → Travel diaries. Photos live in /public/travel/NN.webp (full) and /public/travel/t/NN.webp (thumb).
// ponytail: album/place names were inferred from the photos — confirm and edit freely.
export const travel = {
  // filters = hobbies
  categories: [
    { id: 'all', label: 'All', icon: 'images' },
    { id: 'travel', label: 'Travelling', icon: 'plane' },
    { id: 'trek', label: 'Trekking', icon: 'trek' },
    { id: 'snow', label: 'Snow', icon: 'snow' },
    { id: 'forest', label: 'Forest Rides', icon: 'forest' },
    { id: 'sunset', label: 'Sunsets', icon: 'sunset' },
  ],
  albums: [
    { name: 'Kerala Highlands', place: 'Munnar & Western Ghats', note: 'Sunrise above the clouds, misty tea estates', cats: ['forest', 'sunset', 'travel'],
      cover: 3, photos: [3, 5, 6, 1, 2, 7, 8, 9, 27, 28, 29, 31, 32, 33] },
    { name: 'Garhwal Himalayas', place: 'Badrinath, Uttarakhand', note: 'Temple town, gorges and alpine trails', cats: ['trek', 'travel'],
      cover: 21, photos: [21, 11, 20, 19, 12, 13, 14, 15, 16, 17, 18, 22, 10] },
    { name: 'Parvati Valley', place: 'Kasol & Manikaran, Himachal', note: 'Riverside villages and hot springs', cats: ['trek', 'travel'],
      cover: 39, photos: [39, 38, 37, 4] },
    { name: 'Winter Escape', place: 'Snow-clad Himalayas', note: 'Pine forests under fresh snow', cats: ['snow', 'travel'],
      cover: 35, photos: [35, 34, 36] },
    { name: 'Pink City', place: 'Jaipur, Rajasthan', note: 'Jal Mahal and Amer Fort', cats: ['travel', 'sunset'],
      cover: 40, photos: [40, 41, 42] },
    { name: 'Temples & Shores', place: 'South India', note: 'Gopurams, quiet rivers and golden hours', cats: ['travel', 'sunset'],
      cover: 30, photos: [30, 25, 24, 26, 23, 43] },
  ],
  moments: [
    { photo: 3, title: 'Sunrise above the clouds', place: 'Kerala Highlands' },
    { photo: 11, title: 'Badrinath Temple', place: 'Uttarakhand' },
    { photo: 40, title: 'Jal Mahal at dusk', place: 'Jaipur' },
  ],
}
