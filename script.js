/* Notes de version
MISSING
-------
1)  Fonction de comparaison de résultat et de définition du gagnant, par round & à la partie (idée pour plus tard : affrontement au dé, calcul des résultats )
2)  Front interactif Ajax

DEBUG
-------

1)  Formulaire de saisie des paramètres du jeu + bouton lancement du jeu (A recaler, fonctionne mais retire toute la page html, balise head vide
d
IMPROVE
-------
1)  Les ex-variables globales (players, rounds, dices, faces) sont 100% liées au lancement d'un jeu et affichage des résultats
    Dans le cas d'une application plus complète, avec fonction metas  (historique des scores, statistiques joueur...), elles ne serveraient à rien.
    J'ai transformé ces variables comme arguments des fonctions de jeu (playGame displayAllDices) mais ils doivent être passés pour chacune des fonctions
    -> Remind : Y-a-t-il une meilleure solution ?
    -> Piste : Closures ?
2)  Maquettes UX + intégration clean
3)  (UI + Intégration) <- déclinaison projet
*/


// Initialize : global game table
let gameTable = []

// Function : result of one rolled dice
const rollDice = (faces) => Math.floor(Math.random() * faces) + 1

// Function : catch form values and launch playGame + printResultTable with it
const rollForIt = () => {
  let players = document.rollForm.players.value;
  let rounds = document.rollForm.rounds.value;
  let dices = document.rollForm.dices.value;
  let faces = document.rollForm.faces.value;
  playGame(players, rounds, dices, faces)
  printResultTable(players, rounds, dices)
}

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

// Function : Créer un élément dans le DOM (arguments : balise de l'élément, contenu, élément parent)
const createElement = (element, content, parent) => {
  element = document.createElement(element);
  element.textContent = content;
  parent.appendChild(element);
}

// Function : print the global result table -> Create Element version
const printResultTable = (players, rounds, dices) => {
  // Create heading row line (within table id="resultTable")
  createElement('tr', '', resultTable);
  // Variable to aim the heanding row
  let row = document.getElementById('resultTable').getElementsByTagName( 'tr' )[0];
  // Create empty table heading (within heading row)
  createElement('th', '', row);
  // For each player
  for (let i = 0; i < players; i++){
    // Create table heading containing player name (within heading row)
    createElement('th', 'player ' + (i + 1), row);
  }
  // For each round
  for (let i = 0; i < rounds; i++){
    // Create row line (within table id="resultTable")
    createElement('tr', '', resultTable);
    // Variable to aim each round row
    let row = document.getElementById('resultTable').getElementsByTagName( 'tr' )[i + 1];
    // Create table cell containing round name (within round row)
    createElement('td', gameTable[i].name, row);
    // For each player
    for (let j = 0; j < players; j++){
      // Create table cell with containing player score (within round row)
      createElement('td', gameTable[i]['player ' + (j + 1)], row);
    }
  }
}

// Function : catch form values and launch playGame + printResultTable with it
const rollForIt = () => {
  let players = document.rollForm.players.value;
  let rounds = document.rollForm.rounds.value;
  let dices = document.rollForm.dices.value;
  let faces = document.rollForm.faces.value;
  playGame(players, rounds, dices, faces)
  printResultTable(players, rounds, dices)
  document.getElementById("settings").style.display = "none";
  document.getElementById("table").style.display = "block";
}


/*
// Function : print the global result table
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
  document.write('</table>')
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
