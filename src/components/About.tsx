"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-8 md:px-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="mb-6 font-bold text-2xl sm:text-3xl tracking-tight">
          About
        </h2>

        <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>
            I&apos;m a Software Engineer with 3+ years of professional experience building and maintaining production web and mobile applications.
          </p>

          <p>
            My core expertise is frontend development with React, Next.js, and TypeScript — delivering responsive interfaces, dashboards, API integrations, and cross-platform mobile applications using React Native.
          </p>

          <p>
            I&apos;m also expanding my capabilities across the stack, currently working with Node.js, NestJS, PostgreSQL, Prisma, Docker, and AWS. I enjoy understanding how systems work beyond the UI and building reliable solutions from the frontend through to the backend and infrastructure.
          </p>

          <p>
            I&apos;m naturally curious, enjoy solving difficult technical problems, and take pride in writing clean, maintainable code. I&apos;m particularly interested in opportunities where I can continue growing as a full-stack Software Engineer while contributing meaningful production work.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
