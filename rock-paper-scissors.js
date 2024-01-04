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

function checkWinner(playerScore, computerScore) {
    let winner = document.querySelector("#game-winner");
    
    if (playerScore === "5") {
        winner.textContent = "Player Won!";
    }
    else if (computerScore === "5") {
        winner.textContent = "Computer Won!";
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

/*
function game() {
    let computerScore = 0, humanScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(`Human: ${playerChoice}`);
        console.log(`Computer: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);
        console.log(`result: ${result.slice(4, result.indexOf('!'))}`);
        

        if (result === undefined) {computerScore++}
        else if (result.slice(4, result.indexOf('!')) === "win") {
            humanScore++;
        } 
        else {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log(`Human: ${humanScore}, Computer: ${computerScore}. You Won!`);
    }
    else {
        console.log(`Human: ${humanScore}, Computer: ${computerScore}. You Lose!`);
    }
}
*/

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