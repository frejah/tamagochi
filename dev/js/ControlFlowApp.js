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

function dogBreed(dog) {
	console.log(dog);

	if (dog === "Dachshund") {
		console.log("Long dog with short legs");
	} else if (dog === "GermanShepherd") {
		console.log("Guardian dog from Germany");
	} else if (dog === "IcelandicSheepdog") {
		console.log("Tuff little fluff");
	} else {
		console.log("Could not find any breed for " + dog);
		}
	}
	
	let aDogBreed = "GoldenRetriver";

	dogBreed("Dachshund");
	dogBreed("GermanShepherd");
	dogBreed("IcelandicSheepdog");
	dogBreed(aDogBreed);




dogBreed();




// function largestPants(pantA, pantB) {
// 	if(pantA > pantB) {
// 		console.log(pantA);
// 	} else {
// 		console.log(pantB);
// 	}
// }

// largestPants(33, 30);
// // 10, 1, 2, 3
// // Output: 33

// largestPants(28, 30);
// // 13, 1, 2, 4, 5, 6, 7
// // Output: 30


// function dogInfo(dog) {
// 	// console.log(dog);
// 	if(dog === "Floki") {
// 		console.log("Floki is a tiny fluffeh chap!");
// 	} else if(dog === "Keyla") {
// 		console.log("Keyla is a fluffeh mamasita!");
// 	} else if(dog === "Bengt") {
// 		console.log("Bengt is a lamp");
// 	} else {
// 		console.log("Could not find dog info for " + dog);
// 	}
// }

// var myDogName = "LadyFlorence";

// dogInfo("Floki");
// dogInfo("Keyla");
// dogInfo("Frans");
// dogInfo(myDogName);
// dogInfo("Bengt");


// /* Skriv en funktion som tar emot två parametrar:
// numberA, numberB

// sedan skriver den ut det största numret

// 1) Funktionsdeklaration
// 2) Funktionsanrop
// 3) If/else i funktionen

// det räcker med console.log för att skriva ut det största numret

// du ska ha en funktionsdeklaration, men flera funktionsanrop (som testar funktionen med olika nummer)

// så om man anropar funktionen med 23 och 99... så ska den alltså skriva ut 99

// anropar man med 6 och 3 ska den skriva ut 6 */



// //CONTROL FLOW
// //Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. 

// //if/else Statements **************************

// let needsCoffee = true;
// 	if (needsCoffee === true) {
//     	console.log('Finding coffee');
// 	} else {
//    		console.log('Keep on keeping on!');
// }

// //Lines of code between curly braces are called blocks.
// //needsCoffee is the condition

// //True and False Values ************************

// let variableOne = 'I Exist!';
// if (variableOne) {
// // This code will run because variableOne contains a truthy value.
// } else {
// // This code will not run because the first block ran.
// }

// let isRaining = true;
// if (isRaining) {
//    console.log('Carry an umbrella!');
// } else {
//   console.log('Enjoy the sun!');
// }

// //JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!). We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true.

// let isPhoneCharged = true; 
// if (!isPhoneCharged) {
//   console.log('Plug in your phone!');
// } else {
//   console.log('No need to charge!');
// }

// //In the example above, the program checks if isPhoneCharged evaluates to false. Because isPhoneCharged is true, the second block of code will execute.

// //Comparison Operators **************************

// //* Less than: <
// //* Greater than: >
// //* Less than or equal to: <=
// //* Greater than or equal to: >=

// //* To check if two things equal each other, we write === (three = signs in a row).
// //* To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).

// //* Use a single = to assign a value to a variable. 
// //* Use ===to compare the values of two different variables.

// //else if Statements ****************************

// let stopLight = 'green';

// if (stopLight === 'red') {
//   console.log('Stop');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }

// let moonPhase = 'full';
// let isFoggyNight = false;

// if (moonPhase === 'full' && isFoggyNight === true) {
//   console.log('Howl!');

// } else if (moonPhase === 'mostly full') {
//   console.log('Arms and legs are getting hairier');

// } else if (moonPhase === 'mostly new') {
//   console.log('Back on two feet');

// } else {
//   console.log('Invalid moon phase');
// }

// //Logical Operators *********************************

// //* To say "both must be true," we use &&.
// //* To say "either can be true," we use ||.

// if (stopLight === 'green' && pedestrians === false) {
// 	console.log('Go!');
//   } else {
// 	console.log('Stop');
// }

// //Switch Statements *********************************

// switch (groceryItem) {
// 	case 'tomato':
// 	  console.log('Tomatoes are $0.49');
// 	  break;
// 	case 'lime':
// 	  console.log('Limes are $1.49');
// 	  break;
// 	case 'papaya':
// 	  console.log('Papayas are $1.29');
// 	  break;
// 	default:
// 	  console.log('Invalid item');
// 	  break;
//   }

//   //Ternary Operator **********************************
//   let isNightTime = true;

// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }