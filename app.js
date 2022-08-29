
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice == 1){
    return compPick = "rock";
    }
    
    else if(compChoice == 2){
    return compPick = "paper";
    }

    else{
    return compPick = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let log = "";

    console.log("You picked " + playerSelection);
    console.log("Computer picked " + computerSelection)

    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    log = "You Win";
    
    }
    else if (playerSelection === computerSelection) {
    log = "You Tied";
}
    else
    {
    log = "You Lose";
}
    return log;
}

function game() {
  

        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.search('You Win') > -1) {
          playerScore++;
        } else if (roundResult.search('You Lose') > -1) {
          computerScore++;
        }
     

    console.log("Computer: " + computerScore);
    console.log("Player: " + playerScore);
}




  const playerSelection = prompt();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(game((playRound(playerSelection, computerSelection))));