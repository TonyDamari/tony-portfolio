"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { LINKS } from "../lib/constants"

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center px-4 sm:px-8 md:px-20 pt-24 md:pt-32 pb-16 md:pb-24 w-full min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="mb-2 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
          Tony Damari
        </h1>
        <p className="mb-6 font-medium text-emerald-400 text-lg sm:text-xl md:text-2xl">
          Software Engineer
        </p>

        <p className="mb-4 max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Building modern web applications with React, TypeScript and Node.js — with a growing focus on full-stack and cloud engineering.
        </p>

        <p className="mb-8 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
          Software Engineer with 3+ years of professional experience building production web and mobile applications. Strong frontend expertise with React, Next.js and TypeScript, currently expanding into full-stack development, backend engineering and AWS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center bg-white hover:bg-gray-200 px-5 py-2.5 rounded-md font-medium text-black text-sm transition-colors"
          >
            View My Work
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
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-md font-medium text-white text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
