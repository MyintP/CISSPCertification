// ============================================================
// CISSP Certification Workspace - App Shell Script
// ============================================================

(function() {
    'use strict';

    const DEFAULT_SHEET = 'sheet-00';

    function slugify(text) {
        return text.toLowerCase().trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .slice(0, 60);
    }

    // ------------------------------------------------------------------
    // Markdown -> HTML (same parser as docs.js) - lets a domain sheet
    // inline its own deep-dive .md file directly, so "read the summary,
    // then click through to a separate page for the real content" isn't
    // a step the user has to take at all.
    // ------------------------------------------------------------------
    function mdEscapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function mdRenderInline(rawText) {
        const codeSpans = [];
        let text = rawText.replace(/`([^`]+)`/g, function(m, code) {
            codeSpans.push(mdEscapeHtml(code));
            return '@@CODE' + (codeSpans.length - 1) + '@@';
        });
        text = mdEscapeHtml(text);
        text = text.replace(/@@CODE(\d+)@@/g, function(m, i) {
            return '<code>' + codeSpans[Number(i)] + '</code>';
        });
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(m, label, url) {
            const external = /^https?:\/\//.test(url);
            return '<a href="' + url + '"' + (external ? ' target="_blank" rel="noopener"' : '') + '>' + label + '</a>';
        });
        text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');
        text = text.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
        return text;
    }

    function mdIsTableSeparator(line) {
        return /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(line);
    }

    function mdSplitRow(line) {
        let l = line.trim();
        if (l.charAt(0) === '|') l = l.slice(1);
        if (l.charAt(l.length - 1) === '|') l = l.slice(0, -1);
        return l.split('|').map(function(c) { return c.trim(); });
    }

    function mdCalloutClass(text) {
        if (text.indexOf('⚠') !== -1) return 'callout callout--warning';
        if (text.indexOf('💡') !== -1 || text.indexOf('🎯') !== -1) return 'callout callout--accent';
        return 'callout callout--soft';
    }

    function mdIsBlockStartLine(line) {
        const trimmed = line.trim();
        return /^BLOCK\d+$/.test(trimmed) ||
            /^(#{1,4})\s+/.test(line) ||
            /^(---+|\*\*\*+|___+)\s*$/.test(trimmed) ||
            /^>\s?/.test(line) ||
            /^\s*[-*]\s+/.test(line) ||
            /^\s*\d+\.\s+/.test(line) ||
            line.indexOf('|') !== -1;
    }

    function parseMarkdownToHtml(md) {
        md = md.replace(/\r\n?/g, '\n');
        const codeBlocks = [];
        md = md.replace(/```[a-zA-Z]*\n([\s\S]*?)```/g, function(m, code) {
            codeBlocks.push(code.replace(/\n$/, ''));
            return '\nBLOCK' + (codeBlocks.length - 1) + '\n';
        });

        const lines = md.split('\n');
        let html = '';
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];
            const trimmed = line.trim();

            if (trimmed === '') { i++; continue; }

            const blockMatch = trimmed.match(/^BLOCK(\d+)$/);
            if (blockMatch) {
                html += '<pre><code>' + mdEscapeHtml(codeBlocks[Number(blockMatch[1])]) + '</code></pre>\n';
                i++; continue;
            }

            if (/^(---+|\*\*\*+|___+)\s*$/.test(trimmed)) {
                html += '<hr class="sheet-divider">\n';
                i++; continue;
            }

            const headerMatch = line.match(/^(#{1,4})\s+(.*)$/);
            if (headerMatch) {
                const level = headerMatch[1].length;
                html += '<h' + level + '>' + mdRenderInline(headerMatch[2].trim()) + '</h' + level + '>\n';
                i++; continue;
            }

            if (line.indexOf('|') !== -1 && lines[i + 1] && mdIsTableSeparator(lines[i + 1])) {
                const headerCells = mdSplitRow(line);
                i += 2;
                const rows = [];
                while (i < lines.length && lines[i].indexOf('|') !== -1 && lines[i].trim() !== '') {
                    rows.push(mdSplitRow(lines[i]));
                    i++;
                }
                html += '<div class="table-scroll"><table class="table-standard"><thead><tr>';
                headerCells.forEach(function(c) { html += '<th>' + mdRenderInline(c) + '</th>'; });
                html += '</tr></thead><tbody>';
                rows.forEach(function(r) {
                    html += '<tr>';
                    r.forEach(function(c) { html += '<td>' + mdRenderInline(c) + '</td>'; });
                    html += '</tr>';
                });
                html += '</tbody></table></div>\n';
                continue;
            }

            if (/^>\s?/.test(line)) {
                const quoteLines = [];
                while (i < lines.length && /^>\s?/.test(lines[i])) {
                    quoteLines.push(lines[i].replace(/^>\s?/, ''));
                    i++;
                }
                const text = quoteLines.join(' ');
                html += '<div class="' + mdCalloutClass(text) + '"><p>' + mdRenderInline(text) + '</p></div>\n';
                continue;
            }

            if (/^\s*[-*]\s+/.test(line)) {
                const items = [];
                while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
                    items.push(mdRenderInline(lines[i].replace(/^\s*[-*]\s+/, '')));
                    i++;
                }
                html += '<ul>' + items.map(function(it) { return '<li>' + it + '</li>'; }).join('') + '</ul>\n';
                continue;
            }

            if (/^\s*\d+\.\s+/.test(line)) {
                const items = [];
                while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
                    items.push(mdRenderInline(lines[i].replace(/^\s*\d+\.\s+/, '')));
                    i++;
                }
                html += '<ol>' + items.map(function(it) { return '<li>' + it + '</li>'; }).join('') + '</ol>\n';
                continue;
            }

            const paraLines = [line];
            i++;
            while (i < lines.length && lines[i].trim() !== '' && !mdIsBlockStartLine(lines[i])) {
                paraLines.push(lines[i]);
                i++;
            }
            html += '<p>' + mdRenderInline(paraLines.join(' ')) + '</p>\n';
        }

        return html;
    }

    function loadInlineDeepDive(containerId, mdPath, sheetId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        fetch(mdPath)
            .then(function(res) {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.text();
            })
            .then(function(text) {
                container.innerHTML = parseMarkdownToHtml(text);
                refreshHeadingsForSheetId(sheetId);
            })
            .catch(function(err) {
                container.innerHTML = '<div class="pattern pattern--important"><span class="pattern__label">Couldn\'t load</span><p>' +
                    mdEscapeHtml(err.message) + ' — <a href="docs.html?file=' + mdPath + '" target="_blank" rel="noopener">open it directly →</a></p></div>';
            });
    }

    // ------------------------------------------------------------------
    // Sheet + heading index (derived from the DOM - not duplicated data)
    // ------------------------------------------------------------------
    let liveSheetIndex = null; // populated once by buildSheetIndex(); re-scanned per-sheet after async content (e.g. inline deep-dives) loads

    // Assign deterministic, URL-safe anchor IDs to a sheet's headings
    // (h2/h3/h4) so search can jump to a subsection and links stay stable.
    // Exported as its own function so content added after initial page
    // load (e.g. a fetched deep-dive) can be folded into the same index.
    function scanHeadingsForSheet(sheet) {
        sheet.headings = [];
        sheet.el.querySelectorAll('h2, h3, h4').forEach(h => {
            if (!h.id) {
                const slug = slugify(h.textContent);
                if (slug) h.id = `${sheet.id}-${slug}`;
            }
            if (h.id) sheet.headings.push({ id: h.id, text: h.textContent.trim(), el: h });
        });
    }

    function buildSheetIndex() {
        const sheets = [...document.querySelectorAll('.sheet')].map(el => ({
            id: el.id,
            title: el.dataset.title || el.id,
            group: el.dataset.group || '',
            code: el.dataset.code || '',
            el
        }));

        sheets.forEach(scanHeadingsForSheet);
        liveSheetIndex = sheets;
        return sheets;
    }

    // Called once a sheet's content has changed asynchronously (inline
    // deep-dive fetch resolved) - re-scans just that sheet's headings so
    // search picks up the new content without a full index rebuild.
    function refreshHeadingsForSheetId(sheetId) {
        if (!liveSheetIndex) return;
        const sheet = liveSheetIndex.find(s => s.id === sheetId);
        if (sheet) scanHeadingsForSheet(sheet);
    }

    // ------------------------------------------------------------------
    // Progress Tracker (Sheet 12 checklist) - drives context bar %
    // ------------------------------------------------------------------
    const trackerKey = 'cisspProgress';

    function loadProgress() {
        try {
            const saved = localStorage.getItem(trackerKey);
            if (saved) return JSON.parse(saved);
        } catch (e) { console.log('Error loading progress:', e); }
        return {
            foundation: false, d1: false, d2: false, d3: false, d4: false,
            d5: false, d6: false, d7: false, d8: false, readiness: false
        };
    }

    function saveProgress(data) {
        try { localStorage.setItem(trackerKey, JSON.stringify(data)); }
        catch (e) { console.log('Error saving progress:', e); }
    }

    function progressStats() {
        const progress = loadProgress();
        const total = Object.keys(progress).length;
        const completed = Object.values(progress).filter(v => v === true).length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { total, completed, percentage };
    }

    function updateProgressDisplays() {
        const { total, completed, percentage } = progressStats();
        const progressDisplay = document.getElementById('progressDisplay');
        if (progressDisplay) progressDisplay.textContent = `${completed}/${total} (${percentage}%)`;
        const ctxProgressValue = document.getElementById('ctxProgressValue');
        if (ctxProgressValue) ctxProgressValue.textContent = `${percentage}%`;
        const trackerGauge = document.getElementById('trackerGauge');
        if (trackerGauge) trackerGauge.innerHTML = svgGauge(percentage, { size: 56, stroke: 6 });
    }

    // ------------------------------------------------------------------
    // Circular progress gauge (inline SVG) - shared by the domain quiz
    // score line and the Tracker sheet's checklist percentage.
    // ------------------------------------------------------------------
    function svgGauge(pct, opts) {
        opts = opts || {};
        const size = opts.size || 56;
        const stroke = opts.stroke || 6;
        const r = (size - stroke) / 2;
        const c = 2 * Math.PI * r;
        const clamped = Math.max(0, Math.min(100, pct || 0));
        const offset = c - (clamped / 100) * c;
        const cx = size / 2, cy = size / 2;
        return `<svg class="gauge-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${clamped}% complete">
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--paper-border)" stroke-width="${stroke}"></circle>
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}" transform="rotate(-90 ${cx} ${cy})"></circle>
        </svg>`;
    }

    // ------------------------------------------------------------------
    // Quiz Progress (persisted score, shown in tracker + practice sheet)
    // ------------------------------------------------------------------
    const quizProgressKey = 'cisspQuizProgress';

    function trackQuizProgress(score) {
        try {
            const current = JSON.parse(localStorage.getItem(quizProgressKey) || '{}');
            current.lastScore = score;
            current.attempts = (current.attempts || 0) + 1;
            current.lastAttempt = new Date().toISOString();
            localStorage.setItem(quizProgressKey, JSON.stringify(current));
        } catch (e) { console.log('Error tracking quiz progress:', e); }
    }

    function getQuizProgress() {
        try {
            const data = localStorage.getItem(quizProgressKey);
            return data ? JSON.parse(data) : null;
        } catch (e) { console.log('Error getting quiz progress:', e); return null; }
    }

    function displayQuizProgress() {
        const progress = getQuizProgress();
        const text = progress
            ? `📊 Quiz: ${progress.lastScore || 0}% (${progress.attempts || 0} attempt${progress.attempts === 1 ? '' : 's'})`
            : '📊 Quiz: Not started yet';
        document.querySelectorAll('.js-quiz-progress-display').forEach(el => { el.textContent = text; });
    }

    // ------------------------------------------------------------------
    // Scenario Quiz Logic (Practice sheet)
    // ------------------------------------------------------------------
    const quizState = { answered: {}, correct: {} };

    function totalQuizQuestions() {
        return document.querySelectorAll('.quiz-options').length;
    }

    function updateLiveQuizTally() {
        const tally = document.getElementById('quizLiveTally');
        if (!tally) return;
        const total = totalQuizQuestions();
        const answeredCount = Object.keys(quizState.answered).length;
        const correctCount = Object.values(quizState.correct).filter(Boolean).length;
        if (answeredCount === 0) {
            tally.textContent = `Answer questions below to track your score (0/${total} answered)`;
        } else {
            const pct = Math.round((correctCount / answeredCount) * 100);
            tally.textContent = `${answeredCount}/${total} answered · ${correctCount} correct (${pct}%)`;
        }
    }

    function checkAnswer(questionName, correctAnswer, feedbackId) {
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedback = document.getElementById(feedbackId);
        const options = document.querySelectorAll(`input[name="${questionName}"]`);

        if (!selected) { alert('Please select an answer first.'); return; }

        options.forEach(opt => opt.closest('label').classList.remove('selected', 'correct', 'wrong'));
        feedback.classList.add('show');

        options.forEach(opt => {
            const label = opt.closest('label');
            if (opt.value === correctAnswer) label.classList.add('correct');
            else if (opt.checked && opt.value !== correctAnswer) label.classList.add('wrong');
        });

        document.getElementById(feedbackId).closest('.quiz-card').querySelector('.quiz-submit').disabled = true;

        quizState.answered[questionName] = true;
        quizState.correct[questionName] = selected.value === correctAnswer;
        updateLiveQuizTally();

        const total = totalQuizQuestions();
        if (Object.keys(quizState.answered).length === total && total > 0) {
            const correctCount = Object.values(quizState.correct).filter(Boolean).length;
            trackQuizProgress(Math.round((correctCount / total) * 100));
            displayQuizProgress();
        }
    }

    function resetAllQuizzes() {
        if (!confirm('Reset all quiz answers? Your progress will be cleared.')) return;

        document.querySelectorAll('.quiz-card').forEach(card => {
            card.querySelectorAll('input[type="radio"]').forEach(input => {
                input.checked = false;
                input.closest('label').classList.remove('selected', 'correct', 'wrong');
            });
            card.querySelectorAll('.feedback-text').forEach(fb => fb.classList.remove('show'));
            const submitBtn = card.querySelector('.quiz-submit');
            if (submitBtn) submitBtn.disabled = false;
        });

        quizState.answered = {};
        quizState.correct = {};
        updateLiveQuizTally();

        const quizzesSection = document.getElementById('quizzes');
        if (quizzesSection) quizzesSection.scrollIntoView({ behavior: 'smooth' });
    }

    window.checkAnswer = checkAnswer;
    window.resetAllQuizzes = resetAllQuizzes;

    // ------------------------------------------------------------------
    // Study Desk: per-sheet notes, resize, collapse
    // ------------------------------------------------------------------
    const notesKey = 'cisspNotes';
    const studyDeskStateKey = 'cisspStudyDeskState';

    function loadNotes() {
        try { return JSON.parse(localStorage.getItem(notesKey) || '{}'); }
        catch (e) { return {}; }
    }

    function saveNote(sheetId, text) {
        try {
            const notes = loadNotes();
            if (text) notes[sheetId] = text; else delete notes[sheetId];
            localStorage.setItem(notesKey, JSON.stringify(notes));
        } catch (e) { console.log('Error saving note:', e); }
    }

    function hasNote(sheetId) {
        const notes = loadNotes();
        return !!(notes[sheetId] && notes[sheetId].trim());
    }

    function noteExcerpt(text) {
        const oneLine = text.trim().replace(/\s+/g, ' ');
        return oneLine.length > 90 ? oneLine.slice(0, 90) + '…' : oneLine;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function loadStudyDeskState() {
        try { return JSON.parse(localStorage.getItem(studyDeskStateKey) || '{}'); }
        catch (e) { return {}; }
    }

    function saveStudyDeskState(state) {
        try { localStorage.setItem(studyDeskStateKey, JSON.stringify(state)); }
        catch (e) { console.log('Error saving study desk state:', e); }
    }

    // ------------------------------------------------------------------
    // Bookmarks (per sheet, shown as the context bar star)
    // ------------------------------------------------------------------
    const bookmarksKey = 'cisspBookmarks';

    function loadBookmarks() {
        try { return JSON.parse(localStorage.getItem(bookmarksKey) || '{}'); }
        catch (e) { return {}; }
    }

    function saveBookmarks(data) {
        try { localStorage.setItem(bookmarksKey, JSON.stringify(data)); }
        catch (e) { console.log('Error saving bookmarks:', e); }
    }

    // ------------------------------------------------------------------
    // Last visited sheet (drives "Continue Studying" in Review)
    // ------------------------------------------------------------------
    const lastVisitedKey = 'cisspLastVisited';
    const REVIEW_SHEET_ID = 'sheet-review';

    function saveLastVisited(sheetId) {
        try { localStorage.setItem(lastVisitedKey, sheetId); }
        catch (e) { console.log('Error saving last-visited sheet:', e); }
    }

    function getLastVisitedSheet() {
        try { return localStorage.getItem(lastVisitedKey); }
        catch (e) { return null; }
    }

    // ------------------------------------------------------------------
    // Review Hub: derives its state from the same sheet index, bookmarks,
    // notes and quiz progress everything else already uses - no second
    // list of sheets, no fabricated metrics.
    // ------------------------------------------------------------------
    function getBookmarkedSheets(sheetIndex) {
        const bookmarks = loadBookmarks();
        return sheetIndex.filter(s => s.id !== REVIEW_SHEET_ID && bookmarks[s.id]);
    }

    function getNotedSheets(sheetIndex) {
        const notes = loadNotes();
        return sheetIndex
            .filter(s => s.id !== REVIEW_SHEET_ID && notes[s.id] && notes[s.id].trim())
            .map(s => ({ sheet: s, excerpt: noteExcerpt(notes[s.id]) }));
    }

    function renderReviewSection(title, count, bodyHtml) {
        const badge = count === null ? '' : `<span class="review-section__count">${count}</span>`;
        return `<section class="review-section">
            <h2 class="review-section__title">${title}${badge}</h2>
            <div class="review-section__body">${bodyHtml}</div>
        </section>`;
    }

    function renderReviewItem(sheet, metaHtml, ctaHtml) {
        return `<a class="review-item" href="#${sheet.id}">
            <span class="review-item__code">${escapeHtml(sheet.code)}</span>
            <span class="review-item__body">
                <span class="review-item__title">${escapeHtml(sheet.title)}</span>
                ${metaHtml}
            </span>
            ${ctaHtml || ''}
        </a>`;
    }

    function renderReviewHub(sheetIndex, filter) {
        const container = document.getElementById('reviewHubContent');
        if (!container) return;

        const bookmarked = getBookmarkedSheets(sheetIndex);
        const noted = getNotedSheets(sheetIndex);
        const practice = getQuizProgress();
        const lastVisitedId = getLastVisitedSheet();
        const lastVisited = lastVisitedId ? sheetIndex.find(s => s.id === lastVisitedId) : null;

        const showAll = filter === 'all';
        const isEmpty = bookmarked.length === 0 && noted.length === 0 && !practice;
        let html = '';

        if (lastVisited) {
            html += `<div class="review-continue">
                <span class="review-continue__label">Continue Studying</span>
                <a class="review-continue__link" href="#${lastVisited.id}">
                    <span class="review-item__code">${escapeHtml(lastVisited.code)}</span> ${escapeHtml(lastVisited.title)}
                    <span class="review-continue__cta">Continue where you left off →</span>
                </a>
            </div>`;
        }

        if (isEmpty) {
            html += `<div class="review-empty-state">
                <p><strong>Nothing here yet.</strong></p>
                <p>Bookmark a sheet or add a Study Desk note while studying and it will appear here.</p>
            </div>`;
        } else {
            if (showAll || filter === 'bookmarked') {
                const body = bookmarked.length
                    ? bookmarked.map(s => renderReviewItem(
                        s,
                        `<span class="review-item__meta">★ Bookmarked${hasNote(s.id) ? ' <span class="review-item__flag">✎ Has notes</span>' : ''}</span>`
                    )).join('')
                    : '<p class="review-empty">No bookmarks yet — star a sheet while studying to add it here.</p>';
                html += renderReviewSection('Bookmarked', bookmarked.length, body);
            }

            if (showAll || filter === 'notes') {
                const body = noted.length
                    ? noted.map(n => renderReviewItem(
                        n.sheet,
                        `<span class="review-item__note">"${escapeHtml(n.excerpt)}"</span>`
                    )).join('')
                    : '<p class="review-empty">No notes yet — jot something in the Study Desk while studying.</p>';
                html += renderReviewSection('Your Notes', noted.length, body);
            }

            if (showAll || filter === 'practice') {
                const body = practice
                    ? `<a class="review-item" href="#sheet-practice">
                        <span class="review-item__body">
                            <span class="review-item__title">Live Defense</span>
                            <span class="review-item__meta">Last attempt: ${practice.lastScore}% · ${practice.attempts} attempt${practice.attempts === 1 ? '' : 's'}</span>
                        </span>
                        <span class="review-item__cta">Continue →</span>
                    </a>`
                    : '<p class="review-empty">No practice attempts yet.</p><a class="review-item-link" href="#sheet-practice">Start practice →</a>';
                html += renderReviewSection('Practice', null, body);
            }
        }

        container.innerHTML = html;
    }

    // ------------------------------------------------------------------
    // Generic keyed checklist store (id->bool, keyed by a storage key) -
    // used by the study schedule so any number of arbitrary checkboxes
    // can be added anywhere without a new storage scheme each time.
    // ------------------------------------------------------------------
    const scheduleChecklistKey = 'cisspSchedule';

    function loadChecklist(storageKey) {
        try { return JSON.parse(localStorage.getItem(storageKey) || '{}'); }
        catch (e) { return {}; }
    }

    function toggleChecklistItem(storageKey, itemId, checked) {
        try {
            const state = loadChecklist(storageKey);
            state[itemId] = checked;
            localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (e) { console.log('Error saving checklist:', storageKey, e); }
    }

    function applyChecklistState(storageKey, selector) {
        const state = loadChecklist(storageKey);
        document.querySelectorAll(selector).forEach(function(cb) {
            if (state[cb.dataset.checkId]) cb.checked = true;
        });
    }

    // ------------------------------------------------------------------
    // Study Schedule: the 8-week plan from docs/study-plan.md as a
    // self-paced (not calendar-anchored) checklist. "Next" is always
    // just the first unchecked day - skip a day, fall behind a real
    // calendar and it doesn't matter, you pick up exactly where you left off.
    // ------------------------------------------------------------------
    const SCHEDULE = [
        { id: 'w1-mon', week: 1, day: 'Mon', task: 'Read Domain 1 fully - CIA triad, DAD, authenticity, non-repudiation.', link: '#sheet-03' },
        { id: 'w1-tue', week: 1, day: 'Tue', task: 'Governance hierarchy: policy vs. standard vs. procedure vs. guideline vs. baseline; due care vs. due diligence.', link: '#sheet-03' },
        { id: 'w1-wed', week: 1, day: 'Wed', task: 'Legal systems, IP protections, major regulations (GDPR, HIPAA, PCI DSS, SOX).', link: '#sheet-03' },
        { id: 'w1-thu', week: 1, day: 'Thu', task: 'Risk management loop: SLE, ARO, ALE, and the four risk treatments.', link: '#sheet-03' },
        { id: 'w1-fri', week: 1, day: 'Fri', task: 'Threat modeling (STRIDE/DREAD/PASTA), BCP/DRP, BIA/MTD/RTO/RPO.', link: '#sheet-03' },
        { id: 'w1-sat', week: 1, day: 'Sat', task: 'Code of Ethics + personnel security, then take the Domain 1 knowledge check - target 9+/10.', link: '#sheet-practice' },
        { id: 'w1-sun', week: 1, day: 'Sun', task: 'Rest, or a light review of the exam-traps for Domain 1.', link: 'docs.html?file=resources/exam-traps.md' },

        { id: 'w2-mon', week: 2, day: 'Mon', task: 'Read Domain 2 fully - data lifecycle and classification schemes.', link: '#sheet-04' },
        { id: 'w2-tue', week: 2, day: 'Tue', task: 'Data roles: Owner, Custodian, Controller, Processor, Steward.', link: '#sheet-04' },
        { id: 'w2-wed', week: 2, day: 'Wed', task: 'Data states, remanence, and the sanitization hierarchy.', link: '#sheet-04' },
        { id: 'w2-thu', week: 2, day: 'Thu', task: 'Take the Domain 2 knowledge check, then start Domain 3 with the security models overview.', link: '#sheet-practice' },
        { id: 'w2-fri', week: 2, day: 'Fri', task: 'Drill Bell-LaPadula vs. Biba vs. Clark-Wilson vs. Brewer-Nash until automatic.', link: '#sheet-05' },
        { id: 'w2-sat', week: 2, day: 'Sat', task: 'TCB, reference monitor, and evaluation criteria (TCSEC, Common Criteria).', link: '#sheet-05' },
        { id: 'w2-sun', week: 2, day: 'Sun', task: 'Rest, or review the glossary in full.', link: 'docs.html?file=resources/glossary.md' },

        { id: 'w3-mon', week: 3, day: 'Mon', task: 'Symmetric vs. asymmetric crypto, hybrid systems, hashing.', link: '#sheet-05' },
        { id: 'w3-tue', week: 3, day: 'Tue', task: 'Digital signatures, PKI components, key management.', link: '#sheet-05' },
        { id: 'w3-wed', week: 3, day: 'Wed', task: 'Physical security layers and fire suppression classes, then take the Domain 3 knowledge check.', link: '#sheet-practice' },
        { id: 'w3-thu', week: 3, day: 'Thu', task: 'Domain 4: the OSI model in both directions, TCP vs. UDP.', link: '#sheet-06' },
        { id: 'w3-fri', week: 3, day: 'Fri', task: 'Network devices, segmentation, DMZ, and zero trust.', link: '#sheet-06' },
        { id: 'w3-sat', week: 3, day: 'Sat', task: 'Secure protocol replacements table, IPsec (AH vs. ESP, transport vs. tunnel).', link: '#sheet-06' },
        { id: 'w3-sun', week: 3, day: 'Sun', task: 'Rest, or review the quick-reference cheat sheet.', link: 'docs.html?file=resources/quick-reference.md' },

        { id: 'w4-mon', week: 4, day: 'Mon', task: 'Wireless security evolution (WEP → WPA3) and the common network attacks table.', link: '#sheet-06' },
        { id: 'w4-tue', week: 4, day: 'Tue', task: 'Take the Domain 4 knowledge check, then start Domain 5 with IAAA.', link: '#sheet-practice' },
        { id: 'w4-wed', week: 4, day: 'Wed', task: 'Authentication factors, MFA rules, biometric FAR/FRR/CER.', link: '#sheet-07' },
        { id: 'w4-thu', week: 4, day: 'Thu', task: 'Access control models: DAC, MAC, RBAC, ABAC, rule-based.', link: '#sheet-07' },
        { id: 'w4-fri', week: 4, day: 'Fri', task: 'Identity lifecycle, Joiner-Mover-Leaver, privilege creep, recertification.', link: '#sheet-07' },
        { id: 'w4-sat', week: 4, day: 'Sat', task: 'Federation (SAML, OAuth, OIDC, Kerberos), then take the Domain 5 knowledge check.', link: '#sheet-practice' },
        { id: 'w4-sun', week: 4, day: 'Sun', task: 'Rest, or review the mnemonics page.', link: 'docs.html?file=resources/mnemonics.md' },

        { id: 'w5-mon', week: 5, day: 'Mon', task: 'Domain 6: assessment vs. testing vs. audit; vulnerability assessment vs. penetration test.', link: '#sheet-08' },
        { id: 'w5-tue', week: 5, day: 'Tue', task: 'Pentest knowledge levels (black/white/gray box) and Rules of Engagement.', link: '#sheet-08' },
        { id: 'w5-wed', week: 5, day: 'Wed', task: 'SAST, DAST, IAST, fuzzing, SCA, and SIEM/log management.', link: '#sheet-08' },
        { id: 'w5-thu', week: 5, day: 'Thu', task: 'SOC 1/2/3 and Type I vs. Type II, then take the Domain 6 knowledge check.', link: '#sheet-practice' },
        { id: 'w5-fri', week: 5, day: 'Fri', task: 'Domain 7: the incident response lifecycle, event vs. incident vs. breach.', link: '#sheet-09' },
        { id: 'w5-sat', week: 5, day: 'Sat', task: 'IDS vs. IPS, change/configuration/patch management.', link: '#sheet-09' },
        { id: 'w5-sun', week: 5, day: 'Sun', task: 'Rest, or review the mindset guide.', link: 'docs.html?file=resources/mindset-guide.md' },

        { id: 'w6-mon', week: 6, day: 'Mon', task: 'DR site types (hot/warm/cold) and backup types (full/incremental/differential).', link: '#sheet-09' },
        { id: 'w6-tue', week: 6, day: 'Tue', task: 'Order of volatility, chain of custody, evidence types.', link: '#sheet-09' },
        { id: 'w6-wed', week: 6, day: 'Wed', task: 'Take the Domain 7 knowledge check, then start Domain 8 with SDLC models and shift-left.', link: '#sheet-practice' },
        { id: 'w6-thu', week: 6, day: 'Thu', task: 'OWASP-style vulnerability classes (injection, XSS, CSRF, buffer overflow).', link: '#sheet-10' },
        { id: 'w6-fri', week: 6, day: 'Fri', task: 'Aggregation vs. inference, polyinstantiation, SBOM and supply-chain risk.', link: '#sheet-10' },
        { id: 'w6-sat', week: 6, day: 'Sat', task: 'Take the Domain 8 knowledge check and review CMMI maturity levels.', link: '#sheet-practice' },
        { id: 'w6-sun', week: 6, day: 'Sun', task: 'Rest.', link: '#sheet-review' },

        { id: 'w7-mon', week: 7, day: 'Mon', task: 'Revision: re-read Domain 1, focusing only on sections and traps you got wrong.', link: '#sheet-03' },
        { id: 'w7-tue', week: 7, day: 'Tue', task: 'Revision: re-read Domains 2 and 3.', link: '#sheet-04' },
        { id: 'w7-wed', week: 7, day: 'Wed', task: 'Revision: re-read Domains 4 and 5.', link: '#sheet-06' },
        { id: 'w7-thu', week: 7, day: 'Thu', task: 'Revision: re-read Domains 6 and 7.', link: '#sheet-08' },
        { id: 'w7-fri', week: 7, day: 'Fri', task: 'Revision: re-read Domain 8.', link: '#sheet-10' },
        { id: 'w7-sat', week: 7, day: 'Sat', task: 'Re-take every domain knowledge check cold - flag any domain scoring below 8/10.', link: '#sheet-practice' },
        { id: 'w7-sun', week: 7, day: 'Sun', task: 'Rest, or a light pass over anything flagged in your Review Queue.', link: '#sheet-review' },

        { id: 'w8-mon', week: 8, day: 'Mon', task: 'Run a timed full-length practice exam - see the Full Mock Exam Guide.', link: 'docs.html?file=docs/full-mock-exam.md' },
        { id: 'w8-tue', week: 8, day: 'Tue', task: 'Review every missed question - knowledge gap or a "best answer" reasoning miss?', link: 'docs.html?file=docs/full-mock-exam.md' },
        { id: 'w8-wed', week: 8, day: 'Wed', task: 'Re-read the exam traps in full.', link: 'docs.html?file=resources/exam-traps.md' },
        { id: 'w8-thu', week: 8, day: 'Thu', task: 'Re-read the glossary in full.', link: 'docs.html?file=resources/glossary.md' },
        { id: 'w8-fri', week: 8, day: 'Fri', task: 'Light review only - the Quick Recall table across all 8 domains. No new content.', link: '#sheet-review' },
        { id: 'w8-sat', week: 8, day: 'Sat', task: 'Exam day (or final revision if your exam is booked later).', link: '#sheet-11' }
    ];

    const WEEK_TITLES = {
        1: 'Domain 1 — Security and Risk Management', 2: 'Domain 2 — Asset Security + Domain 3 start',
        3: 'Domain 3 — Security Architecture & Engineering', 4: 'Domain 4 — Network Security + Domain 5 start',
        5: 'Domain 6 — Assessment & Testing + Domain 7 start', 6: 'Domain 7 — Security Operations + Domain 8',
        7: 'Full-Domain Revision', 8: 'Exam Readiness'
    };

    function getScheduleState() { return loadChecklist(scheduleChecklistKey); }
    function isDayDone(id) { return !!getScheduleState()[id]; }
    function getNextScheduleItem() {
        return SCHEDULE.find(function(item) { return !isDayDone(item.id); }) || null;
    }

    // A link that stays inside this app (a #sheet-x anchor) navigates the
    // current tab - it's just moving around the hub. Anything else (an
    // official ISC2 page, or even docs.html for the raw file) is "the
    // second window": it must open in a new tab so the hub stays put and
    // doesn't get replaced by the material it's pointing at.
    function scheduleLinkAttrs(link) {
        return link.charAt(0) === '#' ? '' : ' target="_blank" rel="noopener"';
    }

    function renderTodayFocus() {
        const card = document.getElementById('todayFocusCard');
        if (!card) return;
        const state = getScheduleState();
        const doneCount = SCHEDULE.filter(function(item) { return state[item.id]; }).length;
        const next = getNextScheduleItem();

        if (!next) {
            card.innerHTML = `<p class="today-focus__label">🎉 Schedule complete</p>
                <p class="today-focus__task">All ${SCHEDULE.length} days checked off. Spend today on your <a href="#sheet-review">Review Queue</a> and a full mock exam.</p>`;
            return;
        }

        const dayNumber = SCHEDULE.indexOf(next) + 1;
        const linkHtml = next.link ? `<a class="btn btn-primary" href="${next.link}"${scheduleLinkAttrs(next.link)}>Start this →</a>` : '';
        card.innerHTML = `
            <p class="today-focus__label">Week ${next.week} · ${next.day} · Day ${dayNumber} of ${SCHEDULE.length}</p>
            <p class="today-focus__task">${next.task}</p>
            <div class="today-focus__actions">
                ${linkHtml}
                <button type="button" class="btn btn-secondary" id="markDayDoneBtn" data-day-id="${next.id}">✓ Mark done</button>
            </div>
            <p class="today-focus__progress">${doneCount}/${SCHEDULE.length} days complete · <a href="#sheet-schedule">see full plan →</a></p>`;
    }

    function renderScheduleSheet() {
        const container = document.getElementById('scheduleList');
        if (!container) return;
        const weeks = {};
        SCHEDULE.forEach(function(item) { (weeks[item.week] = weeks[item.week] || []).push(item); });

        const html = Object.keys(weeks).map(function(weekNum) {
            const items = weeks[weekNum];
            const doneInWeek = items.filter(function(item) { return isDayDone(item.id); }).length;
            const rows = items.map(function(item) {
                const linkHtml = item.link ? ` <a href="${item.link}"${scheduleLinkAttrs(item.link)}>open →</a>` : '';
                return `<label class="tracker-item schedule-checklist"><input type="checkbox" data-check-id="${item.id}"><span><strong>${item.day}</strong> — ${item.task}${linkHtml}</span></label>`;
            }).join('');
            return `<details class="schedule-week"${Number(weekNum) === 1 ? ' open' : ''}>
                <summary class="schedule-week__summary">Week ${weekNum} — ${WEEK_TITLES[weekNum]} <span class="schedule-week__count">${doneInWeek}/${items.length}</span></summary>
                <div class="schedule-week__days">${rows}</div>
            </details>`;
        }).join('');

        container.innerHTML = html;
    }

    // ------------------------------------------------------------------
    // Study Timer: a simple Pomodoro-style focus/break countdown. Runs
    // in-memory (no persistence) - it keeps ticking across sheet
    // navigation within the same page load, but resets on reload, same
    // as any other Pomodoro app.
    // ------------------------------------------------------------------
    const timerState = { focusLength: 25 * 60, breakLength: 5 * 60, mode: 'focus', remaining: 25 * 60, running: false, intervalId: null };

    function formatTimer(totalSeconds) {
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    function updateTimerDisplay() {
        const displayEl = document.getElementById('timerDisplay');
        if (!displayEl) return;
        displayEl.textContent = formatTimer(timerState.remaining);
        const modeEl = document.getElementById('timerModeLabel');
        if (modeEl) modeEl.textContent = timerState.mode === 'focus' ? 'Focus' : 'Break';
        const total = timerState.mode === 'focus' ? timerState.focusLength : timerState.breakLength;
        const pct = total > 0 ? Math.round(((total - timerState.remaining) / total) * 100) : 0;
        const gaugeEl = document.getElementById('timerGauge');
        if (gaugeEl) gaugeEl.innerHTML = svgGauge(pct, { size: 96, stroke: 8 });
        const startBtn = document.getElementById('timerStartBtn');
        const pauseBtn = document.getElementById('timerPauseBtn');
        if (startBtn) startBtn.hidden = timerState.running;
        if (pauseBtn) pauseBtn.hidden = !timerState.running;
    }

    function timerTick() {
        if (timerState.remaining <= 0) {
            clearInterval(timerState.intervalId);
            timerState.running = false;
            timerState.mode = timerState.mode === 'focus' ? 'break' : 'focus';
            timerState.remaining = timerState.mode === 'focus' ? timerState.focusLength : timerState.breakLength;
            updateTimerDisplay();
            const card = document.getElementById('studyTimerCard');
            if (card) {
                card.classList.add('timer-flash');
                setTimeout(function() { card.classList.remove('timer-flash'); }, 1800);
            }
            document.title = (timerState.mode === 'break' ? '☕ Break time!' : '🎯 Back to focus!') + ' · CISSP Workspace';
            return;
        }
        timerState.remaining -= 1;
        updateTimerDisplay();
    }

    function startTimer() {
        if (timerState.running) return;
        timerState.running = true;
        timerState.intervalId = setInterval(timerTick, 1000);
        updateTimerDisplay();
    }

    function pauseTimer() {
        timerState.running = false;
        clearInterval(timerState.intervalId);
        updateTimerDisplay();
    }

    function resetTimer() {
        pauseTimer();
        timerState.mode = 'focus';
        timerState.remaining = timerState.focusLength;
        updateTimerDisplay();
    }

    function setTimerPreset(focusMin, breakMin) {
        pauseTimer();
        timerState.focusLength = focusMin * 60;
        timerState.breakLength = breakMin * 60;
        timerState.mode = 'focus';
        timerState.remaining = timerState.focusLength;
        updateTimerDisplay();
    }

    // ------------------------------------------------------------------
    // App shell wiring
    // ------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        // Opened as a local file rather than served over http(s)? fetch()
        // of local .md files is blocked by the browser in this mode, so
        // domain deep-dives and docs.html would otherwise fail silently.
        if (location.protocol === 'file:') {
            const banner = document.getElementById('fileProtocolBanner');
            if (banner) banner.hidden = false;
        }

        const sheetIndex = buildSheetIndex();
        const sheetsById = new Map(sheetIndex.map(s => [s.id, s]));

        const contentCanvas = document.getElementById('contentCanvas');
        const ctxTitle = document.getElementById('ctxTitle');
        const ctxPath = document.getElementById('ctxPath');
        const bookmarkToggle = document.getElementById('bookmarkToggle');
        const studyDeskEditor = document.getElementById('studyDeskEditor');
        const studyDeskScope = document.getElementById('studyDeskScope');
        const studyDeskSaved = document.getElementById('studyDeskSaved');
        const readingProgress = document.getElementById('readingProgress');

        let currentSheetId = null;

        function validSheetId(id) {
            return id && sheetsById.has(id) ? id : DEFAULT_SHEET;
        }

        // Real, derived signal only: which nav items have a saved note
        function refreshNoteIndicators() {
            document.querySelectorAll('.nav-item').forEach(a => {
                const id = (a.getAttribute('href') || '').replace(/^#/, '');
                a.classList.toggle('has-note', hasNote(id));
            });
        }

        let currentReviewFilter = 'all';
        function refreshReviewHubIfVisible() {
            if (currentSheetId === REVIEW_SHEET_ID) renderReviewHub(sheetIndex, currentReviewFilter);
        }

        function updateReadingProgress() {
            if (!readingProgress || !contentCanvas) return;
            const scrollable = contentCanvas.scrollHeight - contentCanvas.clientHeight;
            const pct = scrollable > 0 ? Math.min(100, Math.max(0, (contentCanvas.scrollTop / scrollable) * 100)) : 0;
            readingProgress.style.width = `${pct}%`;
        }

        function showSheet(id, opts) {
            opts = opts || {};
            const target = validSheetId(id);
            const targetHeadingId = opts.headingId || null;
            if (target === currentSheetId && !opts.force && !targetHeadingId) return;
            currentSheetId = target;
            const meta = sheetsById.get(target);

            sheetIndex.forEach(s => s.el.classList.toggle('is-active', s.id === target));

            // Context bar
            if (ctxTitle) ctxTitle.textContent = meta.title;
            if (ctxPath) ctxPath.textContent = meta.group;
            document.title = `${meta.title} · CISSP Certification Workspace`;

            // Sidebar active state
            document.querySelectorAll('.nav-item').forEach(a => {
                a.classList.toggle('is-active', a.getAttribute('href') === `#${target}`);
            });

            // Bookmark star - bookmarking the Review hub itself isn't meaningful
            const bookmarks = loadBookmarks();
            const isBookmarked = !!bookmarks[target];
            if (bookmarkToggle) {
                bookmarkToggle.hidden = target === REVIEW_SHEET_ID;
                bookmarkToggle.textContent = isBookmarked ? '★' : '☆';
                bookmarkToggle.classList.toggle('is-active', isBookmarked);
                bookmarkToggle.setAttribute('aria-pressed', String(isBookmarked));
            }

            // Track the last real sheet visited (Review's own "Continue Studying")
            if (target !== REVIEW_SHEET_ID) saveLastVisited(target);

            // Study Desk's "review queue" link only makes sense off the review sheet
            const reviewLink = document.getElementById('studyDeskReviewLink');
            if (reviewLink) reviewLink.hidden = target === REVIEW_SHEET_ID;

            if (target === REVIEW_SHEET_ID) renderReviewHub(sheetIndex, currentReviewFilter);

            // Study Desk scope + note
            if (studyDeskScope) studyDeskScope.textContent = `Notes for ${meta.code ? meta.code + ' · ' : ''}${meta.title}`;
            if (studyDeskEditor) {
                const notes = loadNotes();
                studyDeskEditor.value = notes[target] || '';
            }
            if (studyDeskSaved) studyDeskSaved.textContent = '';

            if (contentCanvas && !opts.skipScroll) {
                if (targetHeadingId) {
                    const headingEl = document.getElementById(targetHeadingId);
                    if (headingEl) headingEl.scrollIntoView({ block: 'start' });
                } else {
                    contentCanvas.scrollTop = 0;
                }
            }
            updateReadingProgress();

            // Close mobile nav drawer after navigating
            document.body.classList.remove('nav-open');
        }

        function routeFromHash() {
            const id = (location.hash || '').replace(/^#/, '');
            showSheet(id);
        }

        window.addEventListener('hashchange', routeFromHash);
        routeFromHash();
        if (!location.hash) showSheet(DEFAULT_SHEET, { force: true });

        // --- Bookmark toggle ---
        if (bookmarkToggle) {
            bookmarkToggle.addEventListener('click', function() {
                const bookmarks = loadBookmarks();
                bookmarks[currentSheetId] = !bookmarks[currentSheetId];
                if (!bookmarks[currentSheetId]) delete bookmarks[currentSheetId];
                saveBookmarks(bookmarks);
                const isBookmarked = !!bookmarks[currentSheetId];
                this.textContent = isBookmarked ? '★' : '☆';
                this.classList.toggle('is-active', isBookmarked);
                this.setAttribute('aria-pressed', String(isBookmarked));
            });
        }

        // --- Review Hub filters ---
        const reviewFilters = document.querySelectorAll('.review-filter');
        reviewFilters.forEach(btn => {
            btn.addEventListener('click', function() {
                currentReviewFilter = this.dataset.filter;
                reviewFilters.forEach(b => {
                    b.classList.toggle('is-active', b === this);
                    b.setAttribute('aria-pressed', String(b === this));
                });
                renderReviewHub(sheetIndex, currentReviewFilter);
            });
        });

        // --- Study Desk: note autosave (debounced) ---
        if (studyDeskEditor) {
            let saveTimeout;
            studyDeskEditor.addEventListener('input', function() {
                const sheetId = currentSheetId;
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(() => {
                    saveNote(sheetId, studyDeskEditor.value);
                    refreshNoteIndicators();
                    if (studyDeskSaved) {
                        studyDeskSaved.textContent = 'Saved';
                        setTimeout(() => { if (studyDeskSaved.textContent === 'Saved') studyDeskSaved.textContent = ''; }, 1500);
                    }
                }, 400);
            });
        }

        // --- Study Desk: collapse / expand ---
        const studyDesk = document.getElementById('studyDesk');
        const studyDeskToggle = document.getElementById('studyDeskToggle');
        const studyDeskResizeHandle = document.getElementById('studyDeskResizeHandle');

        function applyStudyDeskState() {
            const state = loadStudyDeskState();
            if (state.height) {
                document.documentElement.style.setProperty('--study-desk-height', `${state.height}px`);
            }
            if (state.collapsed) {
                studyDesk.classList.add('is-collapsed');
                if (studyDeskToggle) {
                    studyDeskToggle.textContent = 'Expand ↑';
                    studyDeskToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }

        if (studyDesk && studyDeskToggle) {
            applyStudyDeskState();

            studyDeskToggle.addEventListener('click', function() {
                const collapsed = studyDesk.classList.toggle('is-collapsed');
                this.textContent = collapsed ? 'Expand ↑' : 'Collapse ↓';
                this.setAttribute('aria-expanded', String(!collapsed));
                const state = loadStudyDeskState();
                state.collapsed = collapsed;
                saveStudyDeskState(state);
                if (window.innerWidth <= 767) {
                    document.body.classList.toggle('study-desk-open', !collapsed);
                }
            });

            // On mobile, Study Desk starts closed regardless of saved desktop state
            if (window.innerWidth <= 767) {
                studyDesk.classList.remove('is-collapsed');
                document.body.classList.remove('study-desk-open');
                studyDeskToggle.textContent = 'Collapse ↓';
                studyDeskToggle.setAttribute('aria-expanded', 'false');
            }
        }

        if (studyDeskResizeHandle) {
            let dragging = false;
            let startY = 0;
            let startHeight = 0;

            studyDeskResizeHandle.addEventListener('pointerdown', function(e) {
                if (window.innerWidth <= 767 || studyDesk.classList.contains('is-collapsed')) return;
                dragging = true;
                startY = e.clientY;
                startHeight = studyDesk.getBoundingClientRect().height;
                studyDeskResizeHandle.setPointerCapture(e.pointerId);
            });

            studyDeskResizeHandle.addEventListener('pointermove', function(e) {
                if (!dragging) return;
                const delta = startY - e.clientY;
                const newHeight = Math.min(Math.max(startHeight + delta, 120), Math.round(window.innerHeight * 0.7));
                document.documentElement.style.setProperty('--study-desk-height', `${newHeight}px`);
            });

            function endDrag() {
                if (!dragging) return;
                dragging = false;
                const height = studyDesk.getBoundingClientRect().height;
                const state = loadStudyDeskState();
                state.height = Math.round(height);
                saveStudyDeskState(state);
            }

            studyDeskResizeHandle.addEventListener('pointerup', endDrag);
            studyDeskResizeHandle.addEventListener('pointercancel', endDrag);
        }

        // --- Mobile nav drawer ---
        const navDrawerToggle = document.getElementById('navDrawerToggle');
        const navBackdrop = document.getElementById('navBackdrop');

        function setNavOpen(open) {
            document.body.classList.toggle('nav-open', open);
            if (navDrawerToggle) navDrawerToggle.setAttribute('aria-expanded', String(open));
        }

        if (navDrawerToggle) {
            navDrawerToggle.addEventListener('click', () => {
                setNavOpen(!document.body.classList.contains('nav-open'));
            });
        }
        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => setNavOpen(false));
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setNavOpen(false);
        });

        // --- Reading position (reflects real scroll within the active sheet) ---
        if (contentCanvas) {
            let scrollTimeout;
            contentCanvas.addEventListener('scroll', function() {
                if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
                scrollTimeout = requestAnimationFrame(updateReadingProgress);
            });
        }

        // --- Progress Tracker checkboxes (Sheet 12) ---
        const checkboxes = document.querySelectorAll('.progress-checkbox');
        const resetButton = document.getElementById('resetProgress');

        function applyProgressState() {
            const progress = loadProgress();
            checkboxes.forEach(checkbox => {
                const key = checkbox.dataset.trackerKey;
                if (key && progress.hasOwnProperty(key)) checkbox.checked = progress[key];
            });
            updateProgressDisplays();
        }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const key = this.dataset.trackerKey;
                if (key) {
                    const progress = loadProgress();
                    progress[key] = this.checked;
                    saveProgress(progress);
                    updateProgressDisplays();
                }
            });
        });

        if (resetButton) {
            resetButton.addEventListener('click', function() {
                if (confirm('Reset all progress? This cannot be undone.')) {
                    const resetProgressData = {};
                    checkboxes.forEach(cb => {
                        const key = cb.dataset.trackerKey;
                        if (key) { resetProgressData[key] = false; cb.checked = false; }
                    });
                    saveProgress(resetProgressData);
                    updateProgressDisplays();
                }
            });
        }

        applyProgressState();
        displayQuizProgress();
        updateLiveQuizTally();
        refreshNoteIndicators();

        // --- Case rubric / study schedule checklists (event delegation -
        // items are added freely without needing new listeners) ---
        document.addEventListener('change', function(e) {
            if (!e.target.matches) return;
            if (e.target.matches('.schedule-checklist input[type="checkbox"]')) {
                toggleChecklistItem(scheduleChecklistKey, e.target.dataset.checkId, e.target.checked);
                renderTodayFocus();
                const summary = e.target.closest('details.schedule-week');
                if (summary) {
                    const countEl = summary.querySelector('.schedule-week__count');
                    const doneCount = summary.querySelectorAll('.schedule-checklist input[type="checkbox"]:checked').length;
                    const totalInWeek = summary.querySelectorAll('.schedule-checklist input[type="checkbox"]').length;
                    if (countEl) countEl.textContent = `${doneCount}/${totalInWeek}`;
                }
            }
        });

        // --- Inline the domain deep-dives directly into their sheets -
        // no separate page, no extra click, the real content is just there.
        loadInlineDeepDive('domain03DeepDive', 'domains/01-security-risk-management.md', 'sheet-03');
        loadInlineDeepDive('domain04DeepDive', 'domains/02-asset-security.md', 'sheet-04');
        loadInlineDeepDive('domain05DeepDive', 'domains/03-security-architecture-engineering.md', 'sheet-05');
        loadInlineDeepDive('domain06DeepDive', 'domains/04-communication-network-security.md', 'sheet-06');
        loadInlineDeepDive('domain07DeepDive', 'domains/05-identity-access-management.md', 'sheet-07');
        loadInlineDeepDive('domain08DeepDive', 'domains/06-security-assessment-testing.md', 'sheet-08');
        loadInlineDeepDive('domain09DeepDive', 'domains/07-security-operations.md', 'sheet-09');
        loadInlineDeepDive('domain10DeepDive', 'domains/08-software-development-security.md', 'sheet-10');

        // --- Today's Focus + full Study Schedule ---
        renderScheduleSheet();
        applyChecklistState(scheduleChecklistKey, '.schedule-checklist input[type="checkbox"]');
        renderTodayFocus();

        document.addEventListener('click', function(e) {
            const markDoneBtn = e.target.closest('#markDayDoneBtn');
            if (markDoneBtn) {
                toggleChecklistItem(scheduleChecklistKey, markDoneBtn.dataset.dayId, true);
                renderScheduleSheet();
                applyChecklistState(scheduleChecklistKey, '.schedule-checklist input[type="checkbox"]');
                renderTodayFocus();
            }
        });

        // --- Study Timer ---
        updateTimerDisplay();
        const timerStartBtn = document.getElementById('timerStartBtn');
        const timerPauseBtn = document.getElementById('timerPauseBtn');
        const timerResetBtn = document.getElementById('timerResetBtn');
        if (timerStartBtn) timerStartBtn.addEventListener('click', startTimer);
        if (timerPauseBtn) timerPauseBtn.addEventListener('click', pauseTimer);
        if (timerResetBtn) timerResetBtn.addEventListener('click', resetTimer);
        document.querySelectorAll('.timer-preset-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                setTimerPreset(Number(btn.dataset.focus), Number(btn.dataset.break));
            });
        });

        // --- Search dialog (command palette: sheets + in-sheet headings) ---
        const searchDialog = document.getElementById('searchDialog');
        const searchTrigger = document.getElementById('searchTrigger');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        let selectedIndex = 0;
        let currentMatches = [];

        function buildSearchEntries(query) {
            const q = query.trim().toLowerCase();
            const entries = [];
            sheetIndex.forEach(s => {
                const sheetMatches = !q || (s.title + ' ' + s.group).toLowerCase().includes(q);
                if (sheetMatches) {
                    entries.push({ type: 'sheet', sheetId: s.id, code: s.code, title: s.title, group: s.group });
                }
                if (q) {
                    s.headings.forEach(h => {
                        if (h.text.toLowerCase().includes(q)) {
                            entries.push({ type: 'heading', sheetId: s.id, code: s.code, sheetTitle: s.title, title: h.text, headingId: h.id });
                        }
                    });
                }
            });
            return entries;
        }

        function renderSearchResults(query) {
            currentMatches = buildSearchEntries(query);
            selectedIndex = 0;

            if (currentMatches.length === 0) {
                searchResults.innerHTML = '<li class="search-dialog__empty">No matches. Try a different term.</li>';
                return;
            }

            searchResults.innerHTML = currentMatches.map((m, i) => {
                const cls = `search-dialog__result${m.type === 'heading' ? ' search-dialog__result--heading' : ''}${i === 0 ? ' is-selected' : ''}`;
                const code = m.code ? `<span class="search-dialog__result-code">${m.code}</span>` : '';
                if (m.type === 'sheet') {
                    return `<li class="${cls}" data-index="${i}">${code}<span class="search-dialog__result-title">${m.title}</span></li>`;
                }
                return `<li class="${cls}" data-index="${i}"><span class="search-dialog__result-title">${m.title}</span></li>`;
            }).join('');
        }

        function highlightSelected() {
            [...searchResults.children].forEach((li, i) => li.classList.toggle('is-selected', i === selectedIndex));
        }

        function openSearch() {
            if (!searchDialog) return;
            searchInput.value = '';
            renderSearchResults('');
            searchDialog.showModal();
            searchInput.focus();
        }

        function closeSearch() {
            if (searchDialog && searchDialog.open) searchDialog.close();
        }

        function goToMatch(index) {
            const match = currentMatches[index];
            if (!match) return;
            if (match.type === 'heading') {
                showSheet(match.sheetId, { headingId: match.headingId, force: currentSheetId === match.sheetId });
                if (location.hash !== `#${match.sheetId}`) {
                    history.replaceState(null, '', `#${match.sheetId}`);
                }
            } else {
                location.hash = `#${match.sheetId}`;
            }
            closeSearch();
        }

        if (searchTrigger) searchTrigger.addEventListener('click', openSearch);

        document.addEventListener('keydown', function(e) {
            const isK = e.key === 'k' || e.key === 'K';
            if ((e.metaKey || e.ctrlKey) && isK) {
                e.preventDefault();
                openSearch();
            }
        });

        if (searchInput) {
            searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, currentMatches.length - 1);
                    highlightSelected();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, 0);
                    highlightSelected();
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    goToMatch(selectedIndex);
                }
            });
        }

        if (searchResults) {
            searchResults.addEventListener('click', function(e) {
                const li = e.target.closest('.search-dialog__result');
                if (li) goToMatch(Number(li.dataset.index));
            });
        }
    });

})();
