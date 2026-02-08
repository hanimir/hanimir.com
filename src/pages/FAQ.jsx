const faqs = [
  {
    question: "Do you offer telehealth throughout California?",
    answer:
      "Yes. Telehealth appointments are available to patients located anywhere in California at the time of the visit."
  },
  {
    question: "Do you prescribe medication?",
    answer:
      "Yes, when clinically indicated. Psychotherapy remains central to care, and medication decisions are made collaboratively."
  },
  {
    question: "Do you work with therapists?",
    answer:
      "Yes. Collaboration with therapists is welcomed and often an important part of treatment continuity."
  },
  {
    question: "What concerns do you commonly treat?",
    answer:
      "Common areas include anxiety disorders and OCD, ADHD, trauma, attachment and relational challenges, and major life transitions."
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact page to request a consultation. You will receive next steps for scheduling and intake."
  }
];

export default function FAQ() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>FAQ</h1>
        <p>
          Answers to common questions about care, scheduling, and what to
          expect.
        </p>
      </div>

      <div className="stack">
        {faqs.map((faq) => (
          <article key={faq.question} className="card faq-card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
