"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

import { GITHUB_URL } from "../landingContent";
import { ThemeToggle } from "../ThemeToggle";
import { Brand } from "./Brand";

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
        <Brand />
        <nav id="landing-navigation" aria-label="Main navigation" className={`landing-navigation${isMenuOpen ? " is-open" : ""}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Why sqlMate</a>
          <a href="#showcase" onClick={() => setIsMenuOpen(false)}>Explore features</a>
          <a href="#download" onClick={() => setIsMenuOpen(false)}>Downloads</a>
          <a href={GITHUB_URL}>GitHub</a>
          <Link href="/support">Support</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href="#download" className="landing-button button-primary header-download">Get sqlMate</a>
          <button ref={menuButton} type="button" className="mobile-menu-button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls="landing-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
