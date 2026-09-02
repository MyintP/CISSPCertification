# Domain 6: Security Assessment and Testing
**Exam Weight: 12%**

---

## Assessment vs. Testing vs. Audit

Three words the exam treats as distinct, precise terms:

| Term | What it is |
|---|---|
| **Assessment** | Broad evaluation of security posture — includes tests, interviews, document review |
| **Testing** | Active, hands-on verification (scan, pentest, code review) that a control works |
| **Audit** | Independent, formal verification against a standard/policy, often producing a report for compliance purposes |

---

## Vulnerability Assessment vs. Penetration Testing

| | Vulnerability Assessment | Penetration Test |
|---|---|---|
| Goal | Find and list weaknesses | Prove weaknesses are *exploitable* and show impact |
| Depth | Breadth-first, automated scanning | Depth-first, manual exploitation |
| Output | List of vulnerabilities, often with CVSS scores | Narrative of what an attacker could actually achieve |
| Authorization needed | Yes | Yes — always, in writing, with defined scope (the "Rules of Engagement") |

**Pentest knowledge levels:**

| Type | Tester's starting knowledge |
|---|---|
| **Black box** | None — simulates an external attacker |
| **White box** | Full — source code, architecture, credentials provided |
| **Gray box** | Partial — some internal knowledge, simulates a semi-informed insider or attacker who's done some recon |

**Pentest phases (canonical order):** Reconnaissance → Scanning/Enumeration → Exploitation → Post-exploitation (privilege escalation, lateral movement) → Reporting.

> **Trap:** A pentest without a signed authorization/scope agreement is not a pentest — it's unauthorized access, regardless of intent. The **Rules of Engagement** (scope, timing, allowed techniques, emergency contacts) must exist before any testing begins.

---

## Vulnerability Scanning

Automated, scheduled, broad-coverage — checks systems against known-vulnerability signatures/CVE databases. High false-positive rate compared to a pentest, but far cheaper to run continuously.

- **Authenticated scan** (credentialed) — logs in, sees much more (missing patches, local misconfig) — more accurate, fewer false positives.
- **Unauthenticated scan** — external view only, mirrors what an outside attacker sees without credentials.

**CVSS (Common Vulnerability Scoring System)** — standardizes severity 0–10 based on exploitability and impact metrics; lets an org prioritize remediation objectively rather than by gut feel.

---

## Security Testing Techniques

| Technique | What it does |
|---|---|
| **Static Application Security Testing (SAST)** | Analyzes source code *without executing it* — finds issues early, in the IDE/build pipeline |
| **Dynamic Application Security Testing (DAST)** | Tests the *running* application from the outside, black-box style — catches runtime/config issues SAST can't see |
| **Interactive (IAST)** | Instruments the running app to get SAST-like detail with DAST-like realism |
| **Fuzzing** | Feeds malformed/random/unexpected input to find crashes and memory-safety bugs |
| **Software Composition Analysis (SCA)** | Scans third-party/open-source dependencies for known vulnerabilities |

> **Trap:** SAST finds issues in code you haven't run yet (shift-left, cheaper to fix); DAST finds issues only visible at runtime (e.g., server misconfiguration, auth bypass in the live flow). Neither replaces the other — a mature pipeline uses both.

---

## Log Management, Monitoring, and SIEM

- **Log review** must be routine and *someone's job* — logs nobody reads provide zero detective value.
- **SIEM (Security Information and Event Management)** aggregates, correlates, and alerts across log sources in near-real time — the platform, not a single log file.
- **Clipping levels** — a threshold below which minor violations are ignored (to reduce noise) and above which they trigger review/alert.
- **Synthetic transactions** — scripted, simulated user actions run continuously to verify a system still behaves correctly (a testing technique that overlaps with monitoring).

---

## Audits

| Standard/report | What it covers |
|---|---|
| **SOC 1** | Controls relevant to a client's *financial* reporting |
| **SOC 2** | Controls over Trust Services Criteria — security, availability, processing integrity, confidentiality, privacy |
| **SOC 2 Type I** | Control *design* at a single point in time |
| **SOC 2 Type II** | Control design **and** operating effectiveness *over a period* (usually 6–12 months) — stronger assurance |
| **SOC 3** | Public-facing, high-level summary of a SOC 2 report — no sensitive detail |

**Internal vs. external audit:** internal audit reports to management/audit committee for continuous improvement; external audit is performed by an independent third party, often required for regulatory or contractual compliance and carries more weight with outside stakeholders.

---

## Key Performance and Risk Indicators

- **KPI (Key Performance Indicator)** — measures how well a process is performing against a target (e.g., % patches applied within SLA)
- **KRI (Key Risk Indicator)** — an early-warning metric that risk exposure is rising (e.g., rising number of failed login attempts)

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Proves a vulnerability is exploitable" | Penetration test |
| "Broad list of weaknesses, automated" | Vulnerability assessment/scan |
| "Tester has zero prior knowledge" | Black box |
| "Full source and architecture given" | White box |
| "Analyzes code without running it" | SAST |
| "Tests the running application externally" | DAST |
| "Feeds malformed input to crash the app" | Fuzzing |
| "Design + operating effectiveness over time" | SOC 2 Type II |
| "Design only, one point in time" | SOC 2 Type I |
| "Public summary report" | SOC 3 |

---

**Test yourself:** `quiz/domain-6-quiz.md` · Practice sheet → Domain 6 Knowledge Check
