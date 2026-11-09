import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Martensite Workwear - Premium Professional Workwear",
  description: "Premium workwear solutions for professionals across industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
