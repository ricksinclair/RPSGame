/* Psuedo code 
  
  

  Step 1. Define variables
          Variables, properties, and methods needed:
                                                    -playerCount
                                                    -player1(values)
                                                      -1 player1.choice 
                                                      -1 player1.name
                                                      -1 player1.location
                                                      -1 player1.wins ( i want these in local storage)
                                                      -1 player1.losses  ( i want these in local storage)
                                                     -player2 (values)
                                                      -player2.choice
                                                      -player2.name
                                                      -player2.location
                                                      -player2.wins  ( i want these in local storage)
                                                      -player2.losses  ( i want these in local storage)
                                                     -gameState(methods)
                                                      -playerRegistration
                                                      -chooseHands
                                                      -results
                                                      -newGame
                                                      -newPlayer(1 or 2)
  */

///////////////////////////////////  ,/
//////////Declare variables/////////
///////////////////////////////////

//This will display the

function Player(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

var playerOne = new Player();
var playerTwo = new Player();
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCT2jUeOfrDu4i_rwQFIfKw1kMcEWc1Zao",
  authDomain: "rpsgame-9d00b.firebaseapp.com",
  databaseURL: "https://rpsgame-9d00b.firebaseio.com",
  projectId: "rpsgame-9d00b",
  storageBucket: "",
  messagingSenderId: "326094420080"
};

firebase.initializeApp(config);

$("#svg-container").hide();
