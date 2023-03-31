// JavaScript is Fucntional Programming 

// let prom1 = () => {
//     return Promise.resolve("Always success");
// }

// prom1()
// .then((res) => {
    //     // prom call garera ni garna milxa
    // }) 
    // or use below one
    // prom1.then(() => {
        // code
        // })
        
// let result = "";

// prom1().then((response) => {
//     result = response;
//     console.log("Inside:", result);
// })

// console.log(result); // this value gets never accessed

// solved using async
let prom1 = async() => {
    return "Always Success";
}
prom1().then((response) => {
    console.log(response);
})

// using await and making func
let prom2 = async() => {
    return "always success";
}

let result = ""; // null variable
let getResult = async() => {
    result = await prom2();
    console.log(result);
}
getResult();

// promies has been returned : see in the next code on how to handle promise using asyn-await keyword
// let prom3 = () => {
//     return Promise.resolve("ALWAYS SUCCESS!");
// }

// let getResult1 = () => {
//     result = prom3();
//     console.log(result);
// }
// getResult1();

// Handling promise using async-await
let prom3 = () => {
    return Promise.resolve("ALWAYS SUCCESS!");
}

let getResult1 = async () => {
    result =  await prom3();
    console.log(result);
}
getResult1();

// then, catch, async-await(promise/ or js ko async call handling technique) are used to handle promise: aysn call

// below code shows the Err unhandled rejection
// let prom4 = () => {
//     return Promise.reject("Always Success");
// }
// let getResult2 = () => {
//     try{
//         result = prom4();
//         console.log(result);
//     } catch(error){
//         console.log("Error:", error);
//     }
// }
// getResult2();

// this is how we handle rejection in promise
let prom4 = () => {
    return Promise.reject("Always Success");
} 
let getPromo = async () => {
    try{
        result = await prom4();
        console.log(result);
    } catch(error){
        console.log("Error: ",error);
    }
}
getPromo();
