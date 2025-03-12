import { Code2 } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-jam-purple text-white">
        <Code2 className="w-6 h-6" />
      </div>
      <span className="font-bold text-xl">DevUtils</span>
    </Link>
  )
}

