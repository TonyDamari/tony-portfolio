# Tony Damari — Portfolio

Personal portfolio website for job hunting and professional positioning as a Software Engineer.

**Live:** [tonydamari.netlify.app](https://tonydamari.netlify.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono

## Sections

- Hero with professional positioning and CTAs
- About — professional summary
- Technical Skills — grouped by category
- Featured Projects — Journey, FinDash, Journey API
- Experience — timeline with Fusebox and BasisPoint Group
- Career Direction — Frontend → Full-Stack → Cloud progression
- GitHub — context about private/public repos
- Contact — CTA with email, GitHub, LinkedIn
- Client Work — separate `/projects` page with production web and mobile apps

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed on Netlify. Pushes to `main` trigger automatic builds.

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Main single-page portfolio
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── globals.css         # Tailwind + custom styles
│   └── projects/page.tsx   # Client/professional work page
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── FeaturedProjects.tsx
│   ├── Experience.tsx
│   ├── CareerDirection.tsx
│   ├── GitHubSection.tsx
│   ├── Contact.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── ...                 # Project card components
├── lib/
│   ├── constants.ts        # All data: projects, experience, skills
│   ├── projects.ts         # Client/professional project data
│   └── structured-data.ts  # JSON-LD schema
└── hooks/
    └── useTypewriter.ts
```
