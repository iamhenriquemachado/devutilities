import { CsvToJsonFormatter } from "@/components/tools/csv-to-json"
import { FileJson } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "CSV to JSON Converter | DevUtils",
  description: "Convert CSV data to JSON format quickly and easily.",
}

export default function CsvToJsonPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <FileJson className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">CSV to JSON Converter</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Easily convert CSV data into structured JSON format. This tool helps you quickly transform CSV files into JSON for data processing and API integration.
      </p>
      <CsvToJsonFormatter />
      <ToolDocumentation
        title="CSV to JSON Converter"
        description=""
        icon={<FileJson className="h-6 w-6" />}
        howToUse={[
          "Paste or upload your CSV data into the input field.",
          "Click the 'Convert' button to transform CSV into JSON format.",
          "View the structured JSON output, ready for use in applications and APIs.",
          "Copy or download the converted JSON file with ease.",
        ]}
        benefits={[
          {
            title: "Easy Data Transformation",
            description:
              "Convert CSV files into structured JSON format with minimal effort, making data handling more efficient.",
          },
          {
            title: "Improved Data Compatibility",
            description:
              "JSON is widely used in APIs and web applications, allowing seamless integration with various systems.",
          },
          {
            title: "Time-Saving Automation",
            description: "Quickly convert CSV files without manual formatting, saving time during data processing.",
          },
          {
            title: "Supports Large Files",
            description: "Handle large CSV files and transform them into JSON efficiently.",
          },
        ]}
        faqs={[
          {
            question: "Is my CSV data secure when using this tool?",
            answer:
              "Yes, all processing happens in your browser. Your CSV data is never sent to our servers or stored anywhere.",
          },
          {
            question: "Can I upload CSV files instead of pasting data?",
            answer:
              "Yes, you can upload CSV files, and the tool will automatically parse and convert them into JSON.",
          },
          {
            question: "Does the tool support different delimiters?",
            answer: "Yes, it supports different delimiters such as commas, semicolons, and tabs.",
          },
          {
            question: "Can I download the converted JSON file?",
            answer:
              "Yes, after conversion, you can copy the JSON data or download it as a file.",
          },
          {
            question: "Is there a limit on file size?",
            answer:
              "While the tool supports large files, performance may vary depending on your browser and system resources.",
          },
        ]}
      />
      <ToolNavigation />
    </div>
  )
}