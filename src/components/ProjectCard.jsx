import { Link } from 'react-router-dom';
import { getService } from '../data/services.js';

export default function ProjectCard({ project, detailed = false }) {
  const s = getService(project.service);
  return (
    <article className="project" id={project.id}>
      <header className="project__head">
        <span className="tag">{project.kind}</span>
        <span className="project__type">{project.type}</span>
      </header>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__context">{project.context}</p>
      {detailed && (
        <dl className="project__facts">
          <div>
            <dt>Objective</dt>
            <dd>{project.objective}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Deliverables</dt>
            <dd>{project.deliverables.join(' · ')}</dd>
          </div>
          <div>
            <dt>Results</dt>
            <dd>{project.results}</dd>
          </div>
        </dl>
      )}
      <footer className="project__foot">
        <Link to={`/services/${s.slug}/`}>{s.name}</Link>
        <Link to={`/contact/?service=${s.slug}`} className="project__cta">
          Discuss a similar project <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </article>
  );
}
