"use client"

import { motion } from "framer-motion"
import { experience } from "../lib/constants"

const Experience = () => {
  return (
    <section id="experience" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-8 font-bold text-2xl sm:text-3xl tracking-tight">
          Experience
        </h2>

        <div className="space-y-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="relative pl-6 border-l border-zinc-800">
              <div className="absolute -left-[5px] top-1.5 bg-emerald-400 rounded-full w-2.5 h-2.5" />

              <div className="mb-3">
                <h3 className="font-semibold text-white text-base sm:text-lg">
                  {job.role}
                </h3>
                <p className="text-gray-400 text-sm">
                  {job.company} — {job.location}
                </p>
                <p className="font-mono text-emerald-400/80 text-xs mt-1">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-1.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-gray-500 mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
