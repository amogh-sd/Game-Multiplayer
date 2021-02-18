var canvas, backgroundImage;

var gameState = 0;
var playerNumber = 0
var playerCount;
var allPlayers;
var distance = 0;
var distanceX = 0
var database;

var car1, car2, car3, car4;

var cars


var form, player, game;


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload() {
  // track001 = loadImage("images/track.jpg")
  // car1Img = loadImage("images/car1.png")
  latte2Img = loadImage("images/car2.png")
  // car2Img = loadImage("images/latte2.png")

  // latteImg = loadImage("images/latte.png")
  car3Img = loadImage("images/car3.png")


}


function draw() {
  if (playerCount === 2) {
    game.update(1);
    text("The game has started!!", displayWidth / 2, 300)
  }
  if (playerCount === 0) {
    game.update(0);

  }
  if (gameState === 1) {
    clear();
    game.play();
  }

}
