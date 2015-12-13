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
});
