class BananaSplit {

	constructor() {
		this.ingredientBananas = false;
		this.ingredientIceCream = false;
		this.ingredientCaramelSauce = false;
		this.ingredientMeringue = false;
	}

	isDone () {
		if (this.ingredientBananas &&
			this.ingredientIceCream &&
			this.ingredientCaramelSauce &&
			this.ingredientMeringue) {
			return true;
		}

		return false;
	}

	addBananas () {
		this.ingredientBananas = true;
	}

	hasAddedBananas() {
		return this.ingredientBananas;
	}

	hasAddedIceCream() {
		return this.ingredientIceCream;
	}

	addIceCream() { 
		this.ingredientIceCream = true;
	}

	hasAddedCaramelSauce() {
		return this.ingredientCaramelSauce;
	}

	addCaramelSauce() {
		this.ingredientCaramelSauce = true;
	}

	hasAddedMeringues() {
		return this.ingredientMeringue;
	}

	addMeringues() {
		this.ingredientMeringue = true;
	}

	isEaten() {
		if (this.ingredientBananas &&
			this.ingredientIceCream &&
			this.ingredientCaramelSauce &&
			this.ingredientMeringue) {
			return false;
		}

		return true;
	}
}
