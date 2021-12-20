
// Introduction

// Conditionals
if (condition) {
    // do something
} else { }

// Functions
function functionName(parameter) { }

// Scope
// Block Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }

// Arrays
const cars = ["Saab", "Volvo", "BMW"];
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

const person = {firstName:"John", lastName:"Doe", age:46};

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

// Accessing the First Array Element
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];

// Accessing the Last Array Element
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

// Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

// to string method 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

// pop returns the last element of an array and removes it from the array:
// push adds a new element to the end of an array:
// shift removes the first element of an array and returns it:
// unshift adds a new element to the beginning of an array:
// concat() joins two or more arrays:

// Loops
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


// Iterators
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
// map() creates a new array with the results of calling a function for each array element:
// The filter() method creates a new array with array elements that passes a test.
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// every() tests whether all elements in the array pass a test.
// The some() method check if some array values pass a test.