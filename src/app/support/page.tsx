import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bug, ExternalLink, Github, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support resources for SqlMate, including bug reports, feature requests, setup help, and App Store support for the macOS SQL client.",
  keywords: [
    "SqlMate support",
    "SqlMate help",
    "database client support",
    "macOS SQL client support",
  ],
  alternates: {
    canonical: "https://sqlmate.io/support/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "https://sqlmate.io/support/",
    title: "SqlMate Support",
    description:
      "Support resources for SqlMate, including bug reports, feature requests, setup help, and App Store support.",
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
    title: "SqlMate Support",
    description:
      "Support resources for SqlMate, including bug reports, feature requests, setup help, and App Store support.",
    images: ["/app-icon.png"],
  },
};

export default function SupportPage() {
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
            <MessageSquare size={14} />
            Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Need help with SqlMate?</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            SqlMate is an open-source macOS SQL client for PostgreSQL, MySQL, and SQLite.
            If you run into a bug, have a feature request, or need help getting started,
            use the support options below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <a
            href="https://github.com/Nitish27/sqlMate/issues"
            target="_blank"
            rel="noreferrer"
            className="glass p-7 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center text-accent mb-5">
              <Bug size={24} />
            </div>
            <h2 className="text-xl font-semibold mb-3">Report a bug</h2>
            <p className="text-text-secondary leading-relaxed">
              Found a crash, connection issue, or unexpected behavior? Open an issue on GitHub with steps to reproduce it.
            </p>
            <span className="inline-flex items-center gap-2 mt-5 text-accent font-medium">
              Open GitHub Issues
              <ExternalLink size={16} />
            </span>
          </a>

          <a
            href="https://github.com/Nitish27/sqlMate"
            target="_blank"
            rel="noreferrer"
            className="glass p-7 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-5">
              <Github size={24} />
            </div>
            <h2 className="text-xl font-semibold mb-3">View the project</h2>
            <p className="text-text-secondary leading-relaxed">
              Browse the source code, check the README, and review active development directly in the SqlMate repository.
            </p>
            <span className="inline-flex items-center gap-2 mt-5 text-accent font-medium">
              Visit repository
              <ExternalLink size={16} />
            </span>
          </a>

          <a
            href="https://github.com/Nitish27/sqlMate/issues/new"
            target="_blank"
            rel="noreferrer"
            className="glass p-7 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-xl font-semibold mb-3">Get support</h2>
            <p className="text-text-secondary leading-relaxed">
              For support requests, setup questions, and App Store issues, use the issue tracker so details stay in one place.
            </p>
            <span className="inline-flex items-center gap-2 mt-5 text-accent font-medium">
              Open a support request
              <ExternalLink size={16} />
            </span>
          </a>
        </div>

        <section className="glass rounded-3xl border border-white/5 p-8 md:p-10 mt-12">
          <h2 className="text-2xl font-semibold mb-6">Recommended details to include</h2>
          <div className="grid md:grid-cols-2 gap-8 text-text-secondary leading-relaxed">
            <div>
              <p className="font-medium text-white mb-3">For bug reports</p>
              <p>
                Include your macOS version, the database type you were using, and what action caused the issue.
                Screenshots and exact error messages are especially helpful.
              </p>
            </div>
            <div>
              <p className="font-medium text-white mb-3">For connection issues</p>
              <p>
                Mention whether you were connecting to PostgreSQL, MySQL, or SQLite, and whether SSH tunneling or SSL was enabled.
              </p>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/5 p-8 md:p-10 mt-12">
          <h2 className="text-2xl font-semibold mb-6">Related pages</h2>
          <div className="flex flex-col gap-3 text-text-secondary leading-relaxed md:flex-row md:gap-8">
            <Link href="/" className="text-accent hover:text-white transition-colors">
              Visit the SqlMate homepage
            </Link>
            <Link href="/privacy" className="text-accent hover:text-white transition-colors">
              Read the privacy policy
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
