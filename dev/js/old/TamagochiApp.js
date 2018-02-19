var bestTamagochi = new Tamagochi();
var worstTamagochi = new Tamagochi();

worstTamagochi.giveFood();

function hungerLevelToString(tamagochi) {
	if(tamagochi.getHungerLevel() > 3) {
		return "Pleased";
	}
	
	return "Hungry";
}

var bestHunger = hungerLevelToString(bestTamagochi);
var worstHunger = hungerLevelToString(worstTamagochi);

console.log("Best Hunger Level: " + bestHunger);
console.log("Worst Hunger Level: " + worstHunger);