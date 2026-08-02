import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Auron Media | Next-Gen Social Media Marketing Agency",
  description:
    "Scale your brand to 8-figures with organic viral short-form content, high-ROI paid ads, and AI-driven growth funnels. Claim your free audit today.",
  keywords: [
    "Social Media Marketing Agency",
    "SMMA",
    "Viral Reels",
    "Paid Social Ads",
    "TikTok Growth Agency",
    "Instagram Growth",
    "Auron Media",
  ],
  authors: [{ name: "Auron Media Team" }],
  openGraph: {
    title: "Auron Media | Premier Social Media Growth Agency",
    description: "Multi-channel viral scale & high-converting paid social campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
