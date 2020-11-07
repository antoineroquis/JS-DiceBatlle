/* Global vars 
Number of : players, rows, dices (per player per row), faces per dice)*/
let playersNumber = 2
let rowsNumber = 2
let dicesPerPlayer = 2
let facesPerDice = 6

// Set object : global score table
let gameScore = {}

// Function : result of one rolled dice
const rollDice = dice => Math.floor(Math.random() * facesPerDice) + 1

// For each player
for (let i = 0; i < playersNumber; i++){
  // Define player name
  gameScore['Player ' + i] = 'Player ' + i
  // Set arrays to stock all dices of player
  let scorePlayer = []
  // For each row
  for (let j = 0; j < rowsNumber; j++){  
    // Set arrays to stock all dices of player
    let scoreRow = []
    // For each dice per player
    for (let k = 0; k < dicesPerPlayer; k++){  
      // Launch a dice & get result
      scoreRow.push(rollDice(k))    
    }
    // Save Row Score
    gameScore['Player ' + i + ' row ' + j] = scoreRow
    scorePlayer.push(scoreRow)
  }
  // Save Player Score
  gameScore['Player ' + i +  ' score'] = scorePlayer 
} 

console.log(gameScore)

for (let i = 0; i < playersNumber; i++){
  console.log(`${gameScore['Player ' + i]} a obtenu les dés : ${gameScore['Player ' + i +  ' score']}`)
}

