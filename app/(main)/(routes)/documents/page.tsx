<<<<<<< HEAD
import type { Metadata } from "next";
import DocumentComponent from "./DocumentComponent";

export const metadata: Metadata = {
  title: "Trang chủ",
};

function DocumentsPage() {
  return <DocumentComponent />;
=======
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

function DocumentsPage() {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  function onCreate() {
    const promise = create({ title: "Chưa có tiêu đề" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Đang tạo một note mới...",
      success: "Đã tạo note mới thành công!",
      error: "Thất bại trong việc tạo note mới.",
    });
  }

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Chào mừng đến với Argon của {user?.firstName}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Tạo một note mới
      </Button>
    </div>
  );
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
}

export default DocumentsPage;
