'use strict';

const btnAgain = document.querySelector('.again');
const secret = document.querySelector('.number');
const input = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
btnCheck.addEventListener('click', () => {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = '⛔️ No Number!!!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number...';
    secret.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    secret.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
});
btnAgain.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start Guessing...';
  scoreEl.textContent = score;
  secret.textContent = '?';
  input.value = '';
  body.style.backgroundColor = '#222';
  secret.style.width = '15rem';
});
