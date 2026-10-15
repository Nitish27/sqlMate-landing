import Image from "next/image";
import Link from "next/link";

import { GITHUB_URL } from "../landingContent";

export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-container footer-inner">
        <div>
          <Link href="/" className="brand-link" aria-label="sqlMate home"><Image src="/sqlmate-logo.svg" width={160} height={40} alt="sqlMate" /></Link>
          <p>A focused workspace for your databases.</p>
        </div>
        <nav aria-label="Footer navigation"><a href={GITHUB_URL}>GitHub</a><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link></nav>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} sqlMate. Open source under the MIT License.</p>
    </footer>
  );
}
