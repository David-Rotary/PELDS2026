/* President-Elect Leadership Toolkit module
   Title: Club health: members and community
   Presenter: District 9815 PELDS Team
   Edit it by opening "Module Builder.html" and choosing "Open a module file". */
PE.register({
  "id": "club-health",
  "title": "Club health: members and community",
  "presenter": "District 9815 PELDS Team",
  "colour": "green",
  "minutes": 30,
  "summary": "Understand what motivates your members, read your community, and use AI to map local opportunities.",
  "items": [
    {
      "type": "text",
      "id": "principle",
      "title": "Engaged members stay",
      "body": "Three simple truths sit behind club health:\n- **Disengaged members leave.**\n- **Engaged members stay.**\n- **Energised members tell their friends about Rotary.**\n\nAnd a fourth: **Rotary works *with* communities, not *for* them.**\n\nClubs tend to grow when people experience Rotary as welcoming, purposeful and connected to meaningful community activity. The district's Club Intelligence reports describe the pathway like this:\n\n> Community energy → participation opportunities → visible Rotary impact → positive member experience → natural membership growth"
    },
    {
      "type": "profile",
      "id": "motivation",
      "title": "Member Motivation Quiz: which element are you?",
      "intro": "Answer honestly. There are no right or wrong answers. Then try it with your board and your club: **clubs need all four types to stay healthy.**",
      "questions": [
        {
          "q": "In a Rotary meeting, I prefer to:",
          "options": [
            "Jump in and help solve problems",
            "Think things through and analyse options",
            "Connect with people and have conversations",
            "Organise, plan and make sure things run smoothly"
          ]
        },
        {
          "q": "When asked to help with a project, I want to:",
          "options": [
            "Get stuck in and do something hands-on",
            "Understand the purpose and design first",
            "Work with others and enjoy the experience",
            "Coordinate, delegate or lead part of it"
          ]
        },
        {
          "q": "I feel most satisfied when Rotary gives me:",
          "options": [
            "Action and results",
            "Ideas, learning and clarity",
            "Friendship and belonging",
            "Responsibility and influence"
          ]
        },
        {
          "q": "I get frustrated in Rotary when:",
          "options": [
            "There is too much talk, not enough action",
            "Decisions are made without thinking ahead",
            "People feel disconnected or ignored",
            "Things are disorganised or lack direction"
          ]
        },
        {
          "q": "I am most energised by:",
          "options": [
            "Doing something real and physical",
            "Discussing ideas or solving puzzles",
            "Sharing stories and building relationships",
            "Leading, planning or improving systems"
          ]
        },
        {
          "q": "I tend to:",
          "options": [
            "Act first, reflect after",
            "Think first, act later",
            "Feel first, act accordingly",
            "Plan first, guide others to act"
          ]
        },
        {
          "q": "My natural role in a group is:",
          "options": [
            "The doer",
            "The thinker",
            "The connector",
            "The organiser or leader"
          ]
        },
        {
          "q": "If I could redesign Rotary, I would:",
          "options": [
            "Add more hands-on projects",
            "Add more innovation and learning",
            "Add more social connection",
            "Add more structure and clear purpose"
          ]
        }
      ],
      "results": [
        {
          "label": "Fire",
          "title": "FIRE: action, energy, results",
          "text": "You are energised by doing. Give Fire members hands-on projects with visible results, and keep the talking short."
        },
        {
          "label": "Air",
          "title": "AIR: ideas, thinking, strategy",
          "text": "You are energised by ideas and learning. Air members thrive on planning, problem-solving and good speakers."
        },
        {
          "label": "Water",
          "title": "WATER: connection, belonging, relationships",
          "text": "You are energised by people. Water members keep the club warm and welcoming, so give them fellowship and welcoming roles."
        },
        {
          "label": "Earth",
          "title": "EARTH: structure, stability, leadership",
          "text": "You are energised by order and direction. Earth members make things run, so give them clear responsibilities and leadership roles."
        }
      ]
    },
    {
      "type": "discuss",
      "id": "elements",
      "title": "Which element is your club missing?",
      "intro": "Use this after running the quiz with your board or club.",
      "questions": [
        "Which element is strongest in our club? Which is weakest?",
        "Does our meeting format suit Fire, Air, Water AND Earth members?",
        "Which members might be drifting because their element is not being fed?",
        "What one change would make Rotary more rewarding for each element?"
      ]
    },
    {
      "type": "reflect",
      "id": "landscape",
      "title": "Where does our community already gather?",
      "plan": "Projects & community",
      "prompt": "Where do people in your area **already** gather and help out: festivals, schools, sporting clubs, retiree and volunteer networks, business groups?\n\n**Where is Rotary already visible, and where are we invisible?**",
      "hint": "Most people first meet Rotary by taking part in something, not by being recruited."
    },
    {
      "type": "reflect",
      "id": "magnetic",
      "title": "Magnetic club experiences",
      "plan": "Members & engagement",
      "prompt": "Which activities **energise your members most**?\n\nWhere do new people naturally get involved with your projects? What experiences make people proud to be part of your club?"
    },
    {
      "type": "ai",
      "id": "insight",
      "title": "AI helper: Rotary Community Insight Tool",
      "intro": "This tool helps you understand your local community so you can plan meaningful Rotary activity. It produces either a **Structured Mapping Report** (councils, organisations, networks, media, grants) or a **Community Insight Brief**.\n\n**How to use it:**\n- Click **Copy the prompt**\n- Open ChatGPT, Claude, Gemini or Copilot and paste it in\n- Answer the three short questions it asks\n\n> AI can be wrong or out of date. Treat the report as a starting point for discussion with your board, and check important details yourself.",
      "prompt": "ROTARY COMMUNITY INSIGHT TOOL\n\nSimple Planning Tool for Rotary and Rotaract Leaders\n\nThis tool helps club leaders understand their local community environment so they can plan meaningful Rotary activity.\n\nThe tool is based on two principles:\n\nDisengaged members leave.\nEngaged members stay.\nEnergised members tell their friends about Rotary.\n\nRotary works with communities, not for them.\n\nHOW TO USE THIS TOOL\nCopy this entire document.\nPaste it into an AI system such as ChatGPT, Gemini, Claude or Copilot.\nThe AI will ask three short questions.\nAnswer each question.\nThe AI will generate the report automatically.\n\nAI INSTRUCTION\n\nWhen this prompt is received, ask the following three questions one at a time.\nWait for the user’s answer before asking the next question.\n\nQuestion 1\n\nIs this report for:\n\nA) Rotary Club\nB) Rotaract Club\nC) Both\n\nQuestion 2\n\nWhat is the primary area or identity focus?\n\nExamples:\n\n• City of Greater Dandenong\n• Frankston\n• Mornington Peninsula\n• Online / E-Club focus\n\nQuestion 3\n\nWhich report would you like?\nStructured Mapping Report\nCommunity Insight Brief\nBoth\n\nAfter receiving the answers, generate the report using the following prompt.\n\nREPORT GENERATION PROMPT\n\nUse the following confirmed club details throughout this report:\n\nReport Type: [Insert confirmed answer]\nPrimary Area or Identity Focus: [Insert confirmed region or focus]\nSelected Output Mode: [Insert chosen report mode]\n\nTailor all assumptions accordingly.\n\nPURPOSE\n\nTo understand how participation, partnerships and community activity may influence Rotary membership vitality.\n\nThe analysis should reflect the principle that:\n\nRotary works with communities, not for them.\n\nWRITING STYLE\n\nUse clear, plain English suitable for Rotary club leaders.\n\nAvoid academic or consultant-style language.\n\nHeadings should be simple and easy to understand.\n\nAvoid long narrative sections where tables would present information more clearly.\n\nDo not give instructions.\n\nDo not say “the club should…”\n\nMaintain a neutral Rotary-aligned tone.\n\nIF SELECTED OUTPUT MODE = STRUCTURED MAPPING REPORT\n\nGenerate a structured community mapping report including:\n\n• Local Government Areas responsible for the region\n• Relevant council departments\n• Public contact pathways\n• Community organisations\n• Business networks\n• Education institutions\n• Retiree and volunteer networks\n• Rotary and Rotaract presence\n• Community projects (successful and those with limited traction)\n• Local elected representatives\n• Local media channels\n• Major employers\n• Grants and funding ecosystem\n\nUse tables wherever appropriate.\n\nAvoid long narrative sections.\n\nProvide the following additional sections:\n\nReflective Questions\n\nProvide 12 discussion questions that help club leaders reflect on the community environment.\n\nStakeholder Engagement Reflection\n\nProvide 8 questions focused on community partnerships and engagement pathways.\n\nIF SELECTED OUTPUT MODE = COMMUNITY INSIGHT BRIEF\n\nGenerate a clear community insight summary using the following headings.\n\n1. How People Participate in the Community\n\nDescribe the main ways people get involved locally.\n\nExamples may include:\n\n• schools and parent networks\n• sporting clubs\n• volunteer organisations\n• cultural groups\n• business associations\n• community events\n\n2. Where Rotary Is Currently Visible\n\nIdentify Rotary and Rotaract clubs active in the area and where Rotary activity appears visible within the community.\n\n3. Community Projects That Work Well (and Those That Struggle)\n\nReview notable projects run by Rotary, council or community organisations.\n\nIdentify patterns that appear to help projects succeed and factors that may limit participation.\n\n4. Where Community Energy Is Strongest\n\nIdentify places or organisations where people regularly gather, volunteer or collaborate.\n\nExamples may include:\n\n• community hubs\n• schools\n• major events\n• cultural networks\n• environmental groups\n\n5. Retired and Semi-Retired Volunteers\n\nIdentify networks where experienced retirees are active.\n\nExamples may include:\n\n• Probus clubs\n• U3A groups\n• council volunteer programs\n• community associations\n• environmental volunteer groups\n\n6. Working With Local Government\n\nDescribe how council departments and local programs interact with community organisations.\n\nIdentify relevant council departments and community participation programs.\n\n7. Where Future Rotary Members May Already Be Active\n\nPresent as a table.\n\n| Community Environment | Who Participates | Why It Matters |\n\n8. What This Suggests About Community Opportunities for Rotary\n\nProvide a short summary of patterns emerging from the community ecosystem.\n\n9. Questions for Club Leaders to Discuss\n\nProvide 12 clear discussion questions.\n\n10. Summary of Community Opportunities\n\nProvide a short bullet-point summary covering:\n\n• where community activity appears strongest\n• where partnerships appear most sustainable\n• where Rotary visibility appears strong\n• where Rotary visibility appears limited\n• where experienced volunteers may be found\n• which organisations appear most open to collaboration\n\nEND OF TOOL"
    },
    {
      "type": "resource",
      "id": "res",
      "title": "Resources",
      "items": [
        {
          "label": "Understanding Your Club Intelligence Reports",
          "file": "resources/Understanding Your Club Intelligence Reports.pdf",
          "note": "Reflection guide for club leaders"
        },
        {
          "label": "Member Motivation Quiz (printable handout)",
          "file": "resources/Member Motivation Quiz attachment 1.pdf",
          "note": "Print copies for a club meeting"
        },
        {
          "label": "Rotary Community Insight Tool (Word)",
          "file": "resources/AI Script ROTARY COMMUNITY INSIGHT TOOL V15.docx",
          "note": "The full AI script as a document"
        }
      ]
    }
  ]
});
