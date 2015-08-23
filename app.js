// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  this.player1 = new Player("P1"); //instantiates player
  console.log(this.player1.name);
  console.log(this.player1.position);

   //works w/property created in the Player function. 
  //Do the same for a player 2
  this.player2 = new Player("P2"); //instantiates player
  console.log(this.player2.name);
  console.log(this.player2.position);

  //Create the track
  this.track = new Track();
  console.log(this.track.$cells);
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(team) { //player class which defines the properties of a player.
  this.name = team; 
  this.position = 0; //starting position
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  this.position++; //increments the position by 1 each time
  return this.position; //returns the player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  this.$cells = $( "#track1 .position" ); //

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();  //follows function Game()
game.init();
