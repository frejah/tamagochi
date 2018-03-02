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

function getDaemonName(arr, index) {
	return arr[index];
}

var daemonGods = ["Khorne", "Slaanesh", "Tzeentch", "Nurgle"];

var daemonName = getDaemonName(daemonGods, 2);
console.log(daemonName);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #2: Passing arrays to a function
// Question #1: What do you expect it to output?
// 5, 3, 0
// Question #2: What does it actually output?
// 5, 3, 0
// -------------------------------------------------------------------------------------

function getDaemonsCount(arr) {
	return arr.length;
}

var khornDaemons = ["Bloodletters", "Bloodthirster", "Bloodcrushers", "Herald of Khorne", "Skulltaker"];
var nurgleDaemons = ["Plaguebearers", "Nurglings", "Poxbringer"];
var slaaneshDaemons = [];

var numKhorne = getDaemonsCount(khornDaemons);
var numNurgle = getDaemonsCount(nurgleDaemons);
var numSlaanesh = getDaemonsCount(slaaneshDaemons);

console.log(numKhorne);
console.log(numNurgle);
console.log(numSlaanesh);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
// Example #3: Modify array in function
// Question #1: What do you expect it to output?
// follower, arrGod
// Question #2: What does it actually output?
// "Screamers", "Flamers"
// -------------------------------------------------------------------------------------

function printFollowers(arrGod) {
	console.log(arrGod);
}

function addFollower(arrGod, follower) {
	return arrGod.push(follower);
}

var tzeentchDaemons = [];

addFollower(tzeentchDaemons, "Screamers");
addFollower(tzeentchDaemons, "Flamers");

printFollowers(tzeentchDaemons);

// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
//										Tasks
// -------------------------------------------------------------------------------------

var khorneDaemons = ["Bloodletters", "Bloodthirster", "Bloodcrushers", "Herald of Khorne", "Skulltaker"];
var khorneDaemonStrengh = [1, 5, 4, 2, 3];

var loyalistTroops = ["Terminators", "Space Marines", "Scouts", "Primaris Marines", "Jump Infantry"];
var loyalistTroopStrengh = [3, 2, 1, 3, 2];

function printUnitInfo(unitType, unitStrength, unitId) {
	console.log(khorneDaemons[2] + " - Strength " + khorneDaemonStrengh[2]);
}

function printFight(unitType, unitStrength, unitId) {
	console.log(khorneDaemons[1] + " vs. " + loyalistTroops[1]);
}

function printFightResults(unitId) {

}

// -------------------------------------------------------------------------------------
// Task #1: Print from two different arrays
// -------------------------------------------------------------------------------------
// Print output from two different arrays, using a single index.
// Add the correct console.log statement to the function 'printUnitInfo' above.
// -------------------------------------------------------------------------------------
// Output:
// Bloodcrushers - Strength 4
// -------------------------------------------------------------------------------------
console.log("---- Task #1 ----");
printUnitInfo(khorneDaemons, khorneDaemonStrengh, 2);
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Task #2: Print from two different arrays
// -------------------------------------------------------------------------------------
// Print output from two different arrays, using a single index.
// Add the correct console.log statement to the function 'printFight' above.
// -------------------------------------------------------------------------------------
// Output:
// Bloodthirster vs. Space Marines
// -------------------------------------------------------------------------------------
console.log("---- Task #2 ----");
printFight(khorneDaemons, loyalistTroops, 1);
// -------------------------------------------------------------------------------------
if (khorneDaemonStrengh[] > loyalistTroopStrengh[]) {
	console.log(khorneDaemons + "is bigger");
}


// -------------------------------------------------------------------------------------
// Task #3: Read from global arrays
// -------------------------------------------------------------------------------------
// Print info from global arrays, using an index passed in as a parameter
// Use the global arrays:
// * khorneDaemons
// * khorneDaemonStrengh
// * loyalistTroops
// * loyalistTroopStrength
// Two steps:
// 1) Use if-statements to compare strengths from the strength arrays to determine
//	  which is greatest.
// 2) In the if and/or else statement console.log the winner by reading from the
//    correct array using the index passed in as a paramter.
// Add the code to the function 'printFightResults' above.
// -------------------------------------------------------------------------------------
// Output:
// Primaris Marines wins
// -------------------------------------------------------------------------------------
console.log("---- Task #3 ----");
printFightResults(3);
// -------------------------------------------------------------------------------------