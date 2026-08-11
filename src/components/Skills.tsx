"use client"

import { motion } from "framer-motion"
import { skillGroups, techColors } from "../lib/constants"

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-8 font-bold text-2xl sm:text-3xl tracking-tight">
          Technical Skills
        </h2>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 font-mono font-medium text-emerald-400 text-sm">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded text-xs font-medium ${
                      techColors[skill] || "bg-zinc-800 text-gray-300"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
