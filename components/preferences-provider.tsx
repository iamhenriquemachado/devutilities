"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type Preferences = {
  fontSize: "small" | "medium" | "large"
  editorTheme: "light" | "dark" | "system"
  autoFormat: boolean
}

type PreferencesContextType = {
  preferences: Preferences
  updatePreferences: (newPrefs: Partial<Preferences>) => void
}

const defaultPreferences: Preferences = {
  fontSize: "medium",
  editorTheme: "system",
  autoFormat: true,
}

const PreferencesContext = createContext<PreferencesContextType>({
  preferences: defaultPreferences,
  updatePreferences: () => {},
})

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences)
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load preferences from localStorage
  useEffect(() => {
    if (mounted) {
      const storedPrefs = localStorage.getItem("userPreferences")
      if (storedPrefs) {
        try {
          const parsedPrefs = JSON.parse(storedPrefs)
          setPreferences((prev) => ({ ...prev, ...parsedPrefs }))

          // Sync theme with preferences
          if (parsedPrefs.editorTheme && parsedPrefs.editorTheme !== "system") {
            setTheme(parsedPrefs.editorTheme)
          }
        } catch (e) {
          console.error("Failed to parse preferences", e)
        }
      }
    }
  }, [mounted, setTheme])

  const updatePreferences = (newPrefs: Partial<Preferences>) => {
    if (!mounted) return

    setPreferences((prev) => {
      const updated = { ...prev, ...newPrefs }
      localStorage.setItem("userPreferences", JSON.stringify(updated))

      // Sync theme with preferences
      if (newPrefs.editorTheme) {
        if (newPrefs.editorTheme !== "system") {
          setTheme(newPrefs.editorTheme)
        } else {
          setTheme("system")
        }
      }

      return updated
    })
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreferences }}>{children}</PreferencesContext.Provider>
  )
}

export const usePreferences = () => useContext(PreferencesContext)

