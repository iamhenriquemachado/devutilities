"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Clock } from "lucide-react"

type RecentTool = {
  title: string
  href: string
  timestamp: number
}

export function RecentlyUsed() {
  const [recentTools, setRecentTools] = useState<RecentTool[]>([])

  useEffect(() => {
    const storedTools = localStorage.getItem("recentTools")
    if (storedTools) {
      try {
        const parsedTools = JSON.parse(storedTools)
        setRecentTools(parsedTools)
      } catch (e) {
        console.error("Failed to parse recent tools", e)
      }
    }
  }, [])

  if (recentTools.length === 0) {
    return null
  }

  return (
    <section className="py-8 border-t">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-5 w-5 text-jam-purple" />
          <h2 className="text-xl font-semibold">Recently Used</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentTools.slice(0, 4).map((tool) => (
            <Card key={tool.href} className="overflow-hidden border hover:shadow-md transition-all">
              <Link href={tool.href} className="block h-full">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{tool.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {new Date(tool.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

