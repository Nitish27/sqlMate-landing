import { Database, Plug, Terminal } from "lucide-react";

const workflows = [
  { title: "Connect directly", icon: Plug, description: "Open PostgreSQL, MySQL, or SQLite without routing your database traffic through a sqlMate server." },
  { title: "Explore safely", icon: Database, description: "Browse data and structure, follow relationships, and review pending row edits before committing." },
  { title: "Query your way", icon: Terminal, description: "Write and save SQL, inspect plans, or use optional AI with your own key. You decide what runs." },
];

export function WorkflowSection() {
  return (
    <section id="features" className="workflow-section landing-container" aria-labelledby="workflow-title">
      <p className="section-kicker">01 / A BETTER WAY TO WORK</p>
      <h2 id="workflow-title">Less context switching.<br /><em>More understanding.</em></h2>
      <p className="section-description">The small steps between a question and an answer are where the right tools matter most.</p>
      <div className="workflow-list">
        {workflows.map(({ title, icon: Icon, description }, index) => (
          <div className="workflow-item" key={title}>
            <span className="workflow-number">0{index + 1}</span>
            <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
            <h3>{title}</h3><p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
