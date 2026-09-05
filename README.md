# CISSP Certification Workspace

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://myintp.github.io/CISSPCertification/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

> **Learn the reasoning, not the answer key.**

This repository hosts a certification workspace for the **CISSP (Certified Information Systems Security Professional)** exam, administered by ISC2: a single-page app shell with a persistent certification map (left), a reading canvas (centre), and a per-sheet Study Desk for notes (bottom). Content covers all 8 CBK domains through a structured approach: **KNOW → RECOGNIZE → APPLY → DEFEND**.

## 🚀 Getting Started

1. **Visit the live site**: [https://myintp.github.io/CISSPCertification/](https://myintp.github.io/CISSPCertification/)
2. **Don't decide what to study** — the Today's Focus card on the Start sheet always shows your next day from the 8-week schedule; click it, do it, mark it done
3. **Use the left-hand map** to move through Get Started → Exam → Method → CBK Domains → Practice → Reference → Progress
4. **Read each domain sheet** — the full deep-dive is inlined directly below the summary, no extra click required
5. **Test yourself** on the `Practice` sheet — 80 domain knowledge-check questions, 10 per domain
6. **Jot notes as you go** in the Study Desk at the bottom — it remembers a separate note per sheet
7. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>K</kbd> anywhere to jump straight to a sheet by name

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
| `/resources` | Glossary, exam traps, acronym reference, mnemonics, quick-reference/formula cheat sheet, exam mindset guide |
| `/docs` | Exam overview, 8-week study plan, full mock exam guide, key links |
| `DEPLOYMENT.md` | Deployment instructions for GitHub Pages |
| `.github/workflows/link-check.yml` | Automated dead-link check on every push |

## 🛠️ Local Development

No build step, framework, or package installation is required — but the domain sheets and the
`docs.html` markdown viewer fetch `.md` files at runtime, and browsers block `fetch()` of local
files opened directly (`file://`). **Don't just double-click `index.html`** — serve the folder:

1. Clone this repository (or your fork)
2. From the repo root, run a static server, e.g. `python -m http.server 8000` (any static server
   works — VS Code's Live Server extension, `npx serve`, etc.)
3. Open `http://localhost:8000` in your browser
4. Edit files directly — no rebuild or restart needed, just refresh

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
