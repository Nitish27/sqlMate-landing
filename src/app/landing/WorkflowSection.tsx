import { Database, Plug, Terminal } from "lucide-react";

const workflows = [
  { title: "Connect directly", icon: Plug, description: "Open PostgreSQL, MySQL, or SQLite without routing your database traffic through a sqlMate server." },
  { title: "Explore safely", icon: Database, description: "Browse data and structure, follow relationships, and review pending row edits before committing." },
  { title: "Query your way", icon: Terminal, description: "Write and save SQL, inspect plans, or use optional AI with your own key. You decide what runs." },
];

export function WorkflowSection() {
  return (
    <section id="features" className="workflow-section landing-container" aria-labelledby="workflow-title">
      <h2 id="workflow-title">From connection to clarity.</h2>
      <p className="section-description">From first connection to a reviewed change or query, without switching tools.</p>
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
