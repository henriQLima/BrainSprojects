//Exercise 1:
//Declare a variable called name.
var name
//Assign the variable name the String value of your name.
name = "Eu"
//Use the console.log function to print "Hello name", where name is your name.*/
console.log(name)

//Exercise 2:
//Assign the variable x the Integer value of 1125.
var x = 1125
//Assign the variable answer the result of x modulus 2.
answer = x%2
//Output the answer to console.
console.log(answer)

//Exercise 3:
//The value of a is the Boolean true.
a = true
//The value of b is the Boolean false.
b = false
//The value of c is the Bolean true.
c = true
//Find what a OR b OR c results in and print it to the console.
var result = a || b || c
console.log(result)

//Exercise 4:
//The value of a is the Boolean true.
a = true
//The value of b is the Boolean false.
b = false
//The value of c is the Boolean true.
c = true
//Find what a AND b AND c results in and print it to the console.
var result2 = a && b && c
console.log(result2)

//Exercise 5:
//Compute 10 - 3 * 5/4 + 202 % 3 and assign it to the variable answer1.
var answer1 = 10 - 3 * 5/4 + 202 % 3 
//Compute 10 - (3 * (5/4) + (202 % 3)) and assign it to the variable answer2.
var answer2 = 10 - (3 * (5/4) + (202 % 3))
//Print both of these answers. Why do you think they are different? Research the order of operations for JavaScript.
console.log("a1:" + answer1 + " a2:" + answer2)

//Exercise 6:
//Convert the Integer 12 into a String.
String(12)
//Convert the String "113" into an Integer.
parseInt("113")
//Convert the String "1.12356" into a Float.
parseFloat("1.12356")
//Convert the String "Hello World" into an Integer and save it to the variable x. Print x to the console. What do you see? Research the resulting value if you're not sure.
x = parseInt("Hello World")
console.log(x)

//Diving Deeper
//Research JavaScript Regular Expressions. See if you can write regular expressions to:
//Match the string "BrainStation" when given the strings "I am a BrainStation student" and "I am a student." What is the resulting value? (HINT: Look at .search()).

var str = 'I am a student';
var re = "BrainStation";
var found = str.match(re);

console.log(found);

//Replace the string "BrainStation student" with the string "Junior Developer" when provided the string "I am a BrainStation student." (HINT: Look at .replace()).
var str = "I am a BrainStation student.";
var newstr = str.replace(/BrainStation student/i, 'Junior Developer');
console.log(newstr); 


console.log("//////////////////////////////////////////////");


//LOOPS

for (var i = 0; i <= 300; i++) {
    console.log(i);
}

console.log('loop is done');
    
