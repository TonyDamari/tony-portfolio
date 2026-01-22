"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useTypewriter } from "../hooks/useTypewriter"
import Contact from "./Contact"

const Hero = () => {
  const [openContact, setOpenContact] = useState(false)

  const openModal = () => setOpenContact(true)
  const closeModal = () => setOpenContact(false)
  const typewriterText = useTypewriter("Frontend Engineer building modern web & mobile apps", 80)

  return (
    <section className="relative flex flex-col justify-center px-4 sm:px-8 md:px-20 w-full min-h-[90vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center gap-2 font-medium"
      >
        <button onClick={() => openModal()}>Contact</button>
        <Link href="/projects">Projects</Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl translate-y-1/2"
      >
        Tony Damari
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mt-4 sm:mt-8 md:mt-30 max-w-full md:max-w-2xl font-mono font-medium md:text-[35px] text-lg sm:text-2xl leading-tight md:leading-13.75 translate-y-4/5"
      >
        {typewriterText}
        <span className="animate-pulse">|</span>
      </motion.h2>
      <Contact isOpen={!!openContact} onClose={closeModal} />
    </section>
  )
}

export default Hero
