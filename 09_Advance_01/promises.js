
//1st promise


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

//2nd promise


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();

    }, 1000);
}).then(() => {
    console.log("Task two is done");
})


//3rd promise

const promiseThrere = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "Rafy",
            email: "xyz123@gmail.com"
        })
    }, 1000)
})

promiseThrere.then((user) => {
    console.log(user);

})


//4th promise


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Rafy",
                email: "xyz123@gmail.com"
            })
        } else {
            reject("ERROR, Something is wrong.")
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);

    })
    .catch((error) => {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected."))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "javascript",
                password: "123456"
            })
        } else {
           reject("ERROR, JS went wrong.")
        }
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

/*
async function getAllUsers() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
    
}

getAllUsers();
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)