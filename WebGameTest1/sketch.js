let mapH = 7;
let mapW = 9;
let tileSize = 80;
let playerTileSize = 20;

let gameCanv = document.getElementById("gameBoard");
let ctx = gameCanv.getContext("2d");

//Players Info
let Play1Position = 1;



//game board array
let gameMap = [
  23, 24, 25, 26, 27, 28, 29, 30, 31,
  22,  0,  0,  0,  0,  0,  0,  0,  0,
  21,  0,  0,  0,  0,  0,  0,  0,  0,
  20, 19, 18, 17, 16, 15, 14, 13, 12,
   0,  0,  0,  0,  0,  0,  0,  0, 11,
   0,  0,  0,  0,  0,  0,  0,  0, 10,
   1,  2,  3,  4,  5,  6,  7,  8,  9
];

//game loop
drawGameBoard();



//draw game function
function drawGameBoard() {
  let xPosition = 0;
  let yPosition = 0;
  for (let i = 0; i < gameMap.length; i++) {
    //reset for new row
    if (i % (mapW) == 0) {
      yPosition += tileSize;
      xPosition = 0;
    }
    if (gameMap[i].valueOf() == 0) {
      //out of bounds tiles
      ctx.fillStyle = "#664444";
      ctx.fillRect(xPosition, yPosition - 80, tileSize-1, tileSize-1);
    } else {
      //in-bounds tiles
      ctx.fillStyle = "#C3B3D7";
      ctx.fillRect(xPosition, yPosition - 80, tileSize-1, tileSize-1);
    }

    //start and end tiles
    if (gameMap[i].valueOf() == 1) {
      ctx.font = "20px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText("Start", xPosition + 20, yPosition - tileSize/2);
    }
    if (gameMap[i].valueOf() == 31) {
      ctx.font = "20px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText("End", xPosition + 20, yPosition - tileSize/2);
    }

    //draw Players
    if (gameMap[i].valueOf() == Play1Position) {
      ctx.fillStyle = "red";
      ctx.fillRect(xPosition, yPosition - 80, playerTileSize, playerTileSize);
    }


    xPosition += tileSize;

  }

}



//roll button
function rollPlayer1() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  Play1Position += rollNum;
  drawGameBoard();

  console.log("Player 1 rolled a " + rollNum)
}
