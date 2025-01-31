
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedin = false


// console.log(tinderUsers);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        useFullName : {
            firstName : "sammy",
            lastName : "herani"
        }
    }
}
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.useFullName.firstName);

const obj1 = {1:'a', 2: 'b'}
const obj2 = {3:'a', 4: 'b'}
const obj3 = {5:'a', 6: 'b'}


//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);


const userss = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "v@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    }
]
userss.email


//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); // returns an array of keys
//console.log(Object.values(tinderUser)); // returns an array of values
//console.log(Object.entries(tinderUser)); // returns an array of arrays of key value pairs

//console.log(tinderUser.hasOwnProperty("name")); // returns true or false


const course = {
    title : "javascript",
    price : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course // destructuring
console.log(instructor);


//object act as Json
// {
//     "name" : "sammy",
//     "age" : 20,
//     "location" : "hyderabad"
// }