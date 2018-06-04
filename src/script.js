window.onload = function() {
  //initialize canvas
  let canvas = document.getElementById("gameCanvas");
  let ctx = canvas.getContext("2d");

  //array for the letters in the alphabet
  let alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  let canvas_Width = document.getElementById("gameCanvas").getAttribute("width");
  let canvas_Height = document.getElementById("gameCanvas").getAttribute("height");

  //empty arrays that will be filled as the game progresses
  let gameLetters = [];
  let player1Words = [];
  let player2Words = [];

  let board = {
    frames: 0,
    letterRows: 0,
    letterColumns: 10,
    letterHeight: canvas_Height*0.08,
    letterWidth: canvas_Width*0.08,
    // canvasWidth: canvas_Width,
    // canvasHeight: canvas_Height,
    letterRowFrequency: 200,
    fontColor: "black",
    fontType: "20px Georgia"
    // arrowFrequency: 0,
    // arrowSpeed: 0,
  };

  function startGame() {
    setInterval(updateCanvas, 50);
  }

  // function canvasLayout() {
  //   ctx.lineWidth=2;
  //   ctx.strokeStyle = "black";
  //   ctx.strokeRect(2, 2, canvas_Width-2, canvas_Height-2);
  // }

  function createRandomLetter() {
    let randomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    return randomLetter;
  }

  //class constructor for a letter
  class Letter {
    constructor(letter, xPos, yPos) {
      this.letter = letter;
      this.x = xPos;
      this.y = yPos;
    }
  }

  //function to create a row of letters
  function createLetterRow() {
    let letterRow = [];
    for (i = 0; i < board.letterColumns; i++) {
      let randomLetter = createRandomLetter();
      if (i == 0) {
        letterRow.push(new Letter(randomLetter, i+board.letterWidth+15, board.letterHeight));
      } else {
        letterRow.push(new Letter(randomLetter, (i+1)*board.letterWidth+15, board.letterHeight));
      }
    }
    gameLetters.push(letterRow);
  }

  function displayLetterRow() {
    for (i = 0; i < gameLetters.length; i++) {
      for (j = 0; j < board.letterColumns; j++) {
        ctx.font = board.fontType;
        ctx.fillStyle = board.fontColor;
        ctx.lineWidth = 2;
        ctx.fillText(gameLetters[i][j].letter, gameLetters[i][j].x, gameLetters[i][j].y);
      }
    }
  }
  function updateCanvas() {
    // canvasLayout();
    ctx.clearRect(0, 0, canvas_Width, canvas_Height);
    board.frames++;
    if (board.frames % board.letterRowFrequency == 1 && gameLetters.length == 0) {
      createLetterRow();
    } else if (board.frames % board.letterRowFrequency == 1 && gameLetters.length > 0) {
      for (i=0; i < gameLetters.length; i++) {
        for (j = 0; j < board.letterColumns; j++) {
          gameLetters[i][j].y += board.letterHeight;
        }
      }
      createLetterRow();
    }
    displayLetterRow();
  }
  // function updateCanvas() {
  //   // canvasLayout();
  //   ctx.clearRect(0, 0, canvas_Width, canvas_Height);
  //   board.frames++;
  //   if (gameLetters.length>1 && board.frames % board.letterRowFrequency == 1) {
  //     for (i=0; i < gameLetters.length; i++) {
  //       for (j = 0; j < board.letterColumns; j++) {
  //         gameLetters[i][j].y += board.letterHeight;
  //       }
  //     }
  //   }
  //   if (board.frames % board.letterRowFrequency == 1) {
  //     createLetterRow();
  //   } 
  //   displayLetterRow();
  // }

  document.onkeydown= function(e) {
    switch (e.keyCode) {
      case 32: 
      console.log(e.keycode);
      startGame();
      // createLetterRow();
      break;
    }
  };

};
