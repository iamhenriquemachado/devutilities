"use client"

import { useState, useEffect, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Search,
  FileJson,
  CodeIcon,
  Globe,
  Hash,
  Key,
  Palette,
  Lock,
  FileText,
  Clock,
  Table,
  FileCode,
  RefreshCw,
} from "lucide-react"
import { useRouter } from "next/navigation"

const utilities = [
  {
    title: "JSON Formatter",
    description: "Format and beautify your JSON data",
    icon: <FileJson className="h-5 w-5" />,
    href: "/tools/json-formatter",
    tags: ["json", "format", "beautify", "validate"],
  },
  {
    title: "Base64 Encode/Decode",
    description: "Encode and decode Base64 data",
    icon: <CodeIcon className="h-5 w-5" />,
    href: "/tools/base64",
    tags: ["base64", "encode", "decode", "convert"],
  },
  {
    title: "URL Encode/Decode",
    description: "Convert URLs to a safe format",
    icon: <Globe className="h-5 w-5" />,
    href: "/tools/url-encoder",
    tags: ["url", "encode", "decode", "convert"],
  },
  {
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256 hashes",
    icon: <Hash className="h-5 w-5" />,
    href: "/tools/hash-generator",
    tags: ["hash", "md5", "sha1", "sha256", "security"],
  },
  {
    title: "UUID Generator",
    description: "Generate random UUIDs/GUIDs",
    icon: <Key className="h-5 w-5" />,
    href: "/tools/uuid-generator",
    tags: ["uuid", "guid", "generate", "random"],
  },
  {
    title: "Color Converter",
    description: "Convert between color formats",
    icon: <Palette className="h-5 w-5" />,
    href: "/tools/color-converter",
    tags: ["color", "hex", "rgb", "hsl", "convert"],
  },
  {
    title: "JWT Decoder",
    description: "Decode and verify JWT tokens",
    icon: <Lock className="h-5 w-5" />,
    href: "/tools/jwt-decoder",
    tags: ["jwt", "token", "decode", "verify"],
  },
  {
    title: "CSV to JSON",
    description: "Convert CSV data to JSON format",
    icon: <Table className="h-5 w-5" />,
    href: "/tools/csv-to-json",
    tags: ["csv", "json", "convert", "table"],
  },
  {
    title: "Timestamp Converter",
    description: "Convert timestamps to readable dates",
    icon: <Clock className="h-5 w-5" />,
    href: "/tools/timestamp-converter",
    tags: ["timestamp", "date", "time", "convert"],
  },
  {
    title: "YAML to JSON",
    description: "Convert YAML to JSON format",
    icon: <FileCode className="h-5 w-5" />,
    href: "/tools/yaml-to-json",
    tags: ["yaml", "json", "convert", "format"],
  },
  {
    title: "Query to JSON",
    description: "Convert URL query parameters to JSON",
    icon: <FileText className="h-5 w-5" />,
    href: "/tools/query-to-json",
    tags: ["query", "params", "json", "convert"],
  },
  {
    title: "Cron Generator",
    description: "Create and validate cron expressions",
    icon: <RefreshCw className="h-5 w-5" />,
    href: "/tools/cron-generator",
    tags: ["cron", "schedule", "generate", "validate"],
  },
]

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const router = useRouter()

  const filteredUtilities = useMemo(() => {
    const searchTerm = search.toLowerCase()
    return utilities.filter((utility) => {
      return (
        utility.title.toLowerCase().includes(searchTerm) ||
        utility.description.toLowerCase().includes(searchTerm) ||
        utility.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      )
    })
  }, [search])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="relative w-full justify-start text-sm text-muted-foreground pr-12 h-12"
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search tools... (Press ⌘K)</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Search Tools</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for tools..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {filteredUtilities.length > 0 ? (
              <div className="space-y-1">
                {filteredUtilities.map((utility) => (
                  <Button
                    key={utility.title}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => handleSelect(utility.href)}
                  >
                    <div className="flex items-center">
                      <div className="mr-2 text-jam-purple">{utility.icon}</div>
                      <div>
                        <div className="font-medium">{utility.title}</div>
                        <div className="text-xs text-muted-foreground">{utility.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-muted-foreground">No tools found. Try a different search term.</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

