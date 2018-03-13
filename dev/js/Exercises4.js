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

