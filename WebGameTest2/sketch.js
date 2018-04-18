let mapH = 7;
let mapW = 9;
let tileSize = 80;
let playerTileSize = 20;
let PlayerTurn = [1,2,3,4];

let gameCanv = document.getElementById("gameBoard");
let ctx = gameCanv.getContext("2d");

//Players Info
var Play1Position = 1;
var Play2Position = 1;
var Play3Position = 1;
var Play4Position = 1;
var myKey = "playerPositions";
var PlayerTileLocations = [1,1,1,1];

function setupLocal() {
  console.log("Starting Setup");
  if(localStorage.getItem(myKey) !== null) {
    let myItemsString = localStorage.getItem(myKey);
    PlayerTileLocations = JSON.parse(myItemsString);
    $(PlayerTileLocations).each(function() {
      Play1Position = PlayerTileLocations[0];
      Play2Position = PlayerTileLocations[1];
      Play3Position = PlayerTileLocations[2];
      Play4Position = PlayerTileLocations[3];
    });
  }

  $("#Player1Button").on("click", function() {
    rollPlayer1();
    PlayerTileLocations[0] = Play1Position;
    saveItems();
  })

  $("#Player2Button").on("click", function() {
    rollPlayer2();
    PlayerTileLocations[1] = Play2Position;
    saveItems();
  })

  $("#Player3Button").on("click", function() {
    rollPlayer3();
    PlayerTileLocations[2] = Play3Position;
    saveItems();
  })

  $("#Player4Button").on("click", function() {
    rollPlayer4();
    PlayerTileLocations[3] = Play4Position;
    saveItems();
  })
  $("#NukeButton").on("click", function() {
    Nuke();
    PlayerTileLocations = [1,1,1,1];
    saveItems();
  })
  ;
  console.log("Finished Setup");
} // setupLocal

function saveItems() {
  console.log("Starting save");
  console.log(PlayerTileLocations);
  let myItemsString = JSON.stringify(PlayerTileLocations);
  localStorage.setItem(myKey, myItemsString);
  console.log("Finished save");
}

//game board array
let gameMap = [
  23, 24, 25, 20, 19, 18, 17, 16, 15,
  22,  0,  0,  0,  0,  0,  0,  0, 14,
  21,  0,  0,  0,  0,  0,  0,  0, 13,
  20,  0,  0,  0,  0,  0,  0,  0, 12,
   0,  0,  0,  0,  0,  0,  0,  0, 11,
   0,  0,  0,  0,  0,  0,  0,  0, 10,
   1,  2,  3,  4,  5,  6,  7,  8,  9
];

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

    if (gameMap[i].valueOf() == Play2Position) {
      ctx.fillStyle = "blue";
      ctx.fillRect(xPosition + 59, yPosition - 80, playerTileSize, playerTileSize);
    }

    if (gameMap[i].valueOf() == Play3Position) {
      ctx.fillStyle = "green";
      ctx.fillRect(xPosition, yPosition - 21, playerTileSize, playerTileSize);
    }

    if (gameMap[i].valueOf() == Play4Position) {
      ctx.fillStyle = "yellow";
      ctx.fillRect(xPosition + 59, yPosition - 21, playerTileSize, playerTileSize);
    }


    xPosition += tileSize;

  }

}

function rollPlayer1() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  Play1Position += rollNum;
  if (Play1Position >= 31) {
    Play1Position = 31
  }
  drawGameBoard();

  console.log("Player 1 rolled a " + rollNum)

}

function rollPlayer2() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  Play2Position += rollNum;
  if (Play2Position >= 31) {
    Play2Position = 31
  }
  drawGameBoard();

  console.log("Player 2 rolled a " + rollNum)

}

function rollPlayer3() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  Play3Position += rollNum;
  if (Play3Position >= 31) {
    Play3Position = 31
  }
  drawGameBoard();

  console.log("Player 3 rolled a " + rollNum)

}

function rollPlayer4() {
  let rollNum = Math.floor(Math.random() * 6) + 1;
  Play4Position += rollNum;
  if (Play4Position >= 31) {
    Play4Position = 31
  }
  drawGameBoard();

  console.log("Player 4 rolled a " + rollNum)

}

function Nuke() {
   Play1Position = 1;
   Play2Position = 1;
   Play3Position = 1;
   Play4Position = 1;
   drawGameBoard();
}

setupLocal();
drawGameBoard();
