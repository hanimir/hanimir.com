export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Hanimir Psychiatry</span>
        <span className="dot" aria-hidden="true" />
        <span>Evidence-based psychiatric care, in person and telehealth.</span>
      </div>
    </footer>
  );
}
