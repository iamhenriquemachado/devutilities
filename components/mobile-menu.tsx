"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="mb-8">
          <Logo />
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-lg font-medium hover:text-jam-purple transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="text-lg font-medium hover:text-jam-purple transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/yourusername/dev-utilities"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-jam-purple transition-colors"
            onClick={() => setOpen(false)}
          >
            GitHub
          </Link>
        </nav>
        <div className="mt-auto pt-4 flex items-center">
          <ThemeToggle />
          <span className="ml-2 text-sm text-muted-foreground">Toggle theme</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}

