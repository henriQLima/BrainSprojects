
// Assignment 1: Basic JavaScript //
//     Author: Henrique Lima      //
////////////////////////////////////

var numbers = new Array();

for (var i=0; i <= 9; i++){
    numbers.push(i);
}

console.log("First number: " + numbers[0])
console.log("Last number: " + numbers.pop())

/////////////////////////////////////////////////

var car = {}

car.colour = 'blank'

/////////////////////////////////////////////////
/* EXTRA
var car = {
	colour: 'blank',
}
*/

console.log('Car Colour: ' + car.colour)