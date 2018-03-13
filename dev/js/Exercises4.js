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
	console.log(split);
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