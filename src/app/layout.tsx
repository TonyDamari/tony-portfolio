import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { structuredData } from "../lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony Damari - Web Developer Portfolio",
  description:
    "Full-stack web developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords:
    "Tony Damari, web developer, React, Next.js, TypeScript, full-stack developer, portfolio",
  authors: [{ name: "Tony Damari" }],
  creator: "Tony Damari",
  openGraph: {
    title: "Tony Damari - Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, and modern web technologies.",
    url: "https://tonydamari.netlify.app/",
    siteName: "Tony Damari Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Damari - Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
  );
}
