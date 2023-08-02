'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log("Secret Number: ", secretNumber);

// Function to display message to user.
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

// Function to display score to user.
function displayScore(score) {
    document.querySelector('.score').textContent = score
}

// Actions for 'Check' button.
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log("User Guess", guess);
    // Checking if the user has chances left to attempt.
    if (score > 1) {
        // Checking if user input is null
        if (!guess) {
            displayMessage("Enter a number to guess!");
        }
        // Checking if user input matches the secret number
        else if (guess === secretNumber) {
            displayMessage("Correct Number. You Won 🤍");
            document.querySelector('.number').textContent = secretNumber;
            document.body.style.backgroundColor = "Green";
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        // If user input is greater or smaller than the secret number
        else if (guess !== secretNumber) {
            displayMessage(guess > secretNumber ? "Too High 👆" : "Too Low 👇");
            score = score - 1;
            displayScore(score);
        }
    }
    else {
        displayMessage("No chances left. you LOST 💔");
        displayScore(0);
        document.body.style.backgroundColor = "red";
    }
});

// Actions for 'Again' buttton - Resetting the game
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("Secret Number:", secretNumber);
    score = 20;
    displayMessage("Start guessing...");
    displayScore(score);
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});





