import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand-link" aria-label="sqlMate home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-word">sql<span>Mate</span></span>
    </Link>
  );
}
