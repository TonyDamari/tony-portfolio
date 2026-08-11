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
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Journey",
    subtitle: "Vehicle Ownership Tracking App",
    description:
      "A frontend application for tracking vehicle ownership costs, fuel logs, maintenance, trips and expenses. Features offline-first architecture with SQL.js, analytics dashboards, service reminders, and fuel price tracking.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "SQL.js",
    ],
    flagship: true,
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
    // githubUrl: "https://github.com/TonyDamari/journey",
    // caseStudyUrl: "/projects/journey",
  },
  {
    title: "FinDash",
    subtitle: "Personal Finance Dashboard",
    description:
      "A comprehensive personal finance dashboard that visualises financial activity from Google Sheets, tracks salary and side earnings, monitors net worth, and provides actionable insights into spending behaviour. 113 tests.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "REST APIs",
      "Google Sheets API",
    ],
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
    // githubUrl: "https://github.com/TonyDamari/expense-dashboard",
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
    // githubUrl: "https://github.com/TonyDamari/journey-backend",
  },
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
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub", "GitLab"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    title: "CMS & Web Platforms",
    skills: ["WordPress", "Webflow", "Headless CMS"],
  },
]
