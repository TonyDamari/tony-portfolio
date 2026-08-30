"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { stackData } from "../lib/stack-data"
import Modal from "./Modal"

type StackKey = keyof typeof stackData

const Stack = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (stack: string) => setActiveModal(stack)
  const closeModal = () => setActiveModal(null)
  const router = useRouter()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="my-8 px-4 sm:px-8 md:px-20 w-full overflow-hidden"
    >
      <div className="bg-white/90 w-full h-px" />
      <div className="flex items-start gap-5">
        <div className="w-full">
          {/* <h2 className="mb-4 sm:mb-6 md:mb-8 font-medium text-lg sm:text-xl md:text-2xl">Stack</h2> */}
          <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 my-6 sm:my-8 md:my-10">
            {(Object.keys(stackData) as StackKey[]).map((stack) => (
              <button
                key={stack}
                onClick={() => router.push("/about#skills")}
                className="group hover:bg-white/5 p-3 sm:p-4 rounded-lg text-left transition-colors cursor-pointer"
              >
                <div className="font-mono font-medium text-white text-sm sm:text-base">[ {stack} ]</div>
                <div className="mt-1 sm:mt-2 text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm">
                  {/* {stackData[stack].slice(0, 3).join(" · ")} <br /> */}
                  <span className="opacity-75 text-xs">View more</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white/90 w-full h-px" />

      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={activeModal || ""}
        content={activeModal ? stackData[activeModal as keyof typeof stackData] : []}
      />
    </motion.section>
  )
}

export default Stack
