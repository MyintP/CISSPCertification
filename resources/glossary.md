# Glossary

A cross-domain reference of terms that show up repeatedly across the CISSP CBK. Organized alphabetically; domain-specific deep dives live in `/domains`.

---

**Accountability** — The ability to trace an action back to a specific, uniquely identified subject, usually via logging. Requires identification and authentication to be meaningful.

**Aggregation** — Combining multiple individually low-sensitivity data points to derive a conclusion of higher sensitivity than any single piece.

**ALE (Annualized Loss Expectancy)** — SLE × ARO. The expected yearly monetary loss from a given risk.

**ARO (Annualized Rate of Occurrence)** — The expected number of times a threat event occurs in a year.

**Asymmetric cryptography** — Uses a mathematically linked key pair (public + private); slower than symmetric crypto, used for key exchange and digital signatures.

**Availability** — Authorized users have timely, reliable access to information and systems.

**Baseline** — A minimum, defined configuration state used as a reference point for compliance/consistency checks.

**BIA (Business Impact Analysis)** — Identifies critical business functions and their dependencies, producing MTD, RTO, and RPO figures that drive BCP/DRP planning.

**Chain of custody** — The unbroken, documented record of who handled a piece of evidence, when, and how; a break can render evidence inadmissible.

**CIA Triad** — Confidentiality, Integrity, Availability — the three core properties every security control ultimately protects.

**Clipping level** — A threshold below which minor policy violations are tolerated/logged without escalation, reducing alert noise.

**Confidentiality** — Information is disclosed only to authorized subjects.

**CVSS (Common Vulnerability Scoring System)** — A standardized 0–10 severity score for vulnerabilities, based on exploitability and impact metrics.

**Data at rest / in transit / in use** — The three states of data, each requiring different protective controls (encryption at rest, TLS/IPsec in transit, secure enclaves/memory protection in use).

**Data remanence** — Residual data that persists on media after normal deletion; addressed through proper clear/purge/destroy sanitization.

**Defense in depth** — Layering multiple, independent controls so that the failure of one does not result in total compromise.

**Digital signature** — A hash of a message encrypted with the sender's private key, verifiable with the sender's public key; proves authenticity, integrity, and non-repudiation.

**Due care** — Doing what a reasonable, prudent person would do given the same information — the *action*.

**Due diligence** — Researching/investigating before acting — the *homework*.

**EF (Exposure Factor)** — The percentage of an asset's value that would be lost in a single occurrence of a threat event.

**Federation** — Extending authentication/identity across organizational boundaries so a single identity works across multiple, independently-managed systems (e.g., via SAML or OIDC).

**Inference** — Deducing restricted information from patterns in unrestricted, legitimately-accessible information, without ever directly accessing the restricted data.

**Integrity** — Information is accurate, complete, and has not been improperly modified.

**Least privilege** — Granting only the minimum access necessary to perform a required function, nothing more.

**Non-repudiation** — A subject cannot credibly deny having performed an action, typically requiring strong identification/authentication plus logging.

**Polyinstantiation** — Storing multiple versions of the same record at different classification levels to prevent inference of a higher-classified record's existence.

**Privilege creep** — The gradual, unintended accumulation of access rights over time, usually from role changes that add new access without removing old access.

**Reference monitor** — The abstract security concept: mediates every access between subject and object, is always invoked, tamperproof, and small enough to verify.

**Residual risk** — The risk that remains after controls/mitigations have been applied.

**RPO (Recovery Point Objective)** — The maximum acceptable amount of data loss, measured as a period of time.

**RTO (Recovery Time Objective)** — The maximum acceptable time to restore a system/function after a disruption.

**Scoping** — Removing controls from a baseline that do not apply to a given environment.

**Separation of duties** — Dividing a critical task among multiple people so no single individual can complete it alone, reducing fraud/error risk.

**SLE (Single Loss Expectancy)** — AV × EF. The expected monetary loss from a single occurrence of a threat event.

**Symmetric cryptography** — Uses one shared secret key for both encryption and decryption; fast, used for bulk data.

**Tailoring** — Adjusting or supplementing a baseline's controls to fit an organization's specific risk and mission context.

**TCB (Trusted Computing Base)** — All hardware, firmware, and software that enforces a system's security policy.

**Zero trust** — A security model that verifies every access request based on context and identity, never trusting a request purely because of its network location.
