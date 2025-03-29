import { QRCodeGenerator } from "@/components/tools/qrcode"
import { QrCode } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "QR Code Generator | DevUtils",
  description: "Generate QR codes instantly from text, URLs, or other data.",
}

export default function QRCodeGeneratorPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <QrCode className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Quickly generate QR codes for links, text, contact information, and more. Download or share your QR code with ease.
      </p>
      <QRCodeGenerator />
      <ToolDocumentation
        title="QR Code Generator"
        description=""
        icon={<QrCode className="h-6 w-6" />}
        howToUse={[
          "Enter text, a URL, or any other data in the input field.",
          "Click the 'Generate QR Code' button to create the QR code.",
          "View the generated QR code and download it as an image.",
          "Scan the QR code with your phone to test it.",
        ]}
        benefits={[
          {
            title: "Instant QR Codes",
            description:
              "Generate QR codes quickly and easily for any type of data.",
          },
          {
            title: "High-Quality Images",
            description:
              "Download QR codes as high-resolution images for print or digital use.",
          },
          {
            title: "No Data Stored",
            description: "All QR code generation happens in your browser, ensuring privacy.",
          },
          {
            title: "Versatile Use Cases",
            description: "Use QR codes for websites, business cards, Wi-Fi access, and more.",
          },
        ]}
        faqs={[
          {
            question: "Is my data stored when generating QR codes?",
            answer:
              "No, all QR code generation happens locally in your browser. No data is sent or stored.",
          },
          {
            question: "Can I customize my QR code?",
            answer:
              "Currently, our tool generates standard QR codes. Future updates may include customization options like colors and logos.",
          },
          {
            question: "Can I generate QR codes for Wi-Fi credentials?",
            answer:
              "Yes, simply enter your Wi-Fi network name and password, and the QR code will be generated accordingly.",
          },
          {
            question: "Are QR codes generated here permanent?",
            answer:
              "Yes, as long as the encoded content remains the same, the QR code will always lead to the same data.",
          },
          {
            question: "How do I scan a QR code?",
            answer:
              "Use your smartphone's camera or a QR scanner app to scan and access the encoded content.",
          },
        ]}
      />
      <ToolNavigation />
    </div>
  )
}
