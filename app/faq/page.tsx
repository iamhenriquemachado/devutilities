import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ - DevUtils",
  description: "Frequently asked questions about DevUtils",
}

export default function FAQPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is DevUtils free to use?</AccordionTrigger>
          <AccordionContent>
            Yes, DevUtils is completely free to use. All tools are available without any restrictions or limitations. We
            believe in providing high-quality developer tools that are accessible to everyone.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is my data secure when using DevUtils?</AccordionTrigger>
          <AccordionContent>
            Absolutely. All processing happens in your browser or on your local machine. We don't store or transmit your
            data to any external servers. Your sensitive information never leaves your device, ensuring complete privacy
            and security.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use DevUtils offline?</AccordionTrigger>
          <AccordionContent>
            Yes, once the application is loaded in your browser, most tools can function without an internet connection.
            However, some features that require API calls might not work offline.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contribute to DevUtils?</AccordionTrigger>
          <AccordionContent>
            We welcome contributions! DevUtils is open-source, and you can contribute by submitting pull requests on our
            GitHub repository. Whether it's adding new features, fixing bugs, or improving documentation, your help is
            appreciated.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Can I suggest a new tool or feature?</AccordionTrigger>
          <AccordionContent>
            We're always looking to expand our collection of developer tools. You can suggest new tools or features by
            opening an issue on our GitHub repository or contacting us directly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How does the Python backend work with the Next.js frontend?</AccordionTrigger>
          <AccordionContent>
            The Next.js frontend communicates with the Python backend through API calls. The frontend sends requests to
            the backend for operations that require more processing power or specific Python libraries, and the backend
            returns the processed data to be displayed in the UI.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Are there any rate limits for using the tools?</AccordionTrigger>
          <AccordionContent>
            There are no rate limits for using the tools. However, we ask that you use the service responsibly to ensure
            it remains available for everyone.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Can I use DevUtils in my commercial projects?</AccordionTrigger>
          <AccordionContent>
            Yes, you can use DevUtils for both personal and commercial projects. The tools are designed to help
            developers in all contexts, whether you're working on a personal project or a commercial application.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

