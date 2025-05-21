import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./(client)/(component)/header/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Metadata configuration ---
export const metadata: Metadata = {
  title: "Fana Spa",
  description: "Experience luxury and relaxation at Fana Spa with our premium spa treatments and wellness services.",
  keywords: ["spa", "Fana Spa", "massage", "wellness", "relaxation", "luxury spa", "beauty treatments"],
  authors: [{ name: "Fana Spa Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  openGraph: {
    title: "Fana Spa",
    description: "Premium spa and wellness services for your ultimate relaxation.",
    url: "https://www.fanaspa.com",
    siteName: "Fana Spa",
    images: [
      {
        url: "https://www.fanaspa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fana Spa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fana Spa",
    description: "Premium spa and wellness services for your ultimate relaxation.",
    images: ["https://www.fanaspa.com/twitter-card.jpg"],
  },
};

// --- Root Layout ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
