import lang from "lang-alpha-prob";

// Export the `invent` object
export default {
	set: set
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
	else if (Array.isArray(language.alphabet) && 
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
