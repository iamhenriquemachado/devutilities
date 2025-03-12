import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="container py-4">
        <Button variant="ghost" asChild className="mb-6 text-jam-purple hover:bg-jam-purple/10">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      {children}
    </div>
  )
}

