# Contributing to the CISSP Certification Workspace

Thank you for considering contributing! This guide helps others prepare for the CISSP certification through structured, reasoning-focused learning.

## How to Contribute

### 1. Report Issues
- **Broken Links**: Check for dead links to ISC2 resources
- **Outdated Content**: ISC2 revises the exam outline periodically; flag outdated domain weights or figures
- **Clarity Issues**: Suggest better explanations for complex concepts

### 2. Suggest Improvements
- **New practice questions**: Propose realistic domain knowledge-check questions with correct-answer explanations
- **Domain deep-dive enhancements**: Help expand or clarify the `/domains` content
- **Additional resources**: Recommend official ISC2 materials

### 3. Code Contributions
- **Bug Fixes**: Correct errors in JavaScript, CSS, or HTML
- **Feature Enhancements**: Suggest navigation, accessibility, or UX improvements
- **Performance**: Optimize loading or reduce dependencies

## Process

1. **Open an issue** to discuss your proposed change
2. **Fork the repository**
3. **Create a feature branch** (`git checkout -b feature/your-feature`)
4. **Make your changes**
5. **Test locally**: Open `index.html` in your browser
6. **Submit a pull request** with a clear description of your changes

## Guidelines

### Content Updates
- Always link to official ISC2 sources when possible
- Maintain the reasoning-focused philosophy (KNOW → RECOGNIZE → APPLY → DEFEND)
- Keep a neutral, professional tone
- If adding a new quiz question, add it to both the relevant `quiz/domain-N-quiz.md` file *and* as a matching `quiz-card` in `index.html`'s Practice sheet — they must stay in sync

### Code Style
- HTML: Use semantic HTML5 elements
- CSS: Follow the existing responsive design patterns
- JavaScript: Write clean, well-commented code

### Versioning
- Update `CHANGELOG.md` for significant changes
- Bump the version number in `README.md` (vYYYY.MM format)

## Attribution

By contributing, you agree your contributions will be licensed under the project's proprietary license. You will be credited in the `CHANGELOG.md` or contributor list.

## Questions?

Open an issue or contact the maintainer for clarification.
