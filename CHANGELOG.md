# Changelog

All notable changes to the CISSP Certification Workspace will be documented here.

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
