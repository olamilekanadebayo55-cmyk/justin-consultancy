// Link to a specialist's Fiverr profile. Until a URL is added in src/data/team.js it renders
// a clearly disabled label instead of a button that does nothing.
export default function FiverrButton({ member, className = '' }) {
  if (!member.fiverr) {
    return (
      <span className={`btn btn--sm btn--disabled ${className}`} aria-disabled="true">
        Fiverr profile coming soon
      </span>
    );
  }
  return (
    <a
      className={`btn btn--sm btn--fiverr ${className}`}
      href={member.fiverr}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Fiverr profile<span className="sr-only"> for {member.name} (opens in a new tab)</span>
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}
