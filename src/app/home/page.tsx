"use client";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
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

export default function Page() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Home <span className="text-[hsl(280,100%,70%)]">Page</span>
        </h1>
      </div>
    </main>
  );
}
