
const user = {
    username : "Rafy Mustafa",
    price : 999,


    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this); This keyword shows the current context
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sameer"
// user.welcomeMessage()

// console.log(this);
 // Here this keyword is reffereing to now any current value therefore, the output will be empty brackets
 /*NOTE : If we print ==> console.log(this);  on browser than this will refer to the window object because window object is the global object in the browser*/

/*
function chai() {
    const username = "Rafy"
    console.log(this.username); // This keyword used in objects
    
}
const another_function  = function() {
     const username = "Rafy"
    console.log(this.username);
}
chai() 
another_function() */


// Arrow function initialization
const arrow_function = () =>  {
    const username = "Rafy"
   console.log(this.username);
}

// arrow_function()


const add_nums = (num1, num2) => {
    return num1 + num2
}

//Implicit return function
const add_nums_two = (num1, num2) =>  (num1 + num2)

// If we want to return the object in the implicit function than
const object_return = () =>  ({username : "Rafy Mustafa"})


// console.log(add_nums(4, 5))
console.log(add_nums_two(42, 53));
console.log(object_return());

