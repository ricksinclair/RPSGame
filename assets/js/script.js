"use strict";

/* Psuedo code 
  
  i plan on using switch statements to manage player enrollment ability using child counts

  i need a little more time I know i needed MVP but I got set back this week feeling under the weather.

  Step 1. Define game variables
          Variables, properties, and methods needed:
                                                    -playerCount
                                                    -playerPrototype ex
                                                      -1 player.choice 
                                                      -1 player.name 
                                                      -1 player.location
                                                      -1 player.wins ( i want these in local storage)
                                                      -1 player.losses  ( i want these in local storage)
                                                    
                                                      i want these in local storage)
                                                     -gameState(methods)
                                                      -playerRegistration
                                                      -chooseHands
                                                      -results
                                                      -newGame
                                                      -newPlayer(1 or 2)


i want global player IDs set for both players on firebase, but i want the 
script to make each player a localPlayer and remotePlayer

so if bob and tim are playing, from bob's perspective when he 
excecutes the script, he'll be the 
localPlayer and tim will be the remote. From tim's perspective
tim will be the localPlayer and bob will be the remotePlayer. 

These two designationsshould be able to help me create a consistent
 layout on each player's screen. 

so essentially i should be able to create a player object when each user joins. 
each child should be able to report back an ID before we copy things over to local variables
localPlayer & remotePlayer. 

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
  player: {
    name: "",
    age: 0,
    country: "",
    wins: 0,
    losses: 0,
    choice: "",
    playerOne: false,
    PlayerTwo: false
  },

  roundLogic: () => {},

  enrollmentLogic: function() {
    $("form").on("submit", function(event) {
      event.preventDefault();
      $("#startControlDiv").fadeOUt(500);
    });
  }
};

let enrollmentButtonTemplate = `<button id="regButton"type="button"class="btn btn-primary mt-5" data-toggle="modal"
  data-target="#enrollmentModal">Press to Start. Don't Wait, I'll Disappear If someone joins ahead of you.
</button>`;
console.log(enrollmentButtonTemplate);
var startControlDiv = $("#startControlDiv");

$(startControlDiv).html(enrollmentButtonTemplate);
gameMechanics.enrollmentLogic();

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
