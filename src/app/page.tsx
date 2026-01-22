import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Stack from "../components/Stack"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans">
      <div className="z-0 absolute inset-0 bg-gradient-to-tr from-zinc-900 to-slate-900 w-full h-full object-cover" />
      <main className="z-10 relative grow">
        <Hero />

        <Stack />
      </main>
      <Footer />
    </div>
  )
}
