import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noman Jawad's Portfolio",
  description: "Mordern Portfolio of Noman Jawad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-accent">
      <body className="overflow-x-hidden w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
