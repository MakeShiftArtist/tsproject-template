import add from "../src/add";

describe("add function", () => {
	it("Adds 2 numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
	it("Adds 2 strings", () => {
		expect(add("foo", "bar")).toBe("foobar");
	});
});
