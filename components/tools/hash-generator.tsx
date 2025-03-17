"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"
import { usePreferences } from "@/components/preferences-provider"
import { hash } from "crypto"

export function HashGenerator() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [algorithm, setAlgorithm] = useState("SHA-256") // default algorithm

  const algorithms = ["MD5", "SHA-1", "SHA-256", "SHA-512"]

  const handleGenerateHash = async () => {
    if (!input) return

    setError(null)
    setLoading(true)

    try {
      const response = await fetch("https://devutilities.onrender.com/api/hash-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input, algorithm }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate hash")
      }

      setOutput(data.hash)
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Input</h2>
          <Textarea
            placeholder="Paste your data here..."
            className="font-mono h-[200px] resize-none border-jam-purple/20 focus-visible:ring-jam-purple"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Output</h2>
          <Card className="h-[200px] overflow-auto border-jam-purple/20">
            <CardContent className="p-4">
              {output ? (
                <pre className="font-mono whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-muted-foreground h-full flex items-center justify-center">
                  The hash will appear here
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
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="border border-jam-purple/20 p-2"
        >
          {algorithms.map((algo) => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>

        <Button onClick={handleGenerateHash} disabled={!input || loading} className="bg-jam-purple hover:bg-jam-darkPurple">
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating hash...
            </>
          ) : (
            "Generate Hash"
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


