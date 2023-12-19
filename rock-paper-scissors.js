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