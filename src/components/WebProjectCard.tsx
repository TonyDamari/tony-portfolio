import { techColors } from "../lib/constants"
import { Project } from "../lib/projects"

const WebProjectCard = ({ title, description, image, tech, liveUrl, githubUrl }: Project) => (
  <div className="group bg-zinc-900 border border-zinc-800 hover:border-white rounded-lg overflow-hidden transition h-full flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
    <div className="space-y-4 p-6 flex-1 flex flex-col">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-400 text-sm flex-1">{description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className={`px-2 py-1 rounded text-xs ${techColors[t] || "bg-zinc-800 text-gray-300"}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="underline">
            Live
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
)

export default WebProjectCard
