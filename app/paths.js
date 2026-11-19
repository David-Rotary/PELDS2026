/* ============================================================
   PATHS: one guided path per kind of club leader.
   The toolkit home page asks "Who are you?" and shows that path.
   Everyone can also look at the other paths ("See their path").

   Each step:  [ 'Title', 'Why it matters', 'link' ]
     link = 'module-id/page-id'   a page in the toolkit
          = 'https://…'           a website
          = ''                    no link (just something to do)
   Edit the words freely in Notepad. Keep the quotes and commas.
   ============================================================ */
window.PE_PATHS = {

  pe: {
    name: 'President-Elect', icon: '🌱', colour: '#F7A81B',
    pick: 'I\'ve said yes. I start on 1 July.',
    hero: 'You said yes. Let\'s make sure you\'re glad you did.',
    voice: 'Being asked is a compliment, and feeling nervous is normal. Nearly every President-Elect wonders if they\'re good enough and how much time it will take. Nobody expects you to know it all on 1 July. This path builds your confidence one small step at a time, and you won\'t walk it alone.',
    others: 'Excited and nervous. Probably wondering if they\'re good enough, and how much time it will take. Small encouragements from you matter more than you think.',
    see: ['pres', 'mentor', 'mc'],
    stages: [
      { when: 'Now, before Christmas', steps: [
        ['Why did you say yes?', 'Your reason is your fuel for the year. Write it down.', 'welcome/saidyes'],
        ['Who could be your mentor?', 'A past President from any club. Most say yes, and gladly.', 'your-mentor/who'],
        ['Practise asking them (AI)', 'Practise with Helen first, then make the real call.', 'your-mentor/ask'],
        ['Your first coffee with your President', 'Start the "Together" conversations: why you both said yes.', 'together/why'] ] },
      { when: 'January to March', steps: [
        ['Our club in numbers', 'Where your club really is, before you decide where it should go.', 'presidential-plan/snapshot'],
        ['Your two or three goals', 'Not twelve. Two or three you believe in.', 'presidential-plan/goals'],
        ['Membership, with your Membership Chair', 'Agree who does what. Membership is a team job.', 'membership-partnership/agreement'],
        ['Real dilemmas, safely', 'Choose what you\'d do, then see where it leads.', 'year-in-the-chair/intro'] ] },
      { when: 'April to June', steps: [
        ['PELDS in April', 'Two days with other President-Elects. You\'ll leave with a plan and new friends.', ''],
        ['Your club\'s goals in Rotary Club Central', 'Review the three-year goals with your Board, and update them for your year.', 'https://my.rotary.org/en/login'],
        ['Your team', 'Who\'s on your Board, and who might be tired and need a change.', 'presidential-plan/team'],
        ['The handover', 'Finish the shared checklist with your President.', 'together/checklist'],
        ['Your first three moves', 'What you\'ll do in your first month.', 'your-mentor/moves'] ] }
    ],
    safety: { title: 'Having second thoughts?', button: 'I\'m having second thoughts',
      body: 'That\'s normal, and it\'s worth saying out loud. Before you decide anything:\n\n- **Tell someone what\'s worrying you:** your mentor, your President or your Assistant Governor. Most worries have a fix: time, a difficult member, or not knowing the job yet.\n- **Make the job smaller.** Three jobs, not thirty. A strong Board and Vice-President share the load. You don\'t have to run every project.\n- **Read "When it gets hard"** in the mentor module.\n- **If it truly isn\'t the right time,** say so early and honestly. Your club would much rather know in December than in June, and there\'s no shame in it.',
      links: [['your-mentor/hard', 'When it gets hard'], ['your-mentor/askmentor', 'Questions to ask your mentor'], ['together/wobble', 'When one of us wobbles']] }
  },

  pres: {
    name: 'President now', icon: '🧭', colour: '#17458F',
    pick: 'I\'m in the chair this year.',
    hero: 'You\'re in the chair. Make it count, and make it last beyond you.',
    voice: 'You\'re committed and you\'re busy. These are short actions that make the biggest difference this year. The most important one: find and back the person who follows you. Your President-Elect is watching how you do the job. Showing it\'s doable, and even enjoyable, is the best recruitment there is.',
    others: 'Busy, mid-year, juggling the club and the rest of life. Probably worried about who comes next. A thank-you and an offer to help goes a long way.',
    see: ['pe', 'mc'],
    stages: [
      { when: 'This month', steps: [
        ['Your year at a glance', 'What usually happens when, so nothing sneaks up on you.', 'month-by-month/cal'],
        ['Call one quiet member', 'Practise a stay conversation first (AI).', 'membership-partnership/stay'],
        ['Coffee with your President-Elect', 'Start the "Together" conversations.', 'together/why'] ] },
      { when: 'Before your annual meeting', steps: [
        ['Spot your successor', 'Who could lead in the next three years? Look at newer members too.', 'next-president/spot'],
        ['Practise the ask (AI)', 'Jo is capable, busy and not sure.', 'next-president/askjo'],
        ['"Couldn\'t you just do another year?"', 'Why staying on can block the path for others.', 'next-president/anotheryear'] ] },
      { when: 'January to June', steps: [
        ['Back your President-Elect', 'Board meetings, chairing one meeting, sharing the real stuff.', 'next-president/backthem'],
        ['Double or close?', 'A bold question for your Board about membership.', 'next-president/double'],
        ['The shared handover checklist', 'Tick it off together before 1 July.', 'together/checklist'],
        ['Report your club\'s goals', 'Club Excellence Award: report achievements in Rotary Club Central by 30 June.', 'https://my.rotary.org/en/login'] ] }
    ],
    safety: { title: 'Feeling stretched?', button: 'I\'m feeling stretched',
      body: 'Mid-year is when many Presidents feel it. You don\'t have to carry it alone:\n\n- **Hand one thing over this week.** Ask a Board member or your President-Elect to own it. It grows them too.\n- **Ring your Assistant Governor.** That\'s what they\'re there for.\n- **Cut a meeting, not a member.** Shorter Board meetings, fewer reports, more decisions.\n- **Ask a Zone Specialist** in Club Assist for a specific problem.',
      links: [['year-in-the-chair/meeting', 'The board meeting that never ends'], ['practise-conversations/treasurer', 'The Treasurer wants to stop (AI)'], ['https://rotarysouthpacific.org/Page/rotary-club-assist', 'Club Assist']] }
  },

  mc: {
    name: 'Membership Chair', icon: '🤝', colour: '#D41367',
    pick: 'I look after members.',
    hero: 'Growth is the outcome. The club experience is the driver.',
    voice: 'You can\'t do it alone, and you shouldn\'t have to. Membership is everyone\'s job, and your best ally is your President. Keeping the members you have is the fastest growth there is, and today\'s new members are tomorrow\'s Presidents.',
    others: 'Often feels membership is all on them. Needs the President to own it too, and the Board to share it.',
    see: ['pres', 'pe'],
    stages: [
      { when: 'Start here', steps: [
        ['The District strategy', '+15% in three years, with engagement and retention moving together.', 'membership-partnership/strategy'],
        ['Who does what', 'The President and Membership Chair partnership.', 'membership-partnership/partnership'],
        ['Club experience health check', 'Rate it separately from your President, then compare.', 'membership-partnership/health'] ] },
      { when: 'Keep the members you have', steps: [
        ['The new member who went quiet', 'What works when someone drifts.', 'membership-partnership/quiet'],
        ['The first year: 90 days, then 3, 6 and 12 months', 'Onboarding that keeps people.', 'membership-partnership/firstyear'],
        ['Practise a stay conversation (AI)', 'Call Graham, who has drifted.', 'membership-partnership/stay'] ] },
      { when: 'Grow, and think bigger', steps: [
        ['More than one way in', 'Flexible ways to belong and serve.', 'membership-partnership/ways'],
        ['Where your community already gathers (AI)', 'Map your local community.', 'club-health/insight'],
        ['No members, no Presidents', 'Why your work is also succession planning.', 'next-president/nomembers'],
        ['Your agreement with the President', 'Goals, who does what, first three moves.', 'membership-partnership/agreement'] ] }
    ],
    safety: { title: 'Feeling it\'s all on you?', button: 'It feels like it\'s all on me',
      body: 'That\'s the most common thing Membership Chairs say.\n\n- **Read "The Membership Chair doing it alone"** and take the strong answer to your President.\n- **Ask the Board for one name each** this month: a person they\'ll personally invite or call.\n- **Use the Membership Hub and Club Assist** for ready-made ideas and short videos.',
      links: [['membership-partnership/alone', 'The Membership Chair doing it alone'], ['https://www.rotary9815.org.au/page/membership-flow', 'Membership Hub']] }
  },

  mentor: {
    name: 'Mentor or Past President', icon: '🎓', colour: '#00A2E0',
    pick: 'I\'m backing someone.',
    hero: 'You\'ve been there. That\'s exactly what they need.',
    voice: 'You don\'t need an answer for everything. Listen first, share honest stories (including what went wrong), and open doors. A coffee once a month and "ring me any time" can be the difference between a President who copes and one who enjoys it.',
    others: 'Giving their time freely. A regular coffee and a thank-you keep them going.',
    see: ['pe', 'pres'],
    stages: [
      { when: 'Getting started', steps: [
        ['Back them: your mentor year', 'Simple things that make a big difference.', 'next-president/backthem'],
        ['What a mentor in your pocket covers', 'So you know what they\'re reading.', 'your-mentor/pocket'],
        ['Questions they might ask you', 'Think about your answers, and your stories.', 'your-mentor/askmentor'] ] },
      { when: 'Through the year', steps: [
        ['Monthly check-ins', 'Two or three questions for every month, July to June.', 'your-mentor/checkins'],
        ['Practise mentoring a wobbling President-Elect (AI)', 'Chris is overwhelmed after training. Listen first.', 'next-president/wobble'],
        ['When it gets hard', 'What to say when things go wrong.', 'your-mentor/hard'],
        ['The handover checklist', 'Help them and their President finish it before 1 July.', 'next-president/handover'] ] }
    ],
    safety: null
  },

  future: {
    name: 'Future leader', icon: '🌟', colour: '#00ADBB',
    pick: 'Someone thinks I could lead.',
    hero: 'Someone thinks you could lead. Let\'s see if you agree.',
    voice: 'No pressure and no commitment. Have a look at what leading in Rotary is really like, try a few real situations, and see how you\'d be supported. It\'s a leadership course with friends, for a cause.',
    others: 'Curious and unsure. Wants to know it\'s doable and that they\'d be supported. An invitation to sit in on a Board meeting is a great first step.',
    see: ['pres', 'pe', 'mentor'],
    stages: [
      { when: 'Have a look', steps: [
        ['What leading is really like', 'Three jobs, not thirty, and the support you\'d have.', 'launchpad.html?welcome=1'],
        ['What would they say on 30 June?', 'Imagine your year was a success. What happened?', 'welcome/legacy'],
        ['Real dilemmas', 'Try a few situations Presidents really face.', 'year-in-the-chair/intro'],
        ['Rotary-speak', 'AG, DGE, TRF… what they all mean.', 'rotary-speak/' ] ] },
      { when: 'Try it, no commitment', steps: [
        ['Sit in on a Board meeting or two', 'Ask your President. Watch, listen, ask questions afterwards.', ''],
        ['Chair one club meeting', 'With your President beside you.', ''],
        ['Have a coffee with a past President', 'Ask them anything. No question is silly.', ''] ] }
    ],
    safety: null
  }
};
