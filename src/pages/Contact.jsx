export default function Contact() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Contact</h1>
        <p>
          To inquire about consultation availability, please reach out by email.
          Include your preferred times and whether you are seeking in-person or
          telehealth care.
        </p>
      </div>

      <div className="grid">
        <article className="card contact-card">
          <h3>Email</h3>
          <p>care@hanimir.com</p>
          <p>For new patient inquiries and scheduling.</p>
        </article>

        <article className="card contact-card">
          <h3>Office</h3>
          <p>San Francisco Bay Area</p>
          <p>In-person appointments by arrangement.</p>
        </article>

        <article className="card contact-card">
          <h3>Telehealth</h3>
          <p>Available throughout California</p>
          <p>Secure video visits for established care.</p>
        </article>
      </div>

      <div className="note">
        <h3>Consultation Requests</h3>
        <p>
          Briefly share what you are seeking support for, current treatment if
          any, and your scheduling preferences. Responses are typically sent
          within 1-2 business days.
        </p>
      </div>
    </section>
  );
}
