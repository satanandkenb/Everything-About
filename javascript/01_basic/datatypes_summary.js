let x = 5; // let, const and var is called as variable 
// in above line, "let" is called as keyword
// x is called an identifier
// = is called an operator
// 5 is called a literal`


// Data Types in JavaScript

// 1. Primitive Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let Undef = undefined; // Undefined
let nul = null; // Null
let sym = Symbol('sym'); // Symbol
let bigIntNum = 9007199254740991n; // BigInt

// 2. Non-Primitive Data Types
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello!");
}
let date = new Date(); // Date Object
let regex = /ab+c/; // Regular Expression
// Map, Set, WeakMap, WeakSet are other non-primitive data types

// Type Checking
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
