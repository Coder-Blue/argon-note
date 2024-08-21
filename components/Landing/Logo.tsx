import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export default function Logo() {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image src="/logo.png" alt="Argon_logo" width="40" height="40" />
      <p className={cn("font-semibold", mono.className)}>Argon</p>
    </div>
  );
}
