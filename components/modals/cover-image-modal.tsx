"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export default function CoverImageModal() {
  const update = useMutation(api.documents.update);
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onClose() {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  }

  async function onChange(file?: File) {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">
            Thay đổi ảnh bìa
          </h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          value={file}
          disabled={isSubmitting}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
}
