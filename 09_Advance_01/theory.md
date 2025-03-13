# Promises
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

How to create promises
### One
```javascript
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls, cryptography
    //network calls

    setTimeout(() => {
        console.log("Async task is completed");
        
    }, 1000);
    resolve();
})

promiseOne.then(() => {
    console.log("Task is done");
})

```

### two
```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
        
    }, 1000);
}).then(() => {
    console.log("Task two is done");
})

```

### three
```javascript
const promiseThrere = new Promise(function(resolve, reject){
    setTimeout(() =>{
        resolve({
            username : "Rafy",
            email : "xyz123@gmail.com"
        })
    }, 1000)
})

promiseThrere.then((user) => {
    console.log(user);
    
})

```