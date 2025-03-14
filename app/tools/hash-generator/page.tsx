import { HashGenerator } from "@/components/tools/hash-generator"
import { FileJson } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "Hash Generator | DevUtils",
  description: "Generate hash values using different algorithms like MD5, SHA-1, SHA-256, SHA-512",
}

export default function HashGeneratorPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <FileJson className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">Hash Generator</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Generate hash values using various algorithms like MD5, SHA-1, SHA-256, SHA-512.
      </p>
      <HashGenerator />
      <ToolDocumentation
        title="Hash Generator"
        description=""
        icon={<FileJson className="h-6 w-6" />}
        howToUse={[
          "Paste your data into the input field.",
          "Select a hash algorithm (e.g., MD5, SHA-1, SHA-256).",
          "Click the 'Generate Hash' button to generate the hash value.",
          "Copy the generated hash using the 'Copy' button.",
        ]}
        benefits={[
          {
            title: "Secure Hash Generation",
            description:
              "Generate secure hash values for data integrity verification and secure storage of sensitive information.",
          },
          {
            title: "Multiple Algorithms",
            description:
              "Choose from multiple algorithms like MD5, SHA-1, SHA-256, and SHA-512, depending on your needs.",
          },
          {
            title: "Efficient Development",
            description:
              "Generate hashes quickly and efficiently to use in your development processes such as password hashing or file integrity checks.",
          },
        ]}
        faqs={[
          {
            question: "Is my data secure when using this tool?",
            answer:
              "Yes, all processing happens in your browser. Your data is never sent to our servers or stored anywhere.",
          },
          {
            question: "Can I generate hash for large files?",
            answer:
              "Yes, the tool can handle large text-based inputs efficiently, though file hashing would require the data to be passed as text.",
          },
          {
            question: "Which algorithm should I choose?",
            answer:
              "Use SHA-256 or SHA-512 for stronger security. MD5 and SHA-1 are considered less secure and should be avoided for critical security applications.",
          },
          {
            "question": "What format will the hash output be in?",
            "answer": "The generated hash will be returned in hexadecimal (HEX) format, which is the standard representation for most hash algorithms."
          },
          {
            "question": "Can I use SHA-256 or SHA-512 for password storage?",
            "answer": "Do not use this approach! For storing password hashes, use bcrypt or argon2. However, if you are only generating hashes for files, messages, or other content, it is OK to use SHA-256 or SHA-512."
          }
          
          
        ]}
      />
      <ToolNavigation />
    </div>
  )
}
