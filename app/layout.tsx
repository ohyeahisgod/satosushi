import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Satosushi — Simple software for online businesses",
    template: "%s | Satosushi",
  },
  description:
    "Satosushi builds simple, focused software tools for online businesses. No bloat, no complexity — just tools that work.",
  metadataBase: new URL("https://satosushi.co"),
  openGraph: {
    title: "Satosushi — Simple software for online businesses",
    description:
      "Satosushi builds simple, focused software tools for online businesses.",
    siteName: "Satosushi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satosushi — Simple software for online businesses",
    description:
      "Satosushi builds simple, focused software tools for online businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
