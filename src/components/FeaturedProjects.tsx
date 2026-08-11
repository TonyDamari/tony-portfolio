"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FileText } from "lucide-react"
import { featuredProjects, techColors } from "../lib/constants"
import type { FeaturedProject } from "../lib/constants"

const ProjectCard = ({ project }: { project: FeaturedProject }) => {
  const isFlagship = project.flagship
  const isPlaceholder = project.placeholder

  return (
    <div
      className={`flex flex-col bg-zinc-900/80 border rounded-lg overflow-hidden transition-colors h-full ${
        isFlagship
          ? "border-emerald-500/40 hover:border-emerald-400/60"
          : "border-zinc-800 hover:border-zinc-600"
      }`}
    >
      {/* Image area */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center bg-zinc-800/50 w-full h-48">
          <span className="text-gray-500 text-sm font-mono">
            {isPlaceholder ? "Coming Soon" : "Screenshot"}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title & Subtitle */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg sm:text-xl text-white">
              {project.title}
            </h3>
            {isFlagship && (
              <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400 text-xs font-medium">
                Flagship
              </span>
            )}
            {isPlaceholder && (
              <span className="bg-amber-500/20 px-2 py-0.5 rounded text-amber-400 text-xs font-medium">
                In Progress
              </span>
            )}
          </div>
          <p className="mt-1 text-gray-400 text-sm">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="flex-1 mb-4 text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Highlights (for placeholder projects) */}
        {project.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.highlights.map((h) => (
                <span key={h} className="text-gray-500 text-xs">
                  • {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded text-xs ${
                techColors[tech] || "bg-zinc-800 text-gray-300"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-zinc-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Case Study
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && !project.caseStudyUrl && (
            <span className="text-xs text-gray-500 italic">
              Links available when project is deployed
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const FeaturedProjects = () => {
  return (
    <section id="projects" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-2 font-bold text-2xl sm:text-3xl tracking-tight">
          Featured Projects
        </h2>
        <p className="mb-8 text-gray-400 text-sm sm:text-base">
          Selected personal projects demonstrating frontend, backend and cloud engineering.
        </p>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
