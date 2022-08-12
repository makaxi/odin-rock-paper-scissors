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
    if(playerChoice === computerChoice){
        console.log("Tied! You both played " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    }
    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log("You lose! Rock loses to Paper");
            return "computerWin";
        }
        else if(computerChoice === 'scissors'){
            console.log("You win! Rock beats Scissors")
            return "playerWin";
        }
    }
    else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            console.log("You win! Paper beats Rock");
            return "playerWin";
        }
        else if(computerChoice === 'scissors'){
            console.log("You lose! Paper loses to Scissors");
            return "computerWin";
        }
    }
    else if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            console.log("You win! Scissors beats Paper.");
            return "playerWin";
        }
        else if(computerChoice === 'rock'){
            console.log("You lose! Scissors loses to Rock");
            return "computerWin";
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let numOfRounds = 5;
    
    for(let i = 0; i < numOfRounds; i++){
        let playerChoice = playerSelection();
        let computerSeletion = computerPlay();
        let roundWinner = playRound(playerChoice, computerSeletion);

        if(roundWinner === "playerWin"){
            playerScore++;
            if(i < numOfRounds - 1) console.log("Score is now -> You: " + playerScore + " Computer: " + computerScore);
        } 
        else if(roundWinner === "computerWin"){
            computerScore++;
            if(i < numOfRounds - 1) console.log("Score is now -> You: " + playerScore + " Computer: " + computerScore);
        }
        else{
            if(i < numOfRounds - 1) console.log("Score is still -> You: " + playerScore + " Computer: " + computerScore);
        }

    }

    if(playerScore == computerScore){
        console.log("Game Over. You tied the computer");
    }
    else if(playerScore > computerScore){
        console.log("Game Over. You beat the computer");
    }
    else if(computerScore > playerScore){
        console.log("Game Over. You lost to the computer");
    }

    console.log("Final Score -> You: " + playerScore + " Computer: " + computerScore);
}

game();