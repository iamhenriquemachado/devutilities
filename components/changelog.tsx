"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react"; // Import GitHub-style icon

export function ChangelogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <History className="h-4 w-4" />
          Changelog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">🚀 Changelog</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>All notable changes to <strong>DevUtilities</strong> will be documented here.</p>

          <section>
            <h2 className="text-lg font-semibold">📌 [1.1.0] - 2025-03-29</h2>
            <h3 className="font-medium mt-2">✨ Added</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>QR Code Generator</strong> implemented.</li>
              <li><strong>UI improvements</strong> for a better user experience.</li>
              <li><strong>Input validation</strong> to prevent errors when generating QR codes.</li>
              <li><strong>Fixed descriptions</strong> in the README file, FAQs, and Utility Grid.</li>
              <li><strong>Changelog modal</strong> implemented in the frontend application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">🎉 [1.0.0] - 2025-03-15</h2>
            <h3 className="font-medium mt-2">🛠 Initial Release</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>First version</strong> of DevUtilities launched.</li>
              <li><strong>Initial set of tools</strong> available.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">🔮 Next Improvements</h2>
            <p>We are constantly improving <strong>DevUtilities</strong> and planning the following features for future releases:</p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>JWT Encoder/Decoder</strong> – Encode and decode JWT tokens.</li>
              <li><strong>Regex Tester</strong> – Test and validate regular expressions.</li>
              <li><strong>HTML to Markdown Converter</strong> – Convert HTML content into Markdown format.</li>
              <li><strong>Markdown Previewer</strong> – Live preview for Markdown files.</li>
              <li><strong>Text Case Converter</strong> – Convert text to uppercase, lowercase, camelCase, snake_case, etc.</li>
              <li><strong>IP Address Lookup</strong> – Get geolocation details of an IP address.</li>
              <li><strong>Timestamp Converter</strong> – Convert Unix timestamps to readable dates.</li>
              <li><strong>Unit Converter</strong> – Convert between metric and imperial units.</li>
              <li><strong>Color Picker & Converter</strong> – Convert HEX, RGB, and HSL color codes.</li>
              <li><strong>PDF to Text Extractor</strong> – Extract text from PDF files.</li>
              <li><strong>Command Line Interface (CLI)</strong> – Build a CLI for DevUtilities to access tools directly from the terminal.</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
