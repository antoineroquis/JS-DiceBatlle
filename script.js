const scores = [['Antoine', 'Alexandre'], [0,0]] 

const rollDice = playerindex =>{
  let scoreDice = Math.floor(Math.random() * 6) + 1 
  scores[1][playerindex] = scoreDice
} 

for (let counter = 0; counter < scores[0].length; counter++){
  rollDice(counter);
  console.log(counter);
  console.log(scores[1][counter]);
}

if (scores[1][0] > scores[1][1]) {
  console.log(`${scores[0][0]} a gagné`);
} else if (scores[1][0] === scores[1][1]){
  console.log('Égalité');
} else {
  console.log(`${scores[0][1]} a gagné`);
}

