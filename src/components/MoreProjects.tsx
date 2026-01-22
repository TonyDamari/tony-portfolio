"use client"

import Tippy from "@tippyjs/react"
import { moreProjects } from "../lib/projects"

const MoreProjects = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 px-2 text-gray-500">
      {moreProjects.map((p, index) => {
        const colors = [
          "bg-blue-500/20 text-blue-300 border-blue-500/30",
          "bg-green-500/20 text-green-300 border-green-500/30",
          "bg-purple-500/20 text-purple-300 border-purple-500/30",
          "bg-orange-500/20 text-orange-300 border-orange-500/30",
          "bg-pink-500/20 text-pink-300 border-pink-500/30",
          "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
          "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
          "bg-red-500/20 text-red-300 border-red-500/30",
        ]

        const tooltipContent = p.url ? "Visit live site" : "Internal project / login required"

        return (
          <Tippy
            key={p.title}
            content={
              <p
                className={`${colors[index % colors.length] || "bg-gray-700"} text-white text-sm rounded-md px-2 py-1`}
              >
                {tooltipContent} {p.title}
              </p>
            }
            delay={200}
          >
            <div className={`px-3 py-1 rounded-full border ${colors[index % colors.length]}`}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {p.title}
                </a>
              ) : (
                <span className="cursor-default">{p.title}</span>
              )}
            </div>
          </Tippy>
        )
      })}
    </div>
  )
}

export default MoreProjects
