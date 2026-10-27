import { Link } from 'react-router-dom';
import { getService } from '../data/services.js';

/** Editorial list row (not a boxed card) for a service. */
export default function ServiceCard({ slug, index }) {
  const s = getService(slug);
  return (
    <li className="srow">
      <Link to={`/services/${s.slug}/`} className="srow__link">
        {typeof index === 'number' && <span className="srow__num">{String(index + 1).padStart(2, '0')}</span>}
        <span className="srow__body">
          <span className="srow__name">{s.name}</span>
          <span className="srow__desc">{s.short}</span>
        </span>
        <span className="srow__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </li>
  );
}
