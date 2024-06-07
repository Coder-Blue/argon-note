"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ErrorPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        alt="Error"
        width="300"
        height="300"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        alt="Error"
        width="300"
        height="300"
        className="hidden dark:block"
      />
      <div className="flex items-center justify-center">
        <h1 className="mr-2 font-mono text-2xl font-bold">404!</h1>
        <h2 className="text-xl font-medium">Có gì đó không ổn với Argon.</h2>
      </div>
      <Button asChild>
        <Link href="/documents">Trở về trang chủ</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
