import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { structuredData } from "../lib/structured-data"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tony Damari | Software Engineer",
  description:
    "Software Engineer specialising in React, TypeScript and Next.js, with a growing focus on full-stack development, Node.js and AWS.",
  keywords:
    "Tony Damari, Software Engineer, React, Next.js, TypeScript, Node.js, full-stack developer, frontend developer, AWS, portfolio",
  authors: [{ name: "Tony Damari" }],
  creator: "Tony Damari",
  openGraph: {
    title: "Tony Damari | Software Engineer",
    description:
      "Software Engineer specialising in React, TypeScript and Next.js, with a growing focus on full-stack development, Node.js and AWS.",
    url: "https://tonydamari.netlify.app/",
    siteName: "Tony Damari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Damari | Software Engineer",
    description:
      "Software Engineer specialising in React, TypeScript and Next.js, with a growing focus on full-stack development, Node.js and AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://tonydamari.netlify.app/" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
