describe("BananaSplit", function() {

	var bananaSplit;

	beforeEach(function() {
		bananaSplit = new BananaSplit();
	});

	it("can create a BananaSplit", function() {
		expect(bananaSplit).not.toBe(null);
	});

	it("is not done when newly created", function() {
		var isBananaSplitDone = bananaSplit.isDone();

		expect(isBananaSplitDone).toBe(false);
	});

	it("can add bananas", function() {		
		bananaSplit.addBananas();

		var isBananaSplitDone = bananaSplit.isDone();

		expect(isBananaSplitDone).toBe(false);
	});

	it("has not added bananas when newly created", function() {
		var hasBananas = bananaSplit.hasAddedBananas();

		expect(hasBananas).toBe(false);
	});

	it("contains bananas after adding bananas", function() {
		bananaSplit.addBananas();

		var hasBananas = bananaSplit.hasAddedBananas();

		expect(hasBananas).toBe(true);
	});

	it("contains ice cream after adding ice cream", function() {
		bananaSplit.addIceCream();

		var hasIceCream = bananaSplit.hasAddedIceCream();

		expect(hasIceCream).toBe(true);
	});

	it("has not added ice cream when newly created", function() {
		var hasIceCream = bananaSplit.hasAddedIceCream();

		expect(hasIceCream).toBe(false);
	});

	it("has not added caramel sauce when newly created", function() {
		var hasCaramelSauce = bananaSplit.hasAddedCaramelSauce();

		expect(hasCaramelSauce).toBe(false);
	});

	it("contains caramel sauce after adding caramel sauce", function() {
		bananaSplit.addCaramelSauce();

		var hasCaramelSauce = bananaSplit.hasAddedCaramelSauce();

		expect(hasCaramelSauce).toBe(true);
	});

	it("has not added meringues when newly created", function() {
		var hasMeringues = bananaSplit.hasAddedMeringues();

		expect(hasMeringues).toBe(false);
	});

	it("contains maringues after adding maringues", function() {
		bananaSplit.addMeringues();

		var hasMeringues = bananaSplit.hasAddedMeringues();

		expect(hasMeringues).toBe(true);
	});

	it("contains every ingredient", function() {
		// Requirements for test
		bananaSplit.addBananas();
		bananaSplit.addIceCream();
		bananaSplit.addCaramelSauce();
		bananaSplit.addMeringues();

		// Test
		var isDone = bananaSplit.isDone();

		// Verification
		expect(isDone).toBe(true);
	});

	it("Banana split gets eaten", function() {
		bananaSplit.addBananas();
		bananaSplit.addIceCream();
		bananaSplit.addCaramelSauce();
		bananaSplit.addMeringues();
		
		var isEaten = bananaSplit.isEaten();

		expect(isEaten).toBe(false);

	})
});