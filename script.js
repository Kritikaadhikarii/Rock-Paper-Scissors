let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock', 'Paper', 'Scissors']

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

console.log(buttons);
buttons[0].textContent= "Rock";
buttons[1].textContent= "Paper";
buttons[2].textContent= "Scissors";



function calcResult(move1, move2) {
    randomMove()
    if(move1 === move2){
        return tieMsg;
    }else if((move1 === moveList[0] && move2 == moveList[2])||
    (move1 === moveList[1] && move2 == moveList[0]) ||
    (move1 === moveList[2] && move2 == moveList[1])){
        return winMsg;
    }else{
        return loseMsg;
    }
}


/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
    statusDisplay.textContent = 'Choose!';

    element.addEventListener(eventType,listener);
    //chooses move 
    const computerChoice = randomMove();
    return;
}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {
    calcResult(move1, move2)
}

startGame();