# Domain 2: Asset Security
**Exam Weight: 10%**

---

## Data/Asset Lifecycle

Know the lifecycle stages in order — questions often describe a stage and ask what comes next or what control applies:

**Identify/Classify → Store → Use → Share → Archive → Destroy**

Each stage has its own control concern: classification happens at creation, encryption applies at store/use/share, retention rules govern archive, and secure sanitization governs destroy.

---

## Data Classification

Classification is the foundation every other control in this domain depends on — you cannot protect what you haven't labeled.

| Sector | Typical scheme (low → high) |
|---|---|
| **Government/military** | Unclassified → Confidential → Secret → Top Secret |
| **Commercial** | Public → Internal/Sensitive → Confidential → Proprietary/Restricted |

Classification criteria: value, age, useful life, and legal/regulatory requirement to protect. Reclassification (upgrading or downgrading) must be a deliberate, documented decision — not a byproduct of time passing.

> **Trap:** Declassification does not happen automatically with age in most commercial schemes — it requires an owner decision, unlike some government schemes with fixed automatic-declassification timers.

---

## Data Roles

A recurring, heavily-tested table. Learn who is *accountable* vs. who *does the work*:

| Role | Responsibility |
|---|---|
| **Data Owner** | Senior, accountable for classification, protection requirements, and ultimate liability — usually a business exec, not IT |
| **Data Controller** | (GDPR term) Determines *purpose and means* of processing personal data |
| **Data Processor** | (GDPR term) Processes data *on behalf of* the controller, under contract |
| **Data Custodian** | Day-to-day technical care — backups, access provisioning, patching — per the owner's requirements |
| **Data Steward** | Ensures data quality, context, and appropriate labeling/metadata; often a business-side quality role |
| **User/Subject** | Uses the data per policy; the data subject is the person the data is *about* |

> **Trap:** The Owner sets the classification and requirements; the Custodian *implements* them. A question describing someone "applying" backup schedules and access controls per policy is describing a Custodian, even if their job title says "Data Owner."

---

## Data States and Protection

| State | Definition | Primary control |
|---|---|---|
| **Data at rest** | Stored on media (disk, tape, DB) | Full-disk/volume/file encryption, access control |
| **Data in transit (in motion)** | Traversing a network | TLS, IPsec, VPN |
| **Data in use** | Actively processed in memory/CPU | Memory encryption, secure enclaves (e.g., confidential computing), endpoint controls |

---

## Data Remanence and Sanitization

Data remanence = residual data left on media after "deletion." The exam tests the hierarchy of destruction rigor:

| Method | What it does | Reversible? |
|---|---|---|
| **Clear** | Overwrite with software (single/multi-pass) | No for typical recovery, but not NIST-sufficient for high-sensitivity media |
| **Purge (sanitize)** | Degaussing, cryptographic erase, or more intensive overwrite techniques | Effectively no |
| **Destroy** | Physical destruction — shred, pulverize, incinerate, disintegrate | No — the only method acceptable for the highest sensitivity levels |

> **Trap:** Degaussing does **not** work on solid-state drives (SSDs) — it relies on disrupting magnetic domains, and SSDs have none. For SSDs, use cryptographic erase (destroy the encryption key) or physical destruction.

---

## Cryptography as an Asset Control

Encryption enforces confidentiality across all three data states; key management is the actual hard problem:

- **Data at rest**: full-disk encryption (FDE), volume encryption, transparent database encryption
- **Key management** lifecycle: generate → distribute → store → rotate → revoke → destroy — a compromised key requires *revocation and rotation*, not just "better monitoring"
- **Scoping/tailoring**: apply the minimum control set needed to meet the classification level and legal requirements — don't over-encrypt public data (cost) or under-encrypt regulated data (liability)

---

## Data Retention and Disposal

Retention policy must reconcile at least three pulls: legal/regulatory minimums, business need, and storage cost/risk of keeping data longer than necessary (more data retained = larger breach blast radius). "Keep everything forever" is a risk decision, not a neutral default.

**Media handling controls:** marking (labels indicating classification), handling (who may touch/transport it and how), storage (physical/logical protection matching classification), and secure destruction at end of life.

---

## Standards Selection and Scoping/Tailoring

- **Baseline** — a starting minimum control set (e.g., NIST SP 800-53 moderate baseline)
- **Scoping** — removing controls in the baseline that don't apply to your environment
- **Tailoring** — adjusting/supplementing controls to fit your specific organizational risk and mission

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Sets classification, ultimate liability" | Data Owner |
| "Implements backup/access per policy" | Data Custodian |
| "GDPR: decides *why* data is processed" | Controller |
| "GDPR: processes data *for* someone else" | Processor |
| "SSD sanitization" | Cryptographic erase or physical destruction (not degaussing) |
| "Highest sensitivity, must be irreversible" | Destroy (physical) |
| "Data actively in CPU/RAM" | Data in use |
| "Remove controls that don't apply" | Scoping |
| "Add controls to fit context" | Tailoring |

---

**Test yourself:** `quiz/domain-2-quiz.md` · Practice sheet → Domain 2 Knowledge Check
