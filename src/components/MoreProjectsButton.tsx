"use client"

import { LayoutGrid } from "lucide-react"
import { useState } from "react"
import MoreProjectsModal from "./MoreProjectsModal"

const MoreProjectsButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center mx-auto mt-14 w-full">
      <h3 className="mb-1 font-bold text-xl tracking-tight">Production Work</h3>
      <p className="mb-4 text-gray-400 text-sm">A large collection of websites built and maintained for clients.</p>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800 px-5 py-2.5 border border-zinc-700 hover:border-emerald-500/50 rounded-md font-medium text-white text-sm transition-colors cursor-pointer"
      >
        <LayoutGrid className="w-4 h-4" />
        View all client sites
      </button>

      <MoreProjectsModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default MoreProjectsButton
