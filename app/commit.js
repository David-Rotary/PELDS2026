/* ============================================================
   ACTIONS: turn an idea into a commitment, a reminder and a report-back.
   Commit:   "What will you do, by when, who will help?"
   Remind:   a phone/computer calendar reminder (.ics). No sign-up, no email collected.
   Tell:     share it with your President, President-Elect or Membership Chair.
   Report:   the reminder links to report.html ("How did it go?").
   Board:    turn one or more actions into a printable Board agenda item.
   Saved on this device only (localStorage "pe-actions").
   Works on any page: just add <script src="app/commit.js"></script>.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'pe-actions', A = window.PEAct = {};
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  var memList = null;

  /* ---------- storage ---------- */
  A.list = function () { if (memList) return memList; try { memList = JSON.parse(ls(KEY) || '[]') || []; } catch (e) { memList = []; } return memList; };
  A.save = function () { ls(KEY, JSON.stringify(A.list())); try { window.dispatchEvent(new Event('pe-actions')); } catch (e) { } };
  A.add = function (c) { c.id = c.id || ('a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)); c.created = c.created || new Date().toISOString(); c.status = c.status || 'open'; A.list().unshift(c); A.save(); return c; };
  A.update = function (id, patch) { A.list().forEach(function (c) { if (c.id === id) Object.keys(patch).forEach(function (k) { c[k] = patch[k]; }); }); A.save(); };
  A.remove = function (id) { memList = A.list().filter(function (c) { return c.id !== id; }); A.save(); };
  A.get = function (id) { return A.list().filter(function (c) { return c.id === id; })[0]; };

  /* ---------- links ---------- */
  A.base = function () {
    var C = window.PE_CONFIG || {};
    if (C.SITE_URL) return String(C.SITE_URL).replace(/\/?$/, '/');
    if (/^https?:/.test(location.protocol)) return location.href.replace(/[?#].*$/, '').replace(/[^\/]*$/, '');
    return 'https://david-rotary.github.io/PELDS2026/';
  };
  A.code = function () { return ls('pe-code') || ((window.PE_CONFIG || {}).ACCESS_CODE) || ''; };
  A.reportURL = function (c) {
    var code = A.code();
    return A.base() + 'report.html?i=' + encodeURIComponent(String(c.what || '').slice(0, 200)) + '&s=' + encodeURIComponent(c.source || '') +
      (c.role ? '&r=' + encodeURIComponent(c.role) : '') + '&id=' + encodeURIComponent(c.id || '') + (code ? '&code=' + encodeURIComponent(code) : '');
  };
  function fmtDate(d) { try { return new Date(d + 'T12:00:00').toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return d; } }
  A.fmtDate = fmtDate;
  function plusDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }

  /* ---------- calendar reminder (.ics) ---------- */
  A.ics = function (c) {
    function e(s) { return String(s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
    function fold(l) { var out = '', s = l; while (s.length > 74) { out += s.slice(0, 74) + '\r\n '; s = s.slice(74); } return out + s; }
    var day = String(c.when || plusDays(30)).replace(/-/g, ''), url = A.reportURL(c);
    var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    var desc = 'You said you would: ' + c.what + (c.who ? '\nWho is helping: ' + c.who : '') + '\n\nHow did it go? Tell the District in one minute (anonymous):\n' + url;
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Rotary District 9815//Club Leaders Toolkit//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:' + (c.id || stamp) + '@d9815-club-leaders', 'DTSTAMP:' + stamp, 'DTSTART:' + day + 'T090000', 'DTEND:' + day + 'T091500',
      'SUMMARY:' + e('Rotary check-in: ' + String(c.what).slice(0, 70)), 'DESCRIPTION:' + e(desc), 'URL:' + url,
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'TRIGGER:PT0M', 'DESCRIPTION:' + e('How did it go? ' + String(c.what).slice(0, 60)), 'END:VALARM',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'TRIGGER:-P7D', 'DESCRIPTION:' + e('One week to go: ' + String(c.what).slice(0, 60)), 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'];
    var blob = new Blob([lines.map(fold).join('\r\n')], { type: 'text/calendar;charset=utf-8' }), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'Rotary-action-' + day + '.ics'; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  };

  /* ---------- tell someone ---------- */
  A.shareText = function (c) {
    return 'I\'ve made a Rotary commitment: ' + c.what + (c.when ? ', by ' + fmtDate(c.when) : '') + '.' + (c.who ? ' ' + c.who + ' is helping.' : '') +
      '\nWould you check in with me about it?';
  };

  /* ---------- styles + modal ---------- */
  function css() {
    if (document.getElementById('peact-css')) return;
    var st = document.createElement('style'); st.id = 'peact-css';
    st.textContent = '.pa-bg{position:fixed;inset:0;background:rgba(11,42,92,.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px;font-family:"Hanken Grotesk","Segoe UI",system-ui,Arial,sans-serif}' +
      '.pa-box{background:#fff;color:#1b2333;border-radius:18px;max-width:520px;width:100%;max-height:92vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.35);border-top:8px solid #F7A81B}' +
      '.pa-in{padding:18px 20px}.pa-box h2{font-family:Fraunces,Georgia,serif;color:#0B2A5C;margin:0 0 4px;font-size:1.45rem}.pa-sub{color:#4a5468;font-size:.92rem;margin:0 0 10px}' +
      '.pa-box label{display:block;font-weight:800;font-size:.85rem;color:#0B2A5C;margin:12px 0 4px}.pa-box textarea,.pa-box input[type=text],.pa-box input[type=date]{width:100%;box-sizing:border-box;font:inherit;font-size:1rem;border:1.5px solid #dfe4ec;border-radius:10px;padding:9px 11px}' +
      '.pa-box textarea{min-height:80px}.pa-hint{font-size:.8rem;color:#4a5468;margin-top:3px}.pa-quick{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.pa-quick button{font:inherit;font-size:.8rem;border:1px solid #dfe4ec;background:#f3f6fb;border-radius:999px;padding:3px 10px;cursor:pointer}' +
      '.pa-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.pa-btn{font:inherit;font-weight:800;font-size:.92rem;border-radius:999px;padding:9px 15px;border:2px solid #17458F;background:#fff;color:#17458F;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px}' +
      '.pa-btn.pri{background:#17458F;color:#fff}.pa-btn.gold{background:#F7A81B;border-color:#F7A81B;color:#0B2A5C}.pa-x{float:right;border:0;background:none;font-size:1.4rem;cursor:pointer;color:#4a5468}' +
      '.pa-ok{background:#eef9f1;border:1px solid #bfe6cd;border-radius:12px;padding:10px 12px;margin:6px 0}.pa-msg{color:#009739;font-weight:700;font-size:.85rem;min-height:1.1em;margin-top:6px}' +
      '.pa-step{display:flex;gap:10px;align-items:flex-start;margin:10px 0}.pa-step b.n{flex:none;width:24px;height:24px;border-radius:50%;background:#17458F;color:#fff;display:grid;place-items:center;font-size:.8rem}' +
      '@media print{.pa-bg{display:none}}';
    document.head.appendChild(st);
  }
  function modal(html) {
    css(); var bg = document.createElement('div'); bg.className = 'pa-bg';
    bg.innerHTML = '<div class="pa-box" role="dialog" aria-modal="true"><div class="pa-in"><button class="pa-x" aria-label="Close">×</button>' + html + '</div></div>';
    document.body.appendChild(bg);
    function close() { bg.remove(); document.removeEventListener('keydown', k); }
    function k(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', k);
    bg.querySelector('.pa-x').onclick = close; bg.addEventListener('click', function (e) { if (e.target === bg) close(); });
    return { el: bg, close: close };
  }

  /* open the "make it an action" box. opts: { what, source, context, role, days } */
  A.open = function (opts) {
    opts = opts || {};
    var due = plusDays(opts.days || 30);
    var m = modal('<h2>Make it an action</h2><p class="pa-sub">' + (opts.context ? 'From: <b>' + esc(opts.context) + '</b>. ' : '') + 'Small and specific beats big and vague.</p>' +
      '<label for="pa-what">What will you do?</label><textarea id="pa-what" maxlength="300" placeholder="e.g. Ring Sam and invite him to the Saturday working bee">' + esc(opts.what || '') + '</textarea>' +
      '<div class="pa-hint">Start with a verb: ring, invite, ask, try, book, stop…</div>' +
      '<label for="pa-when">By when?</label><input type="date" id="pa-when" value="' + due + '">' +
      '<div class="pa-quick"><button type="button" data-d="7">1 week</button><button type="button" data-d="14">2 weeks</button><button type="button" data-d="30">30 days</button><button type="button" data-d="90">90 days</button></div>' +
      '<label for="pa-who">Who will help, or who should know?</label><input type="text" id="pa-who" maxlength="80" placeholder="e.g. my President-Elect, our Membership Chair">' +
      '<div class="pa-hint">First names or roles only. This stays on your device.</div>' +
      '<div class="pa-row"><button class="pa-btn gold" id="pa-save">Save it</button></div>');
    var r = m.el;
    r.querySelectorAll('[data-d]').forEach(function (b) { b.onclick = function () { r.querySelector('#pa-when').value = plusDays(+b.dataset.d); }; });
    setTimeout(function () { var t = r.querySelector('#pa-what'); t.focus(); t.setSelectionRange(t.value.length, t.value.length); }, 30);
    r.querySelector('#pa-save').onclick = function () {
      var what = r.querySelector('#pa-what').value.trim();
      if (!what) { r.querySelector('#pa-what').focus(); return; }
      var c = A.add({ what: what, when: r.querySelector('#pa-when').value || due, who: r.querySelector('#pa-who').value.trim(), source: opts.source || '', context: opts.context || '', role: opts.role || ls('pe-role-path') || '' });
      m.close(); A.after(c);
    };
  };

  /* what to do next with a saved action: remind, tell, Board */
  A.after = function (c) {
    var txt = A.shareText(c);
    var m = modal('<h2>Saved ✓</h2><div class="pa-ok"><b>' + esc(c.what) + '</b><br><span class="pa-hint">By ' + esc(fmtDate(c.when)) + (c.who ? ' · with ' + esc(c.who) : '') + '</span></div>' +
      '<div class="pa-step"><b class="n">1</b><div><b>Remind yourself</b><div class="pa-hint">Adds a reminder to your phone or computer calendar, a week before and on the day, with a one-minute "How did it go?" link.</div><div class="pa-row" style="margin-top:6px"><button class="pa-btn pri" id="pa-ics">📅 Add to my calendar</button></div></div></div>' +
      '<div class="pa-step"><b class="n">2</b><div><b>Tell someone</b><div class="pa-hint">People who tell someone are far more likely to follow through.</div><div class="pa-row" style="margin-top:6px">' +
      (navigator.share ? '<button class="pa-btn" id="pa-share">Share…</button>' : '') +
      '<a class="pa-btn" href="mailto:?subject=' + encodeURIComponent('My Rotary commitment') + '&body=' + encodeURIComponent(txt) + '">Email</a>' +
      '<a class="pa-btn" href="sms:?&body=' + encodeURIComponent(txt) + '">Text</a><button class="pa-btn" id="pa-copy">Copy</button></div><div class="pa-msg" id="pa-msg"></div></div></div>' +
      '<div class="pa-step"><b class="n">3</b><div><b>Need your Board\'s OK?</b><div class="pa-hint">Turn it into a one-page agenda item for your next Board meeting.</div><div class="pa-row" style="margin-top:6px"><button class="pa-btn" id="pa-board">📋 Board agenda item</button></div></div></div>' +
      '<div class="pa-row"><button class="pa-btn gold" id="pa-done">Done</button></div>');
    var r = m.el;
    r.querySelector('#pa-ics').onclick = function () { A.ics(c); A.update(c.id, { reminded: true }); };
    var sh = r.querySelector('#pa-share'); if (sh) sh.onclick = function () { navigator.share({ title: 'My Rotary commitment', text: txt }).catch(function () { }); };
    r.querySelector('#pa-copy').onclick = function () {
      var done = function () { r.querySelector('#pa-msg').textContent = 'Copied. Paste it into a message.'; };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done); else done();
    };
    r.querySelector('#pa-board').onclick = function () { A.agenda([c]); };
    r.querySelector('#pa-done').onclick = m.close;
  };

  /* ---------- one-page Board agenda item (opens a printable page) ---------- */
  A.agenda = function (items, opts) {
    opts = opts || {};
    var G = window.PE_GOAL, goal = G ? G.headline.replace(/<[^>]+>/g, '') : 'Grow District 9815 membership by 15% over three years, with members who are engaged, diverse and glad they stayed.';
    var club = opts.club || '';
    try { var st = JSON.parse(localStorage.getItem('pe-toolkit-9815-v1') || '{}'); club = club || (st.me && st.me.club) || ''; } catch (e) { }
    var many = items.length > 1;
    var title = opts.title || (many ? 'Membership ideas to try' : items[0].what);
    var rows = items.map(function (c, i) {
      return '<div class="it"><h3>' + (many ? (i + 1) + '. ' : '') + esc(c.what) + '</h3><table>' +
        '<tr><th>First step</th><td>' + esc(c.first || 'A 30-day trial, then report back to the Board.') + '</td></tr>' +
        '<tr><th>Who leads</th><td>' + (c.who ? esc(c.who) : '<span class="line"></span>') + '</td></tr>' +
        '<tr><th>By when</th><td>' + (c.when ? esc(fmtDate(c.when)) : '<span class="line"></span>') + '</td></tr>' +
        '<tr><th>Cost / support needed</th><td><span class="line"></span></td></tr></table>' +
        '<div class="dec"><b>Decision:</b> ☐ Approve a trial &nbsp; ☐ Approve with changes &nbsp; ☐ Not now</div></div>';
    }).join('');
    var mailBody = 'Board agenda item: ' + title + '\n\nWhy: it supports our District goal: ' + goal + '\n\n' +
      items.map(function (c, i) { return (many ? (i + 1) + '. ' : '') + c.what + (c.who ? '\n   Who leads: ' + c.who : '') + (c.when ? '\n   By when: ' + fmtDate(c.when) : ''); }).join('\n') +
      '\n\nDecision needed: approve a 30-day trial, approve with changes, or not now.\nReview: report back at the following Board meeting.';
    var html = '<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Board agenda item</title>' +
      '<style>body{font-family:"Hanken Grotesk","Segoe UI",Arial,sans-serif;color:#1b2333;max-width:760px;margin:0 auto;padding:24px;line-height:1.45}' +
      'h1{font-family:Fraunces,Georgia,serif;color:#0B2A5C;margin:.1em 0 .2em;font-size:1.7rem}.k{font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#0067C8}' +
      '.meta{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:12px 0}.meta div{border-bottom:1px solid #9aa4b5;padding:4px 0;font-size:.9rem}.meta b{display:block;font-size:.72rem;color:#4a5468;text-transform:uppercase;letter-spacing:.06em}' +
      '.why{background:#f3f6fb;border-left:5px solid #F7A81B;border-radius:8px;padding:10px 14px;margin:12px 0}.it{border:1px solid #dfe4ec;border-radius:12px;padding:12px 14px;margin:12px 0;break-inside:avoid}' +
      '.it h3{margin:0 0 6px;color:#17458F}table{width:100%;border-collapse:collapse;font-size:.92rem}th{text-align:left;width:34%;color:#4a5468;font-weight:700;padding:5px 6px;vertical-align:top}td{padding:5px 6px;border-bottom:1px solid #eef1f6}' +
      '.line{display:inline-block;min-width:60%;border-bottom:1px solid #9aa4b5;height:1em}.dec{margin-top:8px;font-size:.95rem}.notes{border:1px solid #dfe4ec;border-radius:12px;padding:10px 14px;min-height:90px;margin-top:12px}' +
      '.bar{display:flex;gap:8px;margin:0 0 14px}.bar button,.bar a{font:inherit;font-weight:800;border-radius:999px;padding:8px 14px;border:2px solid #17458F;background:#17458F;color:#fff;cursor:pointer;text-decoration:none}.bar a{background:#fff;color:#17458F}' +
      '.ft{margin-top:16px;font-size:.8rem;color:#4a5468;border-top:1px solid #dfe4ec;padding-top:8px}@media print{.bar{display:none}body{padding:0}}</style></head><body>' +
      '<div class="bar"><button onclick="window.print()">Print or save as PDF</button><a href="mailto:?subject=' + encodeURIComponent('Board agenda item: ' + title) + '&body=' + encodeURIComponent(mailBody) + '">Email it to the Board</a></div>' +
      '<div class="k">Board agenda item · Rotary District 9815</div><h1>' + esc(title) + '</h1>' +
      '<div class="meta"><div><b>Club</b>' + (club ? esc(club) : '&nbsp;') + '</div><div><b>Board meeting date</b>&nbsp;</div><div><b>Proposed by</b>&nbsp;</div></div>' +
      '<div class="why"><b>Why this matters:</b> it supports our District goal: ' + esc(goal) + ' Small trials tell us what works for our club before we commit to anything bigger.</div>' +
      rows + '<div class="notes"><b>Notes and actions</b></div>' +
      '<div class="ft">Review: report back at the following Board meeting. What happened? Keep it, change it, or stop it? · Made with the Club Leaders\' Toolkit</div></body></html>';
    var w = window.open('', '_blank');
    if (w) { w.document.open(); w.document.write(html); w.document.close(); }
    else { var blob = new Blob([html], { type: 'text/html' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Board-agenda-item.html'; document.body.appendChild(a); a.click(); a.remove(); }
  };
})();
