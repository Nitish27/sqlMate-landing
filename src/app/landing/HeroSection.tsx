import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";

import { GITHUB_URL } from "../landingContent";
import { DownloadActions } from "./DownloadActions";

export function HeroSection() {
  return (
    <section className="hero-section landing-container" aria-labelledby="hero-title">
      <p className="hero-eyebrow">Free, open-source SQL client for macOS &amp; Windows</p>
      <h1 id="hero-title">Your databases.<br /><span>One focused workspace.</span></h1>
      <p className="hero-description">Connect directly to PostgreSQL, MySQL, or SQLite. Find tables fast, compare databases, inspect values, and write SQL from one desktop workspace.</p>
      <DownloadActions location="hero" />
      <a href={GITHUB_URL} className="github-link"><Github size={18} aria-hidden="true" /> View on GitHub <ArrowRight size={16} aria-hidden="true" /></a>
      <ul className="database-list" aria-label="Supported databases">
        <li><SiPostgresql aria-hidden="true" /><span>PostgreSQL</span></li>
        <li><SiMysql aria-hidden="true" /><span>MySQL</span></li>
        <li><SiSqlite aria-hidden="true" /><span>SQLite</span></li>
      </ul>
      <figure className="product-preview">
        <Image src="/main_interface.png" width={2402} height={1508} alt="sqlMate connected to PostgreSQL, with a table browser, populated results, and SQL query history" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 80px), 1160px" priority />
      </figure>
    </section>
  );
}
