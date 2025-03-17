import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Merriweather, Source_Sans_3 } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Homeowners Rights - News for Property Owners",
  description: "Your trusted source for homeowners rights, property law, and housing news",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${sourceSans.variable}`}>
      <body className="font-sans bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'