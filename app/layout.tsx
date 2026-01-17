import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PRODOXI - Digital Product Marketplace in Bangladesh",
  description: "Bangladesh's premier multi-vendor digital product marketplace. Discover, purchase, and access digital products including software, templates, courses, and more.",
  keywords: ["digital products", "marketplace", "Bangladesh", "software", "templates", "courses", "ebooks"],
  authors: [{ name: "PRODOXI" }],
  openGraph: {
    title: "PRODOXI - Digital Product Marketplace",
    description: "Discover and purchase digital products from verified sellers in Bangladesh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable}`}>
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

