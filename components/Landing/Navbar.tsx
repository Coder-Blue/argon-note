"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Spinner from "@/components/spinner";
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Đăng nhập
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Sử dụng miễn phí</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild variant="ghost" size="sm">
              <Link href="/documents">Bắt đầu Argon</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
