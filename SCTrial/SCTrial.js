tiles = [];
//Player Player1 = new Player;

function runApp() {
  //create array
  for (var i = 0; i < 8; i++) {
    tiles.push(i);
  }

  //do the things to the tiles
  tiles.forEach(function(element){
    let $position = 100 * (element + 1);

    let $newElement = $("<div></div>").text("");
    $newElement.addClass("tilesClass");
    $("#board").append($newElement);


  });
}


function moveTile() {

}

// class Player {
//   constructor() {
//
//   }
// }
runApp();
