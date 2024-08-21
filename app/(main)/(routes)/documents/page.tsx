import type { Metadata } from "next";
import DocumentComponent from "./DocumentComponent";

export const metadata: Metadata = {
  title: "Trang chủ",
};

function DocumentsPage() {
  return <DocumentComponent />;
}

export default DocumentsPage;
