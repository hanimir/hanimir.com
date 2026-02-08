import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Approach from "./pages/Approach.jsx";
import About from "./pages/About.jsx";
import Fees from "./pages/Fees.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/about" element={<About />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Navigate to="/services" replace />} />
          <Route path="/demos" element={<Navigate to="/approach" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
