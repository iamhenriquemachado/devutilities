"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"

export function PasswordGenerator() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [length, setLength] = useState(16) // default length
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)

  const handleGeneratePassword = async () => {
    setError(null)
    setLoading(true)

    if (length <= 0) {
        setError("The length should be greater than 0")
        setLoading(false)
        return
      }

      if (length > 256) {
        setError("The max length for a password is 256")
        setLoading(false)
        return
      }

      if (!(includeNumbers || includeSpecialChars || includeUppercase || includeLowercase)) {
        setError("At least one option needs to be selected")
        setLoading(false)
        return
      }

    const options = {
      length,
      includeNumbers,
      includeSpecialChars,
      includeUppercase,
      includeLowercase,
    }

    try {
      const response = await fetch("https://devutilities.onrender.com/api/secure-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            length,
            includeNumbers,
            includeSpecialChars,
            includeUppercase,
            includeLowercase,
          }),
        });

      const data = await response.json()

      if (length < 0) {
        throw new Error(data.error || "The length should be greater than 0")
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate password")
      }

      setOutput(data.password)
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
          <h2 className="text-lg font-medium">Generated Password</h2>
          <Card className="h-[200px] overflow-auto border-jam-purple/20">
            <CardContent className="p-4">
              {output ? (
                <pre className="font-mono whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-muted-foreground h-full flex items-center justify-center">
                  Your generated password will appear here
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Options</h2>
          <div className="flex flex-wrap gap-4">
            <input
              type="number"
              min="1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="border border-jam-purple/20 p-2"
              placeholder="Length"
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="mr-2"
              />
              <label>Include Uppercase</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="mr-2"
              />
              <label>Include Lowercase</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2"
              />
              <label>Include Numbers</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeSpecialChars}
                onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                className="mr-2"
              />
              <label>Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-4">
        <Button
          onClick={handleGeneratePassword}
          disabled={loading}
          className="bg-jam-purple hover:bg-jam-darkPurple w-full sm:w-auto"
        >
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating password...
            </>
          ) : (
            "Generate Password"
          )}
        </Button>

        <Button
          variant="outline"
          onClick={handleCopy}
          disabled={!output}
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10 w-full sm:w-auto"
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
          className="border-jam-purple/20 text-jam-purple hover:bg-jam-purple/10 w-full sm:w-auto"
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
