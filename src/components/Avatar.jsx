// Profile picture. Shows the real photo when `photo` is set, otherwise a neutral placeholder portrait.
export default function Avatar({ member, size = 'lg' }) {
  const label = member.placeholder ? `Placeholder portrait for ${member.role}` : `Portrait of ${member.name}`;
  return (
    <div className={`avatar avatar--${size}`}>
      {member.photo ? (
        <img src={member.photo} alt={label} width="320" height="320" loading="lazy" decoding="async" />
      ) : (
        <svg viewBox="0 0 120 120" role="img" aria-label={label}>
          <rect width="120" height="120" className="av-bg" />
          <circle cx="60" cy="46" r="20" className="av-fig" />
          <path d="M18 120c0-26 18-42 42-42s42 16 42 42z" className="av-fig" />
          <text x="60" y="112" textAnchor="middle" className="av-initials">
            {member.initials}
          </text>
        </svg>
      )}
    </div>
  );
}
