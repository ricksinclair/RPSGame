/* Psuedo code 
  
  i plan on using switch statements to manage player enrollment ability using child counts

  i need a little more time I know i needed MVP but I'm trying.

  Step 1. Define game variables
          Variables, properties, and methods needed:
                                                    -playerCount
                                                    -playerPrototype
                                                      -1 player1.choice 
                                                      -1 player1.name 
                                                      -1 player1.location
                                                      -1 player1.wins ( i want these in local storage)
                                                      -1 player1.losses  ( i want these in local storage)
                                                    
                                                      i want these in local storage)
                                                     -gameState(methods)
                                                      -playerRegistration
                                                      -chooseHands
                                                      -results
                                                      -newGame
                                                      -newPlayer(1 or 2)
*/

//initialize firebase
var config = {
  apiKey: "AIzaSyCT2jUeOfrDu4i_rwQFIfKw1kMcEWc1Zao",
  authDomain: "rpsgame-9d00b.firebaseapp.com",
  databaseURL: "https://rpsgame-9d00b.firebaseio.com",
  projectId: "rpsgame-9d00b",
  storageBucket: "",
  messagingSenderId: "326094420080"
};

firebase.initializeApp(config);

var gameMechanics = {
  localID: 0,
  playerCount: 0,
  player: class {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
      this.wins = 0;
      this.losses = 0;
      this.choice;
      this.playerOne = false;
      this.PlayerTwo = false;
    }
  },

  choiceLogic: () => {},

  enrollmentLogic: () => {
    $("#submitPlayer").on("submit", event => {
      event.preventDefault();
    });
  }
};

/*
  Step 2. Define win/loss logic using nested switch/case statements(
                                      they'll nest  like:
                                      
                                      
                                      switch (player1){
                                        case player1.choice = "Rock"{

                                        
                                          switch(player2){
                                            case player2.choice="paper" 

                                          }

                                        }

                                      }
                                      
                                      (since two parties choices need to be considered) 





  */
