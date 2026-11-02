import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const themeScript = `try{var saved=localStorage.getItem('sqlmate-theme');document.documentElement.dataset.theme=saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://sqlmate.io"),
  title: {
    default: "sqlMate | Free SQL Client for macOS & Windows",
    template: "%s | sqlMate",
  },
  description:
    "Free, open-source SQL client for macOS and Windows. Query PostgreSQL, MySQL, and SQLite, explore tables, and compare schemas in one desktop app.",
  keywords: [
    "sql client",
    "database client",
    "database gui",
    "macOS sql client",
    "Windows sql client",
    "native sql editor",
    "postgresql client",
    "mysql client",
    "sqlite browser",
    "ai sql",
    "SqlMate",
  ],
  authors: [{ name: "Nitish", url: "https://github.com/Nitish27" }],
  creator: "Nitish",
  applicationName: "sqlMate",
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
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
