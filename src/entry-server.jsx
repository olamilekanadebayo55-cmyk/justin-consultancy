import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export { buildHeadHtml } from './seo.js';
export { allPaths } from './data/pageMeta.js';
export { SITE_URL } from './data/site.js';
