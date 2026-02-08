import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/about", label: "About" },
  { to: "/fees", label: "Fees & Insurance" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-title">Hanimir Psychiatry</span>
          <span className="brand-subtitle">Private Adult Psychiatry</span>
        </NavLink>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
