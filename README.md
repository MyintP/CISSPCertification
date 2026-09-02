# CISSP Certification Workspace

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://myintp.github.io/CISSPCertification/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

> **Learn the reasoning, not the answer key.**

This repository hosts a certification workspace for the **CISSP (Certified Information Systems Security Professional)** exam, administered by ISC2: a single-page app shell with a persistent certification map (left), a reading canvas (centre), and a per-sheet Study Desk for notes (bottom). Content covers all 8 CBK domains through a structured approach: **KNOW → RECOGNIZE → APPLY → DEFEND**.

## 🚀 Getting Started

1. **Visit the live site**: [https://myintp.github.io/CISSPCertification/](https://myintp.github.io/CISSPCertification/)
2. **Use the left-hand map** to move through Get Started → Exam → Method → CBK Domains → Practice → Reference → Progress
3. **Read each domain sheet**, then open its full deep-dive (linked at the bottom of the sheet)
4. **Test yourself** on the `Practice` sheet — 80 domain knowledge-check questions, 10 per domain
5. **Jot notes as you go** in the Study Desk at the bottom — it remembers a separate note per sheet
6. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>K</kbd> anywhere to jump straight to a sheet by name

## 📁 Repository Structure

| File/Folder | Description |
|-------------|-------------|
| `index.html` | The app shell: context bar, sidebar navigation, content workspace and Study Desk, containing every sheet (including Practice) |
| `docs.html` / `docs.js` | Lightweight markdown viewer used by every "full deep-dive →" link |
| `quiz.html` | Redirect stub to `index.html#sheet-practice`, kept so old links/bookmarks still resolve |
| `styles.css` | Design system: dark app shell, light reading canvas, one accent colour |
| `app.js` | Shell behaviour: sheet routing, sidebar/context bar sync, Study Desk notes, progress tracker, quiz scoring, search |
| `/domains` | Deep-dive notes for each of the 8 CBK domains |
| `/quiz` | Source material for the 80 domain knowledge-check questions on the Practice sheet |
| `/resources` | Glossary, exam traps, acronym reference, mnemonics |
| `/docs` | Exam overview, 8-week study plan, key links |
| `DEPLOYMENT.md` | Deployment instructions for GitHub Pages |
| `.github/workflows/link-check.yml` | Automated dead-link check on every push |

## 🛠️ Local Development

No build step, framework, or package installation is required. Simply:

1. Clone this repository
2. Open `index.html` in your browser
3. Edit files directly

## 📚 Primary Sources Used

This guide is maintained based on ISC2's own official pages:
- [CISSP Certification Page](https://www.isc2.org/Certifications/CISSP)
- [CISSP Certification Exam Outline](https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline)
- [ISC2 Exam Registration](https://www.isc2.org/register-for-exam)
- [ISC2 Community Chapters](https://isc2chapters.isc2.org/)

## 🔄 Maintenance Rule

> **Important**: ISC2's certification program is revised periodically (the current exam outline took effect April 15, 2024). Before each major revision, re-verify the current CISSP exam outline and domain weights. Do not hard-code exam details unless confirmed by ISC2.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Suggesting new practice questions
- Improving domain deep-dives
- Reporting broken links
- Proposing content updates

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

## 📄 License

This project is proprietary. See [LICENSE](LICENSE) for details.

## 📧 Contact

For questions or suggestions, please open an issue or contact the maintainer.

---

**Version**: v2026.09 | **Last Updated**: September 2026
