"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function LoremIpsumGenerator() {
  const [count, setCount] = useState(3) // Default count (3 paragraphs, sentences, or words)
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null) // Add proper typing for error state
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [format, setFormat] = useState("paragraphs") // default format

  const formats = ["paragraphs", "words", "sentences"]

  const handleGenerateLoremIpsum = async () => {
    setError(null)
    setLoading(true)

    try {
      const response = await fetch("https://devutilities.onrender.com/api/lorem-ipsum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          format: format,
          count: count 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate lorem ipsum")
      }

      setOutput(data.content)
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
    setOutput("")
    setError(null)
  }

  return (
    <div className="space-y-6">
    

      <div className="space-y-2">
        <h2 className="text-lg font-medium">Output</h2>
        <Card className="h-[200px] overflow-auto border-jam-purple/20">
          <CardContent className="p-4">
            {output ? (
              <pre className="font-mono whitespace-pre-wrap">{output}</pre>
            ) : (
              <div className="text-muted-foreground h-full flex items-center justify-center">
                Your lorem ipsum text will appear here
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="border border-jam-purple/20 p-2 rounded"
          >
            {formats.map((fmt) => (
              <option key={fmt} value={fmt}>
                {fmt.charAt(0).toUpperCase() + fmt.slice(1)}
              </option>
            ))}
          </select>

          <div className="flex-1 space-y-1">
            <div className="flex justify-between">
              <span className="text-sm">Count: {count}</span>
            </div>
            <Slider
              value={[count]}
              min={1}
              max={format === "words" ? 50 : format === "sentences" ? 20 : 10}
              step={1}
              onValueChange={(value) => setCount(value[0])}
              className="w-full max-w-xs"
            />
          </div>


        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
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
          disabled={!output}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10"
        >
          Clear
        </Button>
        <Button 
            onClick={handleGenerateLoremIpsum} 
            disabled={loading} 
            className="bg-jam-purple hover:bg-jam-darkPurple"
          >
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Lorem Ipsum"
            )}
          </Button>
      </div>
    </div>
  )
}