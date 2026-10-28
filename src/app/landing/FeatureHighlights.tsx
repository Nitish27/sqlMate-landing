import Image from "next/image";
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
      <div className="capability-showcase capability-showcase--quick-open">
        <div className="capability-showcase-intro">
          <div>
            <span className="capability-eyebrow">A closer look / Quick Open</span>
            <h3>One place to pick up the thread.</h3>
          </div>
          <p>Jump between tables, open tabs, databases, and connections from one keyboard-first palette. Type to narrow the list, then open your destination without hunting through sidebars.</p>
        </div>
        <figure>
          <a className="capability-showcase-image" href="/features/quick-open.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Quick Open screenshot in a new tab">
            <Image
              src="/features/quick-open.webp"
              width={1340}
              height={1174}
              sizes="(max-width: 760px) calc(100vw - 72px), (max-width: 1270px) 60vw, 760px"
              alt="sqlMate Quick Open with an empty search field and a unified list of demo tables, an open tab, databases, and connections"
            />
          </a>
          <figcaption>Fictional shop workspace with tables, a tab, databases, and connections in view. <a href="/features/quick-open.png" target="_blank" rel="noopener noreferrer">View full-size image</a></figcaption>
        </figure>
      </div>
      <div className="capability-showcase">
        <div className="capability-showcase-intro">
          <div>
            <span className="capability-eyebrow">A closer look / Schema Compare</span>
            <h3>Know what changed before you change anything.</h3>
          </div>
          <p>Compare two open databases side by side. See tables that exist on only one side and the exact columns that drifted, without reading rows or writing data.</p>
        </div>
        <figure>
          <a className="capability-showcase-image" href="/features/schema-compare.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Schema Compare screenshot in a new tab">
            <Image
              src="/features/schema-compare.webp"
              width={1598}
              height={984}
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1270px) calc(100vw - 80px), 1270px"
              alt="sqlMate Schema Compare showing Demo Shop Before and After, with a source-only discounts table, a target-only reviews table, and changed products and users tables"
            />
          </a>
          <figcaption>Fictional demo databases. The comparison is read-only. <a href="/features/schema-compare.png" target="_blank" rel="noopener noreferrer">View full-size image</a></figcaption>
        </figure>
      </div>
      <div className="capability-showcase">
        <div className="capability-showcase-intro">
          <div>
            <span className="capability-eyebrow">A closer look / Data Compare</span>
            <h3>Find the rows that differ, not just the tables.</h3>
          </div>
          <p>Match a bounded sample of rows by primary key, then inspect changed fields and rows seen on only one side. Nothing is synchronized or written.</p>
        </div>
        <figure>
          <a className="capability-showcase-image" href="/features/data-compare.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Data Compare screenshot in a new tab">
            <Image
              src="/features/data-compare.webp"
              width={1592}
              height={988}
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1270px) calc(100vw - 80px), 1270px"
              alt="sqlMate Data Compare showing a read-only orders comparison: order 1002 changed from packed to shipped, order 1003 exists only in the source, and order 1004 only in the target"
            />
          </a>
          <figcaption>Fictional orders: one changed, one source-only, and one target-only row. <a href="/features/data-compare.png" target="_blank" rel="noopener noreferrer">View full-size image</a></figcaption>
        </figure>
      </div>
      <div className="capability-showcase">
        <div className="capability-showcase-intro">
          <div>
            <span className="capability-eyebrow">A closer look / Relationship Map</span>
            <h3>Follow declared links without losing your place.</h3>
          </div>
          <p>See the foreign-key relationships around the table you are exploring. The map uses schema metadata, not database rows, and opens a related table in the normal table view.</p>
        </div>
        <figure>
          <a className="capability-showcase-image" href="/features/relationship-map.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Relationship Map screenshot in a new tab">
            <Image
              src="/features/relationship-map.webp"
              width={1663}
              height={946}
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1270px) calc(100vw - 80px), 1270px"
              alt="sqlMate Relationship Map centered on orders, showing incoming order_items and outgoing users with two declared foreign-key links"
            />
          </a>
          <figcaption>Fictional shop schema: order items link to orders, and orders link to users. <a href="/features/relationship-map.png" target="_blank" rel="noopener noreferrer">View full-size image</a></figcaption>
        </figure>
      </div>
      <div className="capability-showcase">
        <div className="capability-showcase-intro">
          <div>
            <span className="capability-eyebrow">A closer look / Inspect Value</span>
            <h3>See the whole value, not a clipped cell.</h3>
          </div>
          <p>Open a read-only view of a cell, then explore nested JSON as a searchable tree. The value stays in context without changing the table or running another query.</p>
        </div>
        <figure>
          <a className="capability-showcase-image" href="/features/inspect-value.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size Inspect Value screenshot in a new tab">
            <Image
              src="/features/inspect-value.webp"
              width={1663}
              height={945}
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1270px) calc(100vw - 80px), 1270px"
              alt="sqlMate Inspect Value showing an expanded JSON tree with a product's tags, walnut finish, and dimensions"
            />
          </a>
          <figcaption>Fictional product details, expanded in the JSON tree. <a href="/features/inspect-value.png" target="_blank" rel="noopener noreferrer">View full-size image</a></figcaption>
        </figure>
      </div>
    </section>
  );
}
