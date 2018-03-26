// Assignment 2 : Problem Solving //
//     Author: Henrique Lima      //
////////////////////////////////////
////////////////////////////////////
//Challenge 1
// FIRST ATTEMPT
console.log("Challenge 1") // creating a simple title for the challenge to better organize the execution
var hash = "#" //declare variable hash "#"
for (var i=0; i < 7; i++){ // For Loop conditions, in this case for 7 loops which represents the lines
    console.log(hash); // printing the variable hash
    hash = hash + "#" // changing the value of hash variable, so every loop it will add an extra "#"
}
/*ALTERNATIVE METHOD
var hash2 = "#" // declaring variable hash
for (var n=0; n <= 7; n++){ // For Loop condition for 7 lines/loops
    console.log(hash2.repeat(n)); // using the method repeat, in this case it will repeat "#" n number of times for each line
}*/

//Challenge 2
console.log("\nChallenge 2") // creating a simple title for the challenge to better organize the execution
function isEven(number) { // creating function
    if (isNaN(number) || parseInt(number) != number){ // check to see whether the number is a real number or a integer number
        console.log("this is not a valid number, try again!") // if it is not a valid number then print the error message otherwise go to the next if below
    } 
    else {
            if (number % 2 == 0){ // using a module operator to get the remainder after integer division
            console.log("the number " + number + " is even") // if it returns 0 then the output will show that the number is even
        }
            else if(number % 2 != 0){ // if it is different than 0 then the output will show that the number is an odd number
            console.log("the number " + number + " is odd")
        }
  }
}
isEven(5) // calling the funcion, in this example for the number 5
  