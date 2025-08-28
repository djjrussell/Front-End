import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application to manage your tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#1A1A1A] min-h-screen font-sans text-[#F2F2F2]">
        <main className="max-w-3xl mx-auto p-4 md:p-6">{children}</main>
      </body>
    </html>
  );
}
