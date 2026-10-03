/**
 * Visible marker for information the hotel still has to verify or supply.
 * Search the codebase for <Pending to find every open item, or see VERIFICATION.md.
 */
export function Pending({ children }: { children: React.ReactNode }) {
  return <span className="pending">[{children}]</span>;
}
