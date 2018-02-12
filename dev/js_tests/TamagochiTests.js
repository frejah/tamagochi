describe("Tamagochi", function() {

	it("can create a Tamagochi", function() {
		var tamagochi = new Tamagochi();
		expect(tamagochi).not.toBe(null);
	});

	it("is hungry when newborn", function() {
		var tamagochi = new Tamagochi();
		
		var currentHungerLevel = tamagochi.getHungerLevel();

		expect(currentHungerLevel).toBe(2);
	});

	it("can be given food", function() {
		var tamagochi = new Tamagochi();

		tamagochi.giveFood();
		
		var currentHungerLevel = tamagochi.getHungerLevel();

		expect(currentHungerLevel).toBe(5);
	});

	it("is sleepy when newborn", function() {
		var tamagochi = new Tamagochi();
		
		var currentTiredness = tamagochi.getEnergyLevel();

		expect(currentTiredness).toBe(2);
	});

	it("can go to sleep", function() {
		var tamagochi = new Tamagochi();

		tamagochi.goToSleep();
		
		var currentTiredness = tamagochi.getEnergyLevel();

		expect(currentTiredness).toBe(5);
	});

	it("is not playful when newborn", function() {
		var tamagochi = new Tamagochi();

		var currentPlayStatus = tamagochi.getActivityLevel();

		expect(currentPlayStatus).toBe(2);
	});

	it("wants to play", function() {
		var tamagochi = new Tamagochi();

		tamagochi.goAndPlay();
		
		var currentPlayStatus = tamagochi.getActivityLevel();
		expect(currentPlayStatus).toBe(5);
	});

	it("energy level after playing", function() {
		var tamagochi = new Tamagochi();

		var energyBeforePlay = tamagochi.getEnergyLevel();

		tamagochi.goAndPlay();
		
		var energyAfterPlay = tamagochi.getEnergyLevel();

		expect(energyAfterPlay).toBe(energyBeforePlay - 1);
	});

	it("hunger level after sleeping", function() {
		var tamagochi = new Tamagochi();

		var hungerBeforeSleep = tamagochi.getHungerLevel();

		tamagochi.goToSleep();
		
		var hungerAfterSleep = tamagochi.getHungerLevel();

		expect(hungerAfterSleep).toBe(hungerBeforeSleep - 1);
	});

	it("can drink Red Bull", function() {
		var tamagochi = new Tamagochi();

		tamagochi.drinkRedBull();
		
		var currentHunger = tamagochi.getHungerLevel();
		var currentEnergyLevel = tamagochi.getEnergyLevel();
		var currentActivityLevel = tamagochi.getActivityLevel();

		expect(currentHunger).toBe(1);
		expect(currentEnergyLevel).toBe(5);
		expect(currentActivityLevel).toBe(5);
	});

	it("can never have energy level above 5", function() {
		var tamagochi = new Tamagochi();

		tamagochi.drinkRedBull();
		tamagochi.drinkRedBull();

		expect(tamagochi.getEnergyLevel()).toBe(5);
	});

	it("can eat a healty and balanced meal", function() {
		var tamagochi = new Tamagochi();

		tamagochi.eatHealthyMeal();

		expect(tamagochi.getEnergyLevel()).toBe(4);
	});
});