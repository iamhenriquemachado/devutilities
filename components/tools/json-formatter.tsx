"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"
import { usePreferences } from "@/components/preferences-provider"

export function JsonFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const { preferences } = usePreferences()

  // Auto format when enabled
  useEffect(() => {
    if (preferences.autoFormat && input && !loading) {
      const timeoutId = setTimeout(() => {
        formatJson()
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [input, preferences.autoFormat])

  const formatJson = async () => {
    if (!input) return

    setError(null)
    setLoading(true)

    try {
      // First try to parse locally
      try {
        const parsed = JSON.parse(input)
        setOutput(JSON.stringify(parsed, null, 2))
        setLoading(false)
      } catch (e) {
        // If local parsing fails, send to Python backend
        const response = await fetch("https://dev-utilities-six.vercel.app/api/format-json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ json: input }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to format JSON")
        }

        setOutput(data.formatted)
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Input</h2>
          <Textarea
            placeholder="Paste your JSON here..."
            className={`font-mono h-[400px] resize-none border-jam-purple/20 focus-visible:ring-jam-purple ${getFontSizeClass()}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Output</h2>
          <Card className="h-[400px] overflow-auto border-jam-purple/20">
            <CardContent className="p-4">
              {output ? (
                <pre className={`font-mono whitespace-pre-wrap ${getFontSizeClass()}`}>{output}</pre>
              ) : (
                <div className="text-muted-foreground h-full flex items-center justify-center">
                  Formatted JSON will appear here
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
        <Button onClick={formatJson} disabled={!input || loading} className="bg-jam-purple hover:bg-jam-darkPurple">
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Formatting...
            </>
          ) : (
            "Format JSON"
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

