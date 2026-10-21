export const GITHUB_URL = "https://github.com/Nitish27/sqlMate";

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
    question: "How does optional AI work?",
    answer: "Generate, explain, or fix SQL with your own Gemini, Groq, Claude, or OpenAI developer API key. You review the exact request and destination before sending it. sqlMate does not add result rows or stored credentials, but SQL and schema details you choose to send may be sensitive. Generated SQL never runs automatically. Your provider may bill separately.",
  },
  {
    question: "Does my database traffic go through sqlMate servers?",
    answer: "No. Database connections go directly from your device to your database. Optional AI requests are handled separately by the configured provider. Limited first-party usage telemetry is described in the privacy policy.",
  },
];
