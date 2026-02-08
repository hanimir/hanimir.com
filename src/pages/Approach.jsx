const pillars = [
  {
    title: "Collaborative by Design",
    text:
      "Care decisions are made together. Each treatment plan is built around your goals, values, and lived context."
  },
  {
    title: "Psychotherapy-Centered",
    text:
      "Psychotherapy is central to treatment, with medications used thoughtfully and only when helpful or indicated."
  },
  {
    title: "Whole-Person Perspective",
    text:
      "A systems-oriented approach considers relational, cultural, and societal factors that shape wellbeing and distress."
  }
];

export default function Approach() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Approach</h1>
        <p>
          Treatment is grounded in shared humanity, clinical rigor, and
          long-term healing. The goal is greater connection, clarity, and
          fulfillment.
        </p>
      </div>

      <div className="grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="card">
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>

      <div className="note">
        <h3>How Care Typically Flows</h3>
        <ul className="list">
          <li>Initial consultation to assess fit and treatment needs</li>
          <li>Comprehensive evaluation and collaborative care plan</li>
          <li>Regular follow-up with ongoing refinement of treatment</li>
        </ul>
      </div>
    </section>
  );
}
