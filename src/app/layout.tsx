import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sqlmate.io"),
  title: {
    default: "SqlMate",
    template: "%s | SqlMate",
  },
  description:
    "Native macOS SQL client for PostgreSQL, MySQL, and SQLite with fast table browsing, query editing, and AI-assisted SQL.",
  keywords: [
    "sql client",
    "database client",
    "database gui",
    "macOS sql client",
    "native sql editor",
    "postgresql client",
    "mysql client",
    "sqlite browser",
    "ai sql",
    "SqlMate",
  ],
  authors: [{ name: "Nitish", url: "https://github.com/Nitish27" }],
  creator: "Nitish",
  applicationName: "SqlMate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "SqlMate",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
