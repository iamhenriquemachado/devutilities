"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { usePreferences } from "./preferences-provider"
import { useTheme } from "next-themes"

export function PreferencesDialog() {
  const [open, setOpen] = useState(false)
  const { preferences, updatePreferences } = usePreferences()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (value: string) => {
    updatePreferences({ editorTheme: value as any })
    setTheme(value)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Preferences</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Font Size</Label>
            <RadioGroup
              value={preferences.fontSize}
              onValueChange={(value) => updatePreferences({ fontSize: value as any })}
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Large</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Theme</Label>
            <RadioGroup value={theme} onValueChange={handleThemeChange} className="flex space-x-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light-theme" />
                <Label htmlFor="light-theme">Light</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark-theme" />
                <Label htmlFor="dark-theme">Dark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system-theme" />
                <Label htmlFor="system-theme">System</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="auto-format">Auto Format</Label>
            <Switch
              id="auto-format"
              checked={preferences.autoFormat}
              onCheckedChange={(checked) => updatePreferences({ autoFormat: checked })}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

