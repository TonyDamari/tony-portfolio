"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AtSign, Github, Phone, X } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface ContactProps {
  isOpen: boolean
  onClose: () => void
}

const Contact = ({ isOpen, onClose }: ContactProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-zinc-900 mx-4 p-4 sm:p-6 md:p-8 border border-zinc-700 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-white text-lg sm:text-xl md:text-2xl">Let’s work together</h2>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-gray-400 hover:text-white text-xl sm:text-2xl cursor-pointer"
              >
                <X />
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="mb-8 max-w-xl text-gray-400">
                I’m open to frontend, full-stack, and remote opportunities. The best way to reach me is via email.
              </p>

              <div className="flex flex-col gap-4">
                <Link href="mailto:tony.damari@gmail.com" className="flex items-center gap-2 hover:underline">
                  <AtSign className="w-4" />
                  Mail me
                </Link>

                <Link href="tel:0678941499" className="flex items-center gap-2 hover:underline">
                  <Phone className="w-4" />
                  Call me
                </Link>

                <Link
                  href="https://github.com/tonydamari"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Github className="w-4" /> GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Contact
