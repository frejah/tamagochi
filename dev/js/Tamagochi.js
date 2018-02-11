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
		this.hungerLevel = 5;
	}

	getHungerLevel() {
		return this.hungerLevel;
	}	

	/************************************************
	 *  ENERGY LEVEL
	 ************************************************/
	goToSleep() {
		this.setEnergyLevel(5);

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
	
	/************************************************
	 *  ACTIVITY LEVEL
	 ************************************************/
	goAndPlay() {
		this.activityLevel = 5;
		
		this.setEnergyLevel(this.energyLevel - 1);
	}

	getActivityLevel() {
		return this.activityLevel;
	}

	/************************************************
	 *  REDBULL LEVEL
	 ************************************************/
	drinkRedBull() {
		this.hungerLevel--;
		this.setEnergyLevel(this.energyLevel +3);
		this.activityLevel+=3;
	}
}