'use strict';

let randomNumber = random();
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log();

  setScoreContent(20);

  if (!guess) {
    setMessage('No number!');
  } else if (guess == randomNumber) {
    document.querySelector('.highscore').textContent =
      score > highScore ? score : highScore;
    setMessage('Correct!');
    setBodyBackgroundColor('green');
    setNumberWidth('30rem');
    document.querySelector('.number').textContent = guess;
  } else if (guess < 0 || guess > 20) {
    setMessage('The secret number is between 0 and 20, try again!');
  } else if (score > 1) {
    setMessage(guess > randomNumber ? 'Too high' : 'Too low');
    score--;
    setScoreContent(score);
  } else {
    setMessage('You loose the game!');
    score--;
    setScoreContent(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  setBodyBackgroundColor('#222');
  setNumberWidth('15rem');

  score = 20;
  randomNumber = random();

  setMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
function random() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}
function setNumberWidth(width) {
  document.querySelector('.number').style.width = width;
}

function setScoreContent(score) {
  document.querySelector('.score').textContent = score;
}

function setBodyBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
