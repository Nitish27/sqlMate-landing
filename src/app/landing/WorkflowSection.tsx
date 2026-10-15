import { Database, Plug, Terminal } from "lucide-react";

const workflows = [
  { title: "Connect", icon: Plug, description: "Add your database and get to your data. Works with PostgreSQL, MySQL, and SQLite." },
  { title: "Query", icon: Terminal, description: "Write and run SQL in a clean, focused editor. Use optional AI to help you get started." },
  { title: "Explore", icon: Database, description: "Browse tables, view structure, and navigate your data with ease." },
];

export function WorkflowSection() {
  return (
    <section id="features" className="workflow-section landing-container" aria-labelledby="workflow-title">
      <h2 id="workflow-title">From connection to clarity.</h2>
      <p className="section-description">A simpler way to work with your data.</p>
      <div className="workflow-list">
        {workflows.map(({ title, icon: Icon, description }) => (
          <div className="workflow-item" key={title}>
            <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
            <div><h3>{title}</h3><p>{description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
