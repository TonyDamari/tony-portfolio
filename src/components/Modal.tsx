"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string[]
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
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
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-zinc-900 shadow-2xl mx-4 p-6 md:p-8 border border-zinc-700 rounded-2xl w-full max-w-md sm:max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="flex items-center gap-2 font-extrabold text-white text-xl sm:text-2xl md:text-3xl tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-gray-400 hover:text-emerald-400 text-2xl sm:text-3xl transition-colors cursor-pointer"
              >
                <X />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3">
              {content.map((item, index) => (
                <motion.div
                  key={index}
                  className="hover:bg-zinc-800/40 px-2 py-1 rounded text-gray-300 text-sm sm:text-base transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  • {item}
                </motion.div>
              ))}
            </div>

            {/* Optional scroll indicator */}
            <div className="bottom-2 left-1/2 absolute bg-zinc-600 opacity-50 rounded-full w-8 h-1 -translate-x-1/2 animate-bounce" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
