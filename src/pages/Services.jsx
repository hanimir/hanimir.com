const services = [
  {
    title: "Initial Psychiatric Evaluation",
    detail:
      "A comprehensive first appointment focused on symptoms, personal history, treatment goals, and a clear plan.",
    meta: "60-90 minutes"
  },
  {
    title: "Psychotherapy",
    detail:
      "Psychotherapy-centered care that supports insight, emotional growth, and meaningful change over time.",
    meta: "Individualized"
  },
  {
    title: "Medication Management",
    detail:
      "Thoughtful prescribing when indicated, with careful review of benefits, side effects, and alternatives.",
    meta: "Follow-up visits"
  },
  {
    title: "Collaborative Care",
    detail:
      "Close coordination with therapists and other clinicians, including support for psychedelic integration work.",
    meta: "Team-based"
  }
];

export default function Services() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Services</h1>
        <p>
          Care is personalized, collaborative, and rooted in psychotherapy.
          Treatment plans are developed with care and adjusted based on your
          goals and response.
        </p>
      </div>

      <div className="grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
            <span className="pill">{service.meta}</span>
          </article>
        ))}
      </div>

      <div className="note">
        <h3>Common Areas of Support</h3>
        <ul className="list">
          <li>Anxiety disorders and OCD</li>
          <li>ADHD and attention-related challenges</li>
          <li>Trauma, attachment, and relational concerns</li>
          <li>Life transitions, identity, and meaning</li>
        </ul>
      </div>
    </section>
  );
}
