# Domain 7: Security Operations
**Exam Weight: 13%**

---

## Incident Management Lifecycle

The canonical sequence — a huge source of scenario questions asking "which phase is this?":

**Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned (Post-Incident Review)**

| Phase | What happens |
|---|---|
| **Preparation** | IR plan, team roster, tools, communication templates — done *before* anything happens |
| **Detection & Analysis** | Confirm it's really an incident, triage severity, scope |
| **Containment** | Stop the bleeding — short-term (isolate host) vs. long-term (patch, rebuild) |
| **Eradication** | Remove the root cause — malware, backdoor, compromised account |
| **Recovery** | Restore systems to normal operation, monitor closely for recurrence |
| **Lessons Learned** | Post-mortem — what worked, what didn't, update the plan |

> **Trap:** Containment happens *before* eradication — you isolate first to stop spread, then remove the cause. A question describing "disconnecting the infected host from the network" is Containment, not Eradication, even though it feels like a fix.

**Event vs. incident vs. breach:** an *event* is any observable occurrence; an *incident* is an event that violates security policy; a *breach* is a confirmed incident involving unauthorized access/disclosure of protected data — each word implies increasing certainty and severity.

---

## Logging, Monitoring, and Detection

- **IDS vs. IPS**: IDS is passive (detects and alerts); IPS is inline and active (detects and blocks). An IPS placed incorrectly can become an availability risk (blocks legitimate traffic on a false positive).
- **Signature-based detection**: matches known patterns — fast, low false-positive, blind to novel/zero-day attacks.
- **Anomaly/behavior-based detection**: baselines "normal," flags deviation — can catch zero-days, but higher false-positive rate and needs tuning time.
- **Honeypots/honeynets**: decoy systems designed to attract attackers, study techniques, and divert them from real assets — must be isolated so they can't be used as a pivot into production.

---

## Change, Configuration, and Patch Management

- **Change management** is a *process* control: request → assess/approve (Change Advisory Board) → test → implement → document → review. It exists to prevent unauthorized or poorly-tested changes from causing outages, not to slow things down for its own sake.
- **Configuration management** maintains systems in a known, approved, consistent baseline state (often via CMDB — Configuration Management Database).
- **Patch management** lifecycle: identify → test → deploy → verify. Emergency/critical patches may compress this cycle, but skipping testing entirely on production systems is a classic exam-trap "wrong answer."

---

## Business Continuity and Disaster Recovery Execution

(Planning lives in Domain 1 — Domain 7 tests *execution*.)

| Site type | Readiness | Cost |
|---|---|---|
| **Hot site** | Fully operational, real-time/near-real-time data replication, can fail over in minutes to hours | Highest |
| **Warm site** | Hardware in place, data restored from recent backup, hours to a day to activate | Medium |
| **Cold site** | Space and power only, no equipment/data — days to weeks to activate | Lowest |
| **Mobile/redundant site** | Trailer/portable facility, or a fully mirrored redundant site owned by the org | Varies |

**Backup types:**

| Type | What's backed up | Restore complexity |
|---|---|---|
| **Full** | Everything | Simplest to restore (one set) |
| **Incremental** | Changes since the *last backup of any kind* | Fastest to back up, slowest/most complex to restore (need full + every incremental in order) |
| **Differential** | Changes since the *last full backup* | Faster to restore than incremental (need only full + latest differential), slower to back up over time |

> **Trap:** Incremental backups are fastest to *create* but slowest to *restore* (you must replay the full backup plus every incremental since). Differential inverts this trade-off. If a question asks "which minimizes restore time, accepting larger backup size," the answer is differential (or full).

**Testing DR/BCP plans, in increasing rigor/realism:** tabletop/walkthrough (talk through it) → structured walkthrough → simulation → parallel test (alternate site runs alongside production) → full interruption (actually cut over production — highest risk, highest confidence).

---

## Physical and Personnel Safety in Operations

- **Life safety always outranks asset/data protection** — evacuation and human safety come before securing systems or shutting down gracefully, in every exam scenario.
- **Duress and safety controls**: duress codes/alarms, safe egress paths, emergency power-off, fail-safe (defaults to unlocked/open for safety) vs. fail-secure (defaults to locked for security) door behavior on power loss — know which one a scenario calls for: fire exits must be fail-safe.

---

## Investigations and Evidence

- **Chain of custody**: unbroken, documented record of who handled evidence, when, and how — a break in the chain can make evidence inadmissible.
- **Order of volatility** (collect most volatile first): CPU registers/cache → RAM → network state/routing tables → running processes → disk → remote logs → archived media.
- **Types of evidence**: best evidence (original), secondary evidence (copy), direct evidence (firsthand), circumstantial, corroborative, and hearsay (generally weak/inadmissible on its own).

---

## Quick Recall Table

| If the question says… | Think… |
|---|---|
| "Isolate the infected host" | Containment |
| "Remove the malware/root cause" | Eradication |
| "Post-mortem, update the IR plan" | Lessons Learned |
| "Passive, alert only" | IDS |
| "Inline, blocks traffic" | IPS |
| "Fastest backup, slowest restore" | Incremental |
| "Slower backup over time, faster restore" | Differential |
| "Minutes-to-hours failover" | Hot site |
| "Days-to-weeks activation, empty shell" | Cold site |
| "Collect this first at a crime scene" | Most volatile data (registers/RAM) |
| "Door must unlock on power loss (fire exit)" | Fail-safe |

