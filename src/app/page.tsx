import { LandingHeader } from "./landing/LandingHeader";
import { HeroSection } from "./landing/HeroSection";
import { WorkflowSection } from "./landing/WorkflowSection";
import { FeatureHighlights } from "./landing/FeatureHighlights";
import { DownloadSection } from "./landing/DownloadSection";
import { FaqSection } from "./landing/FaqSection";
import { LandingFooter } from "./landing/LandingFooter";
import { landingMetadata, structuredData } from "./landingMetadata";
import "./landing/landing.css";

export const metadata = landingMetadata;

export default function Home() {
  return (
    <div className="landing-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <LandingHeader />
      <main id="main-content">
        <HeroSection />
        <WorkflowSection />
        <FeatureHighlights />
        <DownloadSection />
        <FaqSection />
      </main>
      <LandingFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}
