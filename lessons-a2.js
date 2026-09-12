const LESSONS_A2 = [
  {
    n: 4,
    short: "Make Music",
    title: "Make Music",
    project: "A keyboard instrument",
    minutes: 60,
    focus: "Press keys to play drums, a rhythm, and a short melody using the Music sprites and sounds.",
    goals: [
      "Play a drum with the space key.",
      "Build a repeating rhythm.",
      "Play a three-note melody on another key."
    ],
    teacher: [
      "Turn volume down on the room speakers first.",
      "Sprite Library \u2192 Music category. Theater 2 backdrop matches the cards.",
      "start sound plays together; play sound until done waits."
    ],
    teacherSteps: [
      ["Play a Drum", "Backdrop Theater 2. Sprite Drum. when space key pressed \u2192 start sound Low Tom."],
      ["Make a Rhythm", "when space key pressed \u2192 repeat 3 \u2192 start sound Hi Na Tabla \u2192 wait 0.25 seconds \u2192 start sound Hi Tun Tabla \u2192 wait 0.25 seconds."],
      ["Make a Melody", "Saxophone sprite. when up arrow key pressed \u2192 start sound C2 Sax \u2192 wait 0.25 \u2192 G Sax \u2192 wait 0.25 \u2192 E Sax."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Make Music \u2013 Your Name. Choose backdrop Theater 2 or Concert."],
      ["Choose a drum", "Choose a Sprite \u2192 Music category \u2192 Drum or Drum Tabla."],
      ["Play a Drum", "when space key pressed \u2192 Sound start sound and pick a drum hit such as Low Tom. Press space."],
      ["Make a Rhythm", "On the same sprite or a second drum: when space key pressed \u2192 repeat 3. Inside: start sound, wait 0.25 seconds, different start sound, wait 0.25 seconds."],
      ["Choose an instrument", "Add Saxophone or Trumpet from Music."],
      ["Make a Melody", "when up arrow key pressed \u2192 start sound a note \u2192 wait 0.25 seconds \u2192 next note \u2192 wait 0.25 \u2192 third note."],
      ["Play a Chord (if time)", "On Trumpet: when down arrow key pressed \u2192 three start sound blocks stacked with no wait so they play together."],
      ["Save now", "File \u2192 Save now. Press space and the arrows to demo."]
    ],
    checklist: [
      "Space plays a drum or rhythm.",
      "Another key plays a melody or chord.",
      "Sounds come from the Music sprites.",
      "Project is saved."
    ],
    mistakes: [
      "Using play sound until done when you wanted a chord \u2014 notes will not overlap.",
      "Wait 2 seconds between notes, which feels like the song died.",
      "Putting melody code on the drum sprite by accident."
    ],
    challenge: "Add Animate a Drum: next costume each hit. Or Record Sounds and play your own voice as a beat.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/music-cards.pdf"
  },
  {
    n: 5,
    short: "Make It Fly",
    title: "Make It Fly",
    project: "A flying character over moving scenery",
    minutes: 60,
    focus: "Keep the hero still-ish while buildings or clouds scroll, then steer with arrow keys.",
    goals: [
      "Scroll a building by changing x in a forever loop.",
      "Reset the building to the right edge when it leaves the Stage.",
      "Move the flyer with change x and change y."
    ],
    teacher: [
      "The trick: the cat is not flying \u2014 the world is sliding left.",
      "Show the coordinate tip: x -240 left, x 240 right, y 180 top, y -180 bottom.",
      "Use Cat1 Flying and Buildings from the Flying theme if you can find them."
    ],
    teacherSteps: [
      ["Character intro", "Backdrop blue sky 2. Sprite Cat1 Flying. when green flag clicked \u2192 go to front layer \u2192 say Time to fly! for 2 seconds."],
      ["Start Flying", "Buildings sprite: when green flag clicked \u2192 forever \u2192 set x to 250 \u2192 repeat 100 \u2192 change x by -5."],
      ["Steer", "On the cat: four when arrow key pressed scripts with change x / change y."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Make It Fly \u2013 Your Name. Backdrop blue sky 2 or any sky."],
      ["Choose a flyer", "Pick a flying sprite (cat, bird, dragon, person on a carpet). Place it on the left half of the Stage."],
      ["Say hello", "when green flag clicked \u2192 say Time to fly! for 2 seconds."],
      ["Add a building or tree", "Choose Buildings, a tree, or a tall object."],
      ["Scroll the scenery", "On that sprite: when green flag clicked \u2192 forever. Inside: set x to 250, then repeat 100 \u2192 change x by -5."],
      ["Switch Looks", "If the building has costumes, add next costume just before the repeat so each pass looks different."],
      ["Steer the flyer", "On the flyer: right arrow change x by 10, left change x by -10, up change y by 10, down change y by -10."],
      ["Save now", "Green flag. The world should slide. Arrows should move the flyer."]
    ],
    checklist: [
      "Scenery moves from right to left.",
      "I can steer the flying sprite.",
      "Green flag starts the flight.",
      "Project is saved."
    ],
    mistakes: [
      "Scrolling the flyer instead of the building.",
      "change x by -5 with no reset, so the building vanishes forever.",
      "Putting scroll code on the cat."
    ],
    challenge: "Add Floating Clouds with pick random y, or Flying Hearts to collect, or a Score variable.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/fly-cards.pdf"
  },
  {
    n: 6,
    short: "Chase Game",
    title: "Chase Game",
    project: "Chase a star and keep score",
    minutes: 60,
    focus: "Move a character with arrows, chase a gliding star, play a sound on touch, and add Score.",
    goals: [
      "Move with change x and change y.",
      "Make a star glide to random position forever.",
      "Detect touching and change a Score variable."
    ],
    teacher: [
      "Use the cards in order. Today: movement + chase + score. Level Up can wait if time is short.",
      "Show Make a Variable \u2192 Score. for all sprites.",
      "Galaxy backdrop and Robot + Star match the cards."
    ],
    teacherSteps: [
      ["Move", "Robot: when right arrow \u2192 change x by 10; left \u2192 change x by -10; up / down with change y."],
      ["Star", "Star: when green flag clicked \u2192 forever \u2192 glide 1 secs to random position."],
      ["Score", "Make variable Score. On Robot: when green flag \u2192 set Score to 0. forever \u2192 if touching Star then change Score by 1 and play sound."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Chase Game \u2013 Your Name. Backdrop Galaxy or Woods."],
      ["Choose a chaser", "Pick Robot, a frog, or any character. Place it near the middle."],
      ["Move left and right", "when right arrow key pressed \u2192 change x by 10. when left arrow key pressed \u2192 change x by -10."],
      ["Move up and down", "when up arrow \u2192 change y by 10. when down arrow \u2192 change y by -10."],
      ["Add a star", "Choose Star or Apple. when green flag clicked \u2192 forever \u2192 glide 1 secs to random position. Smaller glide time = harder."],
      ["Play a Sound", "On the chaser: when green flag clicked \u2192 forever \u2192 if touching Star then play sound Collect until done."],
      ["Add a Score", "Variables \u2192 Make a Variable \u2192 Score. when green flag clicked \u2192 set Score to 0. Inside the touching if: change Score by 1."],
      ["Save now", "Green flag. Chase the star. Score should rise."]
    ],
    checklist: [
      "I can steer with arrows.",
      "The star keeps moving.",
      "Score goes up when I touch it.",
      "A sound plays on a catch."
    ],
    mistakes: [
      "Glide on the player instead of the star.",
      "Score variable made for this sprite only so it never shows.",
      "No set Score to 0, so the number starts wherever last game left it."
    ],
    challenge: "Level Up: wait until Score = 10 \u2192 switch backdrop. Add a LEVEL UP text sprite that shows for 2 seconds.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/chase-cards.pdf"
  },
  {
    n: 7,
    short: "Pong Game",
    title: "Pong Game",
    project: "A bouncing ball and paddle",
    minutes: 60,
    focus: "Bounce a ball, control a paddle with the mouse, bounce off the paddle, and end the game on a miss.",
    goals: [
      "Use forever, move, and if on edge bounce.",
      "Set paddle x to mouse x.",
      "Turn randomly when the ball touches the paddle.",
      "Stop all when the ball hits a floor line."
    ],
    teacher: [
      "Use the cards in order. Win the Game is the stretch.",
      "Neon Tunnel + Ball + Paddle + Line match the cards.",
      "The random turn 170 to 190 degrees is what makes the bounce feel fair."
    ],
    teacherSteps: [
      ["Bounce Around", "Ball: when green flag \u2192 turn 15 degrees \u2192 forever \u2192 move 15 steps \u2192 if on edge bounce."],
      ["Move the Paddle", "Paddle at the bottom. when green flag \u2192 forever \u2192 set x to mouse x."],
      ["Bounce off paddle", "On Ball, inside forever: if touching Paddle then turn pick random 170 to 190 degrees \u2192 move 15 steps."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Pong Game \u2013 Your Name. Backdrop Neon Tunnel or Soccer Field."],
      ["Bounce Around", "Choose Ball. when green flag clicked \u2192 turn 15 degrees. forever \u2192 move 15 steps \u2192 if on edge bounce. Green flag to test."],
      ["Move the Paddle", "Choose Paddle or a long rectangle. Drag it to the bottom. when green flag clicked \u2192 forever \u2192 set x to mouse x. Move the mouse."],
      ["Bounce off the Paddle", "Select Ball. Inside the forever, add if touching Paddle then turn pick random 170 to 190 \u2192 move 15 steps. Optional wait 0.5 so it does not stick."],
      ["Game Over line", "Choose Line or paint a red line. Put it under the paddle. On Line: when green flag \u2192 go to x 0 y -170. forever \u2192 if touching Ball then stop all."],
      ["Score Points", "Make variable Score. On Ball, when touching Paddle also change Score by 1. when green flag \u2192 set Score to 0."],
      ["Win the Game (if time)", "Paint a YOU WON sprite. Hide at start. wait until Score = 5 \u2192 show \u2192 stop all."],
      ["Save now", "Play a full round."]
    ],
    checklist: [
      "Ball bounces on the edges.",
      "Paddle follows the mouse.",
      "Ball bounces off the paddle.",
      "The game can end."
    ],
    mistakes: [
      "Paddle code on the ball.",
      "No random turn, so the ball slides along the paddle forever.",
      "Line sitting on the paddle so the game ends on every hit."
    ],
    challenge: "Raise the move steps after Score = 3 so the ball gets faster.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/pong-cards.pdf"
  }
];
