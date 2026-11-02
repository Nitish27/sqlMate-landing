import type { Metadata } from "next";

import { faqs } from "./landingContent";

const title = "sqlMate | Free SQL Client for macOS & Windows";
const description = "sqlMate is a free, open-source SQL client and TablePlus alternative for macOS and Windows. Query PostgreSQL, MySQL, and SQLite; compare schemas safely.";
const image = { url: "/features/schema-compare.webp", width: 1598, height: 984, alt: "sqlMate Schema Compare showing differences between two fictional shop databases" };

export const landingMetadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["sql client", "TablePlus alternative", "macOS database client", "Windows database client", "postgresql gui", "mysql gui", "sqlite browser", "database schema compare", "data compare", "ai sql"],
  alternates: { canonical: "https://sqlmate.io/" },
  openGraph: { url: "https://sqlmate.io/", title, description, images: [image] },
  twitter: { title, description, images: [image.url] },
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
    screenshot: "https://sqlmate.io/features/schema-compare.webp",
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
