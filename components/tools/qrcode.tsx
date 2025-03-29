"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw, Download  } from "lucide-react"

export function QRCodeGenerator() {
  const [input, setInput] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateQRCode = async () => {
    if (!input) return

    setError(null)
    setLoading(true)

    try {
      const response = await fetch("http://localhost:8000/api/qrcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate QR Code")
      }

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setQrCodeUrl(imageUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!qrCodeUrl) return; 
    try {
        const response = await fetch(qrCodeUrl)
        const blob = await response.blob()
        const data = [new ClipboardItem({ [blob.type]: blob })]
        
        await navigator.clipboard.write(data)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    } catch(error) {
        console.error("Failed to copy image: ", error)
    }

  }

  const handleDownload = async () => {
    if (!qrCodeUrl) return;
    try {
        const response = await fetch(qrCodeUrl);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "qrcode.png"; // Change the filename if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl); // Free memory
    } catch (error) {
        console.error("Failed to download image:", error);
    }
};

  const handleClear = () => {
    setInput("")
    setQrCodeUrl(null)
    setError(null)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Enter Text or URL</h2>
        <Input
          placeholder="Type here..."
          className="border-jam-purple/20 focus-visible:ring-jam-purple"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <Button
        onClick={generateQRCode}
        disabled={!input || loading}
        className="bg-jam-purple hover:bg-jam-darkPurple"
      >
        {loading ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate QR Code"
        )}
      </Button>

      {qrCodeUrl && (
        <div className="flex justify-center">
          <Card className="p-4 border-jam-purple/20">
            <CardContent className="flex justify-center">
              <img src={qrCodeUrl} alt="Generated QR Code" className="h-40 w-40" />
            </CardContent>
          </Card>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          onClick={handleCopy}
          disabled={!qrCodeUrl}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Qrcode
            </>
          )}
        </Button>

        <Button
          variant="outline"
          onClick={handleDownload}
          disabled={!qrCodeUrl}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download
            </>
          )}
        </Button>

        
        <Button
          variant="outline"
          onClick={handleClear}
          disabled={!input && !qrCodeUrl}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10"
        >
          Clear
        </Button>


      </div>
    </div>
  )
}
