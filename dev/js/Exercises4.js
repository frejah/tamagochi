/*********************************************************************************************
* Write a function that accepts a string as parameter and returns an array
* Hint: str.split(" ")
**********************************************************************************************
* Output:
* ["Leif", "is", "very", "angry", "today"]
**********************************************************************************************/

var output = stringToArray("Leif is very angry today");
console.log(output);

function stringToArray(output) {
	var split = output.split(" ");
	return split;
}

/*********************************************************************************************
* Write a function that prints every word individually.
* You must use the stringToArray function that you created earlier.
* Hint: for-loop, console.log, arr.length
**********************************************************************************************
* Output:
* Envik
* is
* a
* lovely
* ship
**********************************************************************************************/

printWordsFromArray("Envik is a lovely ship");

function printWordsFromArray(strSentence) {
	var sentenceToArray = stringToArray(strSentence);

	for (var i = 0; i < sentenceToArray.length; i++) { 
		console.log(sentenceToArray[i]);
	}

}


/*********************************************************************************************
* Write a function that finds out if a word exists in a sentence.
* You must use the stringToArray function that you created earlier.
* It should return true if the word exists, false otherwise
* Hint: for-loop, if-statement, console.log, arr.length
**********************************************************************************************
* Output:
* like exists: true
**********************************************************************************************/

var wordExists = findWordInSentence("Nordanvind is fast like the wind", "like");

function findWordInSentence(aSentence, aWord) {
	var makeArray = stringToArray(aSentence);

	for (var i = 0; i < makeArray.length; i++) { 
	
		if (makeArray[i] == aWord) {
			return true;

		 if else {
			return false;
			
		}
	}
}

console.log("like exists: " + wordExists);

// var makeArray = printWordsFromArray(wordExists);

// Kolla parametern (för tusende gången 😉 )
// Konvertera parametern till en array med hjälp av funktionen du skrev innan. 
// Loopa över den arrayen med en for loop
// Console Log i for loopen på varje element

// Å kolla alla variabler du skapar i funktionen

// for (var i = 0; i < 10; i++) {
	
// 	if wordExists = true;
// 	return


// }

