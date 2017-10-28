//   * `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.

var q = require("q");							//NPM promise package

var game = require("./game.js");				//The randomly chosen word comes from game.js
var word = require("./word.js")	;				//After correct or not has been determined
var main = require("./main.js");

var displayObject = {
	correctGuessesInOrder: [],
	displayNewGuess: function(){
		//If there are no correctGuesses,
		//For the number of letters in the bands name, fill the displayed guesses with an underscore.
		if (word.toLetterJS.correctGuesses.length == 0 || word.toLetterJS.correctGuesses == null){
			for (var i =0; i<game.toLetterJS.wordLetters.length; i++){
				this.correctGuessesInOrder[i] = "_";
			}
		}
		else {
			//For the length of the bands name,
			for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
				//If the displayed guess is not the same as wordLetters at index i,
				if (this.correctGuessesInOrder[i] != game.toLetterJS.wordLetters[i]){
					//Loop for correctGuesses length number of times,
					for (var j=0; j<word.toLetterJS.correctGuesses.length; j++){
						//If the correctGuesses at j is equal to wordLetters at i, the displayedGuess becomes the bandletter at index i
						if (word.toLetterJS.correctGuesses[j] == game.toLetterJS.wordLetters[i]){
							this.correctGuessesInOrder[i] = game.toLetterJS.wordLetters[i];
						}
						//Otherwise the displayedGuess at index i (corresponding to the band letter's indexes) becomes an underscore.
						else {
							this.correctGuessesInOrder[i] = "_";
						}
					}
				}
			}
		}

		console.log(this.correctGuessesInOrder.join(" ") + "\n");
	},

	checkProgress: function(){
		var counter = 0;

		//Loop a number of times equal to the length of the band name. 
		//If a guess is equal to the the band letter at the same index, add 1 to the counter.
		for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
			if (this.correctGuessesInOrder[i] == game.toLetterJS.wordLetters[i]){
				counter++;
			}
		}

		//If the counter is the length of the band name, the user has won.
		if (counter == game.toLetterJS.wordLetters.length){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.winCount++;

			console.log("\nYou win!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);
			console.log("-------------------------------------");

			main.toLetterJS.resetVariables();
		}
		//If the number of guesses remaining is zero, the user has lost.
		if (word.toLetterJS.guessesRemaining == 0){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.loseCount++;

			console.log("\NYou lose!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);
			console.log("-------------------------------------");

			main.toLetterJS.resetVariables();

		}
	}
}



exports.toMainJS = displayObject;
exports.toGameJS = displayObject;
