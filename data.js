const LESSONS_A = LESSONS_A1.concat(LESSONS_A2);
const LESSONS = LESSONS_A.concat(LESSONS_B);

const PROJECTS = [
  {
    n: 1,
    title: "Animated Name",
    due: "After Lesson 1",
    blurb: "Animate the letters of your name, initials, or favorite word using events, looks, and motion.",
    must: [
      "At least three letter sprites that spell a real word or name.",
      "Two different click or key events (color, spin, size, sound, or glide).",
      "A backdrop that is not the default blank white.",
      "Project saved and titled Animated Name – Your Name."
    ],
    rubric: [
      "4 — Several letters react in different ways and the name is easy to read.",
      "3 — Letters work; two event types are used.",
      "2 — One letter works or events are copied identically.",
      "1 — Project does not run or letters are missing."
    ]
  },
  {
    n: 2,
    title: "Interactive Story",
    due: "After Lesson 3",
    blurb: "Two or more characters talk, switch scenes, and react when clicked.",
    must: [
      "At least two characters with speech bubbles or say blocks.",
      "At least two backdrops with a switch between them.",
      "One click or key that continues the story.",
      "Instructions that tell a classmate how to start."
    ],
    rubric: [
      "4 — Clear beginning, middle, end; characters take turns; scene change works.",
      "3 — Conversation and one scene change work.",
      "2 — Characters appear but talk over each other or never switch scenes.",
      "1 — Project does not run."
    ]
  },
  {
    n: 3,
    title: "Bouncing Game",
    due: "After Lesson 7",
    blurb: "A playable Pong-style or chase game with a score and an ending.",
    must: [
      "A player-controlled sprite (keys or mouse).",
      "A target or ball that moves on its own.",
      "A Score variable that changes during play.",
      "A win or game-over moment."
    ],
    rubric: [
      "4 — Playable start to finish with score and ending.",
      "3 — Movement and scoring work; ending is missing or rough.",
      "2 — Sprites move but scoring or control is broken.",
      "1 — Project does not run."
    ]
  },
  {
    n: 4,
    title: "Virtual Pet",
    due: "After Lesson 11",
    blurb: "An interactive pet that eats, drinks, plays, and talks back.",
    must: [
      "A pet sprite with more than one costume.",
      "Food, drink, or toy sprites that the pet reacts to.",
      "At least one say or sound response.",
      "A Hunger or similar variable if you reached card 7."
    ],
    rubric: [
      "4 — Pet animates, reacts to two or more items, and shows a need.",
      "3 — Pet reacts to food or drink and switches costume.",
      "2 — Pet appears and says hello only.",
      "1 — Project does not run."
    ]
  }
];
