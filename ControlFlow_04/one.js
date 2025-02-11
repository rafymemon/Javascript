// if Statement control flow

const isLoggedIn = true
const temperature = 41

// if (isLoggedIn) {
//     console.log("Executed 1");
// }

// if (3 != 2) {
//     console.log(`Executed 2`);

// }

// if (2 == "2") {
//     console.log("Executed 3");

// }

// if (2 === "2") {
//     console.log("Executed 4");

// }

// if (temperature < 50) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
    
// }

// <, >, !, !=, <=, >=, =, ==, === (used to check the value along with the data type)

const balance = 1000

// Shortand if statement (Implicit method)
//if(balance > 500) console.log("You have enough balance");



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("You are logged in and you have a debit card");
    
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}


// Nullish Coalescing Operator (??) : null undefined


let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")

