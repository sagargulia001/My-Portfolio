import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"
import CursorTrailCanvas from "@/components/CursorTrailCanvas"
import AnimatedBackground from "@/components/AnimatedBackground"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sagar Gulia - Portfolio",
    template: "%s | Sagar Gulia",
  },
  description: "Portfolio of Sagar Gulia — Software Engineer building scalable, elegant web apps with React, Node.js, and design precision.",
  keywords: [
    "Sagar Gulia",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Sagar Gulia", url: "https://github.com/sagargulia001" }],
  creator: "Sagar Gulia",
  metadataBase: new URL("https://my-portfolio-omega-beige.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://my-portfolio-omega-beige.vercel.app/",
    title: "Sagar Gulia - Portfolio",
    description:
      "Explore the portfolio of Sagar Gulia, a Software Engineer focused on performance, scalability, and clean UI/UX.",
    siteName: "Sagar Gulia Portfolio",
    images: [
      {
        url: "/portfolio-dark.png",
        width: 1200,
        height: 630,
        alt: "Sagar Gulia Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Gulia - Portfolio",
    description: "Portfolio of Sagar Gulia — Software Engineer.",
    creator: "@sagargulia001",
    images: ["/portfolio-dark.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ydHSzattedGcB-5-HAZYQTflySCqIgWSVqZD8wgedEo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          {/* <CursorTrailCanvas
            className="pointer-events-none fixed inset-0 z-50"
            style={{ width: "100vw", height: "100vh" }}
            color="oklch(0.561 0.176 143 / 0.6)"
          /> */}
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}