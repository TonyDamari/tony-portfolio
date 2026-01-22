import { techColors } from "../lib/constants"
import { MobileProject } from "../lib/projects"

const MobileProjectCard = ({ title, description, image, tech, iosUrl, androidUrl, demoUrl }: MobileProject) => (
  <div className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-white rounded-lg h-full overflow-hidden transition">
    <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
    <div className="flex flex-col flex-1 space-y-4 p-6">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="flex-1 text-gray-400 text-sm">{description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className={`px-2 py-1 rounded text-xs ${techColors[t] || "bg-zinc-800 text-gray-300"}`}>
            {t}
          </span>
        ))}
      </div>
      {/* App Store / Play Store / Demo Links */}
      <div className="flex gap-4 pt-2">
        {iosUrl && (
          <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
            <img src="/icons/apple.svg" className="w-4 h-4" /> iOS
          </a>
        )}
        {androidUrl && (
          <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
            <img src="/icons/android.svg" className="w-4 h-4" /> Android
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="underline">
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
)

export default MobileProjectCard
