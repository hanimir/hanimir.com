import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Private Psychiatry Practice</p>
        <h1>Psychiatry and Psychotherapy</h1>
      </div>

      <div className="card longform">
        <p>
          I am a board-certified psychiatrist and psychotherapist practicing in
          the San Francisco Bay Area and providing telehealth services
          throughout California. I entered psychiatry out of a deep interest in
          understanding people and relationships, and in how meaning,
          connection, and healing emerge after trauma and profound suffering. My
          clinical training, alongside my own mental health journey, has shaped
          both my professional approach and the way I live my life. In my work,
          I aim to support others in cultivating greater connection, clarity,
          and fulfillment.
        </p>
        <p>
          I take a collaborative, individualized approach to care. I view my
          role as helping patients access and strengthen the inner resources
          they already possess, meeting each person where they are.
          Psychotherapy is central to my work, with medications used
          thoughtfully and only when helpful or indicated. I am particularly
          drawn to treatment modalities that emphasize shared humanity,
          including mindfulness-based approaches and psychedelic medicine, and I
          value offering tools that have been meaningful in my own path of
          growth and healing.
        </p>
        <p>
          I completed my adult psychiatry residency at Stanford, where I served
          as Chief Resident, and pursued three years of advanced training in
          psychodynamic psychotherapy at the San Francisco Center for
          Psychoanalysis, with additional education at the Austen Riggs Center.
          I have received advanced training in ketamine-assisted psychotherapy
          through the Polaris Institute in San Francisco and enjoy
          collaborating closely with therapists, both as a prescriber and in
          supporting psychedelic integration work. My clinical experience
          includes individual, couples, and group therapy, with a
          systems-oriented perspective that considers individuals within their
          relational, cultural, and societal contexts. I have particular
          interest in working with individuals navigating cross-cultural
          identities, students and professionals, and those struggling with
          anxiety disorders and OCD, ADHD, trauma, attachment and relational
          challenges, life transitions, and questions of identity and meaning.
        </p>
        <p>
          In addition to clinical practice, I am deeply committed to teaching
          and mentorship. I previously served as adjunct clinical faculty at
          Stanford, teaching psychotherapy to psychiatry residents, and
          currently serve as voluntary faculty at UCSF, supervising residents. I
          have presented nationally and internationally on the role of the arts
          and humanities in cultivating empathy, cultural humility, and
          resilience in medical education.
        </p>
        <p>
          Whether you are experiencing acute distress, navigating a challenging
          transition, or seeking a deeper understanding of yourself and your
          relationships, I welcome the opportunity to explore how we might work
          together.
        </p>
        <div className="hero-actions">
          <Link className="button primary" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
