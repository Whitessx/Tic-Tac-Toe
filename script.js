let humanScore = 0;
let computerScore = 0;

// Game Logic

function game(human, computer) {

  if (human != "paper" && human != "rock" && human != "scissors") {
    return "Please play by the rules.";
  } 

  if (computer != "rock" && computer != "paper" && computer != "scissors") {
    return "Please play by the rules.";
  }

  if (human == "paper" && computer == "rock" || human == "rock" && computer == "scissors" || human == "scissors" && computer == "paper") {
    humanScore++;
    return "Contragulations, you've won!";
  } else if (human == "rock" && computer == "paper" || human == "scissors" && computer == "rock" || human == "paper" && computer == "scissors") {
    computerScore++;
    return "You've lost!";
  } else if (human == computer) {
    return "It's a tie! Try again.";
  }

  if (humanScore == 3) {
    humanScore = 0;
    computerScore = 0;
    return "You've won the game!";
  } else if (computerScore == 3) {
    humanScore = 0;
    computerScore = 0;
    return "You've lost the game!";
  }
}

// Write a function where the computer returns either rock, paper or scissors.

function computerDecides() {
  let computerSelection = ["paper", "rock", "scissors"];
  let selection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
  return selection;
}