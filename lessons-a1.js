const LESSONS_A1 = [
  {
    n: 0,
    short: "Scratch account",
    title: "Open Scratch and Learn the Editor",
    project: "Required first step",
    minutes: 30,
    focus: "Create a Scratch account, name a blank project, and find the Stage, sprites, blocks, and green flag.",
    goals: [
      "Log in at scratch.mit.edu with a school-appropriate account.",
      "Name a project and save it to the cloud.",
      "Point to Stage, sprite list, block palette, scripts area, green flag, and stop sign."
    ],
    teacher: [
      "Do this before the first coding lesson if you can. Parent email may be required for students under 13.",
      "Create the class studio today so Lesson 1 has a place to share.",
      "Project the editor. Name each region out loud before students touch blocks.",
      "Walk the room and confirm File \u2192 Save now actually works."
    ],
    teacherSteps: [
      ["Open scratch.mit.edu", "On the projector go to scratch.mit.edu. Click Create so students see the editor, not only the homepage."],
      ["Show Join Scratch", "Click Join Scratch. Talk through username rules: no real last name, no birth year if you can avoid it, easy to remember."],
      ["Tour the window", "Point to the Stage (top right), sprite list (below Stage), block categories (left), scripts area (middle), green flag and stop sign."],
      ["Save now", "Click File \u2192 Save now. Show the title box at the top. Type Demo Project and wait for the Saved message."]
    ],
    studentSteps: [
      ["Open Scratch", "Go to scratch.mit.edu. Click Join Scratch if you do not have an account. If you already have one, click Sign in."],
      ["Create the account", "Pick a username you can remember. Use a parent or school email if Scratch asks. Write the username in your notebook."],
      ["Click Create", "After you are signed in, click Create at the top. You should see the orange cat on a white Stage."],
      ["Name the project", "Click the title at the top. Type Scratch Setup \u2013 Your Name. Press Enter."],
      ["Find the Stage", "The Stage is the big rectangle on the right. That is where the project plays."],
      ["Find the sprite list", "Under the Stage you should see Scratch Cat. Click it. A blue box means that sprite is selected."],
      ["Find the blocks", "On the left, click Motion, then Looks, then Events. Colored blocks appear. Do not snap them yet."],
      ["Find the green flag", "Above the Stage, find the green flag and the red stop sign. The flag starts a project. The stop sign stops it."],
      ["Save now", "Click File \u2192 Save now. Wait until you see that it saved. Do not close the tab until it has."]
    ],
    checklist: [
      "I can sign in without help.",
      "My project has my name in the title.",
      "I can point to Stage, sprites, blocks, and the green flag.",
      "File \u2192 Save now worked."
    ],
    mistakes: [
      "Creating a second account because Sign in was ignored.",
      "Closing the tab before Save now.",
      "Using a username you cannot remember next class."
    ],
    challenge: "Help one classmate sign in and name a project without doing the clicks for them.",
    cards: "https://scratch.mit.edu/ideas"
  },
  {
    n: 1,
    short: "Animate a Name",
    title: "Animate a Name",
    project: "Animated letters of your name",
    minutes: 30,
    focus: "Use the official Animate a Name cards: click a letter to change color, spin, play a sound, and change size.",
    goals: [
      "Add letter sprites and a backdrop.",
      "Use when this sprite clicked with Looks and Motion blocks.",
      "Try at least two different effects on different letters."
    ],
    teacher: [
      "This pack can be done in any order. For a one-hour class, model Color Clicker and Spin. Let students add Sound or Size if time.",
      "Show Sprite Library \u2192 Letters category so they do not draw letters from scratch.",
      "Delete Scratch Cat so the Stage is only letters."
    ],
    teacherSteps: [
      ["Choose a letter", "Click the sprite chooser \u2192 Letters category \u2192 pick A (or the first letter of a student\u2019s name). Delete Scratch Cat."],
      ["Choose a backdrop", "Click the backdrop chooser. Pick Boardwalk or any outdoor scene."],
      ["Color Clicker code", "Events \u2192 when this sprite clicked. Looks \u2192 change color effect by 25. Click the letter on the Stage to show the shift."],
      ["Spin code", "On a second letter: when this sprite clicked \u2192 Control repeat 10 \u2192 Motion turn 15 degrees."]
    ],
    studentSteps: [
      ["Start a new project", "Click Create. Rename it Animated Name \u2013 Your Name. File \u2192 Save now."],
      ["Delete the cat", "Click Scratch Cat in the sprite list. Click the trash can on its thumbnail."],
      ["Add letter sprites", "Click Choose a Sprite. At the top click Letters. Add every letter of your first name or initials. Drag them into a row on the Stage."],
      ["Add a backdrop", "Click Choose a Backdrop. Pick Boardwalk or another scene you like."],
      ["Color Clicker", "Select your first letter. From Events drag when this sprite clicked. From Looks drag change color effect by 25. Click that letter. It should change color."],
      ["Spin", "Select a second letter. when this sprite clicked \u2192 repeat 10 \u2192 turn 15 degrees inside the repeat. Click the letter. Try other numbers."],
      ["Play a Sound (if time)", "Select a third letter. Click the Sounds tab \u2192 Choose a Sound. Back on Code: when this sprite clicked \u2192 Sound play sound \u2026 until done."],
      ["Change Size (if time)", "On another letter: when this sprite clicked \u2192 repeat 10 \u2192 change size by 10, then another repeat 10 \u2192 change size by -10."],
      ["Save", "File \u2192 Save now. Click each letter to prove at least two different effects work."]
    ],
    checklist: [
      "My letters spell a name or word.",
      "Two letters do different things when clicked.",
      "There is a backdrop.",
      "The project is saved with my name in the title."
    ],
    mistakes: [
      "Putting every block on one letter and leaving the others dead.",
      "Forgetting to select a sprite before adding code \u2014 code lands on the wrong letter.",
      "Using turn without repeat, so the letter only twitches once."
    ],
    challenge: "Add Press a Key: when space key pressed \u2192 turn 90 degrees and change color effect by 25. Or Glide Around to three spots.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/name-cards.pdf"
  },
  {
    n: 2,
    short: "Animate a Character",
    title: "Animate a Character",
    project: "A character that moves and jumps",
    minutes: 30,
    focus: "Move with arrow keys, jump with space, and switch costumes so the character looks alive.",
    goals: [
      "Change x and y with arrow keys.",
      "Build a jump with two repeat loops.",
      "Switch costumes or poses."
    ],
    teacher: [
      "Start with Pico Walking or any sprite that has more than one costume.",
      "On the projector, show change x by 10 versus change x by -10.",
      "Jump is two stacked repeats: up 10 times, then down 10 times."
    ],
    teacherSteps: [
      ["Pick sprite and backdrop", "Choose Soccer 2 backdrop and Pico Walking or another walking sprite."],
      ["Arrow keys", "when right arrow key pressed \u2192 change x by 10. when left arrow key pressed \u2192 change x by -10. Same idea for up and down with change y."],
      ["Jump", "when space key pressed \u2192 repeat 10 \u2192 change y by 10, then repeat 10 \u2192 change y by -10."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename Animate Character \u2013 Your Name. Choose a backdrop such as Soccer 2 or Blue Sky."],
      ["Choose a character", "Choose a Sprite. Pick one with more than one costume (Pico Walking, a person, an animal). Delete the cat if you do not want it."],
      ["Move right and left", "when right arrow key pressed \u2192 change x by 10. when left arrow key pressed \u2192 change x by -10. Type the minus sign for left."],
      ["Move up and down", "when up arrow key pressed \u2192 change y by 10. when down arrow key pressed \u2192 change y by -10."],
      ["Make it jump", "when space key pressed \u2192 Control repeat 10 \u2192 change y by 10. Add a second repeat 10 under it with change y by -10."],
      ["Switch poses", "Open Costumes. If there are two poses, on Code add next costume inside a key press or a click."],
      ["Try it", "Click the green flag if you used it, then press arrows and space. The character should walk and hop."],
      ["Save now", "File \u2192 Save now."]
    ],
    checklist: [
      "Arrow keys move the character.",
      "Space makes a jump up and back down.",
      "I used a sprite with more than one look or I switched costumes.",
      "Project is saved."
    ],
    mistakes: [
      "Putting all four arrows on one when key pressed hat.",
      "Jumping with change y by 10 only once, so it never comes down.",
      "Forgetting the minus sign, so left and down go the wrong way."
    ],
    challenge: "Add Walking Animation: forever \u2192 next costume \u2192 wait 0.2 seconds while an arrow key is pressed. Or Glide from Point to Point.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/animate-cards.pdf"
  },
  {
    n: 3,
    short: "Create a Story",
    title: "Create a Story",
    project: "A two-character scene with dialogue",
    minutes: 30,
    focus: "Set a scene, make two characters talk in turns, and switch backdrops.",
    goals: [
      "Use say for seconds so lines do not overlap.",
      "Broadcast or wait so the second character answers.",
      "Switch to a second backdrop for a new scene."
    ],
    teacher: [
      "Start with Start a Story, then Start a Conversation. Scene change is the stretch goal.",
      "Model wait 2 seconds between say blocks so speech does not stack.",
      "Witch House + Wizard is the card example; any pair is fine."
    ],
    teacherSteps: [
      ["Set the scene", "Backdrop Witch House or Woods. Sprite Wizard. when green flag clicked \u2192 say Welcome to Magic School! for 2 seconds."],
      ["Second character", "Add a second sprite. after the first say, wait, then the second sprite says a reply. Show wait until or broadcast if you use it."],
      ["Switch backdrop", "Looks switch backdrop to \u2026 after the conversation."]
    ],
    studentSteps: [
      ["New project", "Create \u2192 rename My Story \u2013 Your Name. Choose a backdrop that fits a place (house, woods, underwater, stage)."],
      ["First character speaks", "Choose a character. when green flag clicked \u2192 say \u2026 for 2 seconds. Type a first line."],
      ["Second character", "Add another sprite. Give it a when green flag clicked script that waits 2 seconds, then says a reply for 2 seconds."],
      ["Take turns", "Add two more lines. Always wait until the other person would have finished. Read it out loud. If they talk over each other, add wait."],
      ["Switch backdrops", "Choose a second backdrop. After the last line, add switch backdrop to \u2026 on one sprite."],
      ["Optional click", "Add when this sprite clicked \u2192 say another line so the story continues if someone clicks a character."],
      ["Instructions", "On the project page later, write: Click the green flag. Watch them talk."],
      ["Save now", "File \u2192 Save now. Click the green flag and watch the whole scene."]
    ],
    checklist: [
      "Two characters speak.",
      "Lines do not overlap.",
      "A backdrop sets the place.",
      "Green flag starts the scene."
    ],
    mistakes: [
      "Both say blocks start at the same time with no wait.",
      "Tiny text that nobody can read.",
      "Switching backdrops every second so the scene flickers."
    ],
    challenge: "Add a third scene or record your voice with Add Your Voice. Or glide a character onto the Stage.",
    cards: "https://resources.scratch.mit.edu/www/cards/en/story-cards.pdf"
  }
];
