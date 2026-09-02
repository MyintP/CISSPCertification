# Exam Overview — CISSP (Certified Information Systems Security Professional)

## Confirmed, from ISC2's own pages

| Detail | Info |
|--------|------|
| **Full name** | Certified Information Systems Security Professional (CISSP), administered by ISC2 |
| **Current exam outline** | Effective **April 15, 2024** |
| **Format** | Computerized Adaptive Testing (CAT) for the English exam; linear, fixed-form for other languages |
| **Duration** | 3 hours |
| **Question count** | 100–150 items (CAT ends the exam early once your ability estimate is statistically confident, so most candidates do not see all 150) |
| **Question types** | Multiple choice and advanced item types (drag-and-drop, hotspot) |
| **Passing score** | 700 out of 1000 points |
| **Languages** | English (CAT), plus Chinese, French, German, Japanese, Spanish (linear); Chinese offered only March/June/September/December |
| **Experience requirement** | Minimum 5 years cumulative, paid, full-time experience in **two or more** of the 8 domains below |
| **Experience waiver** | 1 year waived with a relevant bachelor's/master's degree, **or** an ISC2-approved credential |
| **No experience yet?** | Pass the exam and become an **Associate of ISC2** — you get 6 years to accumulate the required 5 years of experience |

Source: [CISSP Certification Exam Outline](https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline) and [CISSP certification page](https://www.isc2.org/Certifications/CISSP) (official ISC2 pages).

> **Maintenance rule:** ISC2 periodically revises the exam outline and domain weights (the last major revision was April 2024). Before your exam, re-verify the current outline and weights on the link above — do not rely solely on this document or any third-party prep material for exact figures.

---

## The 8 CISSP Domains and Exam Weights

| # | Domain | Weight |
|---|--------|--------|
| 1 | Security and Risk Management | **16%** |
| 2 | Asset Security | **10%** |
| 3 | Security Architecture and Engineering | **13%** |
| 4 | Communication and Network Security | **13%** |
| 5 | Identity and Access Management (IAM) | **13%** |
| 6 | Security Assessment and Testing | **12%** |
| 7 | Security Operations | **13%** |
| 8 | Software Development Security | **10%** |

No domain is optional — CISSP is a broad, generalist certification. A candidate cannot compensate for a weak domain with a strong one; study time should roughly track these weights, with Domain 1 (the largest, and the one whose concepts — risk, governance, ethics — thread through every other domain) getting the most attention.

Use `domains/01-security-risk-management.md` through `domains/08-software-development-security.md` for the full deep-dive on each, and the domain quizzes in `/quiz` to check recall.

---

## What CISSP Actually Tests

CISSP is deliberately **broad, not deep** — it certifies that you can think like a security *manager/architect* across all 8 domains, not that you are a hands-on specialist in any single one (that's what concentrations like CISSP-ISSAP/ISSEP/ISSMP, or other certs like OSCP/CCSP, are for).

The exam is written from a **"best answer, not the only correct answer"** perspective: several options may be technically true, but one is the *most appropriate* from a risk-management, governance-aware, big-picture security-leader viewpoint. When two answers both look correct, ask: *"Which one would the CISO actually choose?"*

---

## Advanced Item Types

Since 2016, CISSP has included non-multiple-choice items alongside traditional four-option questions:

- **Drag-and-drop** — place items in correct order (e.g., incident response phases) or match items to categories
- **Hotspot** — click the correct area/element in a diagram or scenario

These cannot be guessed via elimination the way multiple-choice can — they reward genuinely knowing sequences (e.g., the OSI layers, the incident response lifecycle, the ADM-style process orders) cold, not just recognizing the right-sounding phrase.

---

## Exam-Day Strategy

1. **Read every question fully before answering** — CAT questions cannot be skipped or revisited, so rushing costs you permanently.
2. **Eliminate obviously wrong answers first**, then choose the *most complete/appropriate* remaining option — not just the first one that sounds right.
3. **Watch for absolutes** ("always", "never", "only") — they are frequently, though not always, signals of a wrong answer in a domain built around risk and trade-offs.
4. **Think like a manager, not a technician** — when in doubt between "block everything" and "assess the risk and respond proportionately," CISSP usually wants the risk-based, proportionate answer.
5. **Manage your pace** — since CAT can end anywhere from 100–150 questions, don't try to "pace for 150." Focus on giving your best answer to the question in front of you.

---

## Pre-Exam Checklist

- [ ] Confirmed the current exam outline and domain weights on the official ISC2 page (do not assume this document is current)
- [ ] All 8 domain weights and their relative emphasis understood
- [ ] Bell-LaPadula vs. Biba vs. Clark-Wilson vs. Brewer-Nash distinguished cleanly
- [ ] IAAA order and MFA factor categories memorized
- [ ] Risk formulas (SLE, ARO, ALE) practiced until automatic
- [ ] Incident response lifecycle order memorized (Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned)
- [ ] OSI 7 layers memorized in both directions
- [ ] (ISC)² Code of Ethics canons known in priority order
- [ ] All 8 domain quizzes attempted at least once, weak domains re-read
- [ ] Confirmed testing center location/online proctoring requirements and government ID details with Pearson VUE

---

## Recommended Preparation Path

```
Week 1: Domain 1 — Security and Risk Management (largest domain, foundational vocabulary)
Week 2: Domain 2 — Asset Security + Domain 3 — Security Architecture and Engineering
Week 3: Domain 4 — Communication and Network Security
Week 4: Domain 5 — Identity and Access Management (IAM)
Week 5: Domain 6 — Security Assessment and Testing + Domain 7 — Security Operations
Week 6: Domain 8 — Software Development Security + full-domain revision
Week 7: All 8 domain quizzes, re-read every domain scoring below 8/10
Week 8: Timed full-length practice exam, exam-traps review, final revision
```

See `study-plan.md` for the full day-by-day 8-week plan.

---

## Key Resources

| Resource | Link | Priority |
|----------|------|----------|
| CISSP Certification Page | https://www.isc2.org/Certifications/CISSP | Essential |
| CISSP Certification Exam Outline | https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline | Essential |
| ISC2 Exam Registration | https://www.isc2.org/register-for-exam | Essential |
| ISC2 Community / Chapters | https://isc2chapters.isc2.org/ | Medium |
| ISC2 Official YouTube Channel | https://www.youtube.com/user/ISC2TV | Medium |

---

## Source Material

- ISC2's official CISSP certification page and exam outline (confirmed current-format details above)
- ISC2's published (ISC)² Code of Ethics
- General, vendor-neutral security engineering references consistent with the published exam outline's domain topics
