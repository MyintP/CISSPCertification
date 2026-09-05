# Domain 1: Security and Risk Management
**Exam Weight: 16%** (the single largest domain — treat it as the spine the other seven hang off)

---

## The CIA Triad and Its Opposite

> Every control you will ever study exists to protect one of these three. Every threat you will ever study attacks one of these three.

| Property | Definition | Opposite (DAD) |
|----------|-----------|-----------------|
| **Confidentiality** | Information is disclosed only to authorized subjects | Disclosure |
| **Integrity** | Information is accurate, complete, and has not been improperly modified | Alteration |
| **Availability** | Authorized subjects have timely, reliable access | Destruction |

Two companion concepts extend the triad on the exam:

- **Authenticity** — the data/message genuinely comes from the claimed source (non-repudiation supports this).
- **Non-repudiation** — a subject cannot credibly deny having performed an action; requires identification + authentication + logging, not just a signature.

> **Trap:** A question that describes a scenario and asks "which triad element is most at risk?" wants you to map the *attack effect*, not the attack *name*. Ransomware that encrypts files primarily attacks **availability** (you can't access data) even though it also touches confidentiality if data is exfiltrated first.

---

## Security Governance

Governance is "who decides, and how decisions are proven correct" — not "which firewall to buy."

| Concept | What it is | Exam signal |
|---|---|---|
| **Policy** | Mandatory, high-level, board/exec-approved intent | "shall", "must", broad, rarely changes |
| **Standard** | Mandatory, specific, measurable requirement | "AES-256", "8 characters minimum" |
| **Procedure** | Mandatory, step-by-step instructions | "how to" |
| **Guideline** | Discretionary, recommended practice | "should", "recommended" |
| **Baseline** | Minimum acceptable configuration state | uniform starting point before tailoring |

> **Trap:** Standards and baselines are both mandatory and both specific — the difference is a standard is a *rule*, a baseline is a *reference configuration state* you measure systems against.

**Governance frameworks to recognize by name, not memorize in depth:**
- **COBIT** — IT governance and management framework (ISACA)
- **ISO/IEC 27001** — ISMS (Information Security Management System) certification standard; **27002** is the code of practice/controls catalog that supports it
- **NIST CSF** — voluntary Identify/Protect/Detect/Respond/Recover framework
- **NIST SP 800-53 / 800-37** — federal control catalog / Risk Management Framework (RMF)

Due care vs. due diligence — a perennial exam pair:
- **Due diligence** = the *research* — investigating before acting ("did you check?")
- **Due care** = the *action* — doing what a reasonable person would do ("did you act on what you found?")

---

## Legal, Regulatory, and Compliance

| Regime | Domain | Key idea |
|---|---|---|
| **GDPR** | EU personal data | Data subject rights, breach notice within 72 hours, extraterritorial reach |
| **HIPAA** | US healthcare | PHI confidentiality; covered entities + business associates |
| **PCI DSS** | Payment cards | Contractual (not law) — 12 requirements for anyone storing/processing/transmitting cardholder data |
| **SOX** | US public company financial reporting | Internal controls over financial reporting; criminal liability for executives |
| **GLBA** | US financial institutions | Safeguards Rule, Privacy Rule |

**Legal system families:**
- **Civil law** — codified statutes are primary (most of continental Europe)
- **Common law** — case law/precedent is primary (US, UK); has three branches on the exam: **criminal** (society vs. individual, "beyond reasonable doubt"), **civil/tort** (individual vs. individual, "preponderance of evidence," monetary damages), **administrative/regulatory** (agency-enforced)
- **Religious law** and **customary law** — round out the four families ISC2 tests by name recognition only

**Intellectual property:** patent (invention, 20 yrs), copyright (expression, life+70), trademark (brand identifier, renewable indefinitely), trade secret (protected only while secret — no expiration but no protection once disclosed).

> **Trap:** "Which IP protection has no expiration?" — the naive answer is copyright (long but finite). The correct answer is **trade secret**, which lasts exactly as long as secrecy is maintained.

---

## Risk Management

The core loop: **Identify → Analyze → Evaluate → Treat → Monitor.**

**Risk = Threat × Vulnerability × (Asset Value / Impact)** — conceptually; know the quantitative formulas cold:

| Term | Formula / Meaning |
|---|---|
| **AV** | Asset Value |
| **EF** | Exposure Factor — % of asset value lost in a single incident |
| **SLE** | Single Loss Expectancy = AV × EF |
| **ARO** | Annualized Rate of Occurrence — expected times/year |
| **ALE** | Annualized Loss Expectancy = SLE × ARO |
| **Cost-benefit** | Value of a control = ALE(before) − ALE(after) − annual cost of control |

**Four risk treatment options** (the exam loves scenario questions naming the wrong one):
- **Mitigate** — reduce likelihood/impact with a control
- **Transfer (share)** — insurance, outsourcing, contract clauses
- **Avoid** — stop doing the risky activity
- **Accept** — formally, knowingly do nothing further (requires management sign-off)

> **Trap:** Buying cyber insurance is **transfer**, not mitigation — it changes who pays, not the likelihood of the event.

**Qualitative vs. quantitative:** qualitative uses relative scales (High/Med/Low) and is fast but subjective; quantitative uses dollar figures (SLE/ALE) and is precise but data-hungry. Most real programs blend both.

**Risk frameworks to recognize:** NIST RMF (Categorize→Select→Implement→Assess→Authorize→Monitor), FAIR (Factor Analysis of Information Risk — quantitative), ISO 31000 (general risk management principles, not security-specific).

---

## Threat Modeling

Know these by name and by what question each one answers:

| Model | Core question |
|---|---|
| **STRIDE** | What *type* of threat is this? Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege |
| **DREAD** | How *severe* is it? Damage, Reproducibility, Exploitability, Affected users, Discoverability (largely deprecated but still tested) |
| **PASTA** | Process for Attack Simulation and Threat Analysis — risk-centric, 7 stages, business-impact driven |
| **Attack trees** | Root goal decomposed into AND/OR branches of sub-attacks |
| **Kill chain / MITRE ATT&CK** | Sequence/taxonomy of attacker behavior (recon → weaponize → deliver → exploit → install → C2 → actions on objective) |

---

## Business Continuity and Supply Chain Risk

- **BCP** (Business Continuity Plan) keeps the *business* running; **DRP** (Disaster Recovery Plan) restores *IT systems* — DRP is a subset of BCP.
- **BIA** (Business Impact Analysis) is the foundation of both: identifies critical functions, dependencies, and produces **MTD** (Maximum Tolerable Downtime), **RTO** (Recovery Time Objective — how fast to restore), and **RPO** (Recovery Point Objective — how much data loss, measured backward in time, is tolerable).

> **Trap:** RTO is about *time to recover*; RPO is about *data loss window*. A daily backup with no replication gives you an RPO of up to 24 hours regardless of how fast you can restore the server.

**Third-party/supply chain risk:** vendor due diligence, SLAs, right-to-audit clauses, SOC 2 Type II reports (control *design and operating effectiveness over a period*, vs. Type I which is a point-in-time design check only).

---

## Security Awareness, Education, and Training

- **Awareness** — what/why, broad audience, ongoing reinforcement (posters, phishing sims)
- **Training** — how, skill-building for a role
- **Education** — deep, often formal/certification-level understanding for specialists

## Personnel Security

Least privilege, separation of duties, mandatory vacation, job rotation, and background checks all exist to catch or deter the same thing: a single trusted insider quietly accumulating unchecked capability. Onboarding/transfer/termination processes must synchronize access changes with HR events — the classic exam trap is the terminated employee whose account isn't disabled until the next scheduled access review.

---

## Ethics

The **(ISC)² Code of Ethics** has four canons, in priority order — memorize the order, not just the words:

1. Protect society, the common good, necessary public trust and confidence, and the infrastructure.
2. Act honorably, honestly, justly, responsibly, and legally.
3. Provide diligent and competent service to principals.
4. Advance and protect the profession.

> When a scenario question presents a conflict between canons, the **lower-numbered canon wins**.

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Board-approved, high-level intent" | Policy |
| "Minimum configuration state" | Baseline |
| "Reduce likelihood *and* impact" | Mitigate |
| "Buy insurance" | Transfer |
| "Do nothing, formally" | Accept |
| "How much data can we lose?" | RPO |
| "How fast must we be back up?" | RTO |
| "SLE × ARO" | ALE |
| "Protects secrecy only, indefinitely" | Trade secret |
| "72-hour breach notification" | GDPR |

