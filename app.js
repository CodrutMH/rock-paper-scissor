function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  let randomMove = Math.floor(Math.random() * moves.length);
  return moves[randomMove];
}

function playOneRound(playerSelection, computerSelection) {
  const playerMove = playerSelection.toLowerCase();
  const computerMove = computerSelection;

  if (playerMove === computerMove) {
    return `Its a tie! You both choose ${playerMove}`;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return `You Win! ${playerMove} beats ${computerMove}`;
  } else {
    return `You lose! ${computerMove} beats ${playerMove}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      "Round " + (round + 1) + " Choose a move, Rock, Paper or Scissors"
    );

    const result = playOneRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }
  }
  console.log(
    `Your score is: ${playerScore} and computer score is: ${computerScore}`
  );
}

// const computerSelection = getComputerChoice();
// const playerSelection = prompt("Choose a move, Rock, Paper or Scissors");

// console.log(playOneRound(playerSelection, computerSelection));
game();
