
const UserEmail = "R.abc@ggg.com"
const UserEmail2 = []
const emptyObject = {}

if (UserEmail) {
    console.log("Email is present");
    
} else {
    console.log("Email is not present");
    
}


// Falsy values in JavaScript
// 0, -0, BigInt On, "", null, undefined, NaN, false

// Truthy values in JavaScript
// 1, "0", 'false', " ", [], {}, true, function() {}

if(UserEmail2.length === 0) {
    console.log("Email is present but empty");
    
}


if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}