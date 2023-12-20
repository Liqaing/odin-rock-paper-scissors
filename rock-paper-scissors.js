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
        console.log("Tie, replay.")
        
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        console.log(`Human: ${playerChoice}`);
        console.log(`Computer: ${computerChoice}`);
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