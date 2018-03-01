/****************************************************************************************
* 									Control Flow
****************************************************************************************/

// -------------------------------------------------------------------------------------
// Example #1: Basic control flow
// Question #1: What do you expect it to output?
// 1.) "You spawn a small daemon"
// Question #2: What does it actually output?
// 2.) "You spawn a small daemon"
// Question #3: What else can it output?
// 3.) "You spawn a large daemon".
// Question #4: How do you make it output the other texts?
// If you change the paramter from false to true.
// -------------------------------------------------------------------------------------

// function spawnDaemon(isLarge) {
// 	if(isLarge === true) {
// 		console.log("You spawn a large daemon");
// 	} else {
// 		console.log("You spawn a small daemon");
// 	}
// }
// spawnDaemon(false);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #2: Basic control flow
// Question #1: What do you expect it to output?
// 1.) "You shoot lightning from your fingers"
// Question #2: What does it actually output?
// 2.) "You shoot lightning from your fingers"
// Question #3: What else can it output?
// 3.) "You cast a fireball" and "You stare at a tree like a goat")
// Question #4: How do you make it output the other texts?
// 4.) You change the parameter in castSpell to either "Fireball" or anything else to run the else.
// -------------------------------------------------------------------------------------

// function castSpell(spellType) {
// 	if(spellType === "Fireball") {
// 		console.log("You cast a fireball");

// 	} else if(spellType === "Lightning") {
// 		console.log("You shoot lightning from your fingers");

// 	} else {
// 		console.log("You stare at a tree like a goat");
// 	}
// }

// castSpell("Lightning");

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #3: Basic control flow
// Question #1: What do you expect it to output?
// 1.) "You cast a bucket of water at your foe".
// Question #2: What does it actually output?
// 2.) "You cast a bucket of water at your foe".
// Question #3: What else can it output?
// 3.) "You summon a blizzard of fungi on your foe", "You rain lava on your foe" or "You attempt to cast a powerful spell but can't decide which - your brain melts".
// Question #4: How do you make it output the other texts?
// 4.) Change the boolean parameter from true to false to make it run the else if.
// Question #5: When is the parameter 'spellType' used? Under what conditions?
// 5.) Inside the secound parameter spellType you have the value of "Lava" it will run when the === "Lava".
// -------------------------------------------------------------------------------------

// function castSpellAdvanced(weakSpell, spellType) {
// 	if(weakSpell === true) {
// 		console.log("You cast a bucket of water at your foe");

// 	} else {
// 		if(spellType === "Fungus") {
// 			console.log("You summon a blizzard of fungi on your foe");

// 		} else if(spellType === "Lava") {
// 			console.log("You rain lava on your foe");

// 		} else {
// 			console.log("You attempt to cast a powerful spell but can't decide which - your brain melts");
// 		}
// 	}
	
// }

// castSpellAdvanced(true, "Lava");

// -------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------
//										Tasks
// -------------------------------------------------------------------------------------
// You will create a function and updated it with each task.
// Once you complete one task, uncomment the next one, etc.
// With each task you will change the function in some way.
// Examples of such modifications:
// * Add if statements
// * Add console logs
// * Add return statements
// Some (most) Tasks require you to print multiple lines of text.
// IMPORTANT: Only modify the function summonDaemonAdvanced, nothing else.


function summonDaemonAdvanced(daemonType, daemonLevel) {
	if (daemonType === "Nurgle") { 
		console.log("You attempt to summon a daemon of Nurgle");

		if(daemonLevel === 0) {
			console.log("You hear a crackling sound - But nothing happens");
		}
	} else {
		console.log("You fail to summon a daemon");
	}
}

// -------------------------------------------------------------------------------------
// Task #1: Print fail case
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Output:
// You fail to summon a daemon
// -------------------------------------------------------------------------------------
console.log("---- Task #1 ----");
summonDaemonAdvanced("Unknown", -1);
// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Task #2: Summon a daemon of Nurgle
// -------------------------------------------------------------------------------------
// Check if the parameter 'daemonType' is Nurgle and print the correct text if it is.
// If it's not you should still print the fail to summon text from the previous Task.
// Do this with an if-else statement.
// -------------------------------------------------------------------------------------
// Output:
// You attempt to summon a daemon of Nurgle
// -------------------------------------------------------------------------------------
console.log("---- Task #2 ----");
summonDaemonAdvanced("Nurgle", -1);
// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Task #3: Summon a small daemon of Nurgle
// In your if-statement from the previous Task (where you check if daemonType is Nurgle)
// add a new if-statement that checks if the parameter 'daemonLevel' is 0.
// This means you'll have an if-statement inside another if-statement.
// -------------------------------------------------------------------------------------
// Output (two lines):
// You attempt to summon a daemon of Nurgle
// You hear a crackling sound - But nothing happens
// -------------------------------------------------------------------------------------
console.log("---- Task #3 ----");
summonDaemonAdvanced("Nurgle", 0);
// -------------------------------------------------------------------------------------



/****************************************************************************************
* 								Control Flow (contd.)
****************************************************************************************/

function attackDaemon(daemonName, spellName) {
	
}


// -------------------------------------------------------------------------------------
// Task #4: Attack a silk daemon with mud
// Create if-statements to damage the silk daemon by mud rain.
// You can create a single one using && or you can create a nested if within an if
// to check that spellName AND daemonName match.
// Remember: Only silk daemons are damaged by mud rain
// -------------------------------------------------------------------------------------
// Output:
// The Silk daemon vanishes under the mud
// -------------------------------------------------------------------------------------
console.log("---- Task #4 ----");
attackDaemon("Silk daemon", "Mud rain");
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Task #5: Attack a silk daemon with something else
// Make sure silk daemons are not affected by other spells
// -------------------------------------------------------------------------------------
// Output:
// The Silk daemon is unaffected by Fireball
// -------------------------------------------------------------------------------------
// console.log("---- Task #5 ----");
// attackDaemon("Silk daemon", "Fireball");
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Task #6: Failed attaack
// If you pass in a daemonName that doesn't exist, print a default text.
// Right now we only support Silk daemons, so feel free to print "Daemon not found"
// for all other daemons.
// -------------------------------------------------------------------------------------
// Output:
// Daemon not found
// -------------------------------------------------------------------------------------
// console.log("---- Task #5 ----");
// attackDaemon("Strange daemon", "Fireball");
// -------------------------------------------------------------------------------------


/****************************************************************************************
*		 								Arrays
*****************************************************************************************
* Arrays are a way of storing multiple things in the same variable.
* An array have zero or more elements in it.
* A number called 'index' is used to describe where an element exists in an array.
* The first element in an array exists at index = 0
* The last element in an array exists at index = length - 1
****************************************************************************************/


// -------------------------------------------------------------------------------------
// Example #1: Basic array
// Question #1: What do you expect it to output?
// Question #2: What does it actually output?
// Question #3: How many elements(items) are in the array?
// -------------------------------------------------------------------------------------

// var daemonArray = ["Khorne daemon", "Nurgle daemon", "Slaanesh daemon", "Tzeentch daemon"];
// console.log(daemonArray[2]);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #1: Array dimensions
// -------------------------------------------------------------------------------------
// Question #1: What do you expect it to output?
// Question #2: What does it actually output?
// Question #3: What's the index of "Blue horror"?
// Question #4: What's the index of "Brimstone horror"?
// -------------------------------------------------------------------------------------

// var tzeentchDaemons = ["Pink horror", "Blue horror", "Brimstone horror"];
// console.log(tzeentchDaemons.length);

// -------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------
//										Tasks
// -------------------------------------------------------------------------------------

var daemonCandles = ["IKEA candle", "Luxury Candle", "Regular Candle", "Daemon Summoning Candle", "Miserable Candle", "Burnt Out Candle"];
var daemonSummoners = ["Cleric Leif", "Bishop Barbro", "Minister Jehander", "Pope Francine"];

// -------------------------------------------------------------------------------------
// Task #7: Print from array
// Use console log to print the 4th element from the daemonCandles array.
// Hint: See Example 1 on how to print an element from an array
// Hint: All arrays start at index zero
// -------------------------------------------------------------------------------------
// Output:
// Daemon Summoning Candle
// -------------------------------------------------------------------------------------
console.log("---- Task #7 ----");
// Add console.log here
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Task #8: Print from array
// Use console log to print the first element in the daemonSummoners array.
// -------------------------------------------------------------------------------------
// Output:
// Cleric Leif
// -------------------------------------------------------------------------------------
console.log("---- Task #8 ----");
// Add console.log here
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Task #9: Print from array
// Use console log to print the last element in the daemonCandles array.
// -------------------------------------------------------------------------------------
// Output:
// Burnt Out Candle
// -------------------------------------------------------------------------------------
console.log("---- Task #9 ----");
// Add console.log here
// -------------------------------------------------------------------------------------



