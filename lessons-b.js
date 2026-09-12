const LESSONS_B = [
  {
    n: 8,
    short: "Video Sensing",
    title: "Video Sensing",
    project: "A webcam interaction",
    minutes: 60,
    focus: "Turn on the Video Sensing extension and make a sprite react when your hand moves.",
    goals: [
      "Add the Video Sensing extension.",
      "Use when video motion greater than a number.",
      "Play a sound or switch costume when the camera sees movement."
    ],
    teacher: [
      "Check camera permissions on school devices before this lesson.",
      "Have a no-camera backup: click instead of video motion.",
      "Pet the Cat is the gentlest first card. Sensitivity 20 is a good start."
    ],
    teacherSteps: [
      ["Add the extension", "Bottom left Extensions (blue puzzle piece) \u2192 Video Sensing."],
      ["Pet the Cat", "when video motion > 20 \u2192 play sound Meow until done. Wave a hand in front of the camera."],
      ["Sensitivity", "1 is very sensitive. 100 needs a big movement. Stay near 20\u201340."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Video Sensing \u2013 Your Name. Allow the camera if the browser asks."],
      ["Add Video Sensing", "Click the Extensions button at the bottom left of the block palette. Click Video Sensing."],
      ["Choose a sprite", "Keep the cat or pick a balloon, drum, or dragon."],
      ["Pet the Cat", "when video motion > 20 \u2192 play sound Meow until done. Wave your hand over the cat on the Stage."],
      ["Tune the number", "If it never fires, drop 20 to 10. If it never stops, raise it to 40."],
      ["Animate (if time)", "Add next costume or change effect when video motion is high so the sprite comes alive."],
      ["Pop a Balloon (if time)", "Balloon sprite: when video motion > 30 \u2192 hide or play a pop sound."],
      ["Save now", "File \u2192 Save now. Video projects still save even if the next computer has no camera."]
    ],
    checklist: [
      "Video Sensing blocks are in my project.",
      "A sprite reacts when I move.",
      "I tried at least one number for sensitivity.",
      "Project is saved."
    ],
    mistakes: [
      "Covering the camera.",
      "Standing so far back that video motion stays at 0.",
      "Forgetting to click the Extensions button and hunting for green blocks that are not loaded."
    ],
    challenge: "Keep Away Game: a sprite glides away when video motion is high. Or Play the Drums with different body motions.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/video-sensing-cards.pdf"
  },
  {
    n: 9,
    short: "Catch Game",
    title: "Catch Game",
    project: "Catch falling objects",
    minutes: 60,
    focus: "A sprite starts at a random x at the top, falls, and is caught by a mover at the bottom.",
    goals: [
      "Set y to 180 and x to a random position.",
      "Fall with change y by a negative number in a loop.",
      "Move a catcher and detect touching."
    ],
    teacher: [
      "Use the cards in order. Go to the Top + Fall Down + Move the Catcher + Catch It are the core.",
      "Show the Stage map: y 180 top, y -180 bottom, x -240 to 240.",
      "Apple + Boardwalk + a bowl or character as catcher."
    ],
    teacherSteps: [
      ["Go to the Top", "Apple: when green flag \u2192 go to random position \u2192 set y to 180."],
      ["Fall Down", "forever or repeat until y < -160 \u2192 change y by -5."],
      ["Catcher", "Bowl: when right / left arrow \u2192 change x. Apple: if touching Bowl then change Score by 1 and reset to the top."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Catch Game \u2013 Your Name. Backdrop Boardwalk or Stadium."],
      ["Falling sprite", "Choose Apple, ball, or donut."],
      ["Go to the Top", "when green flag clicked \u2192 go to random position \u2192 set y to 180."],
      ["Fall Down", "Under that, forever \u2192 change y by -8. If it hits the bottom, go to random position and set y to 180 again."],
      ["Move the Catcher", "Choose a bowl, crab, or character. Place it at the bottom. when right arrow \u2192 change x by 10. when left arrow \u2192 change x by -10."],
      ["Catch It", "On the falling sprite, inside the forever: if touching catcher then change Score by 1, play a sound, go to random position, set y to 180."],
      ["Keep Score", "Make variable Score. set Score to 0 when the green flag is clicked."],
      ["Save now", "Catch five in a row."]
    ],
    checklist: [
      "Objects start at the top.",
      "They fall.",
      "I can move the catcher.",
      "Score rises on a catch."
    ],
    mistakes: [
      "Falling sprite code on the catcher.",
      "No reset after a catch, so one apple sits in the bowl forever.",
      "Catcher too high, so it blocks the whole Stage."
    ],
    challenge: "Bonus Points: a second falling sprite worth 5 points. You Win when Score = 20.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/catch-cards.pdf"
  },
  {
    n: 10,
    short: "Jumping Game",
    title: "Jumping Game",
    project: "Jump over a moving obstacle",
    minutes: 60,
    focus: "Jump with space, reset to a start spot, and end the game if the hero hits a sliding obstacle.",
    goals: [
      "Build a jump with two repeats.",
      "Slide an obstacle from right to left and reset it.",
      "Stop all on touching."
    ],
    teacher: [
      "Cards in order. Jump + Go to Start + Moving Obstacle + Stop the Game are enough for a full game.",
      "Chick + Blue Sky + a ball or crate as obstacle.",
      "Remind students the hero should start on the ground, not mid-air."
    ],
    teacherSteps: [
      ["Jump", "when space key pressed \u2192 repeat 10 change y by 10 \u2192 repeat 10 change y by -10."],
      ["Start spot", "when green flag \u2192 go to a left-side ground position."],
      ["Obstacle", "Ball: forever \u2192 change x by -8; if x < -240 set x to 240. Hero: if touching Ball \u2192 stop all."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Jumping Game \u2013 Your Name. Backdrop Blue Sky or City."],
      ["Choose a jumper", "Chick, frog, or person. Sit it on the ground on the left."],
      ["Jump", "when space key pressed \u2192 repeat 10 \u2192 change y by 10. Then repeat 10 \u2192 change y by -10."],
      ["Go to Start", "when green flag clicked \u2192 go to x: -160 y: -60 (adjust until it stands on the ground)."],
      ["Moving Obstacle", "Add a ball, crate, or car. when green flag clicked \u2192 forever \u2192 change x by -8. If x < -240, set x to 240."],
      ["Add a Sound", "On the jumper, play a jump sound at the start of the space script."],
      ["Stop the Game", "On the jumper: when green flag \u2192 forever \u2192 if touching obstacle then play a bump sound \u2192 stop all."],
      ["Save now", "Jump over the obstacle at least once, then show a crash."]
    ],
    checklist: [
      "Space jumps up and down.",
      "The obstacle slides and wraps.",
      "Touching the obstacle ends the game.",
      "Green flag resets the hero."
    ],
    mistakes: [
      "Jumping with no down loop.",
      "Obstacle code that never resets, so after one pass the Stage is empty.",
      "Stop all on the obstacle forever without a touching if, which kills the game immediately."
    ],
    challenge: "Add More Obstacles at different heights. Add Score that rises every time an obstacle leaves the left edge.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/jump-cards.pdf"
  },
  {
    n: 11,
    short: "Virtual Pet",
    title: "Virtual Pet",
    project: "A pet that eats, drinks, and plays",
    minutes: 60,
    focus: "Introduce a pet, animate costumes, and make it react to food, drink, and a toy.",
    goals: [
      "Place a pet and have it say hello.",
      "Switch costumes or play a sound on a loop.",
      "Click food or drink to trigger a reaction."
    ],
    teacher: [
      "Cards in order. Introduce + Animate + Feed is a complete one-hour pet. Hunger is the stretch.",
      "Pick a sprite with two costumes (Monkey, dragon, rabbit).",
      "Food and drink should be separate sprites."
    ],
    teacherSteps: [
      ["Introduce", "Garden backdrop. Monkey at a set x y. when green flag \u2192 say My name is Kiki! for 2 seconds."],
      ["Animate", "forever \u2192 next costume \u2192 wait 0.3 seconds. Optional play sound."],
      ["Feed", "Banana: when this sprite clicked \u2192 broadcast eat. Pet: when I receive eat \u2192 say Yum! and change Hunger by -1 if you have the variable."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Virtual Pet \u2013 Your Name. Backdrop Garden, bedroom, or yard."],
      ["Introduce Your Pet", "Choose a pet with extra costumes. Drag it where you want. when green flag clicked \u2192 go to x y \u2192 say My name is \u2026 for 2 seconds."],
      ["Animate Your Pet", "when green flag clicked \u2192 forever \u2192 next costume \u2192 wait 0.3 seconds. Add a quiet sound if you want."],
      ["Feed Your Pet", "Add a food sprite (banana, taco, apple). when this sprite clicked \u2192 broadcast eat (Events). On the pet: when I receive eat \u2192 say Yum! for 1 seconds."],
      ["Give Your Pet a Drink", "Add a cup. Same pattern with broadcast drink and a different line."],
      ["Time to Play", "Add a ball. when the ball is clicked, the pet can glide toward it or play a sound."],
      ["How Hungry? (if time)", "Make variable Hunger. set to 5 on green flag. forever wait 5 seconds \u2192 change Hunger by 1. Eating lowers it."],
      ["Save now", "Green flag, then click food and drink."]
    ],
    checklist: [
      "Pet says hello.",
      "Pet changes look or loops a costume.",
      "Food or drink does something when clicked.",
      "Project is saved."
    ],
    mistakes: [
      "Food code on the pet, so clicking the banana does nothing.",
      "forever next costume with no wait, which strobes.",
      "Broadcast name spelled two different ways."
    ],
    challenge: "If Hunger = 10, the pet says I need food! and stops dancing until you feed it.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/pet-cards.pdf"
  },
  {
    n: 12,
    short: "Share & studio",
    title: "Share, Credit, and Join the Studio",
    project: "A published project in the class studio",
    minutes: 60,
    focus: "Polish one project, write Instructions, Share, and add it to the class studio.",
    goals: [
      "Write Instructions a classmate can follow.",
      "Credit remixes in Notes and Credits.",
      "Click Share and add the project to the studio."
    ],
    teacher: [
      "Project the class studio URL. Students should not create 12 new projects today.",
      "See inside two student projects live to model crediting.",
      "Stamp when the studio fills up."
    ],
    teacherSteps: [
      ["Open a finished project", "My Stuff \u2192 pick the strongest game or story. File \u2192 Save as a copy \u2192 Showcase \u2013 Name."],
      ["Instructions", "Show the Instructions box. Type how to play in two sentences."],
      ["Share + studio", "Click Share. Open the studio \u2192 Add projects."]
    ],
    studentSteps: [
      ["Pick one project", "Click My Stuff (your avatar menu). Open your best name, story, game, or pet."],
      ["Save a copy", "File \u2192 Save as a copy. Rename Showcase \u2013 Your Name."],
      ["Fix one thing", "Add a missing sound, a start line, or a stop when you win. Do not rebuild the whole project."],
      ["Write Instructions", "On the project page, in Instructions, write how to start and which keys to use."],
      ["Write Notes and Credits", "Name the card set you followed. If you remixed a classmate, write their username."],
      ["Share", "Click the orange Share button. The project must be shared or the studio cannot add it."],
      ["Add to the studio", "Open the studio link on the board. Click Add projects. Choose yours."],
      ["Hand in the link", "Copy scratch.mit.edu/projects/\u2026 and paste it where your teacher asked."]
    ],
    checklist: [
      "Instructions tell a new player what to do.",
      "The project is Shared.",
      "It appears in the class studio.",
      "I handed in the link."
    ],
    mistakes: [
      "Leaving the project Unshared.",
      "Empty Instructions.",
      "Handing in a screenshot instead of the URL."
    ],
    challenge: "Play two classmates\u2019 studio projects and leave a kind comment that names one specific thing that worked.",
    cards: "https://scratch.mit.edu/ideas"
  }
];
