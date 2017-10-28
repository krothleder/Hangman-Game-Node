//This JS picks a word and exports the word's letters to word.js and letter.js
var letter = require("./letter.js");


var wordStuff = {
	words: ["QUEEN", "METALLICA", "ACDC", "JOURNEY", "REM", "POISON", "BLONDIE", "GENESIS", "DEVO"],
	randNum: 0,
	chosenWord: "",
	wordLetters:[],

	pickWord: function(){
		this.randNum = Math.floor(Math.random()*this.words.length);
		this.chosenWord = this.words[this.randNum];
		this.wordLetters = this.chosenWord.split("");
	}

};


exports.toWordJS = wordStuff;
exports.toLetterJS = wordStuff;
exports.toMainJS = wordStuff;
