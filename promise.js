// new way to handle async call
// promise has two callback parameters : resolve, and reject:

/** 3 stages of promise(its actually an object)
 * Pending => request
 * fulfilled => success(resolve), failure(reject)
 * settlement => Always executed
 */

// let myPromise = new Promise((resolve, reject) => {
//     resolve(); // resolve returned
//     reject(); //  illegal code invocaion:or unresponsive code:::  these both could be done in callback

// })

// // promsie handling 
// myPromise.then(); // handling resolve
// myPromise.catch(); // handling reject

// let login = (username, password) => {
//     return new Promise((resolve, reject) => {
//         // logic part
//         if(username == "admin" &&  password == "admin123"){
//             resolve({
//                 user: {
//                     name: "Shiva Surkheti", 
//                     email : "shflsjafl.jfdlsfj@gmail.com", 
//                     username: "admin"

//                 }
//             })
//         } else{
//             reject("Srr! username and password does not match.");
//         }
//     })
// }

// let login = (username, password) => {
//     return new Promise((resolve, reject) => {
//         // logic part
//         if(username == "admin" &&  password == "admin123"){
//             resolve({
//                 user: {
//                     name: "Shiva Surkheti", 
//                     email : "shflsjafl.jfdlsfj@gmail.com", 
//                     username: "admin"

//                 }
//             })
//         } else{
//             reject("Srr! username and password does not match.");
//         }
//     })
// }
// let result = login("admin", "admin123");
// console.log(result); // Promise aauxa 
// console.log(result.user); // returns undefined


// Handling promise using .then() and .catch()
// for resolve ... if pass and username mathced
let login = (username, password) => {
    return new Promise((resolve, reject) => {
        // logic part
        if(username == "admin" &&  password == "admin123"){
            resolve({
                user: {
                    name: "Shiva Surkheti", 
                    email : "shflsjafl.jfdlsfj@gmail.com", 
                    username: "admin"

                }
            })
        } else{
            reject("Srr! username and password does not match.");
        }
    })
}

// then, catch, finally all are callback
// asynchronous call ma remember its promise and following three callbacks are way to promise handling
let loading = true;
// login("admin", "admin123")
// returns object >> promise aaudaina
// .then((response) => {
    //     console.log(response);
    // })

    // reject handling .. if password and username doesnot match
login("shiva_admin", "admin123")
.catch((error) => {
    console.log(error);
})

// finally does not take parameter: then and catch take
.finally(() => {
    loading = false;
})

// async call is independent of code execution; so line no. 101 printed first; login(promise is always async func) is async func 
console.log("Here is the code");  
