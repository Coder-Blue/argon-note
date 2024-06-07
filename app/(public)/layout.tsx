"use client";

import { ReactNode } from "react";

type PreviewLayoutProps = {
  children: ReactNode;
};

export default function PreviewLayout({ children }: PreviewLayoutProps) {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
}
