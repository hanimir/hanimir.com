export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Hanimir Psychiatry</span>
        <span className="dot" aria-hidden="true" />
        <span>San Francisco Bay Area and telehealth throughout California.</span>
      </div>
    </footer>
  );
}
