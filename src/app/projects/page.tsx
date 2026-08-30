import FeaturedProjects from "@/src/components/FeaturedProjects"
import MoreProjectsButton from "@/src/components/MoreProjectsButton"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const Projects = async () => {
  return (
    <section id="projects" className="px-4 sm:px-8 md:px-20 py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-emerald-400 transition-colors"
      >
        <ChevronLeft className="w-4" /> Back to Home
      </Link>

      <MoreProjectsButton />
      <FeaturedProjects />
    </section>
  )
}

export default Projects
