let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock', 'Paper', 'Scissors']

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelector('.move-display');
let buttons = document.querySelectorAll('button');

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorButton = document.getElementById("scissors-button");

console.log(buttons);
buttons[0].textContent= "Rock";
buttons[1].textContent= "Paper";
buttons[2].textContent= "Scissors";

statusDisplay.textContent = 'Choose!';



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

function startGame(playerchoice) {
    console.log("player choice",playerchoice)

    const computerChoice = moveList[Math.floor(Math.random()*moveList.length)]

    moveDisplays.children[0].textContent = `Player : ${playerchoice}`;
    moveDisplays.children[1].textContent = `Computer : ${computerChoice}`;

    const result = calcResult(playerchoice, computerChoice);

    statusDisplay.textContent = result;

    if ((result === winMsg) || (result === loseMsg) || (result === tieMsg)){
        // rockButton.style.display = 'none';
        // paperButton.style.display = 'none';
        // scissorButton.style.display = 'Play Again';
        scissorButton.addEventListener('click', resetGame);

        buttons[0].style.display = 'none';
        buttons[1].style.display = 'none';
        buttons[2].textContent = 'Play Again';
    }


}

rockButton.addEventListener('click', () => startGame(moveList[0]))
paperButton.addEventListener('click', () => startGame(moveList[1]))
scissorButton.addEventListener('click', () => startGame(moveList[2]))

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {


}

startGame();