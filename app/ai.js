/* President-Elect Toolkit — AI Coach layer.
   Switches on only when the toolkit can reach the district's AI service (see app/config.js).
   With no internet, or no AI_URL set, everything else keeps working exactly as before. */
(function () {
  'use strict';
  var PE = window.PE, C = window.PE_CONFIG || {}, el = PE.el, esc = PE.esc;
  var ai = PE.ai = { available: false, live: false, url: String(C.AI_URL || '').replace(/\/+$/, '') };

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { } return null; }
  var mem = {};
  function get(k) { var v = ls(k); return v != null ? v : mem[k] || ''; }
  function set(k, v) { mem[k] = v; ls(k, v); }

  /* access code arrives in the link: ...?code=pelds27 */
  var m = /[?&]code=([^&#]+)/.exec(location.search);
  if (m) set('pe-code', decodeURIComponent(m[1]));
  ai.code = function () { return get('pe-code') || C.ACCESS_CODE || ''; };
  ai.device = function () {
    var d = get('pe-device');
    if (!d) { d = Math.random().toString(36).slice(2) + Date.now().toString(36); set('pe-device', d); }
    return d;
  };
  ai.room = function () { var r = /[?&]room=([^&#]+)/.exec(location.search); return r ? decodeURIComponent(r[1]) : 'prepelds'; };

  /* is the service reachable? (never waits more than 5 seconds) */
  ai.check = function () {
    return new Promise(function (done) {
      if (!ai.url || navigator.onLine === false) return done(false);
      var t = setTimeout(function () { done(false); }, 5000);
      fetch(ai.url + '/api/ping', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
        clearTimeout(t); ai.available = !!(j && j.ai); ai.live = !!(j && j.live); done(ai.available);
      }).catch(function () { clearTimeout(t); done(false); });
    });
  };

  ai.post = function (path, body) {
    return fetch(ai.url + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); });
  };

  /* ---------- simple pop-up dialogs (no browser alerts) ---------- */
  function dialog(html, buttons) {
    return new Promise(function (done) {
      var bg = el('div', 'aidlg'), box = el('div', 'aidlg-box', html), row = el('div', 'row');
      row.style.justifyContent = 'flex-end'; row.style.marginTop = '14px';
      buttons.forEach(function (b) {
        var x = el('button', 'btn ' + (b.cls || ''), esc(b.label)); x.type = 'button';
        x.onclick = function () { var inp = box.querySelector('input'); bg.remove(); done({ value: b.value, input: inp ? inp.value : '' }); };
        row.appendChild(x);
      });
      box.appendChild(row); bg.appendChild(box); document.body.appendChild(bg);
      var i = box.querySelector('input'); if (i) i.focus();
    });
  }

  function ensureConsent() {
    if (get('pe-ai-consent') === 'yes') return Promise.resolve(true);
    return dialog('<h3>Use the AI coach?</h3><p>The AI coach sends what you type here to an AI service (Anthropic\'s Claude) through the District 9815 coaching service, so it can reply. Your other answers stay on this device.</p>' +
      '<p><b>Please don\'t type real names</b>, or anything private about members, into the AI coach.</p><p class="small muted">This is a District 9815 trial. Responses are AI-generated and can be wrong, so use your own judgement.</p>',
      [{ label: 'Not now', value: false }, { label: 'Yes, use the AI coach', value: true, cls: 'pri' }])
      .then(function (r) { if (r.value) set('pe-ai-consent', 'yes'); return r.value; });
  }
  function ensureCode(force) {
    if (ai.code() && !force) return Promise.resolve(true);
    return dialog('<h3>Access code</h3><p>' + (force ? 'That code didn\'t work. ' : '') + 'Type the access code from your PELDS session (it is under the QR code).</p><input class="search" style="border-radius:10px" autocomplete="off">',
      [{ label: 'Cancel', value: false }, { label: 'OK', value: true, cls: 'pri' }])
      .then(function (r) { if (r.value && r.input.trim()) { set('pe-code', r.input.trim()); return true; } return false; });
  }

  var MSG = {
    bad_code: 'That access code was not accepted.',
    limit_device: 'You have reached today\'s limit for the AI coach on this device. It resets tomorrow.',
    limit_total: 'The AI coach has reached its daily limit for the district. Please try again tomorrow.',
    not_set_up: 'The AI coach is not switched on yet.',
    ai: 'The AI service had a problem. Please try again in a minute.'
  };

  /* main call: ai.ask('scenario', {...}) -> Promise<text> */
  ai.ask = function (mode, payload, retried) {
    return ensureConsent().then(function (ok) {
      if (!ok) throw { quiet: true };
      return ensureCode();
    }).then(function (ok) {
      if (!ok) throw { quiet: true };
      return ai.post('/api/coach', { mode: mode, payload: payload, code: ai.code(), device: ai.device() });
    }).then(function (r) {
      if (r && r.error === 'bad_code' && !retried) {
        return ensureCode(true).then(function (ok) { if (!ok) throw { quiet: true }; return ai.ask(mode, payload, true); });
      }
      if (!r || r.error) throw { message: MSG[r && r.error] || (r && r.message) || 'Something went wrong.' };
      return r.text;
    }, function (e) { if (e && e.quiet) throw e; throw { message: 'Could not reach the AI coach. Check your internet connection.' }; });
  };

  function thinking() { return el('div', 'aithink', '<span></span><span></span><span></span> Thinking…'); }
  ai.thinking = thinking;
  function errBox(e) { return el('div', 'warn', esc(e.message || 'Something went wrong.')); }

  /* ---------- "type your own answer" under each scenario ---------- */
  ai.scenarioBox = function (it, ctx) {
    var key = PE.k(ctx.m, it), st = ctx.st; st.aiout = st.aiout || {};
    var box = el('div', 'aibox');
    box.innerHTML = '<div class="aitag">AI coach</div><h3>Or say it in your own words</h3><p class="small muted">Type what you would actually do. The AI coach will respond.</p>';
    var ta = el('textarea', 'ans'); ta.style.minHeight = '90px'; ta.placeholder = 'I would…'; ta.value = st.answers[key + '.own'] || '';
    ta.oninput = function () { st.answers[key + '.own'] = ta.value; ctx.save(); };
    var btn = el('button', 'btn pri', 'Get coaching'); btn.type = 'button';
    var out = el('div', 'aiout');
    if (st.aiout[key]) out.innerHTML = PE.md(st.aiout[key]);
    btn.onclick = function () {
      if (ta.value.trim().length < 10) { ta.focus(); PE.toast('Write a sentence or two first'); return; }
      btn.disabled = true; out.innerHTML = ''; out.appendChild(thinking());
      ai.ask('scenario', { title: it.title, setup: it.setup, choices: it.choices, debrief: it.debrief, answer: ta.value })
        .then(function (t) { st.aiout[key] = t; ctx.save(); out.innerHTML = PE.md(t); })
        .catch(function (e) { out.innerHTML = ''; if (!e.quiet) out.appendChild(errBox(e)); })
        .then(function () { btn.disabled = false; });
    };
    box.appendChild(ta); var r = el('div', 'row'); r.appendChild(btn); box.appendChild(r); box.appendChild(out);
    return box;
  };

  /* ---------- role-play practice ---------- */
  PE.renderers.roleplay = function (it, ctx) {
    var key = PE.k(ctx.m, it), st = ctx.st; st.rp = st.rp || {}; st.aiout = st.aiout || {};
    var box = el('div');
    box.appendChild(el('div', 'body', PE.md(it.setup)));
    if (it.goal) box.appendChild(el('div', 'callout', '<b>Your goal:</b> ' + PE.md(it.goal).replace(/^<p>|<\/p>$/g, '')));

    if (!ai.available) {
      box.appendChild(el('div', 'warn', '<b>This practice needs the AI coach</b>, which only works when you are connected to the internet at a PELDS session or with the online toolkit. For now, write what you would say to open the conversation, and try it with a friend.'));
      var t = el('textarea', 'ans'); t.placeholder = 'What would you say first?'; t.value = st.answers[key] || '';
      t.oninput = function () { st.answers[key] = t.value; ctx.save(); };
      box.appendChild(t);
      return box;
    }

    var msgs = st.rp[key] = st.rp[key] || [];
    if (!msgs.length && it.opener) msgs.push({ role: 'assistant', content: it.opener });
    var log = el('div', 'chat'), who = esc(it.who || 'Member');
    function draw() {
      log.innerHTML = '';
      msgs.forEach(function (x) {
        var b = el('div', 'bubble ' + (x.role === 'user' ? 'me' : 'them'));
        b.innerHTML = '<div class="who">' + (x.role === 'user' ? 'You (President)' : who) + '</div>' + esc(x.content).replace(/\n/g, '<br>');
        log.appendChild(b);
      });
      log.scrollTop = log.scrollHeight;
    }
    var inp = el('textarea', 'ans'); inp.style.minHeight = '70px'; inp.placeholder = 'Type what you would say, then press Send…';
    var send = el('button', 'btn pri', 'Send'), fin = el('button', 'btn', 'Finish & get feedback'), again = el('button', 'btn sm', 'Start again');
    [send, fin, again].forEach(function (b) { b.type = 'button'; });
    var fb = el('div', 'aiout'); if (st.aiout[key]) fb.innerHTML = '<h3>Coach\'s feedback</h3>' + PE.md(st.aiout[key]);
    function busy(on) { send.disabled = fin.disabled = on; }
    function userTurns() { return msgs.filter(function (x) { return x.role === 'user'; }).length; }
    send.onclick = function () {
      var v = inp.value.trim(); if (!v) { inp.focus(); return; }
      if (userTurns() >= 12) { PE.toast('That\'s a full conversation. Click "Finish & get feedback".'); return; }
      msgs.push({ role: 'user', content: v }); inp.value = ''; ctx.save(); draw();
      var th = thinking(); log.appendChild(th); log.scrollTop = log.scrollHeight; busy(true);
      ai.ask('roleplay', { setup: it.setup, character: it.character, messages: msgs })
        .then(function (t) { msgs.push({ role: 'assistant', content: t }); ctx.save(); })
        .catch(function (e) { if (!e.quiet) PE.toast(e.message); msgs.pop(); inp.value = v; ctx.save(); })
        .then(function () { busy(false); draw(); inp.focus(); });
    };
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send.click(); } });
    fin.onclick = function () {
      if (!userTurns()) { PE.toast('Have a go at the conversation first'); return; }
      busy(true); fb.innerHTML = ''; fb.appendChild(thinking());
      ai.ask('roleplay-feedback', { setup: it.setup, goal: it.goal, coaching: it.coaching, messages: msgs })
        .then(function (t) { st.aiout[key] = t; ctx.save(); fb.innerHTML = '<h3>Coach\'s feedback</h3>' + PE.md(t); fb.scrollIntoView({ behavior: 'smooth' }); })
        .catch(function (e) { fb.innerHTML = ''; if (!e.quiet) fb.appendChild(errBox(e)); })
        .then(function () { busy(false); });
    };
    again.onclick = function () { msgs.length = 0; if (it.opener) msgs.push({ role: 'assistant', content: it.opener }); delete st.aiout[key]; fb.innerHTML = ''; ctx.save(); draw(); };

    box.appendChild(el('div', 'aitag', 'AI role-play · ' + who));
    box.appendChild(log);
    box.appendChild(inp);
    var row = el('div', 'row'); row.style.justifyContent = 'space-between';
    var l = el('span', 'row'); l.appendChild(send); l.appendChild(fin); row.appendChild(l); row.appendChild(again);
    box.appendChild(row); box.appendChild(fb);
    draw();
    return box;
  };

  /* ---------- plan coach (used on the My Plan page) ---------- */
  ai.planBox = function (st, save, collect) {
    st.aiout = st.aiout || {};
    var box = el('div', 'aibox noprint');
    box.innerHTML = '<div class="aitag">AI coach</div><h3>Ask the coach to question your plan</h3><p class="small muted">The coach reads your answers below and asks the questions a good mentor would. It also suggests measurable goals for Rotary Club Central.</p>';
    var btn = el('button', 'btn pri', 'Question my plan'); btn.type = 'button';
    var out = el('div', 'aiout'); if (st.aiout.plan) out.innerHTML = PE.md(st.aiout.plan);
    btn.onclick = function () {
      var data = collect();
      var filled = data.sections.reduce(function (n, s) { return n + s.items.filter(function (i) { return (i.a || '').trim(); }).length; }, 0);
      if (filled < 2) { PE.toast('Answer a few reflection questions first'); return; }
      btn.disabled = true; out.innerHTML = ''; out.appendChild(thinking());
      ai.ask('plan', data)
        .then(function (t) { st.aiout.plan = t; save(); out.innerHTML = PE.md(t); })
        .catch(function (e) { out.innerHTML = ''; if (!e.quiet) out.appendChild(errBox(e)); })
        .then(function () { btn.disabled = false; });
    };
    box.appendChild(btn); box.appendChild(out);
    return box;
  };
})();
