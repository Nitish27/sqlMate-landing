"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

import { GITHUB_URL } from "../landingContent";

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="landing-header" onKeyDown={(event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="landing-container header-inner">
        <Link href="/" className="brand-link" aria-label="sqlMate home">
          <Image src="/sqlmate-logo.svg" width={160} height={40} alt="sqlMate" priority />
        </Link>
        <button ref={menuButton} type="button" className="mobile-menu-button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls="landing-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="landing-navigation" aria-label="Main navigation" className={`landing-navigation${isMenuOpen ? " is-open" : ""}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Product</a>
          <a href="#download" onClick={() => setIsMenuOpen(false)}>Downloads</a>
          <a href={GITHUB_URL}>GitHub</a>
          <Link href="/support">Support</Link>
          <a href="#download" className="landing-button button-primary header-download" onClick={() => setIsMenuOpen(false)}>Download</a>
        </nav>
      </div>
    </header>
  );
}
