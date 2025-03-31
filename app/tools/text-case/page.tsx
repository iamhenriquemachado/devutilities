import { TextCaseConverter } from "@/components/tools/text-case"
import { CaseUpper } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "Text Case Converter | DevUtils",
  description: "A powerful tool that instantly transforms text into different capitalization styles",
}

export default function TexCaseConverterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <CaseUpper className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">Text Case Converter</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
      Instantly convert your text into different cases, such as uppercase, lowercase, camelCase, and snake_case.
      </p>
      <TextCaseConverter />
      <ToolDocumentation
        title="Text Case Converter"
        description=""
        icon={<CaseUpper className="h-6 w-6" />}
        howToUse={[
          "Paste or type your text into the input field.",
          "Choose the desired case conversion option (e.g., Uppercase, Lowercase, Camel Case, Snake Case).",
          "Click the 'Convert' button to apply the transformation.",
          "Copy the formatted text using the 'Copy' button."
        ]}
        benefits={[
            {
              title: "Quick and Easy Conversion",
              description:
                "Easily transform your text into different cases with a single click, saving time and effort.",
            },
            {
              title: "Multiple Case Options",
              description:
                "Convert text to uppercase, lowercase, camel case, and snake case effortlessly.",
            },
            {
              title: "Perfect for Writers and Developers",
              description:
                "Ensure consistent formatting for documents, code, social media posts, and more.",
            },
          ]}
        faqs={[
            {
              question: "Is my text stored anywhere?",
              answer:
                "No, all processing happens in your browser. Your text is never sent to any server or stored anywhere.",
            },
            {
              question: "Can I convert long paragraphs?",
              answer:
                "Yes, the tool works efficiently with both short and long text inputs.",
            },
            {
                question: "What is Camel Case?",
                answer: "Camel Case joins words without spaces and capitalizes the first letter of each word except the first one (e.g., camelCase, firstName, getUserData).",
            },
            {
                question: "What is Snake Case?",
                answer: "Snake Case joins words with underscore characters (_) and typically uses all lowercase letters (e.g., snake_case, first_name, get_user_data).",
            }
              
          ]}
      />
      <ToolNavigation />
    </div>
  )
}
