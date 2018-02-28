/****************************************************************************************
* 									Control Flow
****************************************************************************************/

// -------------------------------------------------------------------------------------
// Example #1: Basic control flow
// Question #1: What do you expect it to output?
// Question #2: What does it actually output?
// Question #3: What else can it output?
// Question #4: How do you make it output the other texts?
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
// Question #2: What does it actually output?
// Question #3: What else can it output?
// Question #4: How do you make it output the other texts?
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
// Question #2: What does it actually output?
// Question #3: What else can it output?
// Question #4: How do you make it output the other texts?
// Question #5: When is the parameter 'spellType' used? Under what conditions?
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

}


// -------------------------------------------------------------------------------------
// Task #1: Print fail case
// -------------------------------------------------------------------------------------
// 
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