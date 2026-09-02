# 8-Week CISSP Study Plan

> Roughly 1–1.5 hours on weekdays, 2–3 hours on one weekend day. Adjust pace to your own background — candidates with strong networking or IAM experience can compress those weeks and add the time to weaker domains.

---

## Week 1 — Domain 1: Security and Risk Management (16%)

| Day | Focus |
|---|---|
| Mon | CIA triad, DAD, authenticity, non-repudiation |
| Tue | Governance: policy/standard/procedure/guideline/baseline; due care vs. due diligence |
| Wed | Legal systems, IP protections, major regulations (GDPR, HIPAA, PCI DSS, SOX) |
| Thu | Risk management loop, SLE/ARO/ALE, four risk treatments |
| Fri | Threat modeling (STRIDE, DREAD, PASTA), BCP/DRP fundamentals, BIA/MTD/RTO/RPO |
| Weekend | (ISC)² Code of Ethics, personnel security, `quiz/domain-1-quiz.md` |

---

## Week 2 — Domain 2: Asset Security (10%) + start Domain 3

| Day | Focus |
|---|---|
| Mon | Data lifecycle, classification schemes |
| Tue | Data roles: Owner, Custodian, Controller, Processor, Steward |
| Wed | Data states (at rest/in transit/in use), remanence, sanitization hierarchy |
| Thu | `quiz/domain-2-quiz.md`; begin Domain 3 — security models overview |
| Fri | Bell-LaPadula vs. Biba vs. Clark-Wilson vs. Brewer-Nash (drill until automatic) |
| Weekend | TCB, reference monitor, evaluation criteria (TCSEC, Common Criteria) |

---

## Week 3 — Domain 3 continued + Domain 4 start

| Day | Focus |
|---|---|
| Mon | Symmetric vs. asymmetric crypto, hybrid systems, hashing |
| Tue | Digital signatures, PKI components, key management |
| Wed | Physical security layers, fire suppression classes; `quiz/domain-3-quiz.md` |
| Thu | Domain 4 — OSI model both directions, TCP vs. UDP |
| Fri | Network devices, segmentation, DMZ, zero trust |
| Weekend | Secure protocol replacements table, IPsec (AH/ESP, transport/tunnel) |

---

## Week 4 — Domain 4 continued + Domain 5

| Day | Focus |
|---|---|
| Mon | Wireless security evolution (WEP → WPA3); common network attacks table |
| Tue | `quiz/domain-4-quiz.md`; begin Domain 5 — IAAA |
| Wed | Authentication factors, MFA rules, biometric FAR/FRR/CER |
| Thu | Access control models: DAC, MAC, RBAC, ABAC, rule-based |
| Fri | Identity lifecycle, JML, privilege creep, recertification |
| Weekend | Federation: SAML, OAuth, OIDC, Kerberos; `quiz/domain-5-quiz.md` |

---

## Week 5 — Domain 6 + Domain 7 start

| Day | Focus |
|---|---|
| Mon | Assessment vs. testing vs. audit; vulnerability assessment vs. pentest |
| Tue | Pentest knowledge levels (black/white/gray box), Rules of Engagement |
| Wed | SAST/DAST/IAST/fuzzing/SCA; SIEM and log management |
| Thu | SOC 1/2/3 and Type I vs. Type II; `quiz/domain-6-quiz.md` |
| Fri | Domain 7 — incident response lifecycle, event/incident/breach |
| Weekend | IDS vs. IPS, change/configuration/patch management |

---

## Week 6 — Domain 7 continued + Domain 8

| Day | Focus |
|---|---|
| Mon | DR site types (hot/warm/cold), backup types (full/incremental/differential) |
| Tue | Order of volatility, chain of custody, evidence types |
| Wed | `quiz/domain-7-quiz.md`; begin Domain 8 — SDLC models, shift left |
| Thu | OWASP-style vulnerability classes (injection, XSS, CSRF, buffer overflow) |
| Fri | Aggregation vs. inference, polyinstantiation, SBOM/supply chain |
| Weekend | `quiz/domain-8-quiz.md`; CMMI maturity levels |

---

## Week 7 — Full-Domain Revision

| Day | Focus |
|---|---|
| Mon–Fri | One domain per day, re-reading only the sections and "Trap" callouts you got wrong in Week 1–6 quizzes |
| Weekend | Re-take every domain quiz cold; flag any domain scoring below 8/10 for a full re-read |

---

## Week 8 — Exam Readiness

| Day | Focus |
|---|---|
| Mon–Tue | Timed full-length practice exam (aim for ~150 questions in 3 hours to build pacing stamina) |
| Wed | Review every missed question — identify whether it was a knowledge gap or a "best answer" reasoning miss |
| Thu | Re-read `resources/exam-traps.md` and `resources/glossary.md` in full |
| Fri | Light review only — Quick Recall tables across all 8 domains |
| Weekend | Rest, confirm exam-day logistics (ID, testing center/online proctoring requirements), sleep |

---

## Using This Workspace Day-to-Day

1. Read the domain sheet for the day in the app (left-hand map).
2. Open the matching `docs.html?file=domains/...` deep-dive for the details the sheet summarizes.
3. Take the matching domain quiz on the **Practice** sheet.
4. Log a note in the Study Desk at the bottom of the screen — it's saved per-sheet automatically.
5. Check off the domain in the **Progress Tracker** (sheet 12) once you consistently score 9–10 on its quiz.
