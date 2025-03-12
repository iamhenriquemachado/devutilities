import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import Link from "next/link"
import { Github } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { PreferencesDialog } from "./preferences-dialog"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <Logo />
        </div>

        {/* Removed the search bar from here */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/yourusername/dev-utilities" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Contribute
              </Link>
            </Button>
          </div>
          <PreferencesDialog />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

