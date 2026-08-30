"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AtSign, X } from "lucide-react"
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
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-zinc-900 mx-4 p-4 sm:p-6 md:p-8 border border-zinc-700 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-white text-lg sm:text-xl md:text-2xl">Let’s work together</h2>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-gray-400 hover:text-emerald-400 text-xl sm:text-2xl cursor-pointer"
              >
                <X />
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="mb-8 max-w-xl text-gray-400">
                {/* I'm open to frontend and full-stack opportunities, particularly remote roles where I can contribute to
                production applications and continue growing across the stack.
                <br /> */}
                If you're looking for a developer who can work across React, Next.js, TypeScript and the wider
                application stack, I'd be happy to hear from you.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:tony.damari@gmail.com"
                  className="group flex justify-between items-center bg-emerald-400/10 hover:bg-emerald-400/15 p-4 border border-emerald-400/20 hover:border-emerald-400/40 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <AtSign className="w-5 h-5 text-emerald-400" />

                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      {/* <p className="text-white">tony.damari@gmail.com</p> */}
                    </div>
                  </div>

                  {/* <span className="text-emerald-400">→</span> */}
                </a>

                {/* <Link
                  href="https://github.com/tonydamari"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img src="/icons/github.svg" className="w-5 h-5" /> GitHub
                </Link> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Contact
