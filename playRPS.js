const gameWinner = document.querySelector('.game');

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', choiceSelected);

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', choiceSelected);

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', choiceSelected);

function choiceSelected(e){
    let playerChoice = e.srcElement.className;
    let computerSeletion = computerPlay();
    let notifyRoundWin= playRound(playerChoice, computerSeletion);
    checkScore(notifyRoundWin);
}


function computerPlay(){
    const play = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return play[index];
}

function playerSelection(){
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    while(!(choice === "rock" || choice === "paper" || choice === "scissors")){
        choice = prompt("Invalid selection, please pick again. Rock, Paper, or Scissors?");
        coice = choice.toLowerCase();
    }
    return choice;
}

function playRound(playerChoice, computerChoice){
    let notifyRoundWinner = "";

    if(playerChoice === computerChoice){
        notifyRoundWinner = "Tied! You both played " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }
    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            notifyRoundWinner = "You lose! Rock loses to Paper";
            computerScore++;
        }
        else if(computerChoice === 'scissors'){
            notifyRoundWinner = "You win! Rock beats Scissors";
            playerScore++;
        }
    }
    else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            notifyRoundWinner = "You win! Paper beats Rock";
            playerScore++;
        }
        else if(computerChoice === 'scissors'){
            notifyRoundWinner = "You lose! Paper loses to Scissors"; 
            computerScore++;
        }
    }
    else if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            notifyRoundWinner = "You win! Scissors beats Paper";
            playerScore++;
        }
        else if(computerChoice === 'rock'){
            notifyRoundWinner = "You lose! Scissors loses to Rock";
            computerScore++;
        }
    }
    return(notifyRoundWinner);
}

let playerScore = 0;
let computerScore = 0;
let roundsToWin = 5;

function checkScore(notifyRoundWin){
    gameWinner.textContent = notifyRoundWin;

    const notifyScore = document.createElement('div');
    notifyScore.textContent = "Score is now -> You: " + playerScore + " Computer: " + computerScore;
    gameWinner.appendChild(notifyScore);

    if(playerScore >= roundsToWin || computerScore >= roundsToWin){
        const notifyWinner = document.createElement('div');
        const promptNewGame = document.createElement('div');

        if(playerScore >= roundsToWin){
            notifyWinner.textContent = "Game Over. You beat the computer";
        }
        else if(computerScore >= roundsToWin){
            notifyWinner.textContent = "Game Over. You lost to the computer";
        }

        gameWinner.appendChild(notifyWinner);

        promptNewGame.textContent = " Start a New Game:";
        gameWinner.appendChild(promptNewGame);

        playerScore = 0;
        computerScore = 0;
    }
}