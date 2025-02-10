
// Code that is written inside the if scope is block scope while the code that is written outside of the statement is called global scope
var c = 200
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(`INNER (a): ${a}`);
}

// console.log(a); Will not print bcz the scope of let is inside the if statement
// console.log(b);
// console.log(c);


// console.log(`OUTER (a) : ${a}`);
// console.log(c);

function one() {
    const username = "Rafy"

    function two() {
        const website = "Youtube"
        console.log(`Username is ${username}`);

    }
    // console.log(`Website is ${website}`); //This website variable will show error due to its block scope

    // two()
}
// one()

if (true) {
    const username = "Rafy"
    if (username === "Rafy") {
        const website = " Youtube"
        console.log(username + website);

    }
    // console.log(website); Can't be accessed due to its block scope

}

// console.log(username);  Can't be accessed due to its scope is defined inside the if block
// Both are the techniques to declare functions but somewhere second technoque is called as expression

/* NOTE : When we initiallize a function using the first mentioned method, the user can print the method before the initialization but in method two of initializing
a function the user can't access the function before initializing*/ 

console.log(addOne(5)) // Can be accessed before initialization
// console.log(addTwo(5)) // Can't be accessed before initialization

function addOne(num) {
    return num+1
}



const addTwo = function(num) {
    return num + 2
}

// console.log(addOne(5))
console.log(addTwo(5))

