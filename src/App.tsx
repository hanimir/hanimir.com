import { Fragment } from 'react'
import './App.css'
import { resume } from './resumeData'

function App() {
  const lastSectionIndex = resume.sections.length - 1

  const renderSeparator = (key: string) => (
    <tr key={key}>
      <td colSpan={2}>
        <hr />
      </td>
    </tr>
  )

  return (
    <main className="resume-app">
      <div className="toolbar no-print">
        <a className="action-button action-button-primary" href="/Hani-Mir-Resume.pdf" download>
          Download Exact PDF
        </a>
        <button className="action-button" onClick={() => window.print()} type="button">
          Print / Save as PDF
        </button>
      </div>

      <table className="resume-table" role="presentation">
        <thead>
          <tr>
            <th className="name">{resume.name}</th>
            <td className="contact">
              <p>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </p>
              <p>
                <a href={`tel:${resume.contact.phoneNumber}`}>{resume.contact.phoneDisplay}</a>
              </p>
            </td>
          </tr>
        </thead>

        {resume.sections.map((section, sectionIndex) => (
          <Fragment key={section.title}>
            <tbody>
              {renderSeparator(`section-start-${section.title}`)}
              <tr>
                <td className="section-separator" colSpan={2}>
                  {section.title}
                </td>
              </tr>
              {renderSeparator(`section-title-end-${section.title}`)}
            </tbody>

            {section.entries.map((entry, entryIndex) => {
              const isLastEntryInResume =
                sectionIndex === lastSectionIndex && entryIndex === section.entries.length - 1

              return (
                <tbody className="entry-block" key={`${entry.company}-${entry.role}-${entry.dates}`}>
                  <tr>
                    <td className="company">{entry.company}</td>
                    <td>
                      <div className="metadata">
                        <p>{entry.location}</p>
                        <p>{entry.dates}</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="role" colSpan={2}>
                      {entry.role}
                    </td>
                  </tr>

                  {entry.highlights.length > 0 ? (
                    <tr>
                      <td className="description" colSpan={2}>
                        {entry.highlights.map((highlight) => (
                          <p key={highlight}>{highlight}</p>
                        ))}
                      </td>
                    </tr>
                  ) : null}

                  {entry.technologies ? (
                    <tr>
                      <td className="technologies" colSpan={2}>
                        {entry.technologies}
                      </td>
                    </tr>
                  ) : null}

                  {!isLastEntryInResume ? renderSeparator(`entry-end-${section.title}-${entry.role}`) : null}
                </tbody>
              )
            })}
          </Fragment>
        ))}
      </table>
    </main>
  )
}

export default App
