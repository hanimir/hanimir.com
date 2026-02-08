import { Link } from 'react-router-dom'

const rows = [
  { subject: 'System Design', rating: 9, notes: 'Scalable architecture decisions.' },
  { subject: 'Execution Speed', rating: 8, notes: 'Ships quickly with high quality.' },
  { subject: 'Collaboration', rating: 10, notes: 'Clear communication and ownership.' },
]

export function RatingsPage() {
  return (
    <main className="ratings-page">
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>Ratings</h1>
      <table className="ratings-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.subject}>
              <td>{row.subject}</td>
              <td>{row.rating}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
