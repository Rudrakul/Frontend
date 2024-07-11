import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebg = EB_Garamond({ subsets: ["latin"] });
import TanstackProvider from "@/providers/TanstackProvider";

export const metadata: Metadata = {
  title: "Rudrakul🔱",
  description: "The divine hub of hidden knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebg.className}>
        <TanstackProvider>
          <div className="bg-theme-background min-h-screen text-theme-primary-normal">
            {children}
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
