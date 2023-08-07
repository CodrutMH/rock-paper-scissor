const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const displayPlayerScore = document.getElementById('player-scores');
const displayComputerScore = document.getElementById('computer-scores');
const reset = document.getElementById('reset-score');

let playerScor = 0;
let computerScor = 0;

function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  let randomMove = Math.floor(Math.random() * moves.length);
  return moves[randomMove];
}

function playOneRound(playerSelection) {
  const playerMove = playerSelection.toLowerCase();
  const computerMove = getComputerChoice();

  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    playerScor++;
    displayPlayerScore.textContent = playerScor;
  } else {
    computerScor++;
    displayComputerScore.textContent = computerScor;
  }
  if (playerScor >= 6) {
    winner('Player won the Game!');
    displayPlayerScore.textContent = 0;
  } else if (computerScor >= 6) {
    winner('Computer won the Game!');
    displayComputerScore.textContent = 0;
  }
}

function updateImage(playerImage, computerImage) {
  playerScore.innerHTML = `<img src="/images/${playerImage}.png" alt="" />`;
  computerScore.innerHTML = `<img src="/images/${computerImage}.png" alt="" />`;
}

rock.addEventListener('click', function () {
  const computer = getComputerChoice();
  playOneRound('rock');
  updateImage('rock', computer);
});
paper.addEventListener('click', function () {
  const computer = getComputerChoice();
  playOneRound('paper');

  updateImage('paper', computer);
});
scissors.addEventListener('click', function () {
  const computer = getComputerChoice();
  playOneRound('scissors');

  updateImage('scissors', computer);
});
reset.addEventListener('click', function () {
  displayPlayerScore.textContent = 0;
  displayComputerScore.textContent = 0;
});

function winner(winner) {
  const showWinner = document.getElementById('winner');
  showWinner.textContent = winner;
}
