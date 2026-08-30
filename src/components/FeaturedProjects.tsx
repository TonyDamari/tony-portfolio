"use client"

import { motion } from "framer-motion"

import { featuredProjects, mobileProjects, webProjects } from "../lib/constants"
import FeaturedProjectCard from "./FeaturedProjectCard"

const FeaturedProjects = () => {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-5 font-bold text-2xl sm:text-3xl tracking-tight">Featured Projects</h2>

        <h3 className="mb-2 font-bold text-xl sm:text-xl tracking-tight">Web Projects</h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <h3 className="mt-10 mb-2 font-bold text-xl sm:text-xl tracking-tight">Mobile Apps</h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mobileProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <h3 className="mt-10 mb-2 font-bold text-xl sm:text-xl tracking-tight">Personal Projects</h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
