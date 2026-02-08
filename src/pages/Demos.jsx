const demos = [
  {
    title: "Listen and Clarify",
    detail:
      "We start with a careful understanding of symptoms, context, and what matters most to you.",
    status: "Step 1"
  },
  {
    title: "Plan and Treat",
    detail:
      "Treatment options are explained in plain language, including expected outcomes and tradeoffs.",
    status: "Step 2"
  },
  {
    title: "Review and Adjust",
    detail:
      "Care is adjusted based on your response, side effects, and goals to keep progress sustainable.",
    status: "Step 3"
  }
];

export default function Demos() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Care Approach</h1>
        <p>
          Our model blends clinical precision with a respectful, collaborative
          relationship so treatment feels manageable and grounded.
        </p>
      </div>

      <div className="grid">
        {demos.map((demo) => (
          <article key={demo.title} className="card">
            <h3>{demo.title}</h3>
            <p>{demo.detail}</p>
            <span className="pill">{demo.status}</span>
          </article>
        ))}
      </div>

      <div className="note">
        <h3>What You Can Expect</h3>
        <p>
          Visits run on time, communication is clear, and decisions are made
          together. The goal is stable progress, not one-size-fits-all care.
        </p>
      </div>
    </section>
  );
}
