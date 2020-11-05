const scores = [['Antoine', 'Alexandre'], [0,0]] 

const rollDice = playerindex =>{
  let scoreDice = Math.floor(Math.random() * 6) + 1 
  scores[1][playerindex] = scoreDice
} 

for (let i = 0; i < scores[0].length; i++){
  rollDice(i);
  console.log(i);
  console.log(scores[1][i]);
}

if (scores[1][0] > scores[1][1]) {
  console.log(`${scores[0][0]} a gagné`);
} else if (scores[1][0] === scores[1][1]){
  console.log('Égalité');
} else {
  console.log(`${scores[0][1]} a gagné`);
}

