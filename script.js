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

for (let i=0; i < buttons.length; i++) {
    buttons[i].textContent =  moveList[i];
    buttons[i].style.display = "inline-block";
}

/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

function calcResult(move1, move2) {
    randomMove()
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