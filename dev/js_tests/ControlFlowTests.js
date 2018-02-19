describe("ControlFlowTests", function() {

	it("can compare names", function() {
		var returnValue = areNamesEqual("Leif", "Berit");

		expect(returnValue).toBe(false);
	});
});