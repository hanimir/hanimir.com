export function ResumePage() {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th className="name">Hani Mir</th>
            <td className="contact">
              <p>
                <a href="mailto:hmir95@gmail.com">hmir95@gmail.com</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/hanimir/">linkedin.com/in/hanimir</a>
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="section-separator">
              Summary
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>8+ years of experience building distributed systems and LLM training/serving infrastructure</li>
                <li>
                  Scaled 70B chat models to 20k+ QPS across 1k+ GPUs, cut inference costs by 75%, safety alignment
                  resulted in 12% unsafe response reduction
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="section-separator">
              Experience
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">Character.ai</td>
            <td>
              <div className="metadata">
                <p>San Francisco, CA</p>
                <p>January 2025 - Present</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Staff Software Engineer - ML Infrastructure
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>
                  Designed H100-based post-training pipeline to fine-tune 70B chat models on ~20B tokens; lifted
                  RPG-character engagement ~10%
                </li>
                <li>
                  Trained and served real-time classification and safety models (F1=0.75); scaled throughput from ~5 QPS
                  to ~500 QPS (p95 latency &lt;150ms)
                </li>
                <li>Profiled and optimized classifier inference engine; raised GPU utilization from 30% to 95%</li>
                <li>
                  Zero to one development of parameter-efficient fine-tuning (LoRA/QLoRA) pipeline; enabled nightly
                  retraining with 75% less GPU-hours
                </li>
                <li>
                  Added user/character-aware model routing; increased user engagement 8% (p95 TTFT &lt;2.5s at 20k+ QPS)
                </li>
                <li>
                  Designed and implemented two-tower character recommendation model, feature extraction, and real-time
                  serving pipeline; improved For You CTR by 50%
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              PyTorch, Kubernetes, Slurm, vLLM, WandB, DDP, Megatron-LM, Accelerate
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">ELI5</td>
            <td>
              <div className="metadata">
                <p>Remote</p>
                <p>March 2023 - September 2024</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Co-founder/CTO
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>
                  Built fine-tuning pipeline with O(10k) annotated interviews; enabled human-quality interview grading
                  (K=0.72)
                </li>
                <li>
                  Created automated recruiting platform, interviewed 2k candidates per month at 10x cost savings vs
                  human-led interviews; contributed to 20 hires per month
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              Python, MySQL, React, Javascript, vLLM, RLHF
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">Jane Street Capital</td>
            <td>
              <div className="metadata">
                <p>New York, NY</p>
                <p>June 2022 - March 2023</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Staff Software Engineer - Positions
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>
                  Owned design + breaking ground on revamp of distributed Position Management System (PMS); improved SLA
                  from 3 (trending downwards) -&gt; 4 nines, saved on $1M+ of misinformed/missed trades
                </li>
                <li>
                  Maintenance + feature dev on existing PMS, maintained positions on O(100k) securities, fed into systems
                  firmwide
                </li>
                <li>
                  Interviewed ~25 software engineer candidates, member of hiring committee, member of tech recruiting
                  steering committee
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              OCaml, PostgreSQL
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr className="page-break" />

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">Jane Street Capital</td>
            <td>
              <div className="metadata">
                <p>New York, NY</p>
                <p>June 2020 - June 2022</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Senior Software Engineer - Reconciliations
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>
                  Zero to one development (DB, backend, frontend) of reconciliations platform; scaled from O(1k) to
                  O(10k) automated reconciliations daily firmwide totaling $10M+ annually
                </li>
                <li>
                  Owned technical development of position data ingestion pipeline; scaled from O(10) -&gt; O(100) data
                  sources
                </li>
                <li>
                  Zero to one development (DB, backend, frontend) of invoicing platform; automated unscalable manual
                  process to scale from O(1) -&gt; O(100) clients invoiced monthly for $1M+ annually
                </li>
                <li>Interviewed ~100 software engineer candidates, member of hiring committee</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              OCaml, PostgreSQL
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">Jane Street Capital</td>
            <td>
              <div className="metadata">
                <p>New York, NY</p>
                <p>June 2019 - June 2020</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Senior Software Engineer - External
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>
                  Zero to one development (design, PM, DB, backend, frontend) of internal ATS to manage 100% of
                  candidates and interviews at the firm
                </li>
                <li>
                  Scaled recruiting processes to grow company from 700 -&gt; 2000+ and O(10k) -&gt; O(100k) annual applicants
                </li>
                <li>
                  Unified data from 6+ sources into one centralized data store; enabled groups across the firm to share
                  hiring processes and tooling
                </li>
                <li>
                  Created (backend, frontend) internal Human Capital Management (HCM) system in response to COVID-related
                  WFH requirements; used daily by all employees
                </li>
                <li>Interviewed ~50 software engineer candidates</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              OCaml, Javascript, Python, PostgreSQL
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">Shopify</td>
            <td>
              <div className="metadata">
                <p>Waterloo, ON</p>
                <p>December 2017 - December 2018</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Software Engineer - Shopify Plus
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <ul>
                <li>Maintenance + feature dev on ETL pipelines for 30k+ Shopify Plus clients</li>
                <li>
                  Led migration of all ops processes to Salesforce; enhanced 300+ ops employees to scale beyond 5M shops
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="technologies">
              Spark, Python, Ruby
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="section-separator">
              Education
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td className="company">University of Waterloo</td>
            <td>
              <div className="metadata">
                <p>Waterloo, ON</p>
                <p>2013</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="role" colSpan={2}>
              Bachelor of Computer Science (BCS)
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="description">
              <p>
                Artificial Intelligence, Machine Learning, Data Structures and Algorithms, Functional Programming, User
                Interfaces
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
