import { YamltoJson } from "@/components/tools/yaml-to-json"
import { FileJson } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "YAML to JSON Converter | DevUtils",
  description: "Convert YAML to JSON seamless.",
}

export default function YamlToJsonFormatterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <FileJson className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">YAML to JSON Converter</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
      Convert and format your YAML data into JSON effortlessly. Easily visualize and organize your structured data for better readability and debugging.
      </p>
      <YamltoJson />
      <ToolDocumentation
        title="JSON Formatter"
        description=""
        icon={<FileJson className="h-6 w-6" />}
        howToUse={[
            "Paste your YAML data into the input field.",
            "Click the 'Convert to JSON' button or wait for auto-conversion if enabled.",
            "View the converted JSON in the output field with proper formatting and syntax highlighting.",
            "Copy the converted JSON to your clipboard with the 'Copy' button.",
          ]}
          benefits={[
            {
              title: "Seamless Conversion",
              description: "Easily convert YAML to JSON with a single click, ensuring accurate data transformation.",
            },
            {
              title: "Improved Readability",
              description: "Formatted JSON output makes it easier to read and understand the converted data.",
            },
            {
              title: "Error Detection",
              description: "The converter checks for syntax errors in your YAML and alerts you to any issues before conversion.",
            },
            {
              title: "Development Efficiency",
              description: "Save time by automating the YAML to JSON conversion process, improving workflow speed.",
            },
            {
              title: "API and Config File Support",
              description: "Easily convert YAML configuration files or API responses to JSON for better compatibility.",
            },
          ]}
          faqs={[
            {
              question: "Is my YAML data secure when using this tool?",
              answer: "Yes, all processing happens in your browser. Your YAML data is never sent to our servers or stored anywhere.",
            },
            {
              question: "Can I convert large YAML files?",
              answer: "Yes, our tool can handle large YAML files, though performance may vary depending on your browser and device.",
            },
            {
              question: "Does the converter validate my YAML?",
              answer: "Yes, the converter checks for YAML syntax errors before performing the conversion.",
            },
            {
              question: "Can I customize the JSON formatting?",
              answer: "Currently, the converter outputs JSON with a standard 2-space indentation. We plan to add customization options in the future.",
            },
            {
              question: "How can I work with YAML in my code editor?",
              answer:
                "Most code editors like VS Code, Sublime Text, and JetBrains IDEs support YAML syntax highlighting and conversion extensions.",
            },
          ]}
          
      />
            <ToolNavigation />
    </div>
    
  )
}



