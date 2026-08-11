"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"
import { LINKS } from "../lib/constants"

const GitHubSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="mb-4 font-bold text-2xl sm:text-3xl tracking-tight">
          GitHub
        </h2>

        <p className="mb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
          Much of my professional development work is maintained in private company repositories. The projects below represent selected personal and public work.
        </p>

        <Link
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-5 py-2.5 rounded-md font-medium text-sm text-white transition-colors"
        >
          <Github className="w-4 h-4" />
          github.com/TonyDamari
        </Link>
      </motion.div>
    </section>
  )
}

export default GitHubSection
