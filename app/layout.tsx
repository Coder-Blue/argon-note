import type { Metadata } from "next";
<<<<<<< HEAD
import { Quicksand } from "next/font/google";
=======
import { Outfit } from "next/font/google";
import "./globals.css";
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ConvexClientProvider from "@/components/provider/convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import ModalProvider from "@/components/provider/modals-provider";
<<<<<<< HEAD
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
    "React-19",
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
=======

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argon",
  description: "Ứng dụng ghi chú hiện đại dành cho người Việt",
  icons: [
    {
      url: "/logo.png",
    },
  ],
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
<<<<<<< HEAD
      <body className={quicksand.className}>
=======
      <body className={outfit.className}>
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
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
<<<<<<< HEAD
        <Analytics />
=======
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
      </body>
    </html>
  );
}
