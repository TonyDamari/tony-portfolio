export const techColors: Record<string, string> = {
  React: "bg-blue-500/20 text-blue-300",
  "Next.js": "bg-gray-500/20 text-gray-300",
  TypeScript: "bg-blue-600/20 text-blue-400",
  JavaScript: "bg-yellow-500/20 text-yellow-300",
  "Node.js": "bg-green-500/20 text-green-300",
  NestJS: "bg-red-500/20 text-red-300",
  "Tailwind CSS": "bg-cyan-500/20 text-cyan-300",
  "shadcn/ui": "bg-zinc-500/20 text-zinc-300",
  PostgreSQL: "bg-blue-700/20 text-blue-400",
  Prisma: "bg-indigo-500/20 text-indigo-300",
  AWS: "bg-orange-500/20 text-orange-300",
  Docker: "bg-blue-400/20 text-blue-300",
  "React Native": "bg-purple-500/20 text-purple-300",
  Expo: "bg-violet-500/20 text-violet-300",
  Recharts: "bg-teal-500/20 text-teal-300",
  Vite: "bg-purple-400/20 text-purple-300",
  "REST APIs": "bg-emerald-500/20 text-emerald-300",
  "CI/CD": "bg-amber-500/20 text-amber-300",
  Git: "bg-orange-600/20 text-orange-300",
  GitHub: "bg-gray-600/20 text-gray-300",
  GitLab: "bg-orange-500/20 text-orange-300",
  WordPress: "bg-blue-500/20 text-blue-300",
  Webflow: "bg-indigo-400/20 text-indigo-300",
  "Headless CMS": "bg-pink-500/20 text-pink-300",
  HTML: "bg-orange-500/20 text-orange-300",
  CSS: "bg-blue-500/20 text-blue-300",
  Firebase: "bg-yellow-500/20 text-yellow-300",
  AI: "bg-emerald-500/20 text-emerald-300",
  Tailwind: "bg-cyan-500/20 text-cyan-300",
  "SQL.js": "bg-sky-500/20 text-sky-300",
  "Google Sheets API": "bg-green-500/20 text-green-300",
  SWR: "bg-gray-500/20 text-gray-300",
  "Redux Toolkit": "bg-purple-600/20 text-purple-300",
  Gatsby: "bg-purple-700/20 text-purple-400",
  Astro: "bg-orange-400/20 text-orange-300",
  Angular: "bg-red-600/20 text-red-400",
  "Digital Ocean": "bg-blue-500/20 text-blue-300",
  "Laravel Forge": "bg-red-400/20 text-red-300",
  Figma: "bg-pink-500/20 text-pink-300",
  Vitest: "bg-yellow-400/20 text-yellow-300",
  Postman: "bg-orange-500/20 text-orange-300",
  Capacitor: "bg-blue-400/20 text-blue-300",
  Supabase: "bg-emerald-600/20 text-emerald-300",
  Swift: "bg-orange-500/20 text-orange-300",
  SwiftUI: "bg-blue-500/20 text-blue-300",
  "Payload CMS": "bg-violet-500/20 text-violet-300",
  AdonisJS: "bg-indigo-600/20 text-indigo-300",
  NativeWind: "bg-cyan-500/20 text-cyan-300",
  Zustand: "bg-amber-600/20 text-amber-300",
  Twilio: "bg-red-500/20 text-red-300",
  MongoDB: "bg-green-600/20 text-green-300",
  GraphQL: "bg-pink-600/20 text-pink-400",
  Stripe: "bg-violet-400/20 text-violet-300",
  Redis: "bg-red-500/20 text-red-300",
  Kubernetes: "bg-blue-600/20 text-blue-400",
  Terraform: "bg-purple-500/20 text-purple-300",
  Jest: "bg-red-400/20 text-red-300",
  Playwright: "bg-green-500/20 text-green-300",
  Storybook: "bg-pink-400/20 text-pink-300",
  Cypress: "bg-teal-600/20 text-teal-300",
  Slack: "bg-purple-500/20 text-purple-300",
  "VS Code": "bg-blue-500/20 text-blue-300",
}

export const LINKS = {
  github: "https://github.com/TonyDamari",
  linkedin: "https://linkedin.com/in/tonydamari",
  email: "tony.damari@gmail.com",
  site: "https://tonydamari.netlify.app",
} as const

export interface FeaturedProject {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  flagship?: boolean
  placeholder?: boolean
  highlights?: string[]
  android?: string
  ios?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Journey",
    subtitle: "Vehicle Ownership Tracking App",
    description:
      "A frontend application for tracking vehicle ownership costs, fuel logs, maintenance, trips and expenses. Features offline-first architecture with SQL.js, analytics dashboards, service reminders, and fuel price tracking.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "SQL.js"],
    // flagship: true,
    highlights: [
      "Offline-first with SQL.js",
      "Vehicle & fuel tracking",
      "Trip logging & expenses",
      "Analytics & reporting",
      "Service reminders",
      "Fuel price tracking",
    ],
    // Uncomment and add URLs when available:
    // liveUrl: "https://journey-app.example.com",
    githubUrl: "https://github.com/TonyDamari/journey",
    // caseStudyUrl: "/projects/journey",
    image: "/projects/journey_dashboard.png",
  },
  {
    title: "FinDash",
    subtitle: "Personal Finance Dashboard",
    description:
      "A comprehensive personal finance dashboard that visualises financial activity from Google Sheets, tracks salary and side earnings, monitors net worth, and provides actionable insights into spending behaviour. 113 tests.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "REST APIs", "Google Sheets API"],
    highlights: [
      "Expense tracking & categorisation",
      "Net worth monitoring",
      "Salary & side earnings tracking",
      "Budget management & savings goals",
      "Debt payoff planner",
      "Financial health scoring",
      "CSV exports & reports",
      "113 tests with Vitest",
    ],
    // Uncomment when deployed:
    // liveUrl: "https://findash.example.com",
    githubUrl: "https://github.com/TonyDamari/expense-dashboard",
    image: "/projects/findash.png",
  },
  {
    title: "Journey API",
    subtitle: "NestJS REST API & Cloud Infrastructure",
    description:
      "The backend for the Journey vehicle tracking platform. A production-grade NestJS REST API with JWT authentication, OAuth (Google & Apple), PostgreSQL via Prisma, AWS S3 file uploads, SES email, rate limiting, and Swagger documentation.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS"],
    highlights: [
      "JWT auth with refresh token rotation",
      "Google & Apple OAuth",
      "AWS S3 pre-signed uploads",
      "AWS SES email",
      "Rate limiting & security (Helmet, CORS)",
      "Swagger API documentation",
      "Prisma ORM with migrations",
      "Docker & docker-compose",
    ],
    // Uncomment when project is ready:
    githubUrl: "https://github.com/TonyDamari/journey-backend",
    image: "/projects/journey_api.png",
  },
]

export const webProjects: FeaturedProject[] = [
  // {
  //   title: "Senco AI Payment",
  //   subtitle: "AI-Powered Payments Platform",
  //   description:
  //     "An AI-powered payments and merchant platform with a large dashboard surface — transactions, payouts, analytics, risk, SMS payments, payment links, reports and an AI assistant.",
  //   technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  // },
  // {
  //   title: "Headcount",
  //   subtitle: "Workforce Planning Platform",
  //   description:
  //     "A workforce planning and headcount management platform with dashboards, recruitment, attrition, budgeting and analytics. Built as an embeddable SPA with SSO and rich, editable data grids.",
  //   technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  // },
  // {
  //   title: "Metricate",
  //   subtitle: "Performance & Coaching Platform",
  //   description:
  //     "A gamified employee performance and coaching platform featuring leaderboards, badges, challenges, coaching forms, messaging and a knowledge base, with real-time updates and 3D avatars.",
  //   technologies: ["React", "TypeScript", "Vite"],
  //   image: "/projects/BeYou.png",
  // },
  // {
  //   title: "Investor Portal",
  //   subtitle: "Full-Stack White-Label Portal",
  //   description:
  //     "A full-stack, white-label investor portal. A configurable per-client CMS backend with 2FA, S3 document storage, PDF/CSV handling and dashboards, paired with an authenticated Next.js portal frontend.",
  //   technologies: ["Next.js", "AdonisJS", "PostgreSQL", "AWS"],
  // },
  // {
  //   title: "BasisPoint Multi-Tenant CMS",
  //   subtitle: "Multi-Tenant Content Platform",
  //   description:
  //     "A multi-tenant CMS where a single app and database serve multiple client websites, each with their own content, users and settings. Built on Payload CMS with S3 storage and SES email.",
  //   technologies: ["Payload CMS", "Next.js", "PostgreSQL", "AWS"],
  // },
  {
    title: "VideoChat",
    subtitle: "In-Browser Live Video Chat",
    description:
      "Add live video chat to your website in seconds with face-to-face customer interactions. No downloads required — works in any browser.",
    technologies: ["Vite", "TypeScript", "Tailwind CSS"],
    image: "/projects/videochat.png",
    liveUrl: "https://videochat.live/",
  },
  {
    title: "Libremax",
    subtitle: "Capital Markets Website",
    description: "A marketing site for a capital markets firm — creative structuring, swift capital.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/libremax.png",
    liveUrl: "https://www.libremax.com/",
  },
  {
    title: "Eisler Capital",
    subtitle: "Multi-Strategy Fund Website",
    description:
      "A marketing site for a multi-strategy investment firm built on the principles of deep collaboration and continuous development.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/eisler.png",
    liveUrl: "https://eislercapital.com/",
  },
  {
    title: "Catchment Capital",
    subtitle: "Private Equity Website",
    description: "A marketing site for a private equity firm specialising in industrial and middle-market investments.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/catchment-capital.png",
    liveUrl: "https://www.catchmentcapital.com/",
  },
  {
    title: "Mesarete Capital",
    subtitle: "Capital Management Website",
    description: "A responsive marketing site for a capital management firm with API-driven content.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/mesarete.png",
    liveUrl: "https://www.mesaretecapital.com/",
  },
]

export const mobileProjects: FeaturedProject[] = [
  {
    title: "Lifestyle Rewards",
    subtitle: "Rewards & Cash-Back App",
    description:
      "Earn real cash-back, enjoy exclusive deals, and make every purchase rewarding. Features biometric login, a digital wallet, partner integrations and push notifications.",
    technologies: ["React Native", "Redux Toolkit", "Firebase"],
    image: "/projects/Lifestyle_Rewards.png",
    ios: "https://apps.apple.com/za/app/lifestyle-rewards/id1581131905",
    android: "https://play.google.com/store/apps/details?id=com.llmobile&hl=en_ZA",
  },
  {
    title: "tAIsty",
    subtitle: "AI Recipe Generator",
    description: "An AI-powered recipe generating app built with Expo and React Native.",
    technologies: ["Expo", "React Native", "TypeScript"],
    image: "/projects/taisty.webp",
    ios: "https://apps.apple.com/za/app/taisty/id6448109710",
    android: "https://play.google.com/store/apps/details?id=com.fuseboxdeveloper.tAIsty",
  },
  {
    title: "The Stress Code",
    subtitle: "Wellness Mobile App",
    description:
      "A React Native mobile app featuring charts, progress tracking, audio playback and push notifications.",
    technologies: ["React Native", "Redux Toolkit", "Firebase"],
    image: "/projects/the_stresscode.png",
    ios: "https://apps.apple.com/za/app/the-stress-code/id1510930665",
  },
  // {
  //   title: "Leroo",
  //   subtitle: "Payments & Wallet App",
  //   description:
  //     "A cross-platform payments and wallet app with payer and recipient roles, wallet, transaction history and profile management. Delivered to iOS and Android via Capacitor.",
  //   technologies: ["React", "TypeScript", "Capacitor", "Supabase"],
  // },
  // {
  //   title: "VideoChat iOS",
  //   subtitle: "Native iOS Admin App",
  //   description:
  //     "A native iOS admin app for the VideoChat platform with authentication, dashboard, real-time messaging and video call capabilities.",
  //   technologies: ["Swift", "SwiftUI", "Twilio"],
  //   image: "/projects/videochat.png",
  // },
  // {
  //   title: "VidLink",
  //   subtitle: "Native iOS Video Calling",
  //   description: "A native iOS VoIP and video-calling app with Google Sign-In and push notification support.",
  //   technologies: ["Swift", "SwiftUI"],
  // },

  // {
  //   title: "Kitchen Kings",
  //   subtitle: "React Native App",
  //   description:
  //     "A React Native mobile app with QR-code support, animated UI and local state persistence.",
  //   technologies: ["React Native", "NativeWind", "Zustand"],
  // },
]

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Fusebox",
    location: "Johannesburg, South Africa",
    period: "March 2023 – Present",
    bullets: [
      "Develop and maintain production web applications using React, Next.js, TypeScript, and Vite.",
      "Build responsive and accessible user interfaces following modern frontend development practices.",
      "Develop and maintain cross-platform mobile functionality using React Native and Expo.",
      "Take ownership of frontend features from development and testing through to production release.",
      "Investigate, debug, and resolve production issues.",
      "Work closely with designers, backend developers, and product stakeholders.",
      "Contribute to the ongoing improvement and maintenance of existing applications.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "BasisPoint Group",
    location: "Remote",
    period: "November 2024 – Present",
    bullets: [
      "Provide end-to-end web development and maintenance services for multiple clients.",
      "Develop and maintain websites and web applications using React, Next.js, Astro, Gatsby, WordPress, and Webflow.",
      "Implement custom UI/UX features with a focus on responsive design.",
      "Improve website performance and SEO.",
      "Manage website security, updates, troubleshooting, and technical maintenance.",
      "Communicate directly with clients and stakeholders.",
      "Manage multiple projects and deadlines independently.",
    ],
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML",
      "CSS",
      "Vite",
      "Gatsby",
      "Astro",
      "Angular",
      "Redux",
      "Tanstack",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["CI/CD", "Git", "GitHub", "GitLab", "Digital Ocean", "Laravel Forge", "AWS", "Docker"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    title: "CMS & Web Platforms",
    skills: ["WordPress", "Webflow", "Headless CMS"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Vitest", "VS Code", "Slack", "Postman"],
    // skills: ["Figma", "Jest", "Vitest", "Playwright", "Storybook", "Cypress", "MongoDB", "Firebase"],
  },
]
