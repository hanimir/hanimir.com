import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <main className="landing">
      <h1>Hani Mir</h1>
      <p>
        <Link to="/resume">Resume</Link>
      </p>
      <p>
        <Link to="/ratings">Ratings</Link>
      </p>
    </main>
  )
}
