import type { Metadata } from "next";

import { downloads } from "./downloads";
import { faqs } from "./landingContent";

const title = "SQL Client for macOS & Windows";
const description = "sqlMate is a free, open-source SQL client for macOS and Windows. Connect to PostgreSQL, MySQL, or SQLite, browse tables, review row edits, and write SQL.";
const image = { url: "/main_interface.png", width: 2402, height: 1508, alt: "sqlMate desktop database workspace" };

export const landingMetadata: Metadata = {
  title,
  description,
  keywords: ["sql client", "macOS database client", "Windows database client", "postgresql gui", "mysql gui", "sqlite browser", "ai sql"],
  alternates: { canonical: "https://sqlmate.io/" },
  openGraph: { url: "https://sqlmate.io/", title: `sqlMate — ${title}`, description, images: [image] },
  twitter: { title: `sqlMate — ${title}`, description, images: [image.url] },
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "sqlMate",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description,
    url: "https://sqlmate.io/",
    downloadUrl: [downloads.macos.href, downloads.windows.href].filter(Boolean),
    screenshot: "https://sqlmate.io/main_interface.png",
    author: { "@type": "Person", name: "Nitish", url: "https://github.com/Nitish27" },
    license: "https://opensource.org/licenses/MIT",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];
