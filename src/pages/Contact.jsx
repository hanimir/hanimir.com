export default function Contact() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Contact</h1>
        <p>
          Reach out for consultation availability, scheduling, and questions
          about fit. We aim to respond quickly and clearly.
        </p>
      </div>

      <div className="grid">
        <div className="card contact-card">
          <h3>Email</h3>
          <p>care@hanimir.com</p>
          <p>For new patient inquiries and scheduling.</p>
        </div>
        <div className="card contact-card">
          <h3>Office Hours</h3>
          <p>Monday-Friday</p>
          <p>9:00 AM-5:00 PM</p>
        </div>
        <div className="card contact-card">
          <h3>Location</h3>
          <p>Private office visits by appointment</p>
          <p>Secure telehealth available statewide</p>
        </div>
      </div>

      <div className="note">
        <h3>Start Here</h3>
        <p>
          Include your preferred appointment times and whether you are seeking
          in-person or telehealth care. We will follow up with next steps.
        </p>
      </div>
    </section>
  );
}
