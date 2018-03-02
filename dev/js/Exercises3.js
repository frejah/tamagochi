/****************************************************************************************
* 								Arrays (contd.)
****************************************************************************************/

// -------------------------------------------------------------------------------------
// Example #1: Passing arrays to a function
// Question #1: What do you expect it to output?
// daemonGods
// Question #2: What does it actually output?
// Tzeentch
// -------------------------------------------------------------------------------------

// function getDaemonName(arr, index) {
// 	return arr[index];
// }

// var daemonGods = ["Khorne", "Slaanesh", "Tzeentch", "Nurgle"];

// var daemonName = getDaemonName(daemonGods, 2);
// console.log(daemonName);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #2: Passing arrays to a function
// Question #1: What do you expect it to output?
// 5, 3, 0
// Question #2: What does it actually output?
// 5, 3, 0
// -------------------------------------------------------------------------------------

// function getDaemonsCount(arr) {
// 	return arr.length;
// }

// var khornDaemons = ["Bloodletters", "Bloodthirster", "Bloodcrushers", "Herald of Khorne", "Skulltaker"];
// var nurgleDaemons = ["Plaguebearers", "Nurglings", "Poxbringer"];
// var slaaneshDaemons = [];

// var numKhorne = getDaemonsCount(khornDaemons);
// var numNurgle = getDaemonsCount(nurgleDaemons);
// var numSlaanesh = getDaemonsCount(slaaneshDaemons);

// console.log(numKhorne);
// console.log(numNurgle);
// console.log(numSlaanesh);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #3: Modify array in function
// Question #1: What do you expect it to output?
// follower, arrGod
// Question #2: What does it actually output?
// "Screamers", "Flamers"
// -------------------------------------------------------------------------------------

// function printFollowers(arrGod) {
// 	console.log(arrGod);
// }

// function addFollower(arrGod, follower) {
// 	return arrGod.push(follower);
// }

// var tzeentchDaemons = [];

// addFollower(tzeentchDaemons, "Screamers");
// addFollower(tzeentchDaemons, "Flamers");

// printFollowers(tzeentchDaemons);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #4: Compare array lengths
// Question #1: What do you expect it to output?
// Question #2: What does it actually output?
// -------------------------------------------------------------------------------------

// var fireSpells = ["Fireball", "Fire rain", "Lava flood"];
// var waterSpells = ["Ice rain", "Frost bolt"];

// if(fireSpells.length > waterSpells.length) {
// 	console.log("There are more fire spells than water spells");
// } else if(fireSpells.length === waterSpells.length) {
// 	console.log("There are an equal amount of spells");

// } else {
// 	console.log("There are more water spells than fire spells");
// }

// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
//										Tasks
// -------------------------------------------------------------------------------------

var khorneDaemons = ["Bloodletters", "Bloodthirster", "Bloodcrushers", "Herald of Khorne", "Skulltaker"];
var khorneDaemonStrengh = [1, 5, 4, 2, 3];

var loyalistTroops = ["Terminators", "Space Marines", "Scouts", "Primaris Marines", "Jump Infantry"];
var loyalistTroopStrengh = [3, 2, 1, 3, 2];

function printUnitInfo(unitType, unitStrength, unitId) {
	console.log("UPDATE THIS: Replace the 2s with the correct paramter. Which one contains an array index?");
	console.log(khorneDaemons[2] + " - Strength " + khorneDaemonStrengh[2]);
}

function printFight(unitType, unitStrength, unitId) {
	console.log("UPDATE THIS: Replace the 1s with the correct paramter. Which one contains an array index?");
	console.log(khorneDaemons[1] + " vs. " + loyalistTroops[1]);
}

function printFightResults(unitId) {
	if (khorneDaemonStrengh[unitId] > loyalistTroopStrengh[unitId]) {
		console.log("Some Khorne daemon wins... Print correct output here");
	} else {
		console.log("Some Loyalist troop wins... Print correct output here");
	}
}

// -------------------------------------------------------------------------------------
// 										Task #1
// -------------------------------------------------------------------------------------
// Print output from two different arrays, using a single index.
// Add the correct console.log statement to the function 'printUnitInfo' above.
//-------------------------------------------------------------------------------------
// Parameters:
// unitType - Array containing string with unitnames
// unitStrength - Array containing numbers representing the strength of an individual unit
// unitId - The array index to be used, when looking up name and strength
// -------------------------------------------------------------------------------------
// Output:
// Bloodcrushers - Strength 4
// -------------------------------------------------------------------------------------
console.log("---- Task #1 ----");
printUnitInfo(khorneDaemons, khorneDaemonStrengh, 2);
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// 										Task #2
// -------------------------------------------------------------------------------------
// Print from two different arrays.
// Print output from two different arrays, using a single index.
// Add the correct console.log statement to the function 'printFight' above.
// -------------------------------------------------------------------------------------
// Parameters:
// unitType - Array containing string with unitnames
// unitStrength - Array containing numbers representing the strength of an individual unit
// unitId - The array index to be used, when looking up name and strength
// -------------------------------------------------------------------------------------
// Output:
// Bloodthirster vs. Space Marines
// -------------------------------------------------------------------------------------
console.log("---- Task #2 ----");
printFight(khorneDaemons, loyalistTroops, 1);
// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// 										Task #3
// -------------------------------------------------------------------------------------
// Read from global arrays
//
// Print info from global arrays, using an index passed in as a parameter
// Use the global arrays:
// * khorneDaemons
// * khorneDaemonStrengh
// * loyalistTroops
// * loyalistTroopStrength
//
// Two steps:
// 1) Use an if-statement to compare strength from a daemon with strength from a loyalist.
//    Do this by getting a single strength from the daemons strenght array and a
//    single strength from the loyalists strength array. Use the paramter unitId as the 
//    index in the array.. [unitId]
// 2) In the if, or else, print the name of the winning unit, by reading from the
//    corresponding unit array and printing the name, also using [unitId].
//
// Add the code to the function 'printFightResults' above.
// -------------------------------------------------------------------------------------
// Parameters:
// unitId - The array index to be used, when looking up names and strengths
// -------------------------------------------------------------------------------------
// Output:
// Primaris Marines wins
// -------------------------------------------------------------------------------------
console.log("---- Task #3 ----");
printFightResults(3);
// -------------------------------------------------------------------------------------