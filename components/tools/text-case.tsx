"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check } from "lucide-react"

export function TextCaseConverter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [conversionType, setConversionType] = useState("Uppercase")

  const conversionTypes = ["Uppercase", "Lowercase", "Title Case", "Sentence Case", "Camel Case", "Snake Case", "Pascal Case", "Kebab Case"]

  const handleConvertText = () => {
    if (!input) return
    setError(null)

    try {
      let result = ""
      
      switch (conversionType) {
        case "Uppercase":
          result = input.toUpperCase()
          break
        case "Lowercase":
          result = input.toLowerCase()
          break
        case "Title Case":
          result = input.replace(
            /\w\S*/g,
            (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
          )
          break
        case "Sentence Case":
          result = input
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
          break
        case "Camel Case":
          result = input
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
              return index === 0 ? word.toLowerCase() : word.toUpperCase()
            })
            .replace(/\s+/g, '')
            .replace(/[^\w\s]/g, '')
          break
        case "Snake Case":
          result = input
            .replace(/\s+/g, '_')
            .replace(/([A-Z])/g, '_$1')
            .toLowerCase()
            .replace(/^_/, '')
            .replace(/[^\w_]/g, '')
          break
        case "Pascal Case":
          result = input
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
            .replace(/\s+/g, '')
            .replace(/[^\w\s]/g, '')
          break
        case "Kebab Case":
          result = input
            .replace(/\s+/g, '-')
            .replace(/([A-Z])/g, '-$1')
            .toLowerCase()
            .replace(/^-/, '')
            .replace(/[^\w-]/g, '')
          break
        default:
          result = input
      }

      setOutput(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
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
            placeholder="Type or paste your text here..."
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
                  Converted text will appear here...
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
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="border border-jam-purple/20 p-2 rounded-md"
        >
          {conversionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <Button 
          onClick={handleConvertText} 
          disabled={!input} 
          className="bg-jam-purple hover:bg-jam-darkPurple"
        >
          Convert Text
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