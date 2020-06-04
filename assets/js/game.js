// Game States
// "WIN" - Player robot has defeated all enymy robots 
//      *Fight all enemy robots 
//      *Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];


var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      
      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };

var startGame = function () {
    
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
        
        var pickedEnemyName = enemyNames[i];
        
        enemyHealth = randomNumber(40, 60);
        
        fight(pickedEnemyName);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if(storeConfirm) {
                    shop();
                }
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ". ");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            }

            else {
                window.alert("You don't have enought money!");
            }
            break;
            
        case "UPGRADE":
        case "upgrade":
            if(playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money -7;
            }
            
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");

            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value; 
};

startGame(); 
