"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { LINKS } from "../lib/constants"

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="mb-4 font-bold text-2xl sm:text-3xl tracking-tight">
          Let&apos;s build something.
        </h2>

        <p className="mb-8 text-gray-400 text-sm sm:text-base leading-relaxed">
          I&apos;m currently open to Software Engineering opportunities — particularly frontend, full-stack and cloud-oriented roles.
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 px-5 py-2.5 rounded-md font-medium text-black text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Link>
          <Link
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-md font-medium text-white text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-md font-medium text-white text-sm transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
