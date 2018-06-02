document.onload = function() {
  //initialize canvas
  let canvas = document.getElementById('gameCanvas');
  let ctx = canvas.getContext('2d');

  //array for the letters in the alphabet
  let alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let canvas_Width= document.getElementById('gameCanvas').getAttribute('width');
  let canvas_Height = document.getElementById('gameCanvas').getAttribute('height');


  //empty arrays that will be filled as the game progresses
  let gameLetters=[];
  let player1Words=[];
  let player2Words=[];

  let board = {
    frames: 0,
    letterRows: 0,
    letterColumns: 10,
    letterHeight: 20,
    letterWidth: 20,
    canvasWidth: canvas_Width,
    canvasHeight: canvas_Height,
    // arrowFrequency: 0,
    // arrowSpeed: 0,
  };

  function startGame() {
    setInterval(updateCanvas, 30000);
  }

  function updateCanvas() {
    clearRect(0,0,board.canvasWidth,board.canvasHeight);
    board.frames++;
    Letter.drawLetterRow();

  }

  function createRandomLetter(){
  let randomLetter = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
  return randomLetter;
  }
  //constructor for a letter
  function Letter(x, y) {
    this.x = x;
    this.y = y;
    this.width = board.canvasWidth();
    this.height = board.canvasHeight();
    this.letterGenerated = createRandomLetter();
    this.drawLetterRow = function() {
      for(i=0;i<=board.letterColumns;i++) 
      ctx.fillStyle = "black";
      ctx.fillText(this.letterGenerated, this.x, this.y);
    };
  }
  //function to create a row of letters
  function createLetterRow() {
    let letterRow = [];
    for(i=0;i<board.letterColumns;i++) {
      if (i==0) {
      letterRow.push(new Letter(i, 0, 20, 20));
      }
      
    }
  }
  
};