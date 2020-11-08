/* Notes de version

MISSING
-------
1)  Fonction de comparaison de résultat et de définition du gagnant, par round & à la partie (idée pour plus tard : affrontement au dé, calcul des résultats )


IMPROVE
-------

1)  Les ex-variables globales (players, rounds, dices, faces) sont 100% liées au lancement d'un jeu et affichage des résultats
    Dans le cas d'une application plus complète, avec fonction metas  (historique des scores, statistiques joueur...), elles ne serveraient à rien.
    J'ai transformé ces variables comme arguments des fonctions de jeu (playGame displayAllDices) mais ils doivent être passés pour chacune des fonctions
    -> Remind : Y-a-t-il une meilleure solution ?
    -> Piste : Closures ?
*/



// Initialize : global game table
let gameTable = []

// Function : result of one rolled dice
const rollDice = (faces) => Math.floor(Math.random() * faces) + 1

// Function : roll all the dices, for each player, for each round
const playGame = (players, rounds, dices, faces) => {
  for (let i = 0; i < rounds; i++){
    gameTable[i] = {
      name: 'round ' + (i + 1)
    }
    // For each round
    for (let j = 0; j < players; j++){
      // Set arrays to stock all dices of player
      let playerScore = []
      // For each dice per player
      for (let k = 0; k < dices; k++){
        // Launch a dice & get result
        playerScore.push(rollDice(faces))
      }
      // Save round Score
      gameTable[i]['player ' + (j + 1)] = playerScore
    }
  }
}

//DISPLAY GAME RESULTS (HTML TABLE)
const printResultTable = (players, rounds, dices) => {
  document.write('<table> <tr> <th> </th>')
  for (let i = 0; i < players; i++){
    document.write('<th> player ' + (i + 1) + '</th>')
  }
  document.write('</tr>')
  for (let i = 0; i < rounds; i++){
    document.write('<tr> <td>' + gameTable[i].name + '</td>')
    for (let j = 0; j < players; j++){

      document.write('<td>' + gameTable[i]['player ' + (j + 1)] + '</td>')
    }
    document.write('</tr>')
  }
}


/*
(SAVED : OLD SCORE DISPLAY FUNCTION)

// Function : display all the dices, for each player, for each round
const displayAllDices = (players, rounds, dices, faces) => {
  for (let i = 0; i < rounds; i++){
    document.write(gameTable[i].name + '<br/>')
    for (let j = 0; j < players; j++){
      document.write('player ' + (j + 1) + '<br/>')
      for (let k = 0; k < dices; k++){
        document.write(gameTable[i]['player ' + (j + 1)][k] + '<br/>')
      }
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
