function guessingGame() {
    const randomNumber = Math.ceil(Math.random() * 100);
    let won = false;
    let guessCount = 0;
    return function game(guess) {
        if (won) return "The game is over, you already won!";
        guessCount++;
        if (guess !== randomNumber) {
            return guess > randomNumber ? `${guess} is too high!` : `${guess} is too low!`;
        } else {
            won = true;
            return `You win! You found ${randomNumber} in ${guessCount} guesses.`;
        }
    }
}

module.exports = { guessingGame };
