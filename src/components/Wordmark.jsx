import { Link } from 'react-router-dom';

// Temporary text wordmark. Replace with the approved logo when one exists.
export default function Wordmark({ light = false }) {
  return (
    <Link to="/" className={`wordmark${light ? ' wordmark--light' : ''}`} aria-label="Just In Consultancy, home">
      <span className="wordmark__main">
        Just<span className="wordmark__dot" aria-hidden="true" /> In
      </span>
      <span className="wordmark__sub">Consultancy</span>
    </Link>
  );
}
