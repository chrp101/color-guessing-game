const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];

    console.log("Target color for testing: ", target);

    let guess = '';
    let correct = false;
    let numTries = 0;

    do {
        guess = prompt(
            'I am thinking of one of these colors:\n\n' +
            COLORS_ARRAY.join(', ') +
            '\n\nWhat color am I thinking of?\n'
        );

        if (guess === null) {
            alert("Game cancelled. Goodbye!");
            return;
        }

        guess = guess.toLowerCase();
        numTries++;

        correct = checkGuess(guess, target);

    } while (!correct);

    alert(`Congratulations! You have guessed the color!\n\nIt took you ${numTries} ${numTries === 1 ? 'guess' : 'guesses'} to finish the game!\n\nHit OK to see the color in the background.`);
    document.body.style.background = guess;
}

function checkGuess(guess, target) {
    let correct = false;

    if (!COLORS_ARRAY.includes(guess)) {
        alert("Sorry, I don't recognize your color.\n\nPlease try again.");
    } else if (guess > target) {
        alert("Sorry, your guess is incorrect.\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.");
    } else if (guess < target) {
        alert("Sorry, your guess is incorrect.\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.");
    } else {
        correct = true;
    }

    return correct;
}
