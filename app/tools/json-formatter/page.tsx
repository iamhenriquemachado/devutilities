import { JsonFormatter } from "@/components/tools/json-formatter"
import { FileJson } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "JSON Formatter | DevUtils",
  description: "Format and validate JSON data with syntax highlighting",
}

export default function JsonFormatterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <FileJson className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">JSON Formatter</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Format and beautify your JSON data for better readability and debugging. Quickly visualize and organize your
        JSON data with ease.
      </p>
      <JsonFormatter />
      <ToolDocumentation
        title="JSON Formatter"
        description=""
        icon={<FileJson className="h-6 w-6" />}
        howToUse={[
          "Paste your JSON data into the input field.",
          "Click the 'Format JSON' button or wait for auto-formatting if enabled.",
          "View the formatted JSON in the output field with proper indentation and syntax highlighting.",
          "Copy the formatted JSON to your clipboard with the 'Copy' button.",
        ]}
        benefits={[
          {
            title: "Improved Readability",
            description:
              "Properly formatted JSON is much easier to read and understand, making debugging and development faster.",
          },
          {
            title: "Error Detection",
            description:
              "Our formatter validates your JSON and highlights syntax errors, helping you identify and fix issues quickly.",
          },
          {
            title: "Development Efficiency",
            description: "Save time by quickly formatting and validating JSON data during development and debugging.",
          },
          {
            title: "API Testing",
            description: "Format API responses for better analysis and understanding of the data structure.",
          },
        ]}
        faqs={[
          {
            question: "Is my JSON data secure when using this tool?",
            answer:
              "Yes, all processing happens in your browser. Your JSON data is never sent to our servers or stored anywhere.",
          },
          {
            question: "Can I format large JSON files?",
            answer:
              "Yes, our tool can handle large JSON files, though performance may vary depending on your browser and device.",
          },
          {
            question: "Does the formatter validate my JSON?",
            answer: "Yes, the formatter validates your JSON and will show an error message if the JSON is invalid.",
          },
          {
            question: "Can I customize the formatting style?",
            answer:
              "Currently, the formatter uses a standard 2-space indentation. We plan to add customization options in the future.",
          },
          {
            question: "How can I format JSON in my code editor?",
            answer:
              "Most code editors like VS Code, Sublime Text, and JetBrains IDEs have built-in JSON formatting. You can usually format JSON with a keyboard shortcut or through the editor's command palette.",
          },
        ]}
      />
            <ToolNavigation />
    </div>
    
  )
}



