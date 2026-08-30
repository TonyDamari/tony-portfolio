"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stages = [
  {
    label: "Frontend",
    tech: "React / TypeScript",
    active: true,
  },
  {
    label: "Full-Stack",
    tech: "Node.js / NestJS / PostgreSQL",
    active: true,
  },
  {
    label: "Cloud",
    tech: "Docker / AWS",
    growing: true,
  },
]

const CareerDirection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="mb-6 font-medium text-white text-base sm:text-lg">
          Currently focused on growing from frontend specialist into full-stack and cloud engineering.
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-2 sm:gap-3">
              <div
                className={`px-3 sm:px-4 py-2 rounded-md border ${
                  stage.growing
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-zinc-700 bg-zinc-900/60"
                }`}
              >
                <p className={`font-medium text-sm ${stage.growing ? "text-emerald-400" : "text-white"}`}>
                  {stage.label}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{stage.tech}</p>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CareerDirection
