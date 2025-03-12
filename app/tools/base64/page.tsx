import { Base64Tool } from "@/components/tools/base64-tool"
import { CodeIcon } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "Base64 Encoder/Decoder | DevUtils",
  description: "Encode and decode Base64 data with ease",
}

export default function Base64Page() {
  return (
    <div className="container py-8">
      <ToolDocumentation
        title="Base64 Encoder/Decoder"
        description="This free tool offers a quick and easy way to encode text to Base64 and decode Base64 back to text. If you work with data transmission, email attachments, or need to encode binary data, you can use DevUtils' Base64 tool to safely convert your data. Built with 💜 by developers for developers."
        icon={<CodeIcon className="h-6 w-6" />}
        howToUse={[
          "Select 'Encode' or 'Decode' mode based on your needs.",
          "Paste your text or Base64 data into the input field.",
          "Click the 'Encode to Base64' or 'Decode from Base64' button.",
          "View the result in the output field.",
          "Copy the result to your clipboard with the 'Copy' button.",
        ]}
        benefits={[
          {
            title: "Safe Data Transmission",
            description:
              "Base64 encoding ensures that binary data can be transmitted safely without corruption across different systems.",
          },
          {
            title: "Email Compatibility",
            description: "Base64 is widely used in email systems to encode attachments and ensure they arrive intact.",
          },
          {
            title: "URL Safety",
            description: "Base64 encoding can make binary data URL-safe for transmission in web applications.",
          },
          {
            title: "Cross-Platform Support",
            description:
              "Base64 is supported across all programming languages and platforms, making it a universal standard for data encoding.",
          },
        ]}
        faqs={[
          {
            question: "What is Base64 encoding?",
            answer:
              "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used to encode binary data, such as images or files, for transmission over text-based protocols.",
          },
          {
            question: "Why would I need to encode or decode Base64?",
            answer:
              "Base64 encoding is useful when you need to transmit binary data over media that only supports text, such as email or JSON. Decoding is necessary to convert the Base64 string back to its original form.",
          },
          {
            question: "Is Base64 encoding secure?",
            answer:
              "No, Base64 is not an encryption method. It's simply an encoding scheme and doesn't provide any security. Anyone can decode Base64 data. For security, you should use proper encryption methods.",
          },
          {
            question: "Can I encode images to Base64?",
            answer:
              "Yes, images can be encoded to Base64, which is commonly done for embedding small images directly in HTML or CSS. However, this tool is designed for text. For images, you would need a specific file-to-Base64 converter.",
          },
          {
            question: "How can I use Base64 in my code?",
            answer:
              "Most programming languages have built-in functions for Base64 encoding and decoding. For example, in JavaScript, you can use btoa() for encoding and atob() for decoding.",
          },
        ]}
      />

      <div className="mt-8">
        <Base64Tool />
      </div>

      <ToolNavigation />
    </div>
  )
}

