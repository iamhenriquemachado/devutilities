import { LoremIpsumGenerator } from "@/components/tools/lorem-ipsum-generator"
import { TextCursor } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "Lorem Ipsum Generator | DevUtils",
  description: "Generate placeholder text for your designs and layouts with customizable options",
}

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <TextCursor className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">Lorem Ipsum Generator</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Generate placeholder text for your designs, layouts, and content mockups with customizable options.
      </p>
      <LoremIpsumGenerator />
      <ToolDocumentation
        title="Lorem Ipsum Generator"
        description=""
        icon={<TextCursor className="h-6 w-6" />}
        howToUse={[
          "Select the type of content you want to generate (paragraphs, sentences, or words).",
          "Use the slider to choose how many units you want to generate.",
          "Click the 'Generate Lorem Ipsum' button to create your placeholder text.",
          "Copy the generated text using the 'Copy' button.",
        ]}
        benefits={[
          {
            title: "Customizable Content",
            description:
              "Generate different types of placeholder text (paragraphs, sentences, or individual words) based on your specific needs.",
          },
          {
            title: "Design Focus",
            description:
              "Use placeholder text to keep stakeholders focused on the layout and design rather than getting distracted by the actual content.",
          },
          {
            title: "Quick Mockups",
            description:
              "Create realistic-looking content mockups and prototypes quickly without writing actual copy.",
          },
        ]}
        faqs={[
          {
            question: "What is Lorem Ipsum?",
            answer:
              "Lorem Ipsum is dummy text used in the design and publishing industries as a placeholder for actual content. It helps designers and developers see how text will look in their layouts without being distracted by meaningful content.",
          },
          {
            question: "Why not use real content instead?",
            answer:
              "Using real content during early design stages can distract reviewers with the actual words rather than focusing on layout, typography, and design elements. Lorem Ipsum prevents this distraction.",
          },
          {
            question: "Which format should I choose?",
            answer:
              "Choose paragraphs for full content blocks, sentences for shorter blocks like captions or summaries, and words for labels, headings, or navigation items.",
          },
          {
            question: "Is this text the same as traditional Lorem Ipsum?",
            answer: "While it follows the structure and style of traditional Lorem Ipsum, our generator creates randomized versions to provide more variety in your mockups."
          },
          {
            question: "How many paragraphs should I generate for a typical page mockup?",
            answer: "For a standard page mockup, 3-5 paragraphs usually provide enough content to simulate a realistic page layout while keeping the focus on design elements."
          }
        ]}
      />
      <ToolNavigation />
    </div>
  )
}