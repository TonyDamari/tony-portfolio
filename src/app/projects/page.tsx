import AnimatedCard from "@/src/components/AnimatedCard"
import MobileProjectCard from "@/src/components/MobileProjectCard"
import MoreProjects from "@/src/components/MoreProjects"
import WebProjectCard from "@/src/components/WebProjectCard"
import { mobileProjects, webProjects } from "@/src/lib/projects"
import Link from "next/link"

const Projects = async () => {
  return (
    <div className="relative min-h-screen">
      <div className="z-0 absolute inset-0 bg-gradient-to-tr from-zinc-900 to-slate-900 w-full h-full" />

      <section id="projects" className="z-10 relative px-4 sm:px-8 md:px-20 py-24 sm:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white text-sm transition-colors"
        >
          ← Back to Home
        </Link>

        <h2 className="mb-4 font-bold text-2xl sm:text-3xl tracking-tight">
          Client & Professional Work
        </h2>
        <p className="mb-12 max-w-xl text-gray-400 text-sm sm:text-base">
          A selection of production web and mobile applications built for clients and employers.
        </p>

        {/* Web Projects */}
        <h3 className="mb-6 font-semibold text-xl sm:text-2xl">Web Projects</h3>
        <div className="gap-6 sm:gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
          {webProjects.map((project) => (
            <AnimatedCard key={project.title}>
              <WebProjectCard {...project} />
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile Projects */}
        <h3 className="mb-6 font-semibold text-xl sm:text-2xl">Mobile Apps</h3>
        <div className="gap-6 sm:gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
          {mobileProjects.map((project) => (
            <AnimatedCard key={project.title}>
              <MobileProjectCard {...project} />
            </AnimatedCard>
          ))}
        </div>

        {/* More Projects */}
        <h4 className="mb-4 text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
          More Websites I&apos;ve Worked On
        </h4>
        <MoreProjects />
      </section>
    </div>
  )
}

export default Projects
