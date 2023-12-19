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
        if (input === "Rock" || input === "Paper" || input === "Scissors" || input == null) {
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

function playRound(playerChoice, computerChoice) {
    while (playerChoice === computerChoice) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
    }

    let result;
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            result = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Scissors") {
            result = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            result = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Rock") {
            result = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    } 
    // When player choice is scissors
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            result = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (computerChoice === "Paper") {
            result = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }
    return result;
}
