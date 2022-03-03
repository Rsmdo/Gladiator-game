
var playerName =window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//console.log(playerName,playerAttack,playerHealth);

var enemyNames= ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
  //alert players that round in strting 
  window.alert("welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
  console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
   // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      window.alert(playerName + " has chosen to skip the fight!");
      var confirmSkip =window.confirm("Are you sure you want to quit?");

        // if yes (true), leave fight
      if (confirmSkip) {
           window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
           playerMoney = playerMoney - 2;
      }
       // if no (false), ask question again by running fight() again
       else {
           fight();
       }
  } else {
      window.alert("You need to choose a valid option. Try again!");
  }
 
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyNames + " . " + enemyNames + "now has " + enemyHealth + "health remaining");

  if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
  } 
  else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
  console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
  } 
  else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

/*
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}*/
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}






//fight(); 