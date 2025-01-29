// 1. Singleton

// Object literals
//Object.create // create an object

const mySym = Symbol("key1")

const user = {
    name: "xyz",
    fullName: "abc xyz",
    age: 20,
    [mySym]: "mykey1", // computed property
    location: "hyderabad",
    email: "rafyabc@xyz.com",
    isloggedIn: false,
    lastLogginDays: ["monday", "tuesday", "wednesday"]
}

/*console.log(user)
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof user[mySym]) */

user.email = "seieije@kfhekfe.com"
//console.log(user);

//Object.freeze(user) // freeze the object and make it immutable
user.email = "dfjfhdjfcx,@gmail.com"
//console.log(user);

user.greeting = function() {
    console.log("Hello, " + this.name);
    
}

user.greetingsTwo = function() {
    console.log(`Hello User, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());
