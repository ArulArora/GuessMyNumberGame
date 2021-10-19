'use strict';

let randomNumber = Math.trunc(Math.random() * 50) + 1 //Math is an abject, random is a method that gives a 0-1 float
// trunc will cut off the decimal and make it an int - need to add 1 to get in the bounds of 1 and 20
let score = 0; //let since it needs to be mutable
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //this will be a string since it is an input

    if (!guess) { //empty guess is 0 - 0 is a falsy value so it will be false when nothing is in the input
        displayMessage('Please input a number!');

    } else if (guess === randomNumber) { //Playher wins
        displayMessage('YOU GOT IT!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randomNumber;

        if (score < highscore || highscore === 0) { //is the in a highscore?
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== randomNumber) { //guess is wrong/different
        displayMessage(guess > randomNumber ? "Yikes. You're guess is high!" : "Whoops. You're guess is low!");
        score++;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 0;
    randomNumber = Math.trunc(Math.random() * 50) + 1;

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    displayMessage("Start guessing again...");
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});