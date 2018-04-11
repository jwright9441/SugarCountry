tiles = [];
//Player Player1 = new Player;

function runApp() {
  //create array
  for (var i = 0; i < 8; i++) {
    tiles.push(i);
  }

  //append to the board
  var iDiv = document.createElement('div');
  iDiv.ClassName = 'tilesClass';
  document.getElementsByTagName('body')[0].appendChild(iDiv);

  //do the things to the tiles
  tiles.forEach(function(element){
    let $position = 100 * (element + 1);
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
