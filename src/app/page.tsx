import About from "../components/About"
import CareerDirection from "../components/CareerDirection"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import FeaturedProjects from "../components/FeaturedProjects"
import Footer from "../components/Footer"
import GitHubSection from "../components/GitHubSection"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans">
      <div className="-z-10 fixed inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(16,185,129,0.06),transparent)]" />
      </div>

      <Nav />

      <main className="relative grow">
        <Hero />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <About />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <Skills />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <FeaturedProjects />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <Experience />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <CareerDirection />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <GitHubSection />

        <div className="bg-zinc-800 mx-4 sm:mx-8 md:mx-20 h-px" />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
