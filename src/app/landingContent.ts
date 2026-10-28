export const GITHUB_URL = "https://github.com/Nitish27/sqlMate";

export const featureHighlights = [
  {
    id: "quick-open",
    eyebrow: "01 / NAVIGATE",
    title: "Find your next step in a keystroke.",
    description: "Quick Open searches connections, databases, tables, tabs, saved queries, and recent history. Found SQL opens for review; it never runs automatically.",
  },
  {
    id: "compare",
    eyebrow: "02 / COMPARE",
    title: "Spot drift without changing data.",
    description: "Compare schemas or a bounded sample of primary-key-ordered rows across open connections to the same database engine. Both views are read-only; no migrations or synchronization are applied.",
  },
  {
    id: "relationships",
    eyebrow: "03 / EXPLORE",
    title: "See how your tables connect.",
    description: "A relationship map shows declared foreign keys. Follow a reference from a table cell into a separate, browse-only view, then return to your source.",
  },
  {
    id: "inspect",
    eyebrow: "04 / INSPECT",
    title: "Read the whole value.",
    description: "Inspect full cell content or search a JSON tree from table and query results. Sensitive values stay masked by default; raw copying asks for confirmation.",
  },
];

export const faqs = [
  {
    question: "Is sqlMate free?",
    answer: "Yes. sqlMate is free and open source under the MIT License. You do not need an account to use the app.",
  },
  {
    question: "Which databases can I connect to?",
    answer: "sqlMate supports PostgreSQL, MySQL, and SQLite. Connect to a database server or open a local SQLite file, then browse tables and write SQL in the same workspace.",
  },
  {
    question: "How are table edits saved?",
    answer: "Row edits are staged instead of written immediately. Review your pending changes before committing them together. Safe mode blocks writes entirely.",
  },
  {
    question: "Can I compare two databases?",
    answer: "Yes. Open two connections to the same engine to compare schemas or up to 200 primary-key-ordered rows per side. Data Compare is a read-only sample, not a full-table comparison or synchronization tool.",
  },
  {
    question: "How does optional AI work?",
    answer: "Generate, explain, or fix SQL with your own Gemini, Groq, Claude, or OpenAI developer API key. You review the exact request and destination before sending it. sqlMate does not add result rows or stored credentials, but SQL and schema details you choose to send may be sensitive. Generated SQL never runs automatically. Your provider may bill separately.",
  },
  {
    question: "Does my database traffic go through sqlMate servers?",
    answer: "No. Database connections go directly from your device to your database. Optional AI requests are handled separately by the configured provider. Limited first-party usage telemetry is described in the privacy policy.",
  },
];
