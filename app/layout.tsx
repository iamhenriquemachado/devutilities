import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PreferencesProvider } from "@/components/preferences-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevUtils - Developer Utilities",
  description: "A collection of essential tools to streamline your development workflow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PreferencesProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PreferencesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'