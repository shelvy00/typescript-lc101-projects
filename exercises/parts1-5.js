"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
//let SpacecraftName: string = "Determination";
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
//let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
//let milesToMars: number = kilometersToMars * milesPerKilometer;
//let hoursToMars: number = milesToMars / speedMph;
//let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${SpacecraftName} and ${daysToMars}`)
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number):number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hoursToLocation: number = milesAway/ speedMph;
//   return hoursToLocation / 24
//}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//console.log(`${getDaysToLocation(kilometersToMars)} and ${SpacecraftName}`)
//console.log(`${getDaysToLocation(kilometersToTheMoon)} and ${SpacecraftName}`)
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("".concat(spaceShuttle.getDaysToLocation(kilometersToMars), " and ").concat(spaceShuttle.name, "."));
console.log("".concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " and ").concat(spaceShuttle.name, "."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
console.log("".concat(spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars))));
console.log("".concat(spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon))));
// Paste in the code from step 6 here:
