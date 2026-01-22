interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  type: "website" | "mobile app" | "backend"
}

const ProjectCard = ({ title, description, image, tech, liveUrl, githubUrl, type }: Project) => {
  const techColors: Record<string, string> = {
    React: "bg-blue-500/20 text-blue-300",
    "Next.js": "bg-gray-500/20 text-gray-300",
    TypeScript: "bg-blue-600/20 text-blue-400",
    JavaScript: "bg-yellow-500/20 text-yellow-300",
    "Node.js": "bg-green-500/20 text-green-300",
    Python: "bg-yellow-600/20 text-yellow-400",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-300",
    MongoDB: "bg-green-600/20 text-green-400",
    PostgreSQL: "bg-blue-700/20 text-blue-400",
    AWS: "bg-orange-500/20 text-orange-300",
    Docker: "bg-blue-400/20 text-blue-300",
    "React Native": "bg-purple-500/20 text-purple-300",
  }

  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />

      <div className="space-y-4 p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">{title}</h3>
          <span className="bg-zinc-700 px-2 py-1 rounded text-gray-300 text-xs">{type}</span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className={`px-2 py-1 rounded text-xs ${techColors[t] || "bg-zinc-800 text-gray-300"}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" className="underline">
              Live
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" className="underline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
