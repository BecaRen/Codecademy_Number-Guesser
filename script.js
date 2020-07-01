let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate random number between 0 and 9 that will be the target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Alert human user that they chose a number out of range
const alert = humanGuess => {
    if (humanGuess < 0 || humanGuess > 9) {
        console.log('Please type a number between 0 and 9.');
    } 
}

// Calculate absolute distance between guess and target numbers
const getAbsoluteDistance = (x, y) => Math.abs(x-y);
    
// Guesses comparison. If human guess is closer to target number than or equal to computer guess, human wins.
const compareGuesses = (humanGuess, computerGuess, randomNumber) => {

    if (getAbsoluteDistance(humanGuess, randomNumber) <= getAbsoluteDistance(computerGuess, randomNumber)) {    
        return true;        
    } else {
        return false;        
    }
}


/*This function needs to increase the winner’s score after each round.
Requirements:
1. Has a single parameter. This parameter will be a string value representing the winner.
2. Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in
to updateScore. The string passed in will be either 'human' or 'computer'.
3. Does not need to return any value. */
function updateScore (winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    }
}

/*This function will be used to update the round number after each round.
It should increase the value of currentRoundNumber by 1.*/
function advanceRound() {
    currentRoundNumber++;
} 