/* ============================================================
   THE DISTRICT GOAL: shown on the toolkit home page and the Launchpad.
   From the District 9815 Membership Growth Strategic Plan 2026–2029.
   Edit the words here and every page updates.
   ============================================================ */
window.PE_GOAL = {
  title: 'Our District goal',
  headline: 'Grow District 9815 membership by <b>15%</b> over three years, with members who are engaged, diverse and glad they stayed.',
  stats: [
    ['5%', 'net growth a year, across the District'],
    ['90%+', 'of members still with us each year'],
    ['−25%', 'fewer first-year resignations'],
    ['1', 'person each of us could invite']
  ],
  link: ['membership-explorer.html', 'Explore the five pathways'],
  /* draws the goal strip into an element: PE_GOAL.draw(document.getElementById('x')) */
  draw: function (el) {
    if (!el) return;
    var g = this;
    el.innerHTML = '<div class="dgoal"><div class="dg-l"><div class="dg-k">🎯 ' + g.title + '</div><div class="dg-h">' + g.headline + '</div>' +
      '<a class="dg-a" href="' + g.link[0] + '">' + g.link[1] + ' →</a></div><div class="dg-s">' +
      g.stats.map(function (s) { return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('') + '</div></div>';
    if (!document.getElementById('dgoal-css')) {
      var st = document.createElement('style'); st.id = 'dgoal-css';
      st.textContent = '.dgoal{display:grid;grid-template-columns:1.2fr 1fr;gap:16px;align-items:center;background:linear-gradient(120deg,#0B2A5C,#17458F 60%,#0067C8);color:#fff;border-radius:16px;padding:16px 20px;margin:16px 0;border-bottom:5px solid #F7A81B}' +
        '.dg-k{font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#F7A81B;margin-bottom:4px}' +
        '.dg-h{font-family:Fraunces,Georgia,serif;font-size:1.15rem;line-height:1.3}.dg-h b{color:#F7A81B}' +
        '.dg-a{display:inline-block;margin-top:8px;color:#fff;font-weight:800;text-decoration:none;border-bottom:2px solid #F7A81B}' +
        '.dg-s{display:grid;grid-template-columns:1fr 1fr;gap:8px}.dg-s div{background:rgba(255,255,255,.1);border-radius:10px;padding:7px 10px}' +
        '.dg-s b{display:block;font-family:Fraunces,Georgia,serif;font-size:1.3rem}.dg-s span{font-size:.78rem;opacity:.9;line-height:1.25;display:block}' +
        '@media (max-width:700px){.dgoal{grid-template-columns:1fr}}';
      document.head.appendChild(st);
    }
  }
};
