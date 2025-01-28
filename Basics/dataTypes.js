
/*1.Primitive Datatypes

    Number => range is upto 2^53
    bigint
    string = ""
    boolean = true/false
    null = stand alone value and a data type (Representation of empty value) null is an object
    undefined => when the value is not defined to a veriable
    symbol => uniqueness

2. Refrence  (non primitive)
    Objects
    Arrays
    Functions
*/


"use strict"; // Treat all the JS code as the newer version

// alert(3 + 3) is used mostly in browser, not in nodeJS

console.log(3 + 3);


//DataTypes
let name = "Rafy"
let age = 22
let isLoggedIn = true


console.log(typeof "Rafy"); // Give the data type of the value --> string
console.log(typeof null); // type is object
console.log(typeof undefined); // type is  undefined


// Initialization of a Symbol datatype
const id = Symbol("1234")
const anotherId = Symbol("1234")
console.log(typeof anotherId);

console.log(id === anotherId); //False bcz symbol is a unique datatype used for uniques values

// Object
let myObj = {
    age : 20,
    name : "Rafy",
    semester : "fifth"
}
console.log(myObj);




