import Logo from "@/components/Landing/Logo";
import { Button } from "@/components/ui/button";
import { Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <div className="z-50 flex w-full items-center bg-background p-6">
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <a
          href="https://github.com/Coder-Blue/argon-note"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="sm">
            <Github className="mr-2 h-4 w-4" />
            <p className="text-sm">Repo</p>
          </Button>
        </a>
        <a
          href="https://www.facebook.com/noah.tran1109"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="sm">
            <Facebook className="mr-2 h-4 w-4" />
            <p className="text-sm">Tác giả</p>
          </Button>
        </a>
      </div>
    </div>
  );
}
