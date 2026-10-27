// Service-specific illustrative visuals, drawn as inline SVG using theme colours.
// Each is labelled as an illustration on the page; none show real data or real clients.

const Frame = ({ title, children, caption }) => (
  <figure className="sig">
    <svg viewBox="0 0 520 340" role="img" aria-labelledby="sig-t" className="sig__svg">
      <title id="sig-t">{title}</title>
      {children}
    </svg>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

function WebDev() {
  return (
    <Frame title="Wireframe of a website layout with navigation, headline, content blocks and a call to action" caption="Illustration: page structure before styling">
      <rect x="20" y="20" width="480" height="300" rx="6" className="s-line s-fill-soft" />
      <line x1="20" y1="52" x2="500" y2="52" className="s-line" />
      <circle cx="40" cy="36" r="4" className="s-dot" />
      <circle cx="54" cy="36" r="4" className="s-line" />
      <circle cx="68" cy="36" r="4" className="s-line" />
      <rect x="40" y="72" width="70" height="10" className="s-bar" />
      <rect x="330" y="72" width="30" height="10" className="s-mute" />
      <rect x="370" y="72" width="30" height="10" className="s-mute" />
      <rect x="410" y="72" width="60" height="14" rx="2" className="s-accent" />
      <rect x="40" y="116" width="260" height="22" className="s-bar" />
      <rect x="40" y="148" width="200" height="22" className="s-bar" />
      <rect x="40" y="188" width="220" height="8" className="s-mute" />
      <rect x="40" y="204" width="180" height="8" className="s-mute" />
      <rect x="40" y="228" width="90" height="26" rx="2" className="s-accent" />
      <rect x="330" y="112" width="140" height="130" className="s-line" />
      <path d="M330 242l45-50 35 30 25-22 35 42" className="s-line" fill="none" />
      <rect x="40" y="274" width="130" height="30" className="s-line" />
      <rect x="195" y="274" width="130" height="30" className="s-line" />
      <rect x="350" y="274" width="120" height="30" className="s-line" />
    </Frame>
  );
}

function Video() {
  const rows = [
    { y: 70, label: 'Video', segs: [[60, 90], [160, 60], [230, 130], [370, 70]] },
    { y: 120, label: 'B-roll', segs: [[110, 50], [250, 80]] },
    { y: 170, label: 'Captions', segs: [[60, 40], [110, 50], [170, 40], [220, 60], [290, 50], [350, 90]] },
    { y: 220, label: 'Audio', segs: [[60, 400]] },
  ];
  return (
    <Frame title="Editing timeline with video, B-roll, caption and audio tracks" caption="Illustration: the layers of a typical edit">
      <rect x="20" y="20" width="480" height="30" className="s-fill-soft s-line" />
      {[60, 160, 260, 360, 460].map((x) => (
        <g key={x}>
          <line x1={x} y1="38" x2={x} y2="50" className="s-line" />
        </g>
      ))}
      {rows.map((r, i) => (
        <g key={r.label}>
          <text x="20" y={r.y - 6} className="s-text">
            {r.label}
          </text>
          {r.segs.map(([x, w], j) => (
            <rect key={j} x={x} y={r.y} width={w - 4} height="26" rx="2" className={i === 3 ? 's-mute' : i === 2 ? 's-accent' : 's-bar'} />
          ))}
        </g>
      ))}
      {Array.from({ length: 60 }).map((_, i) => (
        <line key={i} x1={62 + i * 7} y1={228 + 8 - ((i * 37) % 9)} x2={62 + i * 7} y2={234 + ((i * 37) % 9)} className="s-line" />
      ))}
      <line x1="236" y1="14" x2="236" y2="270" className="s-playhead" />
      <rect x="226" y="10" width="20" height="8" className="s-playhead-fill" />
      <text x="20" y="310" className="s-text">Long-form → short-form clips</text>
    </Frame>
  );
}

function Automation() {
  const nodes = [
    { x: 20, y: 130, t: 'Web form' },
    { x: 150, y: 50, t: 'CRM record' },
    { x: 150, y: 210, t: 'Team alert' },
    { x: 290, y: 130, t: 'Email reply' },
    { x: 410, y: 130, t: 'Review' },
  ];
  return (
    <Frame title="Workflow diagram: web form to CRM record and team alert, then email reply and human review" caption="Illustration only: not a live system">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" className="s-arrowhead" />
        </marker>
      </defs>
      {[
        [100, 150, 150, 82],
        [100, 160, 150, 238],
        [230, 82, 290, 148],
        [230, 238, 290, 164],
        [370, 156, 410, 156],
      ].map(([x1, y1, x2, y2], i) => (
        <path key={i} d={`M${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`} className="s-line" fill="none" markerEnd="url(#arr)" />
      ))}
      {nodes.map((n, i) => (
        <g key={n.t}>
          <rect x={n.x} y={n.y} width="80" height="52" rx="4" className={i === 4 ? 's-accent' : 's-fill-soft s-line'} />
          <text x={n.x + 40} y={n.y + 31} textAnchor="middle" className={i === 4 ? 's-text-on-accent' : 's-text'}>
            {n.t}
          </text>
        </g>
      ))}
      <text x="20" y="310" className="s-text">A human stays in the loop for important decisions</text>
    </Frame>
  );
}

function Writing() {
  return (
    <Frame title="Outline of a research-led content brief" caption="Illustration: structure of a content brief">
      <rect x="20" y="20" width="480" height="300" className="s-fill-soft s-line" rx="4" />
      <text x="44" y="56" className="s-heading">Content brief</text>
      {[
        ['01', 'Audience and search intent', 90],
        ['02', 'Key questions readers ask', 130],
        ['03', 'Sources to cite', 170],
        ['04', 'Outline (H2 / H3)', 210],
        ['05', 'Metadata and internal links', 250],
      ].map(([n, t, y]) => (
        <g key={n}>
          <text x="44" y={y} className="s-num">{n}</text>
          <text x="82" y={y} className="s-text">{t}</text>
          <line x1="44" y1={y + 12} x2="476" y2={y + 12} className="s-line" />
        </g>
      ))}
      <rect x="400" y="36" width="76" height="12" className="s-accent" rx="2" />
    </Frame>
  );
}

function Data() {
  const vals = [38, 52, 44, 66, 58, 80];
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
  return (
    <Frame title="Bar chart with made-up sample values for six months" caption="Illustration with made-up numbers: not real data">
      <line x1="50" y1="270" x2="490" y2="270" className="s-line" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="50" y1={270 - i * 60} x2="490" y2={270 - i * 60} className="s-grid" />
      ))}
      {vals.map((v, i) => (
        <g key={i}>
          <rect x={72 + i * 70} y={270 - v * 2.6} width="42" height={v * 2.6} className={i === vals.length - 1 ? 's-accent' : 's-bar'} />
          <text x={93 + i * 70} y="292" textAnchor="middle" className="s-text">{months[i]}</text>
        </g>
      ))}
      <text x="50" y="30" className="s-heading">Sample KPI, indexed</text>
      <text x="50" y="318" className="s-text">Values are invented for illustration only</text>
    </Frame>
  );
}

function Vibe() {
  const steps = ['Idea', 'Prototype', 'Code review', 'Testing', 'Security checks', 'Production'];
  return (
    <Frame title="Ladder showing stages from idea to production" caption="Illustration: a prototype is not production until the upper steps are done">
      {steps.map((t, i) => (
        <g key={t}>
          <rect x={30 + i * 70} y={270 - i * 42} width="64" height={i * 42 + 24} className={i < 2 ? 's-accent' : 's-fill-soft s-line'} />
          <text x={62 + i * 70} y={262 - i * 42} textAnchor="middle" className="s-text-small">{t}</text>
        </g>
      ))}
      <text x="30" y="324" className="s-text">Fast to reach step 2. Steps 3 to 6 take engineering time.</text>
    </Frame>
  );
}

function Security() {
  const items = ['HTTPS', 'Security headers', 'Input validation', 'Updated dependencies', 'Least-privilege access', 'Tested backups'];
  return (
    <Frame title="Layers of a basic website security baseline" caption="Illustration: baseline measures, not a guarantee">
      {items.map((t, i) => (
        <g key={t}>
          <rect x={40 + i * 14} y={30 + i * 46} width={440 - i * 28} height="38" rx="3" className={i % 2 ? 's-fill-soft s-line' : 's-bar'} />
          <text x={60 + i * 14} y={54 + i * 46} className={i % 2 ? 's-text' : 's-text-on-bar'}>{t}</text>
          <circle cx={460 - i * 14} cy={49 + i * 46} r="5" className="s-dot" />
        </g>
      ))}
    </Frame>
  );
}

function Seo() {
  return (
    <Frame title="Diagram of a site structure with a home page linking to service pages, each with its own title and description" caption="Illustration: one URL per topic, one clear title per URL">
      <rect x="200" y="20" width="120" height="40" rx="3" className="s-accent" />
      <text x="260" y="45" textAnchor="middle" className="s-text-on-accent">/</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M260 60 C 260 100, ${70 + i * 126} 90, ${70 + i * 126} 130`} className="s-line" fill="none" />
          <rect x={20 + i * 126} y="130" width="100" height="36" rx="3" className="s-fill-soft s-line" />
          <text x={70 + i * 126} y="153" textAnchor="middle" className="s-text">/service-{i + 1}/</text>
          <rect x={30 + i * 126} y="186" width="80" height="6" className="s-bar" />
          <rect x={30 + i * 126} y="200" width="64" height="4" className="s-mute" />
          <rect x={30 + i * 126} y="210" width="72" height="4" className="s-mute" />
        </g>
      ))}
      <text x="20" y="260" className="s-text">Unique title · unique description · canonical URL · internal links</text>
    </Frame>
  );
}

const map = { webdev: WebDev, video: Video, automation: Automation, writing: Writing, data: Data, vibe: Vibe, security: Security, seo: Seo };
export default function Signature({ name }) {
  const C = map[name];
  return C ? <C /> : null;
}
