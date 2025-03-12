import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ToolDocumentationProps {
  title: string
  description: string
  icon: React.ReactNode
  howToUse: string[]
  benefits: {
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export function ToolDocumentation({ title, description, icon, howToUse, benefits, faqs }: ToolDocumentationProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">{icon}</div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground text-lg">{description}</p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">How to Use {title}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {howToUse.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

