import React from "react";
import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const _sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Adamjee Govt. Science College",
  description:
    "A premier government science college in Karachi, Pakistan. Established 1961. Offering Pre-Medical, Pre-Engineering, and Computer Science programs.",
  keywords: [
    "Adamjee College",
    "Science College",
    "Karachi",
    "Pre-Medical",
    "Pre-Engineering",
    "Computer Science",
    "FSC",
    "Intermediate",
  ],
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_inter.variable} ${_sourceSerif.variable} font-sans antialiased`}
      >
        <AOSProvider>{children}</AOSProvider>
        <Analytics />
      </body>
    </html>
  );
}
