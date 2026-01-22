import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TailShell - Portable Waterproof Seat Cover | Vendor Partnership",
  description:
    "TailShell is the pocket-sized, waterproof seat cover revolutionizing comfort and hygiene for outdoor adventures, sports venues, golf courses, and beyond. Partner with us today.",
  keywords: [
    "TailShell",
    "waterproof seat cover",
    "portable seat cover",
    "outdoor gear",
    "stadium seating",
    "golf cart seat cover",
    "vendor partnership",
    "B2B",
  ],
  openGraph: {
    title: "TailShell - Portable Waterproof Seat Cover",
    description:
      "The pocket-sized, waterproof seat cover for outdoor adventures, sports venues, and beyond.",
    type: "website",
    locale: "en_US",
    siteName: "TailShell",
  },
  twitter: {
    card: "summary_large_image",
    title: "TailShell - Portable Waterproof Seat Cover",
    description:
      "The pocket-sized, waterproof seat cover for outdoor adventures, sports venues, and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
