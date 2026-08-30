import { ExternalLink, FileText } from "lucide-react"
import { techColors, type FeaturedProject } from "../lib/constants"

const FeaturedProjectCard = ({ project }: { project: FeaturedProject }) => {
  const isFlagship = project.flagship
  const isPlaceholder = project.placeholder

  return (
    <div
      className={`flex flex-col bg-zinc-900/80 border rounded-lg overflow-hidden transition-colors h-full ${
        isFlagship ? "border-emerald-500/40 hover:border-emerald-400/60" : "border-zinc-800 hover:border-zinc-600"
      }`}
    >
      {/* Image area */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-[30vh] min-h-48 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex justify-center items-center bg-zinc-800/50 w-full h-48">
          <span className="font-mono text-gray-500 text-sm">{isPlaceholder ? "Coming Soon" : "Screenshot"}</span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title & Subtitle */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white text-lg sm:text-xl">{project.title}</h3>
            {isFlagship && (
              <span className="bg-emerald-500/20 px-2 py-0.5 rounded font-medium text-emerald-400 text-xs">
                Flagship
              </span>
            )}
            {isPlaceholder && (
              <span className="bg-amber-500/20 px-2 py-0.5 rounded font-medium text-amber-400 text-xs">
                In Progress
              </span>
            )}
          </div>
          <p className="mt-1 text-gray-400 text-sm">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="flex-1 mb-4 text-gray-300 text-sm leading-relaxed">{project.description}</p>

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
              className={`px-2 py-0.5 rounded text-xs ${techColors[tech] || "bg-zinc-800 text-gray-300"}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2 border-zinc-800 border-t">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 text-sm transition-colors"
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
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 text-sm transition-colors"
            >
              <img src="/icons/github.svg" className="w-5 h-5" />
              GitHub
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 text-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Case Study
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.android}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 text-sm transition-colors"
            >
              <img src="/icons/apple.svg" className="w-3.5 h-3.5" />
              Android
            </a>
          )}
          {project.ios && (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 text-sm transition-colors"
            >
              <img src="/icons/apple.svg" className="w-3.5 h-3.5" />
              iOS
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && !project.caseStudyUrl && !project.ios && !project.android && (
            <span className="text-gray-500 text-xs italic">Links available when project is deployed</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
