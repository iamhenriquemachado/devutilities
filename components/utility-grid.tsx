import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  CodeIcon,
  Hash,
  FileJson,
  RefreshCw,
  Key,
  Palette,
  Globe,
  Lock,
  FileText,
  Clock,
  Table,
  FileCode,
} from "lucide-react"

const utilities = [
  {
    title: "JSON Formatter",
    description:
      "Format and beautify your JSON data for better readability and debugging. Quickly visualize and organize your JSON data with ease.",
    icon: <FileJson className="h-6 w-6" />,
    href: "/tools/json-formatter",
  },
  {
    title: "Base64 Encode/Decode",
    description:
      "Easily encode and decode Base64 data with our online utility, so you can transmit your data safely or decode Base64-encoded strings.",
    icon: <CodeIcon className="h-6 w-6" />,
    href: "/tools/base64",
  },
  {
    title: "URL Encode/Decode",
    description:
      "Convert URLs to a safe format with URL encoding or decode URL-encoded strings back to their original format.",
    icon: <Globe className="h-6 w-6" />,
    href: "/tools/url-encoder",
  },
  {
    title: "UUID Generator",
    description:
      "Generate random UUIDs/GUIDs for use in your applications, databases, or anywhere you need unique identifiers.",
    icon: <Key className="h-6 w-6" />,
    href: "/tools/uuid-generator",
  },
  {
    title: "YAML to JSON",
    description:
      "Easily convert YAML to JSON with our converter. Useful when you're working with configuration files and need to switch between them.",
    icon: <FileCode className="h-6 w-6" />,
    href: "/tools/yaml-to-json",
  },
  {
    title: "Hash Generator",
    description:
      "Generate MD5, SHA-1, SHA-256 and other hashes from your input text for verification or security purposes.",
    icon: <Hash className="h-6 w-6" />,
    href: "/tools/hash-generator",
  },
  {
    title: "Secure Password Generator",
    description:
      "nstantly create strong, random passwords to enhance security. Customize length, include symbols, numbers, and uppercase/lowercase letters",
    icon: <Hash className="h-6 w-6" />,
    href: "/tools/secure-password",
  },
  {
    title: "CSV to JSON",
    description:
      "Easily convert CSV data to JSON format with our free tool. Quickest way to turn tabular data into a JSON format for APIs and data processing.",
    icon: <Table className="h-6 w-6" />,
    href: "/tools/csv-to-json",
  },
  {
    title: "Color Converter",
    description:
      "Convert HEX to RGB and generate CSS snippets for web, Swift, and Android with our easy-to-use color converter.",
    icon: <Palette className="h-6 w-6" />,
    href: "/tools/color-converter",
  },
  {
    title: "JWT Decoder",
    description:
      "Decode and verify JWT tokens to inspect their headers, payloads, and signatures for debugging and verification.",
    icon: <Lock className="h-6 w-6" />,
    href: "/tools/jwt-decoder",
  },
  {
    title: "Timestamp to Date Converter",
    description:
      "Paste Unix timestamps and get a human readable dates. Perfect for developers working with time-based data.",
    icon: <Clock className="h-6 w-6" />,
    href: "/tools/timestamp-converter",
  },
  {
    title: "Query Parameters to JSON",
    description:
      "Convert URL query parameters into a structured JSON object, simplifying the process of parsing and manipulating URL data in web applications.",
    icon: <FileText className="h-6 w-6" />,
    href: "/tools/query-to-json",
  },
  {
    title: "Cron Expression Generator",
    description: "Create and validate cron expressions for scheduling tasks in various systems and applications.",
    icon: <RefreshCw className="h-6 w-6" />,
    href: "/tools/cron-generator",
  },
]

export function UtilityGrid() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility) => (
            <Card key={utility.title} className="overflow-hidden border hover:shadow-md transition-all">
              <Link href={utility.href} className="block h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-jam-purple">{utility.icon}</div>
                      <h3 className="font-semibold text-lg">{utility.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{utility.description}</p>
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        Try it
                      </Button>
                    </div>
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

