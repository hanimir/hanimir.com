import { Link } from "react-router-dom";
import { profileParagraphs } from "../content/profileCopy.js";

export default function Home() {
  return (
    <section className="page">
      <div className="hero">
        <div>
          <p className="eyebrow">Private Psychiatry Practice</p>
          <h1>Psychiatry and psychotherapy, thoughtfully delivered.</h1>
          <p className="lead">{profileParagraphs[0]}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact">
              Request Consultation
            </Link>
            <Link className="button" to="/services">
              View Services
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <h3>Practice Snapshot</h3>
          <div className="hero-meta">
            <div className="meta-row">
              <span>Location</span>
              <strong>San Francisco Bay Area</strong>
            </div>
            <div className="meta-row">
              <span>Telehealth</span>
              <strong>Throughout California</strong>
            </div>
            <div className="meta-row">
              <span>Modalities</span>
              <strong>Psychotherapy + Psychiatry</strong>
            </div>
          </div>
        </aside>
      </div>

      <div className="note">
        <h3>Welcome</h3>
        <p>{profileParagraphs[4]}</p>
      </div>
    </section>
  );
}
