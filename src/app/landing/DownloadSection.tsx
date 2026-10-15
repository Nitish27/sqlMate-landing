import { DownloadActions } from "./DownloadActions";

export function DownloadSection() {
  return (
    <section id="download" className="download-section landing-container" aria-labelledby="download-title">
      <h2 id="download-title">Choose your platform.</h2>
      <p className="section-description">Download sqlMate for your desktop and start working with your databases.</p>
      <DownloadActions location="download" />
      <a className="installation-help" href="/support">Need help installing? Visit Support</a>
    </section>
  );
}
