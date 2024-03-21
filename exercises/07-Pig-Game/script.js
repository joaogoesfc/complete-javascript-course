'use strict';
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const playerName1 = document.querySelector('#name--0');
const playerName2 = document.querySelector('#name--1');

const activePlayer = document.querySelector(".player--active");
const activeCurrentScore = activePlayer.querySelector(".current-score");
const activeScore = activePlayer.querySelector(".score");

const btnNewGame = document.querySelector('.btn--new');
const imgDice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');



const SetPlayersName = function () {
  playerName1.textContent = prompt('First player name');
  playerName2.textContent = prompt('Second player name');
  
};

const resetCurrent = function () {
    currentScore = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
}

const changePlayer = function () {
    if (player1.classList.contains("player--active")) {
        playerScore1 += currentScore;
        score1.textContent = playerScore1;
        resetCurrent();
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
    } else {
        playerScore2 += currentScore;
        resetCurrent();
        score2.textContent = playerScore2;
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
    }
}

const getActivePlayer = function() {
    return player1.classList.contains("player--active") ? player1 : player2;
}

let playerScore1 = 0;
let playerScore2 = 0;

let currentScore = 0;
btnRollDice.addEventListener('click', function () {
    if (playerScore1 < 100 && playerScore2 < 100) {
        const rolledDice = Math.trunc(Math.random() *6) + 1;
        imgDice.src = `dice-${rolledDice}.png`
        currentScore = rolledDice === 1 ? 0 : currentScore + rolledDice;
        
        getActivePlayer().querySelector(".current-score").textContent = currentScore;

        if (currentScore === 0) changePlayer();
    }

});


btnHold.addEventListener("click", function () {
    if (playerScore1 < 100 && playerScore2 < 100) {
        changePlayer();

        if (playerScore1 >= 100) {
        console.log(`${playerName1.textContent} wins!`);
        }
        if (playerScore2 >= 100) {
        console.log(`${playerName2.textContent} wins!`);
        }
    }
    
});

btnNewGame.addEventListener("click", function () {
    SetPlayersName();
    resetCurrent();
    playerScore1 = 0;
    PlayerScore2 = 0;
});