class Tamagochi {
	constructor() {
		this.hungerLevel = 2;
		this.energyLevel = 2;
		this.activityLevel = 2;
	}

	/************************************************
	 *  HUNGER LEVEL
	 ************************************************/
	giveFood() {
		this.setHungerLevel(5);
	}

	getHungerLevel() {
		return this.hungerLevel;
	}	

	setHungerLevel(level) {
		this.hungerLevel = level;
	}

	/************************************************
	 *  ENERGY LEVEL
	 ************************************************/
	goToSleep() {
		this.setEnergyLevel(5);

		// Uppdatera denna så att den anropar setHungerLevel istället.
		// Vad ska du skicka för parameter till den?
		// Kolla runt i denna fil för förslag på hur du kan göra.
		this.hungerLevel--;
	}

	getEnergyLevel() {
		return this.energyLevel;
	}

	setEnergyLevel(level) {
		if (level > 5) {
			level = 5;		
		}
	
		this.energyLevel = level;
	}

	eatHealthyMeal() {
		// Anropa setEnergyLevel
		// Öka nuvarande energy level med 2
		// Kolla runt i denna fil för förslag på hur du kan göra.
	}
	
	/************************************************
	 *  ACTIVITY LEVEL
	 ************************************************/
	goAndPlay() {
		this.setActivityLevel(5);
		
		this.setEnergyLevel(this.energyLevel - 1);
	}

	getActivityLevel() {
		return this.activityLevel;
	}

	setActivityLevel(level) {
		this.activityLevel = level;
	}

	/************************************************
	 *  REDBULL LEVEL
	 ************************************************/
	drinkRedBull() {
		this.setHungerLevel(this.hungerLevel - 1);
		this.setEnergyLevel(this.energyLevel + 3);
		this.setActivityLevel(this.activityLevel + 3);
	}
}