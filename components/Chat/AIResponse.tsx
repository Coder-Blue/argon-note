import { ReactNode } from "react";
import Image from "next/image";

export default function AIResponse({ children }: { children: ReactNode }) {
  return (
    <div className="relative ml-20 mr-7 rounded-xl bg-secondary p-4 pb-10">
      {children}
      <div className="absolute -bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-300">
        <Image alt="ArgonLogo" src="/gemini.svg" width="45" height="45" />
      </div>
    </div>
  );
}
