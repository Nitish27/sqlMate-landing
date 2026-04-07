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
  title: "SqlMate — The Modern Native SQL Client with AI | Free for macOS",
  description:
    "Free, lightning-fast native database GUI for macOS (Rust & Tauri). Connect to PostgreSQL, MySQL, SQLite. Generate SQL from plain English using AI.",
  keywords: [
    "SQL client",
    "database GUI",
    "macOS database app",
    "native SQL editor",
    "AI SQL generator",
    "text to SQL",
    "PostgreSQL client",
    "MySQL client",
    "SQLite browser",
    "Tauri app",
    "Rust database tool",
    "free SQL client",
    "open source database GUI",
    "SqlMate",
  ],
  authors: [{ name: "Nitish", url: "https://github.com/Nitish27" }],
  creator: "Nitish",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://sqlmate.io",
  },
  openGraph: {
    type: "website",
    url: "https://sqlmate.io",
    siteName: "SqlMate",
    title: "SqlMate — The Modern Native SQL Client with AI",
    description:
      "Free native database GUI for macOS. Connect to Postgres, MySQL, & SQLite. Generate SQL from plain English using AI. Built with Rust & Tauri.",
    images: [
      {
        url: "/ai-image.png",
        width: 1200,
        height: 800,
        alt: "SqlMate — AI-powered SQL client for macOS",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SqlMate — The Modern Native SQL Client with AI",
    description:
      "Free native database GUI for macOS. Connect to Postgres, MySQL, & SQLite. Generate SQL from plain English using AI. Built with Rust & Tauri.",
    images: ["/ai-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SqlMate",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free, lightning-fast native database GUI for macOS (Rust & Tauri). Connect to PostgreSQL, MySQL, SQLite. Generate SQL from plain English using AI.",
  url: "https://sqlmate.io",
  downloadUrl: "https://sqlmate.io/downloads/SqlMate_0.4.1_x64.dmg",
  softwareVersion: "0.4.1",
  screenshot: "https://sqlmate.io/ai-image.png",
  author: {
    "@type": "Person",
    name: "Nitish",
    url: "https://github.com/Nitish27",
  },
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
