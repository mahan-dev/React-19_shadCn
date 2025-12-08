"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      className="w-fit"
      onClick={() =>
        toast("Event has been created", {
          description: (
            <span className="text-gray-500">
              Sunday, December 03, 2023 at 9:00 AM
            </span>
          ),
          position: "top-center",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
