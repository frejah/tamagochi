function isAnimal() {
	return true;
}

function isNotAnimal() {
	return false;
}

function hasFourLegs() {
	return true;
}

function hasTwoLegs() {
	return false;
}

function getAnimalName(animalName) {
	return animalName;
}

function isPlastgubbeLookingGood() {
	return true;
}

function defineNumberOfLegs(numLegs) {
	return numLegs;
}

function addNumbers(numberOne, numberTwo) {
	return numberOne + numberTwo;
}

function subtracktNumbers(numberOne, numberTwo) {
	return numberOne - numberTwo;
}

function divideNumbers(numberOne, numberTwo) {
	if (numberTwo === 0) {
		return NaN;
	}

	return numberOne/numberTwo;
}

function multiplyNumbers(numberOne, numberTwo) {
	return numberOne * numberTwo;
}

function findOperator(operator) {
	if (operator === "+") {
		return "Plus";

	} else if (operator === "-") {
		return "Minus";

	} else if (operator === "/") {
		return "Divide";
	
	} else if (operator === "*") {
		return "Multiply";
	}

	return "Unknown Operator";
}

function getStageInLifeByAge(age) {
	if (age > 18) {
		return "Adult";
	
	} else if (age > 13) {
		return "Teenager";

	} else if (age > 3) {
		return "Child";

	} else if (age > 1) {
		return "Toddler";

	}

	return "Infant";
}

function addFood(food) {
	if (food === "Rice") {
		return false;

	} else if (food === "Bananbitar") {
		return true;
	}

	return false;
}

function addIngredient (ingredientOne) {
	if (ingredientOne === "banana") {
		return true;
	}
}