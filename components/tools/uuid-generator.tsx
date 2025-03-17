"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, RefreshCw } from "lucide-react"

export function UUIDGenerator() {
  const [uuid, setUuid] = useState("")
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateUUID = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://devutilities.onrender.com/api/uuid-generator", {
        method: "GET",
      })

      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to fetch UUID")
      }

      const data = await response.json()
      setUuid(data.uuid)
    } catch (err) {
        console.error(err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(uuid)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Card className="h-[100px] flex items-center justify-center border-jam-purple/20">
          <CardContent className="p-4 text-center">
            {uuid ? (
              <pre className="font-mono text-lg">{uuid}</pre>
            ) : (
              <span className="text-muted-foreground">UUID will appear here</span>
            )}
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        <Button onClick={generateUUID} disabled={loading} className="bg-jam-purple hover:bg-jam-darkPurple">
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate UUID"
          )}
        </Button>

        <Button
          variant="outline"
          onClick={handleCopy}
          disabled={!uuid}
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
      </div>
    </div>
  )
}
