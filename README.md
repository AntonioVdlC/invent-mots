# invent-mots

[![version](https://img.shields.io/npm/v/invent-mots.svg)](http://npm.im/invent-mots)
[![Travis](https://img.shields.io/travis/AntonioVdlC/invent-mots.svg?branch=master)](https://travis-ci.org/AntonioVdlC/invent-mots)
[![Codecov](https://img.shields.io/codecov/c/github/AntonioVdlC/invent-mots.svg)](https://codecov.io/github/AntonioVdlC/invent-mots)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/invent-mots.svg)](https://github.com/AntonioVdlC/invent-mots/issues)
[![downloads](https://img.shields.io/npm/dt/invent-mots.svg)](http://npm.im/invent-mots)
[![license](https://img.shields.io/npm/l/invent-mots.svg)](http://opensource.org/licenses/MIT)

Generates random words from a given language.

## Installation

This package is distributed via npm:

```
npm install invent-mots
```

*- or -*

Download the file `src/index.js` and add it to your ES6 project.

## Usage

### Setting up a language

Before generating any word, you need to set a language.

You can pass it an Array or Set of strings defining the language ...

```javascript
var invent = require("invent-mots");
// - or - import invent from "invent-mots";

var language = ["hello", "world"];

invent.set(language);
```

... or directly an Array of strings defining the alphabet and a 2D Array defining the probabilites of each letter being followed by another.

```javascript
var invent = require("invent-mots");
// - or - import invent from "invent-mots";

var language = {
	alphabet: ["d", "e", "h", "l", "o", "r", "w"],
	matrix: [
				[0, 0.5, 0, 0 , 0.5, 0, 0],
				[0, 0, 0, 1 , 0, 0, 0],
				[0, 1, 0, 0 , 0, 0, 0],
				[0.33333, 0, 0, 0.33333, 0.33333, 0, 0],
				[0, 0, 0, 0 , 0, 1, 0],
				[0, 0, 0, 1 , 0, 0, 0],
				[0, 0, 0, 0 , 1, 0, 0]
			]
};

invent.set(language);
```

### Generating words

Once a language is set, you have different options to generate words.

```javascript
var options = {
	size: <int>, // Length of the words to be generated
	number: <int>, // Number of words to generate
	start: <string>, // String that will start every word
	end: <string> // String that will end every word
};
```

None of those options are mandatory, so you can generate different sets of words, or just let it be plain random by not giving any options.

To generate a set of words, simply call:

```javascript
invent.mots({
	size: 3,
	number: 1
});
// ["lor"]
```
> Yay! I have created a piece of code that speaks [Singlish](https://en.wikipedia.org/wiki/Singlish) lor! :smile:

## License
MIT

## Thanks
The idea for this module came from [David Louapre](https://twitter.com/dlouapre)'s video and blog post on [inventing new words](https://sciencetonnante.wordpress.com/2015/10/16/la-machine-a-inventer-des-mots-video/).
