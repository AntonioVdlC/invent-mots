import lang from "lang-alpha-prob";

// Export the `invent` object
export default {
	set: set,
	mots: mots
};

// Declare internal variables
let alphabet;
let matrix;

/**
 * Initialise internal variables
 * @param {Object||Array} language A list of words, or an object 
 * containing an alphabet and a matrix.
 */
function set (language) {
	// `language` is an array or a set
	if (Array.isArray(language) || language instanceof Set) {
		lang.set(language);

		alphabet = lang.alphabet();
		matrix = lang.matrix();
	}

	// `language` is an object containing an alphabet and a matrix
	else if (language &&
		Array.isArray(language.alphabet) && 
		Array.isArray(language.matrix) &&
		language.alphabet.length === language.matrix.length &&
		language.matrix.every((col, i, matrix) => col.length === matrix.length)) {

		alphabet = language.alphabet;
		matrix = language.matrix;
	}

	// Error
	else {
		throw new TypeError("You must pass a language set or array or an alphabet and a matrix.");
	}
}

/**
 * Generate random words depending on the language set and 
 * the function parameters
 * @param  {Number} options.size   Length of the words to be generated
 * @param  {Number} options.number Numbe of words to generate
 * @param  {String} options.start  Start String for the words to be generated
 * @param  {String} options.end    End String for the words to be generated
 * @return {Array}                 Array containing all the generated words
 */
function mots ({size, number = 1, start = "", end = ""} = {number: 1}) {
	let words = [];

	size = size || Math.floor(Math.random() * (alphabet.length - 1)) + 1;

	for(let i = 0; i < number; i++) {
		let word = start || 
			alphabet[Math.floor(Math.random() * (alphabet.length - 1))];

		for(let j = word.length; j < (size - end.length); j++) {
			word += _nextChar(word);
		}

		word += end;

		words.push(word);
	}

	return words;
}

/**
 * Selects the next character
 * @param  {String} word The string we want to generate the next character
 * @return {String}      Next character generated
 */
function _nextChar (word) {
	// Select the last state of the chain
	let previousState = alphabet.indexOf(word[word.length - 1]);

	// Calculate the next state
	let weight = matrix[previousState];
	let sum = 0;
	let rand = Math.random();

	let nextState = weight.findIndex((prob) => {
		sum += prob;
		return rand <= sum; 
	});

	// Return the new character
	return alphabet[nextState];
}
