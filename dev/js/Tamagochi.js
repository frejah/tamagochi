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
		this.setHungerLevel(this.hungerLevel -1);
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

		this.setEnergyLevel(this.energyLevel + 2);
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

// Control Flow

let needsCoffee = true;
if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

let isGoat = true;
if (isGoat === true) {
	console.log('Bääää!');
	} else {
		console.log('Im not goat!');
	}

let isGoldenRetriver = true;
if (isGoldenRetriver === true) {
	console.log('Is golden!');
	} else {
	console.log('Is Dalmatian!');
}

let likeLilys = true;
if (likeLilys === true) {
	console.log('Like lilys!');
	} else {
		console.log('Dont like lilys');
}

let isTugBoat = true;
if (isTugBoat === true) {
	} else {
		console.log('Is not Leif');
}
