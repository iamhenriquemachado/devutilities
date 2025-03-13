import { UrlEncoder } from "@/components/tools/url-encoder"
import { CodeIcon } from "lucide-react"
import { ToolNavigation } from "@/components/tool-navigation"
import { ToolDocumentation } from "@/components/tool-documentation"

export const metadata = {
  title: "URL Encoder/Decoder | DevUtils",
  description: "Encode and decode URL data with ease",
}

export default function Base64Page() {
  return (
    <div className="container py-8">

      <div>
        <h1 className="text-2xl font-bold">URL Encode/Decode</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Convert URLs to a safe format using URL encoding, or decode URL-encoded strings back to their original form with ease. This tool ensures smooth and secure data transmission.
      </p>
      <div className="mt-8">
        <UrlEncoder />
      </div>
      <ToolDocumentation
        title="URL  Encoder/Decoder"
        description=""
        icon={<CodeIcon className="h-6 w-6" />}
        howToUse={[  
          "Select 'Encode' or 'Decode' mode based on your needs.",  
          "Paste your URL or encoded data into the input field.",  
          "Click the 'Encode' or 'Decode' button.",  
          "View the result in the output field.",  
          "Copy the result to your clipboard with the 'Copy' button.",  
        ]}  
        benefits={[  
          {  
            title: "Safe Data Transmission",  
            description:  
              "URL encoding ensures that data, such as special characters, can be transmitted safely across the web without corruption.",  
          },  
          {  
            title: "Email Compatibility",  
            description: "URL encoding is often used in email systems to safely encode links and other text data, ensuring they arrive intact.",  
          },  
          {  
            title: "URL Safety",  
            description: "URL encoding ensures that characters such as spaces or symbols are safely encoded for use in web addresses, making them valid for URLs.",  
          },  
          {  
            title: "Cross-Platform Support",  
            description:  
              "URL encoding is supported across all programming languages and platforms, ensuring your data can be handled universally.",  
          },  
        ]}  
        faqs={[  
          {  
            question: "What is URL encoding?",  
            answer:  
              "URL encoding is the process of converting characters into a format that can be transmitted over the internet without confusion. It replaces unsafe characters with a '%' followed by a two-digit hexadecimal number.",  
          },  
          {  
            question: "Is URL encoding secure?",  
            answer:  
              "No, URL encoding is not a security method. It's simply a way to ensure data is safely transmitted. For sensitive information, you should consider encryption.",  
          },  
          {  
            question: "Can I encode special characters in URLs?",  
            answer:  
              "Yes, URL encoding is specifically designed to encode special characters, ensuring they are transmitted correctly across web applications and URLs.",  
          },  
          {  
            question: "How can I use URL encoding in my code?",  
            answer:  
              "Most programming languages have built-in functions for URL encoding and decoding. For example, in JavaScript, you can use `encodeURIComponent()` for encoding and `decodeURIComponent()` for decoding.",  
          },  
        ]}  
        
      />



      <ToolNavigation />
    </div>
  )
}

