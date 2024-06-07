"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import Cover from "@/components/DocumentID/Cover";
import Toolbar from "@/components/DocumentID/Toolbar";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

function DocumentIdPage({ params }: DocumentIdPageProps) {
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/DocumentID/Editor"), { ssr: false }),
    [],
  );

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  function onChange(content: string) {
    update({
      id: params.documentId,
      content,
    });
  }

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Không tìm thấy trang...</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
}

export default DocumentIdPage;
