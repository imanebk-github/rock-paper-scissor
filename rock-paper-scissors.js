console.log('hi');
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
   return userInput;
} else {
  console.log('please pick eather rock, paper, or scissors');
}
};
function getComputerChoice(){
let randomNumber = Math.floor(Math.random()*3);
switch (randomNumber) {
  case 0 :
  return 'scissors';
  break;
  case 1 :
  return 'rock';
  break;
  default :
  return 'paper';
  break;
}
}
console.log(getComputerChoice()); 
function determineWinner (userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'game is a tie';
  }
  if(userChoice === 'rock'){
  return  computerChoice == 'paper'? 'computer won! Paper covers rock!': 'You won! Rock destroys scissors!';
  }
  if(userChoice === 'paper'){
  return  computerChoice == 'scissors'? 'computer won!Scissors cut paper!': 'You won!Paper covers rock!'
  }
   if(userChoice === 'scissors'){
  return  computerChoice == 'rock'? 'computer won! Rock destroys scissors!': 'You won!Scissors cut paper!'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();