let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function drawGame() {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win! Your " + userChoice + " beats " + compChoice;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lost. " + compChoice + " beats your " + userChoice;
    msg.style.backgroundColor = "red";
  }
}

function playGame(userChoice) {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      if (compChoice === "paper") {
        userWin = false;
      }
    } else if (userChoice === "paper") {
      // rock, scissors
      if (compChoice === "scissors") {
        userWin = false;
      }
    } else {
      // rock, paper
      if (compChoice === "rock") {
        userWin = false;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach(function(choice) {
  choice.addEventListener("click", function() {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
