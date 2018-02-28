/****************************************************************************************
* 										Variables
****************************************************************************************/

// -------------------------------------------------------------------------------------
// Example #1: Printing a String or a Number
// -------------------------------------------------------------------------------------
// console.log("Hello, World!");
// console.log(29);
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Example #2: Printing a variable
// -------------------------------------------------------------------------------------
// var myVariable = 666;
// console.log(myVariable);

// var myStringVariable = "Leifz";
// console.log(myStringVariable);
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Example #3: Print a String and a variable
// -------------------------------------------------------------------------------------
// var beastType = "Daemon";
// var beastNumber = 666;

// console.log("The beast is a " + beastType);
// console.log("The number of the beast is " + beastNumber);
// -------------------------------------------------------------------------------------

// var myAge = 42;
// var myName = "Leif";
// var myShoeSize = 39.5;

// // Task #1: Print myAge
// 	console.log(myAge);
// // Task #2: Print myName
// 	console.log(myName);
// // Task #3: Print myShoeSize
// 	console.log(myShoeSize);
// // Task #4: Use the variables above. Print: Leif is my name
// 	console.log(myName + " is my name");
// // Task #5: Use the variables above. Print: I'm 42 years old
// 	console.log ("i'm " + myAge + " years old")
// // Task #6: Use the variables above. Print: My shoe size is 39.5
// 	console.log("My shoe size is " + myShoeSize);
// // Extra tasks: Create different types of variables and print them in different combinations.
// // Practise printing texts and variables like in 'Example #3' above. Can you print stuff in any order?
// var myDogBreed = "Icelandic sheepdog";
// var myDogsAge = 2;
// var myDogsColor = "White and brown";

// console.log("My dog is a " + myDogBreed + " he is " + myDogsAge + " years old and is colored in " + myDogsColor);



/****************************************************************************************
* 									Flow of Execution
****************************************************************************************/

// -------------------------------------------------------------------------------------
// Example #1: Calling a function
// What is the flow of execution (i.e which lines are executed and in what order)?
// 1.) daemonicRitual();
// 2.) function daemonicRitual() {}
// 3.) console.log("Performing daemonic ritual");
		//Result: "Performing daemonic ritual"
// -------------------------------------------------------------------------------------
// function daemonicRitual() {
// 	console.log("Performing daemonic ritual");
// }
// daemonicRitual();
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Example #2: Control flow
// Prints: Runs and buys candles
// Think about why. What to you need to change to print something else?
//Change the parameter to true instead of false
// What is the flow of execution?

// 1.) initiateDaemonicRitual(false);
// 2.) function initiateDaemonicRitual(hasCandles)
// 3.) 	if(hasCandles === true) {
		//console.log("Performing daeonic ritual");
// 4.) 	Since the statement is false not true this line will be executed instead.
		//} else {
		//console.log("Runs and buys candles")
		//Result: "Runs and buys candles"
// -------------------------------------------------------------------------------------
// function initiateDaemonicRitual(hasCandles) {
// 	if(hasCandles === true) {
// 		console.log("Performing daeonic ritual");
// 	} else {
// 		console.log("Runs and buys candles")
// 	}
// }
// initiateDaemonicRitual(false);
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Example #3: Control flow
// Prints: Summons a massive daemon from the warp! Kill! Maim! Burn!
// What other outputs can the function produce?
// "You get turned into a Chaos Spawn" and "Your head melts"
// Which parameters do you need to pass into the function to write the other two?
// Numbers higher or lower than the exact number 666
// How does the program execute this function? What decides how it executes the function?

// 1.) masterSatanicRitual(666);
// 2.) function masterSatanicRitual(numberOfCandles)
// 3.) if(numberOfCandles === 666) {
		// console.log("Summons a massive daemon from the warp! Kill! Maim! Burn!");
	//Only this row will execute since the number is exactly 666 as it needed to be to be the same.
	//Result it will print: "Summons a massive daemon from the warp! Kill! Maim! Burn!" to the console.

// -------------------------------------------------------------------------------------
// function masterSatanicRitual(numberOfCandles) {
// 	if(numberOfCandles === 666) {
// 		console.log("Summons a massive daemon from the warp! Kill! Maim! Burn!");

// 	} else if(numberOfCandles < 666) {
// 		console.log("You get turned into a Chaos Spawn");

// 	} else if(numberOfCandles > 666) {
// 		console.log("Your head melts");
// 	}
// }
// masterSatanicRitual(666);
// -------------------------------------------------------------------------------------

// function summonDaemon(daemonType) {
// 	console.log("You summon a great daemon of " + daemonType);
// }

// function castWarpBolt(psychicLevel) {
// 	if(psychicLevel > 1) {
// 		console.log("You successfully casts a Warp Bolt. Well done");
// 	} else {
// 		console.log("Your mind gets consumed by the warp. Your body spasms and falls to the floor.");
// 	}
// }

// function summonDaemonOfType(sacredNumber) {
// 	if(sacredNumber === 6) {
// 		summonDaemon("Slaanesh")

// 	} else if(sacredNumber === 7) {
// 		summonDaemon("Nurgle");

// 	} else if(sacredNumber === 8) {
// 		summonDaemon("Khorne");

// 	} else if(sacredNumber === 9) {
// 		summonDaemon("Tzeentch");

// 	} else {
// 		console.log("You fail to summon a daemon and gets turned into a Chaos Spawn.");
// 	}
// }

// Task #1: Call the function summonDaemon with the parameter 1
// What do you expect it to print?
// summonDaemon(1);
// "You summon a great daemon of 1";

// Task #2: Call the function summonDaemonOfType with the parameter 1
// What do you expect it to print?
// summonDaemonOfType(1);
// "You fail to summon a daemon and gets turned into a Chaos Spawn."

// Task #3: Summon a daemon of Slaanesh
// Call the function summonDaemonOfType with the correct parameter
// summonDaemonOfType(6);

// Task #4: Summon a daemon of Nurgle
// Call the function summonDaemonOfType with the correct parameter
// summonDaemonOfType(7);

// Task #5: Summon a daemon of Khorne
// Call the function summonDaemonOfType with the correct parameter
// summonDaemonOfType(8);

// Task #6: Summon a daemon of Tzeentch.
// Call the function summonDaemonOfType with the correct parameter.
// summonDaemonOfType(9);

// Task #7: Call the function castWarpBolt with parameter 0
// What do you expect it to print?
// castWarpBolt(0);
// "Your mind gets consumed by the warp. Your body spasms and falls to the floor.")

// // Task #8: Call castWarpBolt with a more appropriate paramter
// // Smite down your foes!
// castWarpBolt(2);