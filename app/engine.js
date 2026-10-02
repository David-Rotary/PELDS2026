/* President-Elect Leadership Toolkit — shared engine
   Used by "START HERE.html" and "Module Builder.html". Works from a USB drive (file://), no internet needed. */
(function () {
  'use strict';

  var PE = window.PE = window.PE || {};
  PE.version = '0.9';
  PE.modules = [];
  PE.colours = { azure: '#0067C8', royal: '#17458F', sky: '#00A2E0', gold: '#F7A81B', cranberry: '#D41367',
    violet: '#901F93', orange: '#FF7600', green: '#009739', turquoise: '#00ADBB' };
  PE.planSections = ['My why', 'Our club today', 'Vision & goals', 'Members & engagement',
    'Projects & community', 'Foundation & giving', 'My team & support', 'Public image', 'Notes'];
  PE.typeNames = { text: 'Read', reflect: 'Reflect', scenario: 'Scenario', quiz: 'Quick quiz', checklist: 'Checklist',
    resource: 'Resources', ai: 'AI helper', discuss: 'Discuss', glossary: 'Glossary', calendar: 'Calendar', profile: 'Self-profile', video: 'Video', roleplay: 'Practise (AI)' };

  /* ---------- module registration ---------- */
  PE.register = function (m, opts) {
    if (!m || !m.title) return;
    m.id = m.id || PE.slug(m.title);
    m.items = m.items || [];
    m.items.forEach(function (it, i) { if (!it.id) it.id = 'i' + (i + 1); });
    if (opts && opts.temp) m._temp = true;
    var at = PE.modules.findIndex(function (x) { return x.id === m.id; });
    if (at >= 0) PE.modules[at] = m; else PE.modules.push(m);
    return m;
  };
  /* Pull the JSON out of a module file's text: PE.register({...}); */
  PE.parseModuleText = function (txt) {
    var a = txt.indexOf('PE.register('), b = txt.lastIndexOf(')');
    var json = a >= 0 ? txt.slice(a + 12, b) : txt;
    return JSON.parse(json);
  };
  PE.moduleToFile = function (m) {
    var clean = JSON.parse(JSON.stringify(m, function (k, v) { return k.charAt(0) === '_' ? undefined : v; }));
    return '/* President-Elect Leadership Toolkit module\n   Title: ' + (clean.title || '') +
      '\n   Presenter: ' + (clean.presenter || '') +
      '\n   Made with Module Builder. Edit it by opening "Module Builder.html" and choosing "Open a module file". */\n' +
      'PE.register(' + JSON.stringify(clean, null, 2) + ');\n';
  };
  /* load module script files one after another (works on file://) */
  PE.loadFiles = function (files, base, done) {
    var errors = [], i = 0;
    (function next() {
      if (i >= files.length) return done(errors);
      var f = files[i++], s = document.createElement('script');
      s.src = base + encodeURI(f);
      s.onload = next;
      s.onerror = function () { errors.push(f); next(); };
      document.head.appendChild(s);
    })();
  };

  /* ---------- storage (localStorage when allowed, memory otherwise) ---------- */
  var KEY = 'pe-toolkit-9815-v1', mem = null;
  PE.storageOK = true;
  PE.load = function () {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { PE.storageOK = false; }
    mem = mem || {};
    ['answers', 'checks', 'visited', 'quiz', 'scen', 'profile', 'me', 'rp', 'aiout'].forEach(function (k) { mem[k] = mem[k] || {}; });
    return mem;
  };
  PE.save = function () {
    mem.updated = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { PE.storageOK = false; }
  };
  PE.k = function (m, it) { return m.id + '.' + it.id; };

  /* ---------- helpers ---------- */
  PE.slug = function (s) { return String(s || 'module').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'module'; };
  PE.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  function inline(s) {
    s = PE.esc(s);
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, t, u) {
      var ext = /^https?:/i.test(u) ? ' target="_blank" rel="noopener"' : ' target="_blank"';
      return '<a href="' + u + '"' + ext + '>' + t + '</a>';
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/(^|[^*])\*([^*]+)\*/g, '$1<i>$2</i>');
    return s;
  }
  /* tiny formatter: blank line = new paragraph, "- " = bullet, "> " = callout, **bold**, *italic*, [link](file) */
  PE.md = function (txt) {
    if (!txt) return '';
    var out = [], list = null;
    String(txt).split(/\r?\n/).forEach(function (line) {
      var t = line.trim();
      if (/^[-•]\s+/.test(t)) { if (!list) { list = []; } list.push('<li>' + inline(t.replace(/^[-•]\s+/, '')) + '</li>'); return; }
      if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; }
      if (!t) return;
      if (/^##\s+/.test(t)) out.push('<h3>' + inline(t.replace(/^##\s+/, '')) + '</h3>');
      else if (/^>\s?/.test(t)) out.push('<div class="callout">' + inline(t.replace(/^>\s?/, '')) + '</div>');
      else out.push('<p>' + inline(t) + '</p>');
    });
    if (list) out.push('<ul>' + list.join('') + '</ul>');
    return out.join('');
  };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  PE.el = el;
  PE.toast = function (msg) {
    var t = document.querySelector('.toast'); if (!t) { t = el('div', 'toast'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2200);
  };
  PE.download = function (name, text, type) {
    var blob = new Blob([text], { type: type || 'text/plain' }), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };
  PE.copy = function (text) {
    function fallback() {
      var ta = el('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove();
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).catch(fallback); else fallback();
    PE.toast('Copied to clipboard');
  };
  PE.fileIcon = function (f) {
    if (!f) return 'LINK';
    if (/^https?:/i.test(f)) return 'WEB';
    var m = /\.([a-z0-9]+)$/i.exec(f); return m ? m[1].toUpperCase().slice(0, 4) : 'FILE';
  };
  PE.lines = function (v) { return Array.isArray(v) ? v : String(v || '').split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean); };

  /* ---------- item renderers ----------
     ctx = { m: module, it: item, st: state, save(), preview: bool } */
  var R = PE.renderers = {};

  R.text = function (it) { return el('div', 'body', PE.md(it.body)); };

  R.reflect = function (it, ctx) {
    var box = el('div');
    box.appendChild(el('div', 'body', PE.md(it.prompt)));
    if (it.hint) box.appendChild(el('div', 'callout small', '<b>Think about:</b> ' + PE.md(it.hint).replace(/^<p>|<\/p>$/g, '')));
    var ta = el('textarea', 'ans'); ta.placeholder = 'Type your thoughts here — they are saved on this computer and collected in "My Plan".';
    var key = PE.k(ctx.m, it); ta.value = ctx.st.answers[key] || '';
    var s = el('div', 'saved');
    ta.addEventListener('input', function () { ctx.st.answers[key] = ta.value; ctx.save(); s.textContent = 'Saved ✓'; clearTimeout(s._h); s._h = setTimeout(function () { s.textContent = ''; }, 1500); });
    box.appendChild(ta); box.appendChild(s);
    if (it.plan) box.appendChild(el('div', 'small muted', 'Goes into your plan under <b>' + PE.esc(it.plan) + '</b>.'));
    return box;
  };

  R.scenario = function (it, ctx) {
    var box = el('div'), key = PE.k(ctx.m, it);
    box.appendChild(el('div', 'body', PE.md(it.setup)));
    box.appendChild(el('h3', null, 'What would you do?'));
    var list = el('div', 'choices'), out = el('div');
    var verdictName = { strong: 'Strong choice', mixed: 'Partly there', weak: 'Risky choice' };
    function show(i) {
      list.querySelectorAll('.choice').forEach(function (b, j) { b.classList.toggle('picked', j === i); });
      var c = it.choices[i]; out.innerHTML = '';
      var o = el('div', 'outcome ' + (c.verdict || 'mixed'));
      o.innerHTML = '<div class="verdict">' + (verdictName[c.verdict] || 'Consider this') + '</div>' + PE.md(c.outcome);
      out.appendChild(o);
      if (it.debrief) out.appendChild(el('div', 'callout', '<b>Debrief</b>' + PE.md(it.debrief)));
      out.appendChild(el('div', 'small muted', 'Try the other options too — there is often more than one reasonable path.'));
    }
    (it.choices || []).forEach(function (c, i) {
      var b = el('button', 'choice ' + (c.verdict || 'mixed'), '<b>' + String.fromCharCode(65 + i) + '.</b> ' + inline(c.text));
      b.type = 'button';
      b.onclick = function () { ctx.st.scen[key] = i; ctx.save(); show(i); };
      list.appendChild(b);
    });
    box.appendChild(list); box.appendChild(out);
    if (ctx.st.scen[key] != null && it.choices[ctx.st.scen[key]]) show(ctx.st.scen[key]);
    if (PE.ai && PE.ai.available && !ctx.preview) box.appendChild(PE.ai.scenarioBox(it, ctx));
    return box;
  };

  R.quiz = function (it, ctx) {
    var box = el('div'), key = PE.k(ctx.m, it); ctx.st.quiz[key] = ctx.st.quiz[key] || {};
    var score = el('div', 'pill');
    function upd() { var a = ctx.st.quiz[key], n = 0, r = 0; (it.questions || []).forEach(function (q, i) { if (a[i] != null) { n++; if (+a[i] === +q.answer) r++; } }); score.textContent = r + ' / ' + (it.questions || []).length + ' correct'; }
    (it.questions || []).forEach(function (q, qi) {
      var b = el('div', 'qblock'); b.appendChild(el('div', null, '<b>' + (qi + 1) + '. ' + inline(q.q) + '</b>'));
      var ex = el('div', 'small');
      function mark(sel) {
        b.querySelectorAll('.opt').forEach(function (o, oi) { o.classList.remove('right', 'wrong'); if (oi === +q.answer) o.classList.add('right'); else if (oi === sel) o.classList.add('wrong'); });
        ex.innerHTML = (sel === +q.answer ? '<b style="color:var(--good)">Correct.</b> ' : '<b style="color:var(--bad)">Not quite.</b> ') + inline(q.explain || '');
      }
      PE.lines(q.options).forEach(function (o, oi) {
        var ob = el('button', 'opt', inline(o)); ob.type = 'button';
        ob.onclick = function () { ctx.st.quiz[key][qi] = oi; ctx.save(); mark(oi); upd(); };
        b.appendChild(ob);
      });
      b.appendChild(ex);
      if (ctx.st.quiz[key][qi] != null) mark(+ctx.st.quiz[key][qi]);
      box.appendChild(b);
    });
    upd(); box.insertBefore(score, box.firstChild);
    return box;
  };

  R.checklist = function (it, ctx) {
    var box = el('div'), key = PE.k(ctx.m, it); ctx.st.checks[key] = ctx.st.checks[key] || {};
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    PE.lines(it.items).forEach(function (t, i) {
      var l = el('label', 'check'), c = el('input'); c.type = 'checkbox'; c.checked = !!ctx.st.checks[key][i];
      c.onchange = function () { ctx.st.checks[key][i] = c.checked; ctx.save(); };
      l.appendChild(c); l.appendChild(el('span', null, inline(t))); box.appendChild(l);
    });
    return box;
  };

  R.resource = function (it) {
    var box = el('div');
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    (it.items || []).forEach(function (r) {
      var a = el('a', 'res'); a.href = r.file || '#'; a.target = '_blank'; if (/^https?:/i.test(r.file)) a.rel = 'noopener';
      a.innerHTML = '<div class="ic">' + PE.fileIcon(r.file) + '</div><div><b>' + PE.esc(r.label) + '</b><div class="small muted">' + inline(r.note || '') + (/^https?:/i.test(r.file) ? ' <i>(needs internet)</i>' : '') + '</div></div>';
      box.appendChild(a);
    });
    return box;
  };

  R.ai = function (it) {
    var box = el('div');
    box.appendChild(el('div', 'body', PE.md(it.intro)));
    var b = el('button', 'btn pri', 'Copy the prompt'); b.type = 'button'; b.onclick = function () { PE.copy(it.prompt || ''); };
    box.appendChild(el('div', 'row', '')).appendChild(b);
    var d = el('details'); d.style.marginTop = '12px';
    d.appendChild(el('summary', null, 'Show the full prompt'));
    d.appendChild(el('div', 'prompt', PE.esc(it.prompt)));
    box.appendChild(d);
    box.appendChild(el('p', 'small muted', 'Needs internet only when you paste it into ChatGPT, Claude, Gemini or Copilot. The rest of this toolkit works offline.'));
    return box;
  };

  R.discuss = function (it) {
    var box = el('div', 'discuss');
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    var ol = el('ol'); PE.lines(it.questions).forEach(function (q) { ol.appendChild(el('li', null, inline(q))); });
    box.appendChild(ol);
    box.appendChild(el('p', 'small muted', 'Tip: use <b>Board mode</b> to put these on a big screen at your board or club meeting.'));
    return box;
  };

  R.glossary = function (it) {
    var box = el('div', 'gloss'), inp = el('input', 'search'); inp.placeholder = 'Filter terms…';
    var dl = el('dl');
    function draw() {
      var f = inp.value.toLowerCase(); dl.innerHTML = '';
      (it.terms || []).forEach(function (t) {
        if (f && (t.term + ' ' + t.meaning).toLowerCase().indexOf(f) < 0) return;
        dl.appendChild(el('dt', null, PE.esc(t.term))); dl.appendChild(el('dd', null, inline(t.meaning)));
      });
    }
    inp.oninput = draw; box.appendChild(inp); box.appendChild(dl); draw();
    return box;
  };

  R.calendar = function (it) {
    var box = el('div');
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    var g = el('div', 'months');
    (it.months || []).forEach(function (mo) {
      var c = el('div', 'month'); c.appendChild(el('h4', null, PE.esc(mo.month)));
      if (mo.theme) c.appendChild(el('div', 'th', PE.esc(mo.theme)));
      var ul = el('ul'); PE.lines(mo.tasks).forEach(function (t) { ul.appendChild(el('li', null, inline(t))); }); c.appendChild(ul);
      g.appendChild(c);
    });
    box.appendChild(g); return box;
  };

  R.profile = function (it, ctx) {
    var box = el('div'), key = PE.k(ctx.m, it); ctx.st.profile[key] = ctx.st.profile[key] || {};
    var a = ctx.st.profile[key], res = el('div', 'profres');
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    function score() {
      var counts = (it.results || []).map(function () { return 0; }), n = 0;
      Object.keys(a).forEach(function (q) { counts[a[q]] = (counts[a[q]] || 0) + 1; n++; });
      res.innerHTML = '';
      if (n < (it.questions || []).length) { res.appendChild(el('p', 'small muted', 'Answered ' + n + ' of ' + it.questions.length + '.')); return; }
      var max = Math.max.apply(null, counts);
      counts.forEach(function (c, i) {
        if (c !== max) return; var r = it.results[i];
        res.appendChild(el('div', 'callout', '<b>' + PE.esc(r.title) + '</b>' + PE.md(r.text)));
      });
      res.appendChild(el('p', 'small muted', 'Your mix: ' + it.results.map(function (r, i) { return PE.esc(r.label) + ' ' + counts[i]; }).join(' · ')));
    }
    (it.questions || []).forEach(function (q, qi) {
      var b = el('div', 'qblock'); b.appendChild(el('div', null, '<b>' + (qi + 1) + '. ' + inline(q.q) + '</b>'));
      PE.lines(q.options).forEach(function (o, oi) {
        var ob = el('button', 'opt', inline(o)); ob.type = 'button';
        if (a[qi] === oi) ob.classList.add('right');
        ob.onclick = function () { a[qi] = oi; ctx.save(); b.querySelectorAll('.opt').forEach(function (x, xi) { x.classList.toggle('right', xi === oi); }); score(); };
        b.appendChild(ob);
      });
      box.appendChild(b);
    });
    box.appendChild(res); score(); return box;
  };

  R.video = function (it) {
    var box = el('div');
    if (it.intro) box.appendChild(el('div', 'body', PE.md(it.intro)));
    if (it.file) {
      var v = el('video'); v.controls = true; v.src = it.file; v.style.width = '100%'; v.style.borderRadius = '12px'; box.appendChild(v);
      box.appendChild(el('p', 'small muted', 'Video file: ' + PE.esc(it.file)));
    }
    return box;
  };

  PE.renderItem = function (m, it, st, save) {
    var wrap = el('div');
    wrap.appendChild(el('div', 'kind', PE.typeNames[it.type] || it.type));
    wrap.appendChild(el('h2', null, PE.esc(it.title || '')));
    var r = R[it.type];
    try { wrap.appendChild(r ? r(it, { m: m, it: it, st: st, save: save }) : el('p', 'muted', 'Unknown item type: ' + PE.esc(it.type))); }
    catch (e) { wrap.appendChild(el('p', 'warn', 'This page could not be shown: ' + PE.esc(e.message))); }
    return wrap;
  };

  /* plain text of an item, for search */
  PE.itemText = function (it) {
    var parts = [it.title, it.body, it.prompt, it.hint, it.setup, it.debrief, it.intro, it.goal];
    (it.choices || []).forEach(function (c) { parts.push(c.text, c.outcome); });
    (it.questions || []).forEach(function (q) { parts.push(typeof q === 'string' ? q : q.q); });
    (it.items || []).forEach(function (r) { parts.push(typeof r === 'string' ? r : r.label + ' ' + (r.note || '')); });
    (it.terms || []).forEach(function (t) { parts.push(t.term, t.meaning); });
    (it.months || []).forEach(function (m) { parts.push(m.month, m.theme, PE.lines(m.tasks).join(' ')); });
    return parts.filter(Boolean).join(' ');
  };
})();
