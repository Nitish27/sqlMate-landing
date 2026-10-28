import { featureHighlights } from "../landingContent";

export function FeatureHighlights() {
  return (
    <section className="capabilities-section landing-container" aria-labelledby="capabilities-title">
      <div className="capabilities-intro">
        <div>
          <p className="capabilities-eyebrow">Built for the questions after the first query</p>
          <h2 id="capabilities-title">Stay oriented as you go deeper.</h2>
        </div>
        <p>From finding a table to understanding a difference, sqlMate keeps exploration in one workspace without turning a look into a write.</p>
      </div>
      <ol className="capability-list">
        {featureHighlights.map(({ id, eyebrow, title, description }) => (
          <li key={id}>
            <span className="capability-eyebrow">{eyebrow}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
