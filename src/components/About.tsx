"use client"

import { motion } from "framer-motion"

const About = () => {
  const startDate = new Date("2023-03-06")
  const currentDate = new Date()
  const duration =
    currentDate.getFullYear() -
    startDate.getFullYear() -
    (currentDate < new Date(currentDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0)

  return (
    <section id="about" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="mb-6 font-bold text-2xl sm:text-3xl tracking-tight">About</h2>

        <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>
            I&apos;m a Software Engineer with {duration}+ years of professional experience building and maintaining
            production web and mobile applications.
          </p>

          <p>
            My core expertise is frontend development with React, Next.js, and TypeScript, with experience building
            responsive interfaces, dashboards, API integrations, and cross-platform mobile applications with React
            Native.
          </p>

          <p>
            I also work across the backend and infrastructure layer with Node.js, NestJS, PostgreSQL, Prisma, Docker,
            and AWS. I enjoy understanding how systems work beyond the UI and increasingly focus on building reliable
            applications across the full stack.
          </p>

          <p>
            I’m particularly interested in solving practical technical problems, improving existing systems, and growing
            into a well-rounded full-stack engineer while contributing to meaningful production software.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
