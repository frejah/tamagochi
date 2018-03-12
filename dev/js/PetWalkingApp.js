var dogBreeds = ["German Shepherd", "Dachshund", "Icelandic Sheepdog", "Beagle", "Scottish Terrier", "French Bulldog", "Dobermann", "Collie", "Dalmatiner", "Pointer", "Welsh springer spaniel", "Griffon Bruxellois", "Pug", "Whippet"];
var printOutDogBreed = document.getElementsByTagName("h1");

var dogIndex = getRandomDog();
var selectedDog = dogBreeds[dogIndex];
var numDogs = dogBreeds.length;

console.log("Selected dog: " + selectedDog);
console.log("Num dogs: " + numDogs);

function getRandomDog() {
	return 7;
}


var generateRandomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];

	// * 10) + 1);
console.log(generateRandomDog);