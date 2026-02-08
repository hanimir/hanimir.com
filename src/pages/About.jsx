import { profileParagraphs } from "../content/profileCopy.js";

export default function About() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>About</h1>
      </div>

      <article className="card longform">
        {profileParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
