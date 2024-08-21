import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ConvexClientProvider from "@/components/provider/convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import ModalProvider from "@/components/provider/modals-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Argon Note",
    default: "Argon Note",
  },
  applicationName: "Argon Note: Ứng dụng ghi note",
  description:
    "Ứng dụng ghi chú hiện đại, đơn giản và thông minh dành cho người Việt được viết bởi Noah Trần",
  creator: "Noah Trần",
  authors: {
    name: "Noah Trần",
  },
  generator: "argon",
  keywords: [
    "Take note app",
    "argon",
    "argon-note",
    "React",
    "NextJS",
    "Ứng dụng",
    "Lấy note",
  ],
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://argon-note.vercel.app/",
    title: "Argon Note: Ứng dụng ghi chú",
    description:
      "Ứng dụng ghi chú đơn giản và thông minh dành cho người Việt được viết bởi Noah Trần",
    siteName: "Argon Note: Ứng dụng ghi chú",
    images: [
      {
        url: "https://i.ibb.co/CBNgs0r/og-argon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={quicksand.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="argon-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
