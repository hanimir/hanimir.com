export default function Fees() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Fees & Insurance</h1>
        <p>
          This is a private-pay practice focused on personalized, high-quality
          outpatient care.
        </p>
      </div>

      <div className="grid">
        <article className="card">
          <h3>Private Pay</h3>
          <p>
            Fees vary by service type and visit length. Detailed rates are
            provided before scheduling.
          </p>
        </article>

        <article className="card">
          <h3>Out-of-Network Support</h3>
          <p>
            Superbills can be provided for potential out-of-network
            reimbursement, depending on your insurance plan.
          </p>
        </article>

        <article className="card">
          <h3>Payment Policies</h3>
          <p>
            Payment and cancellation policies are reviewed clearly during intake
            so expectations are transparent from the start.
          </p>
        </article>
      </div>
    </section>
  );
}
