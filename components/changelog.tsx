"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react"; // Import GitHub-style icon

export function ChangelogModal() {
  const [changelog, setChangelog] = useState("");

  useEffect(() => {
    const fetchChangelog = async () => {
      const res = await fetch("/changelog.md");
      const text = await res.text();
      setChangelog(text);
    };

    fetchChangelog();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <History className="h-4 w-4" />
          Changelog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Changelog</DialogTitle>
        </DialogHeader>
        <div className="prose">
          <pre className="whitespace-pre-wrap break-words">{changelog}</pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
