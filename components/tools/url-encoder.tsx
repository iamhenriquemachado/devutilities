"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"
import { usePreferences } from "@/components/preferences-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UrlEncoder() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const { preferences } = usePreferences()

  const processData = async () => {
    if (!input) return

    setError(null)
    setLoading(true)

    try {
      if (mode === "encode") {
        // Encode to Base64
        const encoded = encodeURIComponent(input)
        setOutput(encoded)
      } else {
        // Decode from Base64
        try {
          const decoded = decodeURIComponent(input)
          setOutput(decoded)
        } catch (e) { 
          throw new Error("Invalid Base64 string")
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  // Apply font size based on preferences
  const getFontSizeClass = () => {
    switch (preferences.fontSize) {
      case "small":
        return "text-sm"
      case "large":
        return "text-lg"
      default:
        return "text-base"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="encode" onValueChange={(value) => setMode(value as "encode" | "decode")} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Input</h2>
          <Textarea
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
            className={`font-mono h-[300px] resize-none border-jam-purple/20 focus-visible:ring-jam-purple ${getFontSizeClass()}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Output</h2>
          <Card className="h-[300px] overflow-auto border-jam-purple/20">
            <CardContent className="p-4">
              {output ? (
                <pre className={`font-mono whitespace-pre-wrap ${getFontSizeClass()}`}>{output}</pre>
              ) : (
                <div className="text-muted-foreground h-full flex items-center justify-center">
                  {mode === "encode" ? "Encoded URL will appear here" : "Decoded URL will appear here"}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-4">
        <Button onClick={processData} disabled={!input || loading} className="bg-jam-purple hover:bg-jam-darkPurple">
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : mode === "encode" ? (
            "Encode URL"
          ) : (
            "Decode URL "
          )}
        </Button>

        <Button
          variant="outline"
          onClick={handleCopy}
          disabled={!output}
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
              Copy
            </>
          )}
        </Button>

        <Button
          variant="outline"
          onClick={handleClear}
          disabled={!input && !output}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10"
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

