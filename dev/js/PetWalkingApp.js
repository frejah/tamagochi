var dogBreeds = ["German Shepherd", "Dachshund", "Icelandic Sheepdog", "Beagle", "Scottish Terrier", "French Bulldog", "Dobermann", "Collie", "Dalmatiner", "Pointer", "Welsh springer spaniel", "Griffon Bruxellois", "Pug", "Whippet"];
var catBreeds = ["Ragdoll", "Norsk Skogskatt","Bondkatt", "Siames"];
var birdBreeds = ["Kanariefågel", "Undulat", "Kakadua", "Ara", "Dront"]


function getRandomIndex(loadsOfStuff) {
	return Math.floor(Math.random() * loadsOfStuff.length);
}

function printOutArray(indexArray) {
	var randomBreedIndex = getRandomIndex(indexArray);
	return indexArray[randomBreedIndex];
}

// 16, 10, 11, 6, 7, 11, 12, 16
var randomBreed = printOutArray(catBreeds);

//Print out in HTML
var printOutArrayInHtml = document.getElementById("htmlContainer");
printOutArrayInHtml.innerHTML = randomBreed;