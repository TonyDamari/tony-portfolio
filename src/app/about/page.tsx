import About from "@/src/components/About"
import GitHubSection from "@/src/components/GitHubSection"
import Nav from "@/src/components/Nav"
import Skills from "@/src/components/Skills"

const page = () => {
  return (
    <div className="">
      <div className="px-4 sm:px-8 md:px-20 pt-16 md:pt-24">
        <Nav />
      </div>
      <About />

      <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

      <Skills />

      {/* <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

      <Experience />

      <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

      <CareerDirection /> */}

      <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

      <GitHubSection />
    </div>
  )
}

export default page
