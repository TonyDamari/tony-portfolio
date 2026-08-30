"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Search, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { moreProjects } from "../lib/projects"

interface MoreProjectsModalProps {
  isOpen: boolean
  onClose: () => void
}

const MoreProjectsModal = ({ isOpen, onClose }: MoreProjectsModalProps) => {
  const [query, setQuery] = useState("")

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

  // Reset the search each time the modal opens
  useEffect(() => {
    if (isOpen) setQuery("")
  }, [isOpen])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return moreProjects
    return moreProjects.filter((p) => p.title.toLowerCase().includes(q))
  }, [query])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative flex flex-col bg-zinc-900 shadow-2xl border border-zinc-700 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="More projects"
          >
            {/* Header */}
            <div className="flex justify-between items-start gap-4 p-6 pb-4 border-zinc-800 border-b">
              <div>
                <h2 className="font-bold text-white text-xl sm:text-2xl tracking-tight">Selected Client Work</h2>
                <p className="mt-1 text-gray-400 text-sm">
                  Throughout my professional experience, I've contributed to a large number of production websites and
                  applications, primarily working on feature development, maintenance, integrations, technical
                  improvements and content updates.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex-shrink-0 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search */}
            <div className="px-6 pt-4">
              <div className="relative">
                <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-500 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-zinc-800/60 py-2 pr-3 pl-9 border border-zinc-700 focus:border-emerald-500/60 rounded-lg outline-none w-full text-white placeholder:text-gray-500 text-sm"
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="col-span-full py-8 text-gray-500 text-sm text-center">
                  No projects match &ldquo;{query}&rdquo;.
                </p>
              ) : (
                filtered.map((p) => {
                  const hasUrl = p.url && p.url !== "#"
                  return hasUrl ? (
                    <a
                      key={p.title}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex justify-between items-center gap-2 bg-zinc-800/40 hover:bg-zinc-800 px-3 py-2 border border-zinc-800 hover:border-zinc-600 rounded-lg text-sm transition-colors"
                    >
                      <span className="text-gray-300 group-hover:text-white truncate transition-colors">{p.title}</span>
                      <ExternalLink className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                    </a>
                  ) : (
                    <div
                      key={p.title}
                      className="flex items-center bg-zinc-800/20 px-3 py-2 border border-zinc-800/60 rounded-lg text-gray-500 text-sm cursor-default"
                      title="Internal project / login required"
                    >
                      <span className="truncate">{p.title}</span>
                    </div>
                  )
                })
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MoreProjectsModal
