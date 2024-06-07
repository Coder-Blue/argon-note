"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Spinner from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Nơi để ghi chú lại các ý tưởng, kế hoạch && tài liệu của bạn. Chào mừng
        bạn đến với <span className="underline">Argon</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Argon là nơi làm việc kết nối tất cả <br />
        vì mục đích làm việc tốt hơn, nhanh hơn.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Bắt đầu
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Sử dụng miễn phí
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
