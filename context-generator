// Définition du nombre de joueurs et dés par joueur
let playersNumber = 10
let dicesPerPlayer = 8
let facesPerDice = 9

// Déclaration liste des 'joueurs' et table de 'scores', vides
let players = [];
let scores = [];

// Déclaration fonction 'résultat d'un dé'
const rollDice = dice => Math.floor(Math.random() * facesPerDice) + 1

// Pour chaque joueur
for (let i = 0; i < playersNumber; i++){
  // Ajout du joueur dans liste des 'joueurs'
  players.push('joueur '+i);
  // Création table de scores du joueur
  let playerScoreTable = []
  // Pour chaque dé (par joueur)
  for (let j = 0; j < dicesPerPlayer; j++){  
    // Ajout de ses lancés dans sa table de score
    playerScoreTable.push(rollDice(j))       
  }
  // Ajout de sa table de score à la table scores globale
  scores.push(playerScoreTable)
} 

//console.table(players)
for (let i = 0; i < playersNumber; i++){
  console.log(`dés du ${players[i]} : ${scores[i]}`)
}
