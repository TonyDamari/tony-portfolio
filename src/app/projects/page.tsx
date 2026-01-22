import AnimatedCard from "@/src/components/AnimatedCard"
import MobileProjectCard from "@/src/components/MobileProjectCard"
import MoreProjects from "@/src/components/MoreProjects"
import WebProjectCard from "@/src/components/WebProjectCard"
import { mobileProjects, webProjects } from "@/src/lib/projects"
import Link from "next/link"

const Projects = async () => {
  return (
    <section id="projects" className="px-4 sm:px-8 md:px-20 py-32">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      {/* Section Intro */}
      <h2 className="mb-4 font-bold text-3xl">Projects</h2>
      <p className="mb-12 max-w-xl text-gray-400">
        A selection of production-ready web and mobile applications I’ve built.
      </p>

      {/* Web Projects */}
      <h3 className="mb-6 font-semibold text-2xl">Web Projects</h3>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
        {webProjects.map((project) => (
          <AnimatedCard key={project.title}>
            <WebProjectCard {...project} />
          </AnimatedCard>
        ))}
      </div>

      {/* Mobile Projects */}
      <h3 className="mb-6 font-semibold text-2xl">Mobile Apps</h3>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mb-16">
        {mobileProjects.map((project) => (
          <AnimatedCard key={project.title}>
            <MobileProjectCard {...project} />
          </AnimatedCard>
        ))}
      </div>

      {/* More Projects */}
      <h4 className="mb-4 text-gray-400 text-sm uppercase tracking-widest">More Websites I’ve Worked On</h4>
      <MoreProjects />
    </section>
  )
}

export default Projects
