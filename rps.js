let x = 0;
let y = 0;

alert(`Before playing, please be advised that the program is very particular. It requires the first letter of your selection to be capitalized E.g. Rock, Paper, or Scissors. Thank you for your patience while this is in beta.`)

for (let i = 0; i < 5; i++) {
 let choices = ['Rock', 'Paper', 'Scissors'];

 function computerPlay() {
  return choices[Math.floor(Math.random()*choices.length)];
 }

 function playerPlay() {
  return prompt('Rock, Paper, or Scissors?');
 } 

 let playerSelection = playerPlay();

 let computerSelection = computerPlay();

 function playRound(playerSelection, computerSelection) {

  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
   x++;
   return alert(`You win! ${playerSelection} beats ${computerSelection}!`)
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
   x++;
   return alert(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
   x++;
   return alert(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper')  {
   y++;
   return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
   y++;
   return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
   y++;
   return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection === computerSelection) {
   return alert("It's a draw!");
  }
 } 
console.log(x,y);
playRound(playerSelection, computerSelection);
}

console.log(x,y)

if (x > y) {
 alert(`You beat the computer! You win!`);
} else if (y > x) {
 alert(`You lose! The computer won.`);
} else if (x == y) {
 alert(`It's a draw!`);
}

alert(`Try again? Refresh the page!`)
/* playerSelection makeAllLowerCase returnFirstLetterUpper 

play round and increment x if player win, y if comp win

after 5 rounds, if x > y player winAll
after 5 rounds, if y > x comp winAll */