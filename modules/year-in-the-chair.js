/* President-Elect Leadership Toolkit module
   Title: A year in the chair: real dilemmas
   Presenter: District 9815 PELDS Team
   Edit it by opening "Module Builder.html" and choosing "Open a module file". */
PE.register({
  "id": "year-in-the-chair",
  "title": "A year in the chair: real dilemmas",
  "presenter": "District 9815 PELDS Team",
  "colour": "azure",
  "minutes": 30,
  "summary": "Eight situations Presidents really face. Choose your response and see where it leads.",
  "items": [
    {
      "type": "text",
      "id": "intro",
      "title": "How to use the scenarios",
      "body": "Each scenario is based on things that really happen in clubs. Read the situation, pick what you would *actually* do (not what you think you *should* say), then read the outcome.\n\n- **Strong choice**: likely to lead somewhere good\n- **Partly there**: good intent, but something is missing\n- **Risky choice**: common, understandable, and likely to cause trouble later\n\nThen try the other options. Some of the best learning comes from seeing why a reasonable-sounding choice can go wrong.\n\n> These work brilliantly with a group. Use **Board mode** at your board planning day. Let everyone vote, then reveal the outcomes."
    },
    {
      "type": "scenario",
      "id": "meeting",
      "title": "The board meeting that never ends",
      "setup": "It is your second board meeting. It started at 7:00 pm and it is now 9:40 pm. You have spent 50 minutes on whether the club should buy a new barbecue trailer, the same discussion as last month.\n\nTwo directors have gone quiet. Your Secretary catches your eye and taps their watch. Half the agenda hasn't been touched.",
      "choices": [
        {
          "text": "Push on and finish the agenda, however long it takes. It all needs deciding.",
          "verdict": "weak",
          "outcome": "You finish at 10:50 pm. Decisions made that late are rarely good ones, and two directors quietly decide they will \"be busy\" next month. Long meetings are one of the most common reasons capable people avoid board roles."
        },
        {
          "text": "Call time on the trailer: ask two people to bring a costed recommendation to next meeting, then move on.",
          "verdict": "strong",
          "outcome": "The discussion stops going in circles, and two people now own the problem. Next month it takes 10 minutes. You also show the board you will protect their time, which earns you a lot of goodwill."
        },
        {
          "text": "Close the meeting and say you will decide the rest by email.",
          "verdict": "mixed",
          "outcome": "It saves tonight, but email decisions often stall or turn into long reply-all threads. Fine for simple items. Not for anything people care about."
        },
        {
          "text": "Next time, set a finish time and put time limits next to each agenda item.",
          "verdict": "strong",
          "outcome": "A good fix for the future, but it doesn't solve tonight. Use it together with option B. Many Presidents also send reports out *before* the meeting so board time is spent deciding, not reading."
        }
      ],
      "debrief": "**The lesson:** the President's job in a meeting is to run the process, not to win the argument.\n\nUseful habits: circulate reports beforehand · put decisions first, information last · a finish time agreed at the start · \"Who will bring a recommendation?\" as your friend."
    },
    {
      "type": "scenario",
      "id": "treasurer",
      "title": "The Treasurer resigns in October",
      "setup": "Your Treasurer emails you on a Sunday night. A family situation means they need to step down, effective immediately. They will hand over \"whatever is in the folder\".\n\nThe club has a fundraising event in five weeks. You are not sure who else can see the bank accounts.",
      "choices": [
        {
          "text": "Do the books yourself for now. It's quicker than finding someone.",
          "verdict": "weak",
          "outcome": "It feels responsible, but the President holding the money *and* approving spending is a governance risk. It also eats the time you need for leading. Very common, and very hard to get out of once you start."
        },
        {
          "text": "Thank them warmly, then quickly check who are the bank signatories and arrange a proper handover with a second board member present.",
          "verdict": "strong",
          "outcome": "You protect the club and the outgoing Treasurer. A handover checklist (bank access, outstanding payments, records, insurance, any grant money held) means nothing falls through the cracks. Then you can recruit calmly."
        },
        {
          "text": "Announce at the next meeting that the club needs a new Treasurer and wait for a volunteer.",
          "verdict": "mixed",
          "outcome": "Open calls for volunteers rarely work for skilled roles. Personally ask one or two people who have the skills. A specific \"I think you'd be great at this\" works far better than a general appeal."
        },
        {
          "text": "Ask your AG whether a nearby club has someone who could mentor a new Treasurer.",
          "verdict": "strong",
          "outcome": "Good thinking. You don't have to solve everything inside your own club. Your AG and the district can often connect you with help."
        }
      ],
      "debrief": "**The lesson:** plan for key people leaving *before* it happens.\n\nAt your planning day, ask: who else can access our accounts? Do we have at least two signatories? Where are our records kept? Is there a deputy for every key role?"
    },
    {
      "type": "scenario",
      "id": "newidea",
      "title": "\"We tried that in 1998\"",
      "setup": "A new member, six months in, suggests at a club meeting that the club run a Saturday morning working bee with a local school, and invite parents along.\n\nA respected long-standing member says, kindly but firmly: \"We tried something like that years ago. It didn't work.\" The room goes quiet. The new member looks at you.",
      "choices": [
        {
          "text": "Move on to the next agenda item to avoid an awkward moment.",
          "verdict": "weak",
          "outcome": "The new member hears \"ideas aren't welcome here.\" New members who feel unheard are among the most likely to leave in their first two years."
        },
        {
          "text": "Say: \"Great idea, let's do it!\" and commit the club on the spot.",
          "verdict": "mixed",
          "outcome": "Enthusiastic, but it skips the board and the long-standing member feels dismissed. You may end up with a project nobody owns."
        },
        {
          "text": "Thank both of them. Ask the long-standing member what was learned last time, and ask the new member to lead a small group to bring back a plan.",
          "verdict": "strong",
          "outcome": "You respect experience *and* new energy. The new member gets ownership, the long-standing member gets to contribute their wisdom, and the club gets a better plan."
        },
        {
          "text": "Have a quiet word with the new member afterwards to explain how things work here.",
          "verdict": "weak",
          "outcome": "Well meant, but it teaches them that the club's way is fixed. They may stay polite, and quietly stop coming."
        }
      ],
      "debrief": "**The lesson:** how you respond to new ideas in public tells *every* member what kind of club this is.\n\nAsk yourself: when was the last time a newer member's idea became a club project?"
    },
    {
      "type": "scenario",
      "id": "conflict",
      "title": "Two members at loggerheads",
      "setup": "Two long-time members, both hard workers, have fallen out over how the club's biggest fundraiser should be run. It has spilled into club meetings, with pointed comments and eye-rolling.\n\nOther members have started to mention it to you, and one has said they're \"not enjoying Rotary much at the moment\".",
      "choices": [
        {
          "text": "Raise it at the next club meeting so everyone can clear the air.",
          "verdict": "weak",
          "outcome": "Public conflict resolution rarely works. Both people feel exposed and dig in. The members who were uncomfortable are now *more* uncomfortable."
        },
        {
          "text": "Meet each of them separately, listen, then bring them together with a clear focus on what the event needs.",
          "verdict": "strong",
          "outcome": "Listening privately first often lowers the temperature a lot. When they meet, keep the focus on the shared goal (a great event) and agree on clear roles. It won't always fix the relationship, but it usually fixes the behaviour."
        },
        {
          "text": "Leave it. They're adults, and it will blow over.",
          "verdict": "mixed",
          "outcome": "Sometimes it does. But other members are already feeling it, and the culture of the club is the President's business. A light touch early is much easier than a big intervention later."
        },
        {
          "text": "Ask your AG for advice before acting.",
          "verdict": "strong",
          "outcome": "A wise step, especially if it involves conduct concerns. Your AG has likely seen this before and can give you an outside view."
        }
      ],
      "debrief": "**The lesson:** small conflicts left alone become a club culture problem. Act early, privately, and with curiosity.\n\nIf behaviour crosses into bullying or harassment, it is no longer just a disagreement. Seek district advice."
    },
    {
      "type": "scenario",
      "id": "youth",
      "title": "A concern at a youth event",
      "setup": "After a youth program your club supports, a parent quietly tells you their teenager has been receiving private social media messages from an adult club volunteer. The messages aren't obviously inappropriate, but the parent feels uneasy.\n\nThe volunteer is popular and has helped for years.",
      "choices": [
        {
          "text": "Tell the parent you know the volunteer well and they wouldn't do anything wrong.",
          "verdict": "weak",
          "outcome": "This is the response that protection policies exist to prevent. Character judgements are not a safeguard. The parent may lose trust in Rotary, and a real risk may be missed."
        },
        {
          "text": "Thank the parent, write down what they told you (facts only), and contact the District Youth Protection Officer straight away for guidance.",
          "verdict": "strong",
          "outcome": "Exactly right. You don't investigate it yourself. You record it, keep it confidential, and follow the district's youth protection process. If a young person may be in immediate danger, call 000 first."
        },
        {
          "text": "Speak to the volunteer directly to get their side of the story.",
          "verdict": "weak",
          "outcome": "Understandable, but it can compromise any proper process and may put the young person at risk. Leave this to the people trained to handle it."
        },
        {
          "text": "Raise it at the next board meeting so the board can decide.",
          "verdict": "mixed",
          "outcome": "The board may need to know eventually, but this needs prompt, confidential action by the right people first, not a board discussion."
        }
      ],
      "debrief": "**The lesson:** with youth protection, the President's job is to **listen, record, report**, not to judge or investigate.\n\nBefore your year starts: find out who your District Youth Protection Officer is, and make sure everyone working with young people in your club has completed the required checks and training."
    },
    {
      "type": "scenario",
      "id": "donation",
      "title": "The year-end donation request",
      "setup": "It is May. The club's community account has a healthy balance. A local charity has written asking for $5,000 towards \"general operations\". One of your directors is on their committee and is keen.\n\nSeveral members say: \"We've always given them something.\" ",
      "choices": [
        {
          "text": "Approve it. The money is there and it is a good cause.",
          "verdict": "weak",
          "outcome": "Possibly fine, but \"general operations\" gives the club no project, no role for members and no visibility. Clubs that mainly \"raise funds and donate\" tend to struggle to attract new members."
        },
        {
          "text": "First check: are our own projects funded? Have we given to The Rotary Foundation and End Polio this year? Then look up the charity's ACNC report.",
          "verdict": "strong",
          "outcome": "This follows the district's *Donation Due Diligence* guide. Your own projects come first. Then check the charity's ACNC record: up to date? How much goes to the cause? How big are their reserves?"
        },
        {
          "text": "Offer to fund a specific item they need, with members involved in delivering it and recognition for the club.",
          "verdict": "strong",
          "outcome": "Great. A specific item gives members a goal and a hands-on role, and gives the club a story to tell (an opening, a plaque, a social media post). If the gift isn't big enough to warrant any recognition, ask if it is the right partner."
        },
        {
          "text": "Ask the director on their committee to leave the room when the board decides.",
          "verdict": "mixed",
          "outcome": "Managing the conflict of interest is right, and important. But on its own it doesn't answer whether this is the best use of the club's funds."
        }
      ],
      "debrief": "**The lesson:** member money raised through hard work deserves a decision process, not a habit.\n\nSee the *Giving wisely* module and the *Donation Due Diligence* guide in the Library."
    },
    {
      "type": "scenario",
      "id": "succession",
      "title": "Nobody wants to be next",
      "setup": "It is February. Your club needs a President-Nominee for the year after next, and the board has been \"thinking about it\" since August.\n\nEvery time you raise it, people look at their shoes. One past President has offered to \"do it again if no one else will\".",
      "choices": [
        {
          "text": "Accept the past President's offer. Problem solved.",
          "verdict": "mixed",
          "outcome": "It solves this year, but it delays the real problem. It also tells capable newer members that leadership is reserved for a few. Sometimes this is a sensible bridge, but pair it with a plan."
        },
        {
          "text": "Ask yourself why nobody wants it. Then make the role smaller and better supported, and personally ask two people.",
          "verdict": "strong",
          "outcome": "People turn down roles that look huge and lonely. Share the load (a vice-president, clear director roles, fewer meetings) and offer mentoring, and a personal ask becomes much easier to say yes to."
        },
        {
          "text": "Put a notice in the bulletin calling for nominations.",
          "verdict": "weak",
          "outcome": "Almost nobody puts their hand up for a leadership role in response to a notice. It is the personal invitation that works."
        },
        {
          "text": "Suggest two members share the role as co-Presidents.",
          "verdict": "mixed",
          "outcome": "Some clubs make this work well. It needs very clear roles and should be checked against your club's constitution and bylaws first."
        }
      ],
      "debrief": "**The lesson:** succession is part of *your* job, starting now. Your best legacy may be the person who follows you.\n\nAsk at your first board meeting: who might be President in three years' time, and what are we doing to grow them?"
    },
    {
      "type": "scenario",
      "id": "quiet",
      "title": "Attendance is quietly dropping",
      "setup": "By September, regular attendance has dropped from about 22 to 15. Nobody has resigned. People are just \"busy\". Your bulletin editor asks whether you want to put a \"please come along\" message in this week's bulletin.",
      "choices": [
        {
          "text": "Yes. Remind everyone that attendance matters.",
          "verdict": "weak",
          "outcome": "The people who read it are mostly the ones who already come. The ones drifting away feel a little guilty, and drift a bit further."
        },
        {
          "text": "Call or have coffee with each person who has stopped coming. Ask what would make Rotary worthwhile for them right now.",
          "verdict": "strong",
          "outcome": "Personal contact is the single best way to re-engage members. You will often find simple reasons: meeting time, cost, a project they were in that finished, feeling unneeded. Each one is something you can fix."
        },
        {
          "text": "Book a run of big-name speakers to draw people back.",
          "verdict": "mixed",
          "outcome": "Good programs help, but people rarely stay for speakers alone. Most members stay because they have friends there and feel useful."
        },
        {
          "text": "Run the Member Motivation Quiz at a meeting and plan activities for the gaps.",
          "verdict": "strong",
          "outcome": "A good way to learn what motivates *your* members: action, ideas, connection or structure. See the *Club health* module."
        }
      ],
      "debrief": "**The lesson:** disengaged members leave. Engaged members stay. Energised members bring their friends.\n\nDisengagement shows up as silence before it shows up as a resignation. Notice the quiet ones early."
    }
  ]
});
