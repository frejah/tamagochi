describe("ControlFlowTests", function() {

	it("can compare names that are not equal", function() {
		var returnValue = areNamesEqual("Leif", "Berit");

		expect(returnValue).toBe(false);
	});

	// it("can compare names that are equal", function() {
	// 	var returnValue = areNamesEqual("Leif", "Leif");

	// 	expect(returnValue).toBe(true);
	// });
});