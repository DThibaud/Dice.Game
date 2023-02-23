const playerOne = document.getElementById('playerOneBoard');
const playerTwo = document.getElementById('playerTwoBoard');

const playerOneDot = document.getElementById('dotOne');
const playerTwoDot = document.getElementById('dotTwo');

const playerOneName = document.getElementById('playerNameOne');
const playerTwoName = document.getElementById('playerNameTwo');



const playerOneCurrent = document.getElementById('currentOne');
const playerTwoCurrent = document.getElementById('currentTwo');

const playerOneCurrentPoints = document.getElementById('currentPointsOne');
const playerTwoCurrentPoints = document.getElementById('currentPointsTwo');

const dice = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');
const holdBtn = document.getElementById('holdBtn');

let currentPlayer = 1;
let currentPoints = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let gamePlaying = true;

const switchPlayer = () => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    currentPoints = 0;
    playerOneCurrentPoints.textContent = '0';
    playerTwoCurrentPoints.textContent = '0';
    playerOne.classList.add('active');
    playerTwo.classList.add('active');
    


    if (currentPlayer === 1) {
        playerOne.style.backgroundColor = 'rgb(233, 233, 233, 0.8)';
        playerOneName.style.fontWeight = 'bold';
        playerTwo.style.backgroundColor = 'white';
        playerTwoName.style.fontWeight = 'normal';


    } else {
        playerOne.style.backgroundColor = 'white';
        playerOneName.style.fontWeight = 'normal';
        playerTwo.style.backgroundColor = 'rgb(233, 233, 233, 0.8)';
        playerTwoName.style.fontWeight = 'bold';


    }
    };


    const resetGame = () => {
    currentPlayer = 1;
    currentPoints = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTotal.textContent = '0';
    playerTwoTotal.textContent = '0';
    playerOneCurrentPoints.textContent = '0';
    playerTwoCurrentPoints.textContent = '0';
    playerOneName.textContent = 'Player 1';
    playerTwoName.textContent = 'Player 2';
    playerOne.classList.add('active');
    playerTwo.classList.remove('active');
    playerOne.style.backgroundColor = 'rgb(233, 233, 233, 0.8)';
    playerOneName.style.fontWeight = 'bold;';
    gamePlaying = true;
    };

    rollBtn.addEventListener('click', () => {
    if (gamePlaying) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.src = `./images/dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
        currentPoints += diceRoll;
        if (currentPlayer === 1) {
        playerOneCurrentPoints.textContent = currentPoints;
        } else {
        playerTwoCurrentPoints.textContent = currentPoints;
        }
    } else {
        switchPlayer();
    }
    }
    });

    holdBtn.addEventListener('click', () => {
    if (gamePlaying) {
    if (currentPlayer === 1) {
        playerOneScore += currentPoints;
        playerOneTotal.textContent = playerOneScore;
        if (playerOneScore >= 100) {
        playerOneName.textContent = 'WINNER';
        playerOneName.classList.add('text-danger');
        gamePlaying = false;
        } else {
        switchPlayer();
        }
    } else {
        playerTwoScore += currentPoints;
        playerTwoTotal.textContent = playerTwoScore;
        if (playerTwoScore >= 100) {
        playerTwoName.textContent = 'WINNER';
        playerTwoName.classList.add('text-danger');
        gamePlaying = false;
        } else {
        switchPlayer();
        }
    }
    }
    });

    newGameBtn.addEventListener('click', () => {
    resetGame();
    });
