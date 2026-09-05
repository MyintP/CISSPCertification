# Domain 8: Software Development Security
**Exam Weight: 10%**

---

## Software Development Life Cycle (SDLC)

Every SDLC model has the same underlying phases; the exam mostly tests **when security should be introduced** (as early as possible — "shift left") rather than the phase names themselves:

**Requirements → Design → Development/Coding → Testing → Deployment/Release → Maintenance → Disposal/EOL**

> **Trap:** "Shift left" means moving security activities (threat modeling, secure code review, SAST) *earlier* in the lifecycle — toward requirements/design — because defects found in production cost far more to fix than defects found in design.

---

## Development Models

| Model | Characteristic |
|---|---|
| **Waterfall** | Sequential, each phase fully completes before the next starts; rigid, hard to change course late |
| **Spiral** | Iterative, risk-driven — repeats phases in expanding loops, reassessing risk each cycle |
| **Agile** | Iterative, incremental, short sprints, adaptive to changing requirements; security must be baked into each sprint, not bolted on at the end |
| **DevOps / DevSecOps** | Continuous integration/continuous deployment (CI/CD); DevSecOps explicitly integrates security gates into the pipeline rather than treating it as a separate downstream step |

---

## Maturity and Process Models

- **CMMI (Capability Maturity Model Integration)** — process maturity levels: **1 Initial (ad hoc) → 2 Managed → 3 Defined → 4 Quantitatively Managed → 5 Optimizing**. Higher = more predictable, more measured, more consistently improving.
- **SAMM (Software Assurance Maturity Model)** and **BSIMM (Building Security In Maturity Model)** — frameworks specifically for measuring and improving an organization's *software security* practices (distinct from general CMMI process maturity).

---

## Secure Coding — Top Vulnerability Classes

The exam draws heavily on the **OWASP Top 10** concept set (memorize the vulnerability *mechanism*, not the current year's exact ranking):

| Vulnerability | Mechanism | Primary defense |
|---|---|---|
| **Injection (SQLi)** | Untrusted input concatenated into a command/query | Parameterized queries / prepared statements, input validation |
| **Cross-Site Scripting (XSS)** | Untrusted input rendered as executable script in another user's browser | Output encoding, Content Security Policy |
| **Cross-Site Request Forgery (CSRF)** | Victim's authenticated session used to submit an unwanted request | Anti-CSRF tokens, SameSite cookies |
| **Broken authentication/session mgmt** | Weak session handling, credential stuffing exposure | MFA, secure session tokens, rate limiting |
| **Insecure deserialization** | Untrusted data deserialized into executable objects | Avoid deserializing untrusted input; integrity checks |
| **Buffer overflow** | Input exceeds allocated memory, overwrites adjacent memory (can lead to code execution) | Bounds checking, safe languages/functions, ASLR, DEP |
| **Race condition (TOCTOU)** | Time-of-check differs from time-of-use, allowing a swap in between | Atomic operations, proper locking |

> **Trap:** SQL injection's root cause is *untrusted input treated as executable code* — input validation alone (allow-listing characters) helps but **parameterized queries** are the actual structural fix, because they separate code from data entirely.

---

## Databases and Data-Layer Security

- **Aggregation** — combining multiple *low*-sensitivity data points to derive something *higher*-sensitivity (e.g., combining public records to deduce a person's schedule).
- **Inference** — deducing *restricted* information from access to *unrestricted* information, without ever directly accessing the restricted data itself.
- **Polyinstantiation** — the database intentionally stores multiple versions of the same record at different classification levels, to prevent a low-clearance user from inferring the existence of a high-clearance version.

> **Trap:** Aggregation is about *combining* pieces to build a bigger picture; inference is about *deducing* a secret from patterns in what you can already see (e.g., noticing a database always errors differently for classified records vs. nonexistent ones). Distinguish "combining allowed pieces" (aggregation) from "logically deducing a forbidden piece" (inference).

---

## APIs, Microservices, and Supply Chain

- **API security**: authentication (API keys/OAuth tokens), rate limiting, input validation, and never trusting client-side validation alone — every check must also happen server-side.
- **Software supply chain**: Software Composition Analysis (SCA) for known-vulnerable open-source dependencies, a **Software Bill of Materials (SBOM)** to inventory what's actually in a build, and verifying build/artifact integrity (code signing) to detect tampering between build and deployment.
- **Third-party/open-source risk**: a vulnerable dependency inherited transitively (a dependency of a dependency) is one of the most common real-world breach vectors — SCA tooling exists specifically to surface this.

---

## Change and Configuration Management for Code

- **Version control**: every change tracked, attributable, reversible — the foundation for accountability in code (mirrors IAAA's accountability principle from Domain 5).
- **Code review**: peer review before merge catches both logic bugs and security flaws; pairs naturally with SAST run in the CI pipeline.
- **Environment separation**: development → test/QA → staging → production, with production data never used in lower environments unless properly masked/anonymized (protects real user data from being exposed to a wider, less-controlled audience).

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Security moved earlier in the SDLC" | Shift left |
| "Iterative, risk-driven, expanding loops" | Spiral model |
| "Security folded directly into CI/CD" | DevSecOps |
| "Structural fix for SQL injection" | Parameterized queries |
| "Script runs in another user's browser" | XSS |
| "Victim's session used without their intent" | CSRF |
| "Combine low-sensitivity pieces into a high-sensitivity picture" | Aggregation |
| "Deduce a secret from patterns without direct access" | Inference |
| "Multiple record versions per classification level" | Polyinstantiation |
| "Inventory of everything in a build" | SBOM |

