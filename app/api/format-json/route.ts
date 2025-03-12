import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { json } = await request.json()

    // Call Python backend
    const response = await fetch("http://localhost:8000/api/format-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ json }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({ error: errorData.detail || "Failed to format JSON" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 },
    )
  }
}

