// Définition joueurs, setup variables scores
const players = ['Antoine', 'Alexandre']
let scores = [0,0]

/* Fonction rollDice 
- Définit  le score de dé du joueur (entier random entre 1 et 6)
- Log le résultat + assigne sa valeur dans l'array scores, à l'index du joueur*/
const rollDice = player =>{
  let scoreDice = Math.floor(Math.random() * 6) + 1
  console.log(scoreDice)
  scores[players.indexOf(player)] = scoreDice
}

// Lance fonction rolleDice pour chaque joueur de l'array players
players.forEach(player => rollDice(player));

// Compare le scores de dé chaque joueur + annonce le vainqueur ou égalité
if (scores[0] > scores[1]) {
  console.log(`${players[0]} a gagné`);
} else if (scores[0] === scores[1]){
  console.log('Égalité');
} else {
  console.log(`${players[0]} a gagné`);
}


