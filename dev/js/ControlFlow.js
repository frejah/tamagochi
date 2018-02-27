function areNamesEqual(nameA, nameB) {
	return true;
}

// function largestShirt(shirtA, shirtB) {
// 	if (shirtA > shirtB) {
// 		console.log(shirtA);
// 	} else {
// 		console.log(shirtB);
// 	}
// }

// largestShirt(38, 40);
// largestShirt(34, 36);

function horseBreed(horse) {
	console.log(horse);

if (horse === "Shire") {
	console.log("Shire is the biggest breed");
} else if (horse === "ShetlandsPony") {
	console.log("Shetlands pony is the smallest breed")
} else if (horse === "FrieserHorse") {
	console.log("Frieser horse is a black beauty");
} else {
	console.log("Could not find any breed for " + horse);
	}
}

let oneHorseBreed = "Icelandic Horse";

horseBreed("Shire");
horseBreed("ShetlandsPony");
horseBreed("FrieserHorse");
horseBreed(oneHorseBreed);