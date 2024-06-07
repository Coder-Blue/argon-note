"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";

interface BannerProps {
  documentId: Id<"documents">;
}

export default function Banner({ documentId }: BannerProps) {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  function onRemove() {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Đang xóa note...",
      success: "Đã xóa note thành công!",
      error: "Xóa note thất bại.",
    });

    router.push("/documents");
  }

  function onRestore() {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Đang khôi phục note...",
      success: "Note được khôi phục thành công!",
      error: "Khôi phục note thất bại.",
    });
  }

  return (
    <div className="flex w-full items-center justify-center gap-x-2 bg-rose-500 p-2 text-center text-sm text-white">
      <p>Note này đang ở trong thùng rác.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="h-auto border-white bg-transparent p-1 px-2 font-normal text-white hover:bg-primary/5 hover:text-white"
      >
        Khôi phục note
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="h-auto border-white bg-transparent p-1 px-2 font-normal text-white hover:bg-primary/5 hover:text-white"
        >
          Xóa vĩnh viễn
        </Button>
      </ConfirmModal>
    </div>
  );
}
