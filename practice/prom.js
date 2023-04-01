// for 100% sure case of resove and reject return

// always resove returned
let success = () => {
    // return new Promise((res, rej) => {
    //     res();
    // })

    // or use this for return
    return Promise.resolve("test");

}

success().then((res) => console.log(res));

// for always reject returned
let errorFun = () => {
    // return new Promise((res, rej) => {
    //     rej();
    // })

    return Promise.reject("Done!");
}
errorFun().then().catch((res) => console.log(res)); // here res = response(say)

// collection of Promise: promise ko response returned :: if all case is resolve
// let prom1 = Promise.resolve("Resolve1");
// let prom2 = Promise.resolve("Resolve2");
// let prom3 = Promise.resolve("Resolve3");
// let all = Promise.all([prom1, prom2, prom3]);
// all.then((res) => {
//     console.log("ResP:", res);
// })


// if one of them is reject :: handle the error using catch::
let prom1 = Promise.resolve("Resolve1");
let prom2 = Promise.reject("Resolve2");
let prom3 = Promise.resolve("Resolve3");

let all = Promise.all([prom1, prom2, prom3]);

all.then((res) => {
    console.log("ResP:", res);
})

.catch((err) => {
    console.log("Err:", err);
})


