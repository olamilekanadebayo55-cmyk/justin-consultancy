import { Link } from 'react-router-dom';
import Avatar from './Avatar.jsx';
import FiverrButton from './FiverrButton.jsx';
import { getService } from '../data/services.js';

export default function TeamCard({ member, compact = false }) {
  const s = getService(member.service);
  if (compact) {
    return (
      <li className="tmini">
        <Link to={`/specialists/#${member.id}`} className="tmini__link">
          <Avatar member={member} size="sm" />
          <span className="tmini__role">{member.role}</span>
          <span className="tmini__service">{s.name}</span>
        </Link>
      </li>
    );
  }
  return (
    <article className="tcard" id={member.id} aria-labelledby={`${member.id}-name`}>
      <Avatar member={member} />
      <div className="tcard__body">
        {member.placeholder && <span className="tag tag--ph">Placeholder profile</span>}
        <p className="tcard__role">{member.role}</p>
        <h3 id={`${member.id}-name`} className="tcard__name">
          {member.name}
        </h3>
        <p className="tcard__bio">{member.bio}</p>
        <p className="tcard__service">
          Service: <Link to={`/services/${s.slug}/`}>{s.name}</Link>
        </p>
        <div className="tcard__actions">
          <FiverrButton member={member} />
          <Link className="btn btn--sm btn--ghost-dark" to={`/contact/?service=${s.slug}`}>
            Discuss a project
          </Link>
        </div>
      </div>
    </article>
  );
}
