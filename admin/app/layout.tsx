import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Admin Panel | Leafclutch",
  description: "Content management for the Leafclutch UK website.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", plexSans.variable, plexMono.variable)}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  )
}
