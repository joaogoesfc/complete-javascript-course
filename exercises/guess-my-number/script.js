'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log();

  document.querySelector('.score').textContent = score;
  if (!guess) {
    console.log('No number!');
  } else if (guess == randomNumber) {
    highScore = score > highScore ? score : highScore;

    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'The number must be between 0 and 20';
  } else if (score > 1) {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You loose the game!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
