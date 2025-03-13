import { UUIDGenerator } from "@/components/tools/uuid-generator"
import { FileJson } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "UUID Generator | DevUtils",
  description: "Generate and validate UUIDs effortlessly",
}

export default function UUIDFormaterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <FileJson className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">UUID Generator</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
      Generate and validate UUIDs instantly for seamless identification and tracking.
      </p>
      <UUIDGenerator />
      <ToolDocumentation
        title="JSON Formatter"
        description=""
        icon={<FileJson className="h-6 w-6" />}
        howToUse={[
            "Click the 'Generate UUID' button to create a new unique identifier.",
            "Choose between UUID v1, v4, or other available versions if applicable.",
            "Copy the generated UUID to your clipboard using the 'Copy' button.",
            "Use the UUID in your applications for unique identification and tracking."
          ]}
          benefits={[
            {
              title: "Unique Identifiers",
              description: "Generate universally unique identifiers (UUIDs) for secure and conflict-free identification.",
            },
            {
              title: "Multiple UUID Versions",
              description: "Supports different UUID versions, including v1 (timestamp-based) and v4 (random-based).",
            },
            {
              title: "Instant Generation",
              description: "Quickly generate UUIDs with a single click, making development more efficient.",
            },
            {
              title: "Secure and Offline",
              description: "UUIDs are generated directly in your browser, ensuring privacy and security.",
            },
          ]}
          faqs={[
            {
              question: "What is a UUID?",
              answer: "A UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely identify objects across systems.",
            },
            {
              question: "Which UUID versions are supported?",
              answer: "This tool supports UUID v1 (timestamp-based) and v4 (random-based), commonly used for various applications.",
            },
            {
              question: "Are UUIDs truly unique?",
              answer: "While not guaranteed, the probability of generating a duplicate UUID is extremely low, making them reliable for unique identification.",
            },
            {
              question: "Is the UUID generation secure?",
              answer: "Yes, all UUIDs are generated locally in your browser, and no data is sent to any server.",
            },
            {
              question: "Where can I use UUIDs?",
              answer: "UUIDs are commonly used in databases, APIs, distributed systems, and anywhere unique identifiers are needed.",
            },
          ]}
          
      />
            <ToolNavigation />
    </div>
    
  )
}



