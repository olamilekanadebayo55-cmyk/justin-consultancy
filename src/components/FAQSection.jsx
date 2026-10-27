export default function FAQSection({ faqs, title = 'Frequently asked questions', id = 'faq' }) {
  return (
    <section className="section faq" aria-labelledby={`${id}-title`}>
      <div className="wrap faq__grid">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 id={`${id}-title`} className="h2">
            {title}
          </h2>
        </div>
        <div className="faq__list">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
