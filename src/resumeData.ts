export type ResumeEntry = {
  company: string
  location: string
  dates: string
  role: string
  highlights: string[]
  technologies?: string
}

export type ResumeSection = {
  title: string
  entries: ResumeEntry[]
}

export type ResumeData = {
  name: string
  contact: {
    email: string
    phoneDisplay: string
    phoneNumber: string
  }
  sections: ResumeSection[]
}

export const resume: ResumeData = {
  name: 'Hani Mir',
  contact: {
    email: 'hmir95@gmail.com',
    phoneDisplay: '917-282-9337',
    phoneNumber: '9172829337',
  },
  sections: [
    {
      title: 'Experience',
      entries: [
        {
          company: 'Jane Street Capital',
          location: 'New York, NY',
          dates: 'June 2022 - March 2023',
          role: 'Senior Software Engineer - Positions',
          highlights: [
            'Owned design + breaking ground on revamp of Position Management System (PMS) -- improved SLA from 3 (trending downwards) -> 4 nines, saving on O($1M) of misinformed/missed trades; cross-functional (Accounting, Tax, Positions, Pricing, Trading Systems)',
            'Owned maintenance + feature dev on existing PMS, maintaining positions on O(100k) securities, feeding into systems firmwide',
            'Interviewed ~25 software engineer candidates, member of hiring committee, member of tech recruiting steering committee',
          ],
          technologies: 'OCaml, MySQL',
        },
        {
          company: 'Jane Street Capital',
          location: 'New York, NY',
          dates: 'June 2020 - June 2022',
          role: 'Senior Software Engineer - Reconciliations',
          highlights: [
            'Zero to one development (design, PM, DB, backend, frontend) of reconciliations platform, scaled to 100% of reconciliations at the firm -- deprecated 4 adhoc tools maintained by a rotation of 3 full-time devs; automated O(10k) reconciliations daily; scaled total reconciliations from O(1k) -> O(10k)',
            'Owned technical development of position data ingestion pipeline -- scaled from O(10) -> O(100) data sources',
            'Zero to one development (PM, DB, backend, frontend) of invoicing platform, automating unscalable manual process -- scaled from O(1) -> O(100) clients invoiced monthly',
            'Interviewed ~100 software engineer candidates, member of hiring committee',
          ],
          technologies: 'OCaml, MySQL',
        },
        {
          company: 'Jane Street Capital',
          location: 'New York, NY',
          dates: 'June 2019 - June 2020',
          role: 'Software Engineer - External',
          highlights: [
            'Zero to one development (design, PM, DB, backend, frontend) of internal ATS to manage 100% of candidates and interviews at the firm -- unified data/processes from 6+ sources into one; scaled recruiting effort to grow company from 700 -> 2000+ and O(10k) -> O(100k) annual applicants; cross-functional (Tech, Trading, IT)',
            'Created (backend, frontend) internal Human Capital Management (HCM) system in response to COVID-related WFH requirements -- used daily by all employees; cross-functional (mission critical for HR, Accounting, Tax)',
            'Interviewed ~50 software engineer candidates',
          ],
          technologies: 'OCaml, Javascript, Python, MySQL',
        },
        {
          company: 'Shopify',
          location: 'Waterloo, ON',
          dates: 'January - December 2018',
          role: 'Software Engineer',
          highlights: [
            'Led cross-functional migration of all ops processes to Salesforce -- enhanced 300+ ops employees to scale beyond 5M shops',
          ],
          technologies: 'Spark, Python, Ruby',
        },
      ],
    },
    {
      title: 'Education',
      entries: [
        {
          company: 'University of Waterloo',
          location: 'Waterloo, ON',
          dates: 'September 2013 - April 2019',
          role: 'Bachelor of Computer Science (BCS)',
          highlights: [],
        },
      ],
    },
  ],
}
