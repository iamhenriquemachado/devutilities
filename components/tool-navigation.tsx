"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

const utilities = [
  { title: "JSON Formatter", href: "/tools/json-formatter" },
  { title: "Base64 Encode/Decode", href: "/tools/base64" },
  { title: "URL Encode/Decode", href: "/tools/url-encoder" },
  { title: "Hash Generator", href: "/tools/hash-generator" },
  { title: "UUID Generator", href: "/tools/uuid-generator" },
  { title: "Color Converter", href: "/tools/color-converter" },
  { title: "JWT Decoder", href: "/tools/jwt-decoder" },
  { title: "CSV to JSON", href: "/tools/csv-to-json" },
  { title: "Timestamp Converter", href: "/tools/timestamp-converter" },
  { title: "YAML to JSON", href: "/tools/yaml-to-json" },
  { title: "Query to JSON", href: "/tools/query-to-json" },
  { title: "Cron Generator", href: "/tools/cron-generator" },
]

export function ToolNavigation() {
  const pathname = usePathname()
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [prevTool, setPrevTool] = useState<{ title: string; href: string } | null>(null)
  const [nextTool, setNextTool] = useState<{ title: string; href: string } | null>(null)

  useEffect(() => {
    const index = utilities.findIndex((tool) => tool.href === pathname)
    setCurrentIndex(index)

    if (index > 0) {
      setPrevTool(utilities[index - 1])
    } else {
      setPrevTool(null)
    }

    if (index < utilities.length - 1 && index !== -1) {
      setNextTool(utilities[index + 1])
    } else {
      setNextTool(null)
    }

    // Add to recent tools
    if (index !== -1 && typeof window !== "undefined") {
      const currentTool = utilities[index]
      const storedTools = localStorage.getItem("recentTools")
      let recentTools = []

      if (storedTools) {
        try {
          recentTools = JSON.parse(storedTools)
        } catch (e) {
          console.error("Failed to parse recent tools", e)
        }
      }

      // Remove if already exists
      recentTools = recentTools.filter((tool: any) => tool.href !== currentTool.href)

      // Add to beginning
      recentTools.unshift({
        title: currentTool.title,
        href: currentTool.href,
        timestamp: Date.now(),
      })

      // Keep only the last 10
      recentTools = recentTools.slice(0, 10)

      localStorage.setItem("recentTools", JSON.stringify(recentTools))
    }
  }, [pathname])

  if (currentIndex === -1) {
    return null
  }

  return (
    <div className="flex justify-between mt-12 pt-6 border-t">
      {prevTool ? (
        <Button variant="outline" asChild>
          <Link href={prevTool.href}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            {prevTool.title}
          </Link>
        </Button>
      ) : (
        <div></div>
      )}

      {nextTool && (
        <Button variant="outline" asChild>
          <Link href={nextTool.href}>
            {nextTool.title}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}

