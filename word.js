//This JS takes in the word's letters from game.js and the user input from main.js to determine
//if any repeats or previous matches exist. Then it exports the the array of correct guesses to letter.js

var game = require("./game.js");				//The randomly chosen word comes from game.js
var main = require("./main.js");				//The user input comes from main.js



var wordObject = {
	allGuesses:[],
	incorrectGuesses:[],
	correctGuesses:[],
	isMatch:null,
	isRepeat:null,
	guessesRemaining: 15,
	loseCount: 0,
	winCount: 0,

	checkRepeat: function(){
		var repeatCounter = -1;

		//Loop for the number of guesses previously made amount of times.
		//If the current letter equals one from the array of allGuesses, the counter variable counts up one.
		for (var i=0; i < this.allGuesses.length; i++){
			if (main.toWordJS.userLetter == this.allGuesses[i]){
				repeatCounter++;
			}
		}
		//If counter is zero, the global isRepeat variable becomes false (signifying no matches found)
		//Otherwise a match was found and isRepeat becomes true.
		if (repeatCounter == 0){
			this.isRepeat = false;
			this.checkMatch();
		}
		else{
			this.isRepeat = true;
			this.checkMatch();
		}

	},

	checkMatch: function (){
		var matchCounter = 0;

		//Loop for the band names length amount of times.
		//If the guessed letter is equal to the the bands letter at a given index, the counter variable counts up one.
		for (var i=0; i < game.toWordJS.wordLetters.length; i++){
			if (main.toWordJS.userLetter == game.toWordJS.wordLetters[i]){
				matchCounter++;
			}
		}
		//If counter is zero, the global isMatch variable becomes false (signifying no matches found)
		//Otherwise a match was found and isMatch becomes true.
		if (matchCounter == 0){
			this.isMatch = false;
			this.checkMatchRepeat();
		}
		else{
			this.isMatch = true;
			this.checkMatchRepeat();
		}
	},
	
	checkMatchRepeat: function(){
		//If the same key is pressed twice, it is removed from allGuesses.
		if (this.isRepeat == true){
			this.allGuesses.pop(main.toWordJS.userLetter);

			return true;
		}
		//Letter has not been guessed and was a wrong guess, put the this.userLetter in incorrectGuesses.
		if (this.isRepeat == false && this.isMatch == false){
			this.incorrectGuesses.push(main.toWordJS.userLetter);
			this.guessesRemaining--;

			return true;
		}
		//Letter has not been guessed and was a correct guess, put the this.userLetter in correctGuesses.
		if (this.isRepeat == false && this.isMatch == true){
			this.correctGuesses.push(main.toWordJS.userLetter);
			this.guessesRemaining--;

			return true;
		}
	},	
}



exports.toLetterJS = wordObject;
exports.toMainJS = wordObject;
