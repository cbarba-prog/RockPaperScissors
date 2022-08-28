
function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice == 1){
    console.log("Computer chooses Rock " + compChoice);
    return compPick = "rock";
    }
    
    else if(compChoice == 2){
    console.log("Computer chooses Paper " + compChoice);
    return compPick = "paper";
    }

    else{
    console.log("Computer chooses Scissors " + compChoice);
    return compPick = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if(computerSelection == playerSelection)
    console.log("Tie")
    else if(computerSelection != playerSelection && computerSelection == playerSelection)
    console.log("Lose")
    else if(computerSelection == 3)
    console.log("Win")

}
   
  const playerSelection = prompt();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));