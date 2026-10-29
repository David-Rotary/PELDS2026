/* President-Elect Leadership Toolkit module
   Title: Your mentor for the year
   Presenter: District 9815 PELDS Team
   Edit it by opening "Module Builder.html" and choosing "Open a module file". */
PE.register({
  "id": "your-mentor",
  "title": "Your mentor for the year",
  "presenter": "District 9815 PELDS Team",
  "colour": "sky",
  "minutes": 30,
  "summary": "A mentor in your pocket: find a real one, build your plan and membership pledge, and check in every month from July to June.",
  "items": [
    {
      "type": "text",
      "id": "pocket",
      "title": "A mentor in your pocket",
      "body": "Here's the honest truth: many clubs no longer have someone who has \"been there\" to walk beside a new President. If that's you, this module is for you.\n\nThink of it as a mentor in your pocket. It asks the questions a good mentor would ask, at the moments in the year you'll need them.\n\n- **Find a real mentor too.** A past President from *any* club, your Assistant Governor, or someone from your PELDS group.\n- **Build two things first:** your one-page club plan and your membership pledge.\n- **Check in every month.** The calendar in this module gives you two or three questions for each month, July to June.\n\n> You don't have to be the best Rotarian in the room. You just have to care, ask good questions and let other people shine."
    },
    {
      "type": "reflect",
      "id": "who",
      "title": "Who could be your mentor?",
      "plan": "My team & support",
      "prompt": "Write down **two or three people** who could be a sounding board for your year.\n\nThey don't need to be in your club. Think past Presidents in nearby clubs, your Assistant Governor, a Rotarian you met at PELDS, or a leader you admire from work or your community.",
      "hint": "What would you ask them for? A coffee once a month? A phone call when you are stuck? Someone to read your plan?"
    },
    {
      "type": "roleplay",
      "id": "ask",
      "title": "Practise asking someone to mentor you",
      "who": "Helen, Past President of a nearby club",
      "setup": "Helen was President of a neighbouring club a few years ago and is well respected in the district. You met her briefly at a cluster meeting.\n\nYou've rung to ask whether she'd be willing to mentor you during your year as President.",
      "goal": "Ask Helen clearly and warmly, explain why her, and agree something specific and manageable, such as a monthly coffee or call.",
      "character": "Helen, late 60s, retired school principal, Past President of a neighbouring club. Warm, practical and a little cautious about overcommitting: she already helps with her grandchildren and her own club's projects. She's flattered to be asked but her first reaction is \"Oh, I'm not sure I'd be much use, and I'm pretty busy.\" If the President explains why they chose her, is specific about what they're asking for (e.g. coffee once a month, a call when stuck, reading their plan), and makes it easy to say yes with an end date (e.g. through to June), she agrees happily and suggests a first coffee. If the request is vague (\"just be my mentor\") or sounds like a lot of work, she politely suggests they ask someone else.",
      "opener": "Hello! Oh, it's good to hear from you. What can I do for you?",
      "coaching": "Good: saying why Helen specifically; being concrete about the ask (time, format, duration); making it easy to say yes or no; agreeing a first meeting. Weak: vague requests; making it sound like a big job; not suggesting a next step."
    },
    {
      "type": "text",
      "id": "plan3",
      "title": "Your one-page plan: three questions",
      "body": "A good mentor would ask you three questions about your year:\n\n1. **Where is your club now?** Members, trends, projects, money and mood.\n2. **Where do you want it to be on 30 June?** Picture your changeover night.\n3. **What two or three things will you do to get there?** Each with a number and a person who owns it.\n\nThe module **Building your Presidential Plan** walks you through these questions, and your answers build your plan in **My Plan**.\n\n> Then make it official: put your membership and Foundation goals into **Rotary Club Central** in My Rotary. Look at your club's history first and set a goal you believe in."
    },
    {
      "type": "reflect",
      "id": "pledge",
      "title": "My membership pledge",
      "plan": "Members & engagement",
      "prompt": "Membership growth starts with the President. Write your own pledge:\n\n- **Two people I will personally invite** to see what Rotary is about (no names needed, just \"my neighbour who…\").\n- **How I will welcome** every new member, and the job I'll give them in their first month.\n- **One member who seems to be drifting** that I will call this month.",
      "hint": "Keeping the members you have is the fastest growth there is."
    },
    {
      "type": "calendar",
      "id": "checkins",
      "title": "Monthly mentor check-ins, July to June",
      "intro": "Each month, ask yourself these questions, or better still talk them over with your mentor. Ten minutes a month keeps your year on track.",
      "months": [
        {
          "month": "July",
          "theme": "Starting well",
          "tasks": [
            "What do I want the club to feel by Christmas?",
            "Does every Board member know their job?",
            "Who have I thanked this month?"
          ]
        },
        {
          "month": "August",
          "theme": "Membership month",
          "tasks": [
            "Who joined recently, and do they have a role yet?",
            "Have I made my first personal invitation?"
          ]
        },
        {
          "month": "September",
          "theme": "Rhythm",
          "tasks": [
            "Are Board meetings finishing on time?",
            "Are my two or three goals in Club Central?"
          ]
        },
        {
          "month": "October",
          "theme": "Check the pulse",
          "tasks": [
            "Who has gone quiet? Have I called them?",
            "What is one thing I could hand over?"
          ]
        },
        {
          "month": "November",
          "theme": "Foundation month",
          "tasks": [
            "Have we booked a Foundation speaker?",
            "Am I enjoying this? If not, why not?"
          ]
        },
        {
          "month": "December",
          "theme": "Half-way",
          "tasks": [
            "Half-way review: which goal is on track and which needs help?",
            "Who deserves recognition before the break?"
          ]
        },
        {
          "month": "January",
          "theme": "Reset",
          "tasks": [
            "What will I do differently in the second half?",
            "Who could be President in two or three years?"
          ]
        },
        {
          "month": "February",
          "theme": "Grow people",
          "tasks": [
            "Have I given an emerging leader a real stretch job?",
            "Is my President-Elect shadowing the Board?"
          ]
        },
        {
          "month": "March",
          "theme": "Peak recruitment",
          "tasks": [
            "Is there a \"bring a friend\" event in the diary?",
            "Going to District Conference? Who can I take?"
          ]
        },
        {
          "month": "April",
          "theme": "Look ahead",
          "tasks": [
            "What does my successor need from me?",
            "What am I proudest of so far?"
          ]
        },
        {
          "month": "May",
          "theme": "Finish strong",
          "tasks": [
            "Which goal can we still nail?",
            "Who haven't I thanked yet?"
          ]
        },
        {
          "month": "June",
          "theme": "Handover",
          "tasks": [
            "Handover meeting booked and notes written?",
            "What did this year teach me about leading?"
          ]
        }
      ]
    },
    {
      "type": "discuss",
      "id": "askmentor",
      "title": "Questions to ask your mentor (or any past President)",
      "intro": "Take these to your first coffee with your mentor. Or ask any past President at a cluster or district event.",
      "questions": [
        "What do you wish you had known before your year started?",
        "What was your hardest moment, and what got you through it?",
        "How did you run Board meetings that people wanted to come to?",
        "What did you do to keep members, not just recruit them?",
        "What would you never do again?",
        "Who helped you most, and how did you ask for help?"
      ]
    },
    {
      "type": "text",
      "id": "hard",
      "title": "When it gets hard",
      "body": "Every President has a tough patch. A mentor would remind you of these:\n\n- **Tired and doing it all?** You are probably doing jobs that belong to others. Pick one thing to hand over this week.\n- **Nobody volunteers?** Stop asking the room. Ask one person, personally, for one specific thing.\n- **Conflict in the club?** Talk privately and listen first. Ask your Assistant Governor for an outside view.\n- **Losing heart?** Re-read your answer to \"Why did you say yes?\" in **My Plan**. Then ring your mentor.\n\n> If it's a youth protection, safety or legal matter, don't carry it alone. Follow district policy and contact the right district officer straight away."
    },
    {
      "type": "reflect",
      "id": "moves",
      "title": "My first three moves",
      "plan": "Vision & goals",
      "prompt": "Write your first three moves as President-Elect:\n\n1. **This week:**\n2. **This month:**\n3. **Before 1 July:**",
      "hint": "Small and specific beats big and vague. For example: \"Ask Helen to coffee\", \"Put membership on every Board agenda\"."
    },
    {
      "type": "resource",
      "id": "res",
      "title": "Where to find help",
      "items": [
        {
          "label": "Leadership Hub (District 9815)",
          "file": "https://www.rotary9815.org.au/page/leadership-flow",
          "note": "Guided flow, Board meetings, Year Planner, succession"
        },
        {
          "label": "Membership Hub (District 9815)",
          "file": "https://www.rotary9815.org.au/page/membership-flow",
          "note": "Attract, onboard, engage and retain members"
        },
        {
          "label": "Club Assist: Club President (Victoria)",
          "file": "https://clubassistrsp.z26.web.core.windows.net/?sub=Club+President&jur=Victoria",
          "note": "Rotary South Pacific resource finder, plus Ask a Zone Specialist"
        },
        {
          "label": "My Rotary and Rotary Club Central",
          "file": "https://my.rotary.org/en/login",
          "note": "Sign in, then set your club goals"
        },
        {
          "label": "Your commitment card",
          "file": "commitment-card.html",
          "note": "Your first three moves, your pledge and your mentor, on one card"
        }
      ]
    }
  ]
});
