/* President-Elect Leadership Toolkit module
   Title: Growing your next President
   Presenter: District 9815 PELDS Team
   For current club Presidents. Edit it by opening "Module Builder.html" and choosing "Open a module file". */
PE.register({
  "id": "next-president",
  "title": "Growing your next President",
  "presenter": "District 9815 PELDS Team",
  "colour": "turquoise",
  "minutes": 40,
  "summary": "For current Presidents: spot who could lead next, practise asking them with an AI member who isn't sure, face the membership question honestly, and mentor your President-Elect so they say yes and enjoy the year.",
  "items": [
    {
      "type": "text",
      "id": "why",
      "title": "You're the best person to find your club's next President",
      "body": "Two things we know about finding Presidents:\n\n- People rarely volunteer. They say yes **when someone they respect asks them personally**.\n- At Pre-PELDS, many incoming Presidents told us they had **nobody who'd \"been there\"** to walk beside them.\n\nYou can change both. You know your members, you know the job, and right now you have more credibility than anyone else in your club to say: *\"I think you'd be good at this, and I'll help you.\"*\n\n**This module has three parts:**\n1. **Spot:** who in your club could lead in the next two or three years, and are enough new members coming through behind them?\n2. **Ask:** practise the conversation with an AI member who isn't sure.\n3. **Back them:** what you can do as their mentor, so they say yes *and* enjoy the year.\n\n> **Timing matters.** In many clubs the President for 2028–29 is chosen at the annual meeting, which must be held by 31 December. Check your club's bylaws. That conversation may be only weeks away."
    },
    {
      "type": "checklist",
      "id": "spot",
      "title": "Spot: signs of a future President",
      "intro": "Think about your members, including the newer ones. Tick the signs you've seen in **someone** in your club. You're looking for potential, not polish.",
      "items": [
        "Does what they say they'll do",
        "Other members enjoy working with them",
        "Asks \"why do we do it this way?\"",
        "Has run a project, event or committee, even a small one",
        "Brings new people along",
        "Stays calm when things go wrong",
        "Has led something outside Rotary: at work, school, sport or church",
        "Has been in the club **less than five years** (fresh eyes are a strength)"
      ]
    },
    {
      "type": "reflect",
      "id": "shortlist",
      "title": "Your shortlist",
      "plan": "My team & support",
      "prompt": "Write down **two or three people** who could be President in the next three years. Use initials or a description, not full names.\n\nFor each one, note:\n- **Why them?** What have you seen?\n- **What might hold them back?** Time, confidence, family, work?\n- **What small step** could you offer first? Sit in on a board meeting, chair one meeting, come to PELDS with you?",
      "hint": "Don't only look at the obvious people. The person who quietly runs the barbecue roster every month is organising volunteers, and that's most of the job."
    },
    {
      "type": "text",
      "id": "nomembers",
      "title": "No members, no Presidents",
      "body": "Finding a President and finding members are **the same problem**.\n\nIn many clubs the same few people have held every role for years. As long-serving members age out, there's nobody coming through behind them. A club of 15 members with an average age over 70 doesn't have a succession problem. It has a survival problem.\n\nSo while you look for your next President, ask the bigger question too:\n\n- **Who joined in the last three years, and are they still with us?** New members are your future leaders. Give them a real job early.\n- **Who are we *not* attracting?** People in their 30s to 50s, working parents, newer Australians, people who'd rather do than meet?\n- **What would we change if we had to double in five years or close?** Meeting time, format, cost, projects, even partnering with another club.\n\n> The **Membership: you and your Membership Chair** module has scenarios and a stay-conversation practice. Do it with your Membership Chair."
    },
    {
      "type": "reflect",
      "id": "double",
      "title": "Double or close?",
      "plan": "Members & engagement",
      "prompt": "Imagine your board is told: **in five years, double your membership or close.** Not a gentle nudge: a real deadline.\n\n- What would you **stop** doing straight away?\n- What would you **try** that you've never tried?\n- Who **outside Rotary** would you go and talk to?\n- What's **one** of those things you could start this month anyway?",
      "hint": "Write down the ideas that feel a little uncomfortable. Those are usually the ones worth talking about."
    },
    {
      "type": "scenario",
      "id": "notleader",
      "title": "\"I'm not really a leader\"",
      "setup": "Sam has been in your club for three years. Sam runs the Christmas hamper project, and members love working with Sam. When you mention the presidency over coffee, Sam laughs: \"Me? No, I'm not really a leader. Ask someone who's been around longer.\"",
      "choices": [
        {
          "text": "Fair enough. Thank Sam and ask a long-standing member instead.",
          "verdict": "weak",
          "outcome": "You've taken the first \"no\" as final. Most people say no to an unclear, scary job. Sam may never be asked again, and the club recycles the same leaders."
        },
        {
          "text": "Tell Sam what you've seen: \"You run the hamper project and people *want* to help you. That's leadership.\" Then ask what worries them.",
          "verdict": "strong",
          "outcome": "Naming specific things they've already done changes how people see themselves. Asking about worries shows you're listening, and the worries are usually things you can solve."
        },
        {
          "text": "Explain that the club really needs someone and nobody else is available.",
          "verdict": "weak",
          "outcome": "Guilt might get a reluctant yes, but it makes the job sound like a burden. Reluctant Presidents often have a hard year, and it makes the next ask harder."
        },
        {
          "text": "Suggest Sam sits in on the next two board meetings, with no commitment, to see what's involved.",
          "verdict": "mixed",
          "outcome": "A good low-pressure step, and it often works. It's stronger if you first tell Sam *why* you thought of them, so the invitation means something."
        }
      ],
      "debrief": "**The lesson:** people rarely see their own leadership. Tell them what you've seen, ask what worries them, and offer a small, safe first step. Then say how you'll help."
    },
    {
      "type": "scenario",
      "id": "anotheryear",
      "title": "\"Couldn't you just do another year?\"",
      "setup": "It's November. Nobody has put their hand up for President-Elect. At the board meeting, a long-standing member says: \"You're doing a great job. Why don't you just do another year? It's easier than finding someone.\" Several people nod.",
      "choices": [
        {
          "text": "Agree. It's easier, and the club needs stability.",
          "verdict": "weak",
          "outcome": "It solves this year and makes next year harder. Members learn that someone else will always step in, and future leaders never get the chance to grow."
        },
        {
          "text": "Say no to another year, and ask each board member to name one person they'll talk to this month. Offer to have those conversations alongside them.",
          "verdict": "strong",
          "outcome": "You've turned finding a President into a shared job with a deadline. Personal conversations work far better than general appeals, and you're showing the support a new President will have."
        },
        {
          "text": "Put a notice in the bulletin asking for volunteers.",
          "verdict": "weak",
          "outcome": "General appeals almost never find a President. People wait to be asked, especially the capable ones who don't assume they're wanted."
        },
        {
          "text": "Suggest sharing the job: a President with a strong Vice-President and a clear board, so it feels manageable.",
          "verdict": "mixed",
          "outcome": "Making the job smaller and better supported is smart, and many clubs do it. You still need someone to ask people personally, so combine it with the board conversations."
        }
      ],
      "debrief": "**The lesson:** a President who keeps staying blocks the path for others, however good they are. Make finding the next President the whole board's job, with names and a date."
    },
    {
      "type": "scenario",
      "id": "ageing",
      "title": "The club that's slowly shrinking",
      "setup": "Your club has 16 members. Most are over 70, two have died this year and three more say this will be their last year. Meetings are a dinner with a speaker on a weeknight. The same five people run everything. At the board meeting someone says: \"We just need a membership drive.\"",
      "choices": [
        {
          "text": "Run a membership drive: flyers, a bring-a-friend night and posts on Facebook.",
          "verdict": "weak",
          "outcome": "It feels like action, and you might get a visitor or two. But if the club experience stays the same, the people it suits are the people who already left or never came. Drives rarely fix a format problem."
        },
        {
          "text": "Ask five people in the community who are *not* in Rotary what would make them give a few hours a month, then test one new way of meeting or serving based on what they say.",
          "verdict": "strong",
          "outcome": "You're designing for the members you want, not the ones you have. Small experiments (a monthly hands-on project, a breakfast, an online meeting, a cause-based group) tell you what works without betting the club on it."
        },
        {
          "text": "Talk to a nearby club about meeting together, sharing projects or eventually merging.",
          "verdict": "mixed",
          "outcome": "Uncomfortable but sometimes wise. Combining can create energy and share the load. Do it as a real partnership with a clear purpose, not a rescue, and keep what members love about each club."
        },
        {
          "text": "Accept it. The club has done great work and can close with dignity when the time comes.",
          "verdict": "mixed",
          "outcome": "An honest option, and sometimes the right one. But closing should be a choice the members make with their eyes open, not something that happens by default because nobody asked the hard questions in time."
        }
      ],
      "debrief": "**The lesson:** members rarely leave Rotary. They leave a club experience that no longer suits them, and they don't join one that never would. Ask outsiders, experiment small, and talk openly about bold options before they become the only options."
    },
    {
      "type": "text",
      "id": "theask",
      "title": "Ask: five parts of a good ask",
      "body": "1. **Why them.** Name something specific you've seen. *\"The way you ran the hampers…\"*\n2. **What the job really is, and isn't.** A clear one-year role with a board to share the work. Not doing everything yourself.\n3. **The support.** You as their mentor, Pre-PELDS and PELDS training, the PE Leadership Toolkit, their Assistant Governor and the district.\n4. **Time to think.** *\"Don't answer now. Can we have coffee next week?\"*\n5. **A small next step.** Come to a board meeting, chair one meeting, or come along to a district event.\n\n> Ask in person, one to one. Never in a meeting, and never by email."
    },
    {
      "type": "roleplay",
      "id": "askjo",
      "title": "Practise the ask (AI)",
      "who": "Jo, a member for four years",
      "setup": "Jo joined your club four years ago and has run the club's market stall and two fundraising dinners. Members like working with Jo. Jo has a busy job and teenage children.\n\nYou've invited Jo for a coffee because you'd like Jo to consider becoming your club's President in a couple of years.",
      "goal": "Explain why you thought of Jo, be honest about what the job involves, offer real support, and agree a small next step rather than pushing for a yes today.",
      "character": "Jo, mid-40s, works full-time as a practice manager, two teenagers, four years in the club. Capable and well liked, but doesn't think of themself as a leader and is worried about time: \"I can barely keep up as it is.\" Also a little worried about having to give speeches and run meetings in front of long-standing members. If the President says specifically why they thought of Jo, is honest about the time involved, explains the support (a mentor, training, a board that shares the work) and suggests a small step like sitting in on a board meeting, Jo warms up and agrees to that step. If the President is vague, flatters without specifics, makes it sound like a huge job, or pushes for an answer today, Jo politely says now isn't a good time.",
      "opener": "Thanks for the coffee! So, what did you want to chat about? You sounded a bit mysterious on the phone.",
      "coaching": "Good: naming specific things Jo has done; being honest about time; explaining real support (mentor, PELDS training, the toolkit, a board that shares the load); listening to Jo's worries; offering a small next step and time to think. Weak: guilt (\"nobody else will do it\"); vague praise; downplaying the job; pushing for a yes today."
    },
    {
      "type": "text",
      "id": "backthem",
      "title": "Back them: your mentor year",
      "body": "Once someone says yes, your job changes from asking to **backing them**. A few small things make a big difference:\n\n- **Invite them to board meetings now**, and ask their opinion.\n- **Let them chair a club meeting** or lead a project while you're there to help.\n- **Share the real stuff:** the club plan, budget, calendar, and what you wish you'd known.\n- **Introduce them** to your Assistant Governor and other Presidents.\n- **Send them to Pre-PELDS and PELDS**, and ask what they learned.\n- **Share the PE Leadership Toolkit** with them. Its \"Your mentor for the year\" module gives you both questions for every month.\n- **Hand over gradually**, and stay in touch after 1 July. A monthly coffee is enough.\n\n> The most useful thing you can say is: *\"Ring me any time. No question is silly.\"*"
    },
    {
      "type": "roleplay",
      "id": "wobble",
      "title": "Practise mentoring a wobbling President-Elect (AI)",
      "who": "Chris, your club's President-Elect",
      "setup": "Chris is your club's President-Elect and takes over on 1 July. Chris rings you a few days after a district training session, sounding flat.\n\nYou're Chris's mentor. Your job is to help, not to take over.",
      "goal": "Listen first, find out what's really worrying Chris, help Chris see it's manageable without brushing it off, and agree one or two specific ways you'll support them.",
      "character": "Chris, early 50s, a small-business owner, President-Elect of the club. Came back from district training feeling overwhelmed: \"Everyone else seemed to have a plan. I don't even know where to start, and I'm not sure I can do this.\" Underneath, the real worries are setting goals in Rotary Club Central, running board meetings, and a long-standing member who tends to criticise. If the mentor listens, asks questions, shares an honest story of their own and offers specific help (going through the plan together, sitting in on the first board meeting, a monthly coffee), Chris feels relieved and agrees a next step. If the mentor jumps straight to solutions, says \"you'll be fine\", or offers to do it all for them, Chris stays flat and says \"I'll think about it.\"",
      "opener": "Hi. Have you got a minute? I've been thinking since the training on the weekend, and honestly I'm not sure I'm the right person for this.",
      "coaching": "Good: listening before advising; asking what specifically worries Chris; normalising the feeling (many PEs feel this); sharing a short honest story; specific offers of help (plan together, first board meeting, monthly coffee); letting Chris choose. Weak: \"you'll be fine\"; lecturing; taking over; too many tips at once."
    },
    {
      "type": "checklist",
      "id": "handover",
      "title": "Your handover checklist",
      "intro": "Tick these off with your President-Elect before 1 July.",
      "items": [
        "Introduced them to our Assistant Governor",
        "They've sat in on at least three board meetings",
        "They've chaired a club meeting",
        "Shared the club plan, budget and calendar",
        "They've been to Pre-PELDS and PELDS",
        "They've set goals in Rotary Club Central",
        "We've agreed how we'll keep in touch after 1 July",
        "We've started looking for the person after them"
      ]
    },
    {
      "type": "discuss",
      "id": "board",
      "title": "For your next board meeting",
      "intro": "Use **Board mode** to put these on the screen.",
      "questions": [
        "Who could lead our club in the next three years? Let's name at least three people.",
        "Who will have a personal conversation with each of them, and by when?",
        "If we had to double our membership in five years or close, what would we change first?",
        "Who joined in the last three years? What job could we give each of them that grows them as a leader?",
        "What makes the President's job feel too big here? What could we share or stop?",
        "How will we support our President-Elect between now and 1 July?",
        "How do we make sure the next President doesn't have to do it alone?"
      ]
    },
    {
      "type": "resource",
      "id": "res",
      "title": "Resources",
      "items": [
        {
          "label": "Leadership Hub (District 9815)",
          "file": "https://www.rotary9815.org.au/page/leadership-flow",
          "note": "Lead your club, the year planner and succession"
        },
        {
          "label": "Pre-PELDS 2026 session summary",
          "file": "resources/Pre-PELDS-2026-Session-Summary.pdf",
          "note": "What incoming Presidents heard, so you can talk it through with yours"
        },
        {
          "label": "My Presidential Plan workbook",
          "file": "resources/My-Presidential-Plan-workbook.pdf",
          "note": "Go through it together with your President-Elect"
        },
        {
          "label": "Rotary Learning Center: course catalogs",
          "file": "https://learn.rotary.org/members/pages/36/course-catalogs",
          "note": "My Rotary login needed. Look for the club president and leadership courses"
        }
      ]
    }
  ]
});
