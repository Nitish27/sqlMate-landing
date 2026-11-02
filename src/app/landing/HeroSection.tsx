import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";

import { GITHUB_URL } from "../landingContent";
import { DownloadActions } from "./DownloadActions";

export function HeroSection() {
  return (
    <section className="hero-section landing-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span className="status-dot" /> The open-source database workspace</p>
        <h1 id="hero-title">Work with data.<br /><span>Stay in control.</span></h1>
        <p className="hero-description">Query, explore, and compare PostgreSQL, MySQL, and SQLite in one focused desktop app. Your databases stay yours.</p>
        <DownloadActions location="hero" />
        <a href={GITHUB_URL} className="github-link"><Github size={18} aria-hidden="true" /> Explore the source <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
      <ul className="database-list" aria-label="Supported databases">
        <li><SiPostgresql aria-hidden="true" /><span>PostgreSQL</span></li>
        <li><SiMysql aria-hidden="true" /><span>MySQL</span></li>
        <li><SiSqlite aria-hidden="true" /><span>SQLite</span></li>
      </ul>
      <figure className="product-preview">
        <div className="preview-topbar"><span className="preview-dots" aria-hidden="true"><i /><i /><i /></span><span>sqlMate / Schema Compare</span><span className="preview-label">REAL PRODUCT SCREEN</span></div>
        <Image src="/features/schema-compare.webp" width={1598} height={984} alt="sqlMate Schema Compare showing differences between two fictional shop databases" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 80px), 1160px" priority />
        <figcaption>See what changed. Nothing gets changed. <span>Read-only by design.</span></figcaption>
      </figure>
    </section>
  );
}
