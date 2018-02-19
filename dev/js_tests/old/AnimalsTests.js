describe("TestFunctions", function() {

	it("isAnimal should be true", function() {
		var animalShouldBeTrue = isAnimal();

		expect(animalShouldBeTrue).toBe(true);
	});

	it("isNotAnimal should be false", function() {
		var animalShouldBeFalse = isNotAnimal();

		expect(animalShouldBeFalse).toBe(false);
	});

	it("hasFourLegs should be true", function() {
		var animalHasFourLegs = hasFourLegs();

		expect(animalHasFourLegs).toBe(true);
	});

	it("hasTwoLegs should be false", function() {
		var animalHasTwoLegs = hasTwoLegs();

		expect(animalHasTwoLegs).toBe(false);
	});

	it("is called Frans", function() {
		var animalName = getAnimalName("Frans");

		expect(animalName).toBe("Frans");
	});

	it("is called Benjamin", function() {
		var animalName = getAnimalName("Benjamin");

		expect(animalName).toBe("Benjamin");
	});

	it("is plastgubbe lookin good", function() {
		var plastgubbeLook = isPlastgubbeLookingGood();

		expect(plastgubbeLook).toBe(true);
	});
	
	it("has four legs", function() {
		var numLegs = defineNumberOfLegs(4);

		expect(numLegs).toBe(4);
	});

	it("has two legs", function() {
		var numLegs = defineNumberOfLegs(2);

		expect(numLegs).toBe(2);
	});

	it("has six legs", function() {
		var numLegs = defineNumberOfLegs(6);

		expect(numLegs).toBe(6);
	});

	it("can add 3 and 4", function() {
		var result = addNumbers(3, 4);

		expect(result).toBe(7);
	});

	it("can add 5 and 9", function() {
		var result = addNumbers(5, 9);

		expect(result).toBe(14);
	});

	it("can subtrackt 8 and 2", function() {
		var result = subtracktNumbers(8, 2);

		expect(result).toBe(6);
	});

	it("can divide 9 and 3", function() {
		var result = divideNumbers(9, 3);

		expect(result).toBe(3);
	});

	it("can handle divide by 0", function() {
		var result = divideNumbers(9, 0);

		expect(result).toBeNaN();
	});

	it("can multiply 5 and 5", function() {
		var result = multiplyNumbers(5, 5);

		expect(result).toBe(25);
	});

	it("detects unknown operator", function() {
		var operator = findOperator("");

		expect(operator).toBe("Unknown Operator");
	});

	it("detects plus operator", function() {
		var operator = findOperator("+");

		expect(operator).toBe("Plus");
	});

	it("detects minus operator", function() {
		var operator = findOperator("-");

		expect(operator).toBe("Minus");
	});

	it("detects divide operator", function() {
		var operator = findOperator("/");

		expect(operator).toBe("Divide");
	});

	it("detects multiply operator", function() {
		var operator = findOperator("*");

		expect(operator).toBe("Multiply");
	});
	
	it("detects multiply operator", function() {
		var operator = findOperator("*");

		expect(operator).toBe("Multiply");
	});

	it("determines infant stage in life", function() {
		var stage = getStageInLifeByAge(1);

		expect(stage).toBe("Infant");
	});

	it("determines toddler stage in life", function() {
		var stage = getStageInLifeByAge(2);

		expect(stage).toBe("Toddler");
	});

	it("determines child stage in life", function() {
		var stage = getStageInLifeByAge(4);

		expect(stage).toBe("Child");
	});

	it("determines teenager stage in life", function() {
		var stage = getStageInLifeByAge(14);

		expect(stage).toBe("Teenager");
	});

	it("determines adult stage in life", function() {
		var stage = getStageInLifeByAge(27);

		expect(stage).toBe("Adult");
	});

	it("does not get full by adding rice", function() {
		var isFull = addFood("Rice");

		expect(isFull).toBe(false);
	});

	it("gets full by adding bananbitar", function() {
		var isFull = addFood("Bananbitar");

		expect(isFull).toBe(true);
	});

	it("does not get full by adding nothing", function() {
		var isFull = addFood("");

		expect(isFull).toBe(false);
	});

	it("ingredient for bananasplit", function() {
		var ingredient = addIngredient("banana");

		expect(ingredient).toBe(true);
	});
});

