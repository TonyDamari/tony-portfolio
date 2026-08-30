"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Contact from "./Contact"

const Nav = () => {
  const [openContact, setOpenContact] = useState(false)

  const openModal = () => setOpenContact(true)
  const closeModal = () => setOpenContact(false)

  return (
    <nav className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center gap-2 font-medium"
      >
        <button onClick={() => openModal()} className="hover:text-emerald-400 transition-colors">
          Contact
        </button>
        <span className="bg-white mx-2 rounded-full w-2 h-2" />
        <Link href="/projects" className="hover:text-emerald-400 transition-colors">
          Projects
        </Link>
        <span className="bg-white mx-2 rounded-full w-2 h-2" />
        <Link href="/about" className="hover:text-emerald-400 transition-colors">
          About
        </Link>
      </motion.div>
      <Contact isOpen={!!openContact} onClose={closeModal} />
    </nav>
  )
}

export default Nav
