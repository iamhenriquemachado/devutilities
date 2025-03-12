import { Logo } from "./logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <Logo />
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} DevUtils. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/faq" className="text-sm text-muted-foreground hover:underline">
            FAQ
          </Link>
          <Link
            href="https://github.com/yourusername/dev-utilities"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}

