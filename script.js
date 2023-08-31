'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const textContentSwapper = function (className, string) {
  document.querySelector(className).textContent = string;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // When there is no input
  if (!guess) {
    displayMessage(`No number`);
    //When Player wins
  } else if (guess === number) {
    displayMessage(`Correct Number!`);
    textContentSwapper(`.number`, number);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      textContentSwapper(`.highscore`, highScore);
    }
    // When guess is wrong
  } else if (guess != number) {
    if (score > 1) {
      displayMessage(guess > number ? `Too High` : `Too Low`);
      score--;
      textContentSwapper(`.score`, score);
    } else {
      displayMessage(`You lost the game!`);
      textContentSwapper(`.score`, 0);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  displayMessage(`Start guessing...`);
  textContentSwapper(`.score`, score);
  textContentSwapper(`.number`, `?`);
  document.querySelector(`.guess`).value = `0`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  number = Math.trunc(Math.random() * 20 + 1);
});
