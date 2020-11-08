/* Notes de version

MISSING
-------

1)  Fonction de comparaison de résultat et de définition du gagnant, par row & à la partie (idée pour plus tard : affrontement au dé, calcul des résultats )


IMPROVE
-------

1)  La logique Players > Rows > Dices utilisée ne convient par à la construction dynamique d'un tableau (code commenté en bas de page). 
    -> Piste : Essayer Rows > Players > Dices ?
    
2)  Les ex-variables globales (players, rows, dices, faces) sont 100% liées au lancement d'un jeu et affichage des résultats
    Dans le cas d'une application plus complète, avec fonction metas  (historique des scores, statistiques joueur...), elles ne serveraient à rien. 
    J'ai transformé ces variables comme arguments des fonctions de jeu (playGame displayAllDices) mais ils doivent être passés pour chacune des fonctions
    -> Remind : Y-a-t-il une meilleure solution ?
    -> Piste : Higher Older Functions ?

*/



// Initialize : global game table
let playerTable = []

// Function : result of one rolled dice
const rollDice = (faces) => Math.floor(Math.random() * faces) + 1

// Function : roll all the dices, for each player, for each row
const playGame = (players, rows, dices, faces) => {
  for (let i = 0; i < players; i++){
    playerTable[i] = {
      name: 'Player ' + (i + 1),
    }
    let scorePlayer = []
    // For each row
    for (let j = 0; j < rows; j++){
      // Set arrays to stock all dices of player
      let scoreRow = []
      // For each dice per player
      for (let k = 0; k < dices; k++){
        // Launch a dice & get result
        scoreRow.push(rollDice(faces))
      }
      // Save Row Score
      playerTable[i]['row ' + (j + 1)] = scoreRow
    }
  }
}

// Function : display all the dices, for each player, for each row
const displayAllDices = (players, rows, dices, faces) => {
  for (let i = 0; i < players; i++){
    document.write(playerTable[i].name + '<br/>')
    for (let j = 0; j < rows; j++){
      document.write('row ' + (j + 1) + '<br/>')
      for (let k = 0; k < dices; k++){
        document.write(playerTable[i]['row ' + (j + 1)][k] + '<br/>')
      }
    }
  }
}


/*
DISPLAY GAME RESULTS (HTML TABLE)

const displayScoreTable = (players, rows, dices) => {
  document.write('<table> <tr> <th> </th>')
  for (let i = 0; i < players; i++){
    document.write('<th>' + playerTable[i].name + '</th>')
  }
  for (let i = 0; i < players; i++){
    for (let j = 0; j < rows; j++){
    }
  }
}
*/


/*
(SAVED) OLD SCORE COMPARISON 

// Compare le scores de dé chaque joueur + annonce le vainqueur ou égalité
if (scores[0] > scores[1]) {
  console.log(`${players[0]} a gagné`);
} else if (scores[0] === scores[1]){
  console.log('Égalité');
} else {
  console.log(`${players[0]} a gagné`);
}
*/
