import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for SqlMate, covering local storage, selected files, AI-assisted SQL requests, and how the macOS SQL client handles data.",
  keywords: [
    "SqlMate privacy policy",
    "database client privacy",
    "macOS app privacy policy",
  ],
  alternates: {
    canonical: "https://sqlmate.io/privacy/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "https://sqlmate.io/privacy/",
    title: "SqlMate Privacy Policy",
    description:
      "Privacy policy for SqlMate, covering local storage, selected files, AI-assisted SQL requests, and app data handling.",
    images: [
      {
        url: "/app-icon.png",
        width: 512,
        height: 512,
        alt: "SqlMate app icon",
      },
    ],
  },
  twitter: {
    title: "SqlMate Privacy Policy",
    description:
      "Privacy policy for SqlMate, covering local storage, selected files, AI-assisted SQL requests, and app data handling.",
    images: ["/app-icon.png"],
  },
};

const updatedOn = "June 18, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/5 glass">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/app-icon.svg" alt="SqlMate Logo" width={32} height={32} />
            <span className="font-bold text-xl tracking-tight">SqlMate</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-muted border border-accent/20 text-accent text-sm font-medium mb-8">
            <ShieldCheck size={14} />
            Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SqlMate Privacy Policy</h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            This policy explains how the SqlMate desktop app handles information when you use it on macOS.
          </p>
          <p className="text-text-muted mt-4">Last updated: {updatedOn}</p>
        </div>

        <div className="space-y-8 mt-14">
          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">1. Information SqlMate stores locally</h2>
            <p className="text-text-secondary leading-relaxed">
              SqlMate stores saved connection settings, query history, and user interface state locally on your device
              to make the app easier to use across sessions. Database passwords, when saved, are stored through the
              operating system keychain instead of plain text storage.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">2. Database connections</h2>
            <p className="text-text-secondary leading-relaxed">
              SqlMate connects directly from your device to the databases you choose, including PostgreSQL, MySQL,
              and SQLite. Your database traffic is not proxied through SqlMate-operated servers.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">3. AI-assisted SQL</h2>
            <p className="text-text-secondary leading-relaxed">
              If you choose to use AI-assisted SQL features, the prompt you enter and related context needed to generate
              SQL may be sent to the configured AI provider. This only happens when you actively use the AI feature.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">4. Files you select</h2>
            <p className="text-text-secondary leading-relaxed">
              SqlMate can access files you explicitly choose, such as SQLite databases, import files, SSL certificates,
              and SSH keys. These files are used to provide app functionality and are not uploaded by default to SqlMate-operated servers.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">5. Tracking and advertising</h2>
            <p className="text-text-secondary leading-relaxed">
              SqlMate does not use third-party advertising SDKs and does not sell your personal information.
              The desktop app is not designed for cross-app tracking. The SqlMate website and desktop app may
              collect limited first-party telemetry such as download-button clicks, anonymous installation identifiers,
              app version, platform, and activity timestamps to understand product usage. This telemetry is not used
              for advertising and does not include database contents, query text, or saved hostnames.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have privacy questions about SqlMate, please contact the project through{" "}
              <a
                href="https://github.com/Nitish27/sqlMate/issues"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                GitHub Issues
              </a>.
            </p>
          </section>

          <section className="glass rounded-3xl border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">7. Related pages</h2>
            <div className="flex flex-col gap-3 text-text-secondary leading-relaxed md:flex-row md:gap-8">
              <Link href="/" className="text-accent hover:text-white transition-colors">
                Visit the SqlMate homepage
              </Link>
              <Link href="/support" className="text-accent hover:text-white transition-colors">
                Get support for SqlMate
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
