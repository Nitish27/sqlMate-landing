import { ArrowRight, ChevronDown } from "lucide-react";

import { faqs } from "../landingContent";

export function FaqSection() {
  return (
    <section id="faq" className="faq-section landing-container" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details className="faq-item" key={question}>
            <summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <p className="faq-support">Something else on your mind? <a href="/support">Get support <ArrowRight size={14} aria-hidden="true" className="inline" /></a></p>
    </section>
  );
}
