"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          <DialogTitle className="text-xl font-bold">Changelog</DialogTitle>
        </DialogHeader> 
        <div className="space-y-4">
          <p>
            All notable changes to <strong>DevUtilities</strong> will be
            documented here.
          </p>

          <section>
            <h2 className="text-lg font-semibold">📌 [1.3.0] - 2025-04-10</h2>

            <h3 className="font-medium mt-2">✨ Added</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Lorem Ipsum Generator</strong> fully implemented with
                support for paragraphs, words, and sentences.
              </li>
            </ul>

            <h3 className="font-medium mt-4">🛠 Fixed</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Correct icons now displayed in the utility grid and search grid.
              </li>
              <li>
                Fixed incorrect URL for the Text Case Converter in the command
                palette.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">📌 [1.2.0] - 2025-03-31</h2>
            <h3 className="font-medium mt-2">✨ Added</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Text Case Converter</strong> implemented.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">📌 [1.1.0] - 2025-03-29</h2>
            <h3 className="font-medium mt-2">✨ Added</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>QR Code Generator</strong> implemented.
              </li>
              <li>
                <strong>UI improvements</strong> for a better user experience.
              </li>
              <li>
                <strong>Input validation</strong> to prevent errors when
                generating QR codes.
              </li>
              <li>
                <strong>Fixed descriptions</strong> in the README file, FAQs,
                and Utility Grid.
              </li>
              <li>
                <strong>Changelog modal</strong> implemented in the frontend
                application.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">🎉 [1.0.0] - 2025-03-15</h2>
            <h3 className="font-medium mt-2">🛠 Initial Release</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>First version</strong> of DevUtilities launched.
              </li>
              <li>
                <strong>Initial set of tools</strong> available.
              </li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
