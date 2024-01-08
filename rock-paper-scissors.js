function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3); 
    return choices[random];
}

function getPlayerChoice() {
    let isRunning = true;
    let input;
    while (isRunning) {
        input = capitalize(prompt("Rock, Paper, Scissors? "));
        if (input === "Rock" || input === "Paper" ||
            input === "Scissors" || input == null) {
            
            isRunning = false;
        }
    }
    return input;
}

function capitalize(string) {
    if (string === null) {
        return;
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function restartGame() {
    // Clear score
    document.querySelector("#player-score").textContent = "";
    document.querySelector("#computer-score").textContent = "";
    document.querySelector("#round-winner").textContent = "";

    // Clear all element in winner display
    const winnerDisplay = document.querySelector("#game-winner");
    winnerDisplay.innerHTML = "";
    winnerDisplay.classList.remove("pop-up");

    // Enable button for new game
    const rpsButtons = document.querySelectorAll(".choices button");
    console.log(rpsButtons);
    rpsButtons.forEach(btn => {
        btn.disabled = false;
        console.log(btn);
    });
    
}

function gameDone(msg, playerScore, computerScore) {

    // Disable all button
    const rpsButtons = document.querySelectorAll(".choices button");
    console.log(rpsButtons);
    rpsButtons.forEach(btn => {
        btn.disabled = true;
        console.log(btn);
    });

    const winnerDisplay = document.querySelector("#game-winner");

    // Show winner of the game
    const winnerMsg = document.createElement("p");
    winnerMsg.textContent = msg;
    winnerDisplay.appendChild(winnerMsg);

    const score = document.createElement("p");
    score.textContent = `Player: ${playerScore} vs Computer ${computerScore}`;
    winnerDisplay.appendChild(score)

    // Restart game to play again
    const restartGameBtn = document.createElement("button");
    restartGameBtn.textContent = "Restart Game";
    restartGameBtn.classList.add("restart-game");
    restartGameBtn.addEventListener("click", restartGame)
    winnerDisplay.appendChild(restartGameBtn);

    winnerDisplay.classList.add("pop-up");
}

function checkWinner(playerScore, computerScore) {
    if (playerScore === "5") {
        // winner.textContent = "Player Won!";
        gameDone("You Won!", playerScore, computerScore);
    }
    else if (computerScore === "5") {
        // winner.textContent = "Computer Won!";
        gameDone("You Lose!", playerScore, computerScore);
    }
}

function playRound(playerChoice, computerChoice) {

    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");

    const roundWinner = document.querySelector("#round-winner");

    if (playerChoice === computerChoice) {
        roundWinner.textContent = "Tie";
        return;
    }
     
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            roundWinner.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Scissors") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            roundWinner.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            roundWinner.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Rock") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            roundWinner.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    } 
    // When player choice is scissors
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            roundWinner.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Paper") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            roundWinner.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }

    checkWinner(playerScore.textContent, computerScore.textContent);

}

const choiceButtons = document.querySelector(".choices");
console.log(choiceButtons);
choiceButtons.addEventListener("click", (e) => {
    
    // Valid only when user click on button
    if (e.target.tagName === "BUTTON") {

        const playerChoice = e.target.textContent;
        document.querySelector("#player-choice").textContent = playerChoice;
        
        const computerChoice = getComputerChoice();
        document.querySelector("#computer-choice").textContent = computerChoice;

        playRound(playerChoice, computerChoice);
    }
});  