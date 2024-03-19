'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log();

  document.querySelector('.score').textContent = score;
  if (!guess) {
    console.log('No number!');
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    randomNumber = Math.trunc(Math.random() * 20);
    console.log(randomNumber);
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
    this.document.querySelector('.message').textContent = 'You loose the game!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
