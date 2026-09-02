# Changelog

All notable changes to the CISSP Certification Workspace will be documented here.

## [1.0.1] - September 2026

### Added
- `resources/quick-reference.md` — a single cram-page formula/fact sheet (risk formulas with a worked example, symmetric key count formula, common port numbers, crypto algorithm status, fire classes, recovery site comparison, backup types).
- `resources/mindset-guide.md` — "think like a manager, not a technician": the Manager Filter, priority hierarchy, question-reading strategy, and common answer patterns.
- `docs/full-mock-exam.md` — guide for running a full timed 150-question mock exam once every domain check scores 9/10+, including third-party question-bank recommendations and a readiness-benchmark table.
- Clark-Wilson's CDI/UDI/IVP/TP vocabulary and access-triple explanation, folded into `domains/03-security-architecture-engineering.md`.
- Three additional model mnemonics (Biba/DIRT, Clark-Wilson/BANK, Brewer-Nash/WALL) in `resources/mnemonics.md`.

### Notes
- This repo replaced an earlier markdown-only version of `MyintP/CISSPCertification` (Jekyll-based, no app shell). Before overwriting, its unique content was reviewed for continued relevance: the items above were confirmed still accurate and useful and carried forward/adapted; page-navigation scaffolding (`_config.yml`, `index.md` files, `link-integrity.yml`) was superseded by this repo's own app shell and CI, and Jekyll domain/model reference files were superseded by this repo's own more detailed domain deep-dives and Quick Recall tables — both were left out rather than duplicated.

## [1.0.0] - September 2026

### Added
- Initial release of the CISSP Certification Workspace, built on the same app-shell design system as [SAPEACertification](https://github.com/MyintP/SAPEACertification): persistent certification map, reading canvas, and per-sheet Study Desk.
- Full deep-dive content for all 8 CBK domains (`/domains`), sized to each domain's current exam weight (16/10/13/13/13/12/13/10%), sourced against ISC2's own CISSP Certification Exam Outline (effective April 15, 2024).
- 80 domain knowledge-check questions (10 per domain) live on the Practice sheet, with immediate scoring, explanations, and a shared quiz tally — sourced from `/quiz`.
- `/resources`: glossary, exam-traps reference (paired concepts candidates most often confuse), acronym reference, and mnemonics.
- `/docs`: exam overview (confirmed exam mechanics vs. ISC2 sources), 8-week study plan, and a consolidated key-links page.
- Progress tracker (sheet 12) with one checkbox per domain plus foundation/readiness, persisted per-browser via `localStorage`.
- `docs.html` / `docs.js` markdown viewer for every "full deep-dive →" link, matching the SAP EA workspace's viewer.
- `.github/workflows/link-check.yml` for automated dead-link checking on every push.

### Notes
- Exam mechanics (format, duration, question count, passing score, domain weights) were verified directly against ISC2's live CISSP Certification Page and CISSP Certification Exam Outline at time of writing. ISC2 revises this outline periodically — see the Maintenance Rule in `README.md` and `docs/exam-overview.md`.
