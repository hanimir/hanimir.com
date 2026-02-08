const projects = [
  {
    title: "Initial Psychiatric Evaluation",
    tag: "60-90 min",
    description:
      "A comprehensive first visit covering symptoms, history, goals, and treatment options.",
    status: "New patients"
  },
  {
    title: "Medication Management",
    tag: "30 min",
    description:
      "Follow-up care focused on effective medication plans, side-effect monitoring, and steady progress.",
    status: "Ongoing care"
  },
  {
    title: "Integrated Treatment Planning",
    tag: "Collaborative",
    description:
      "Coordination with therapy and primary care when appropriate, with practical next steps after each visit.",
    status: "Personalized"
  }
];

export default function Projects() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Services</h1>
        <p>
          Care is designed to be clinically thorough and easy to follow. Every
          appointment ends with a clear plan and specific recommendations.
        </p>
      </div>

      <div className="stack">
        {projects.map((project) => (
          <article key={project.title} className="card project">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-meta">
              <span>{project.tag}</span>
              <span>{project.status}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="note">
        <h3>Common Areas of Support</h3>
        <ul className="list">
          <li>Depression and persistent low mood</li>
          <li>Anxiety, panic symptoms, and stress overload</li>
          <li>ADHD and focus-related concerns</li>
          <li>Sleep disturbance and burnout</li>
        </ul>
      </div>
    </section>
  );
}
