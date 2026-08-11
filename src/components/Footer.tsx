const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="z-10 px-4 sm:px-8 md:px-20 py-8 border-zinc-800 border-t">
      <p className="text-gray-500 text-xs sm:text-sm text-center">
        &copy; {year} Tony Damari. Built with Next.js and TypeScript.
      </p>
    </footer>
  )
}

export default Footer
