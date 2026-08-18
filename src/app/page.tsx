import type { Metadata } from "next";
import Image from "next/image";
import { Terminal, Database, Sparkles, Download, Github } from "lucide-react";
import { TrackedDownloadLink } from "./TrackedDownloadLink";

const CURRENT_VERSION = "0.4.1";
const DOWNLOAD_URL = `https://sqlmate.io/downloads/SqlMate_${CURRENT_VERSION}_x64.dmg`;

export const metadata: Metadata = {
  title: "Native SQL Client for macOS",
  description:
    "SqlMate is a native macOS database client for PostgreSQL, MySQL, and SQLite with table browsing, query editing, and AI-assisted SQL.",
  keywords: [
    "native sql client",
    "macOS database client",
    "postgresql gui",
    "mysql gui",
    "sqlite browser",
    "ai sql",
    "sql editor",
  ],
  alternates: {
    canonical: "https://sqlmate.io/",
  },
  openGraph: {
    url: "https://sqlmate.io/",
    title: "SqlMate — Native SQL client for macOS",
    description:
      "Fast native database client for PostgreSQL, MySQL, and SQLite with AI-assisted SQL and a focused macOS workflow.",
    images: [
      {
        url: "/ai-image.png",
        width: 1200,
        height: 800,
        alt: "SqlMate interface preview",
      },
    ],
  },
  twitter: {
    title: "SqlMate — Native SQL client for macOS",
    description:
      "Fast native database client for PostgreSQL, MySQL, and SQLite with AI-assisted SQL and a focused macOS workflow.",
    images: ["/ai-image.png"],
  },
};

const softwareApplicationJsonLd = {
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
    "SqlMate is a native macOS database client for PostgreSQL, MySQL, and SQLite with table browsing, query editing, and AI-assisted SQL.",
  url: "https://sqlmate.io/",
  downloadUrl: DOWNLOAD_URL,
  softwareVersion: CURRENT_VERSION,
  screenshot: "https://sqlmate.io/ai-image.png",
  author: {
    "@type": "Person",
    name: "Nitish",
    url: "https://github.com/Nitish27",
  },
  license: "https://opensource.org/licenses/MIT",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/5" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/app-icon.svg" alt="SqlMate Logo" width={32} height={32} />
              <span className="font-bold text-xl tracking-tight">SqlMate</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Nitish27/sqlMate" className="text-text-muted hover:text-white transition-colors">GitHub</a>
              <a href="/support" className="text-text-muted hover:text-white transition-colors">Support</a>
              <a href="/privacy" className="text-text-muted hover:text-white transition-colors">Privacy</a>
              <TrackedDownloadLink href={DOWNLOAD_URL} version={CURRENT_VERSION} download className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Download
              </TrackedDownloadLink>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section aria-label="Hero">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-muted border border-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-md">
            <Sparkles size={14} />
            New: Sql Database Native Client
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            The Modern Native <br className="hidden md:block"/>
            <span className="accent-gradient">SQL Client</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Modern, fast, and easy to use SQL GUI. SqlMate is a lightning-fast, native database GUI built with Rust and Tauri. Now featuring AI that writes your queries for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedDownloadLink href={DOWNLOAD_URL} version={CURRENT_VERSION} download className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 glow">
              <Download size={20} />
              Download for macOS
            </TrackedDownloadLink>
            <a href="https://github.com/Nitish27/sqlMate" target="_blank" className="flex items-center gap-2 bg-surface hover:bg-[#333] border border-border text-white px-8 py-3 rounded-full font-medium transition-colors">
              <Github size={20} />
              View Source
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            Free and open-source. No signup required.
          </p>

          {/* App Preview Frame */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-accent blur-[100px] opacity-20 rounded-full" />
            <div className="relative rounded-xl border border-white/10 bg-surface shadow-2xl overflow-hidden glass">
              <div className="h-8 border-b border-white/5 bg-black/20 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <Image 
                src="/ai-image.png" 
                alt="SqlMate AI Feature" 
                width={1200} 
                height={800}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
        </section>

        {/* Features Section */}
        <section id="features" aria-label="Features" className="max-w-7xl mx-auto mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-text-secondary text-lg">A powerful suite of tools for modern database management.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center text-accent mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Native Performance</h3>
              <p className="text-text-secondary leading-relaxed">Powered by Rust and Tauri for a lightweight, native desktop experience. Lightning fast and secure.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Text-to-SQL</h3>
              <p className="text-text-secondary leading-relaxed">Just describe what you want in plain English. Our Groq-powered AI generates the exact SQL query instantly.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Database</h3>
              <p className="text-text-secondary leading-relaxed">Seamlessly connect and manage PostgreSQL, MySQL, and SQLite databases all from a single unified workspace.</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" aria-label="Download SqlMate" className="max-w-4xl mx-auto mt-40 text-center glass rounded-3xl p-12 border border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent blur-[100px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-text-secondary mb-10 text-lg">Download the latest version of SqlMate for macOS. It is free, open-source, and starts immediately.</p>
          <TrackedDownloadLink href={DOWNLOAD_URL} version={CURRENT_VERSION} download className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 glow text-lg">
            <Download size={24} />
            Download Now
          </TrackedDownloadLink>
          <p className="mt-6 text-sm text-text-muted">
            Currently available for macOS. Expected to launch for Windows/Linux soon.
            <br />
            Right-click and select &quot;Open&quot; on first launch to bypass Mac Gatekeeper.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" aria-label="Frequently Asked Questions" className="max-w-4xl mx-auto mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary text-lg">Everything you need to know about SqlMate.</p>
          </div>
          <div className="space-y-4">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Is SqlMate free?</h3>
              <p className="text-text-secondary">Yes, SqlMate is completely free and open-source under the MIT License.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-2">What databases are supported?</h3>
              <p className="text-text-secondary">SqlMate currently supports connecting to PostgreSQL, MySQL, and SQLite databases.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-2">How does the AI SQL Generator work?</h3>
              <p className="text-text-secondary">Our AI feature runs on top of Groq, allowing you to quickly describe the query you want in plain English, and it automatically generates the SQL for you.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-text-secondary">Yes! As a native Rust & Tauri application, connections go directly from your local machine to your database. We do not proxy your queries through any of our own servers.</p>
            </div>
          </div>
        </section>
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is SqlMate free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SqlMate is completely free and open-source under the MIT License."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What databases are supported?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SqlMate currently supports connecting to PostgreSQL, MySQL, and SQLite databases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the AI SQL Generator work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI feature runs on top of Groq, allowing you to quickly describe the query you want in plain English, and it automatically generates the SQL for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is my data secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! As a native Rust & Tauri application, connections go directly from your local machine to your database. We do not proxy your queries through any of our own servers."
                  }
                }
              ]
            })
          }}
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-text-muted text-sm mt-20">
        <p>© {new Date().getFullYear()} SqlMate. Open-source under MIT License.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/Nitish27/sqlMate" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://github.com/Nitish27/sqlMate/issues" className="hover:text-white transition-colors">Report an Issue</a>
          <a href="/support" className="hover:text-white transition-colors">Support</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
