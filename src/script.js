document.onload = function() {

  let canvas = document.getElementById('gameCanvas');
  let ctx = canvas.getContext('2d');

  let alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let gameLetters=[];

  let board = {
    frames: 0,
    // arrowFrequency: 0,
    // arrowSpeed: 0,
  };

  function createRandomLetter(){
  let randomLetter = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
  return randomLetter;
  }

  function Letter(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.letterGenerated = createRandomLetter();
    this.drawLetterRow = function() {
      for(i=0;i<=Letters.rowLength;i++) 
      ctx.fillStyle = "black";
      ctx.fillText(this.letterGenerated, this.x, this.y);
    };
  }

  function createLetterRow() {
    for(i=0;i<=10;i++) {
      gameLetters.push(new Letter(0, 0, 20, 20));
    }
  }

  function updateCanvas() {
    board.frames++;
    for (i=0;i<=;i++)    
  }

};