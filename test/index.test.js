import {expect} from "chai";
import invent from "../src/index.js";

describe("invent-mots", () => {
	it("should be an object", () => {
		expect(invent).to.be.an("object");
	});

	// -- invent.set -- \\
	it("should have a `set` method", () => {
		expect(invent.set).to.be.a("function");
	});

	describe("invent.set", () => {
		it("should throw an error if not passed a Set, Array or Matrix", () => {
			expect(invent.set.bind(invent, "Hello, world")).to.throw("You must pass a language set or array or an alphabet and a matrix.");
		});

		it("should initialise correctly if passed an array or a set", () => {
			expect(invent.set.bind(invent, ["hello", "world"])).to.not.throw(Error);
			expect(invent.set.bind(invent, new Set(["hello", "world"]))).to.not.throw(Error);
		});

		it("should initialise correctly if passed an obejct with an alphabet and a matrix", () => {
			let language = {
				alphabet: ["d", "e", "h", "l", "o", "r", "w"],
				matrix: [
							[0, 0, 0, 0 ,0, 0, 0],
							[0, 0, 0, 1 ,0, 0, 0],
							[0, 1, 0, 0 ,0, 0, 0],
							[0.33333, 0, 0, 0.33333, 0.33333, 0, 0],
							[0, 0, 0, 0 ,0, 1, 0],
							[0, 0, 0, 1 ,0, 0, 0],
							[0, 0, 0, 0 ,1, 0, 0]
						]
			};

			expect(invent.set.bind(invent, language)).to.not.throw(Error);
		});
	});

	// -- invent.word -- \\
	it("should have a `word` method", () => {
		expect(invent.word).to.be.a("function");
	});

	describe("invent.word", () => {
		let language = {
			alphabet: ["d", "e", "h", "l", "o", "r", "w"],
			matrix: [
						[0, 0, 0, 0 ,0, 0, 0],
						[0, 0, 0, 1 ,0, 0, 0],
						[0, 1, 0, 0 ,0, 0, 0],
						[0.33333, 0, 0, 0.33333, 0.33333, 0, 0],
						[0, 0, 0, 0 ,0, 1, 0],
						[0, 0, 0, 1 ,0, 0, 0],
						[0, 0, 0, 0 ,1, 0, 0]
					]
		};
		invent.set(language);

		it("should return an array of one word of random size when passed no parameters", () => {
			let word = invent.word();

			expect(word).to.be.instanceof(Array);
			expect(word).to.have.length(1);

			word.forEach((word) => {
				expect(word).to.be.a("string");
				expect(language.alphabet).to.have.members(word.split(""));
			});
		});

		it("should return an array of one word of size 3 when passed an options object with those parameters", () => {
			let options = {
				size: 3
			};
			let word = invent.word(options);

			expect(word).to.be.instanceof(Array);
			expect(word).to.have.length(options.number);

			word.forEach((word) => {
				expect(word).to.be.a("string");
				expect(language.alphabet).to.have.members(word.split(""));
			});
		});

		it("should return an array of 2 words of size 3 when passed an options object with those parameters", () => {
			let options = {
				size: 3,
				number: 2
			};
			let word = invent.word(options);

			expect(word).to.be.instanceof(Array);
			expect(word).to.have.length(options.number);

			word.forEach((word) => {
				expect(word).to.be.a("string");
				expect(language.alphabet).to.have.members(word.split(""));
			});
		});

		it("should return an array of 2 words of size 5 starting with 'h' and ending with 'd' when passed an options object with those parameters", () => {
			let options = {
				size: 5,
				number: 2,
				start: "h",
				end: "d"
			};
			let word = invent.word(options);

			expect(word).to.be.instanceof(Array);
			expect(word).to.have.length(options.number);

			word.forEach((word) => {
				expect(word).to.be.a("string");
				expect(language.alphabet).to.have.members(word.split(""));
				expect(word.charAt(0)).to.equal(options.start);
				expect(word.charAt(word.length - 1)).to.equal(options.end);
			});
		});
	});
});
