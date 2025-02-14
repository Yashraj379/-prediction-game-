// Function for Color Prediction
function predictColor(userColor) {
    const colors = ['red', 'green', 'blue'];

    // Choose a random color that is NOT the user's choice
    let randomColor;
    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === userColor);

    document.getElementById('color-result').textContent = `You guessed ${userColor}, but the result is ${randomColor}. Try again!`;
}

// Function for Number Prediction
function predictNumber() {
    const userNumber = document.getElementById('number-input').value;

    // Generate a random number between 1 and 10, but different from the user's number
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } while (randomNumber == userNumber);

    document.getElementById('number-result').textContent = `You guessed ${userNumber}, but the result is ${randomNumber}. Try again!`;
}
