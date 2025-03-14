import { PasswordGenerator } from "@/components/tools/secure-password";
import { KeySquare } from "lucide-react";
import { ToolNavigation } from "@/components/tool-navigation";
import { ToolDocumentation } from "@/components/tool-documentation";

export const metadata = {
  title: "Secure Password Generator | DevUtils",
  description: "Generate strong, random passwords with customizable length and character options.",
};

export default function PasswordGeneratorPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-jam-purple">
          <KeySquare className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">Secure Password Generator</h1>
      </div>
      <p className="text-muted-foreground mb-10 mt-5">
        Generate strong, random passwords to enhance your security. Customize length and character options for the best protection.
      </p>
      <PasswordGenerator />
      <ToolDocumentation
        title="Secure Password Generator"
        description=""
        icon={<KeySquare className="h-6 w-6" />}
        howToUse={[
            "Select the desired password length and character types (uppercase, lowercase, numbers, special characters).",
            "Click the 'Generate Password' button to generate a secure password.",
            "View the generated password in the output field.",
            "Copy the generated password to your clipboard with the 'Copy' button.",
            "Optionally, clear the password to start fresh with new settings.",
          ]}
          
          benefits={[
            {
              title: "Enhanced Security",
              description:
                "A secure password generator ensures strong, random passwords that are difficult to crack, improving your online security.",
            },
            {
              title: "Customizable Options",
              description:
                "You can customize the generated password by selecting the length and including/excluding various character types, ensuring it fits your needs.",
            },
            {
              title: "Randomness",
              description:
                "Generated passwords are based on randomness, reducing predictability and preventing weak, easily guessed passwords.",
            },
            {
              title: "Convenience",
              description:
                "A secure password generator makes it easy to create unique and complex passwords without having to manually think of one each time.",
            },
          ]}
           
          faqs={[
            {
              question: "Why should I use a password generator?",
              answer:
                "Using a password generator ensures that your passwords are strong and random, making them harder to guess or crack. This is important for securing your online accounts.",
            },
            {
              question: "How secure is a generated password?",
              answer:
                "A password generated with a combination of uppercase, lowercase, numbers, and special characters is considered very secure. The longer and more complex the password, the harder it is to crack.",
            },
            {
              question: "Can I reuse passwords generated from this tool?",
              answer:
                "It's generally not recommended to reuse passwords. For better security, you should use a unique password for each account or service.",
            },
            {
              question: "How do I ensure my password is secure enough?",
              answer:
                "Use a password length of at least 12 characters and include a mix of uppercase letters, lowercase letters, numbers, and special characters. The more diverse and longer the password, the stronger it will be.",
            },
            {
                question: "What is the maximum number of characters I can generate for a password?",
                answer:
                  "The maximum length for password generation is 256 characters. This ensures optimal performance and prevents overloading the system. Longer passwords may be supported in certain cases, but 256 characters are more than sufficient for most use cases.",
              }
              
          ]}
          
      />
      <ToolNavigation />
    </div>
  );
}
