function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  let randomMove = Math.floor(Math.random() * moves.length);
  return moves[randomMove];
}

function playOneRound(playerSelection, computerSelection) {
  const playerMove = playerSelection.toLowerCase();
  const computerMove = computerSelection;

  if (playerMove === computerMove) {
    return {
      string: `Its a tie! You both choose ${playerMove}`,
      tie: true,
    };
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return {
      string: `You Win! ${playerMove} beats ${computerMove}`,
      youWin: true,
    };
  } else {
    return {
      string: `You lose! ${computerMove} beats ${playerMove}`,
      youWin: false,
    };
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
    console.log(result.string);

    if (result.youWin) {
      playerScore++;
    } else if (!result.youWin && !result.tie) {
      computerScore++;
    }
  }
  console.log(
    `Your score is: ${playerScore} and computer score is: ${computerScore}`
  );
}

game();
