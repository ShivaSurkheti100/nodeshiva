// siddhai promise use garerw
// let prom1 = new Promise((res, rej) => {
//     console.log("I am prom1");
//     let a = true; 
//     if(a){
//         res("Resolve of Prom1");
//     } else{
//         rej("Reject of Prom1");
//     }
// })

// function ma promise return garerw
let prom1 = () => {
    return new Promise((res, rej) => {
        console.log("I am prom1");
        let a = true;
        if(a){
            res("Resolve of Prom1");
        } else{
            rej("Reject of Prom1");
        }
    })
}

let prom2 = () => {
    return new Promise((res, rej) => {
        console.log("I am prom2");
        let a = true;
        if(a){
            res("Resolve of Prom2");
        } else{
            rej("Reject of Prom2");
        }
    })
}

let prom3 = () => {
    return new Promise((res, rej) => {
        console.log("I am prom3");
        let a = true;
        if(a){
            res("Resolve of Prom3");
        } else{
            rej("Reject of Prom3");
        }
    })
} 


// Nesting of Promise :::: but nesting makes the complexity of code
// prom2 is dependent on prom1 and prom3 is depedent on prom2 and prom1(indirectly) 
// prom1() // calling promise no. 1
// .then((response) => {
//     console.log("Prom1 Response:", response); // resolve ko returned vayo as cond is true
//     // calling prom2 after successful execution of prom1
//     prom2()
//     .then((res2) => {
//         console.log("Prom2 Resolve:", res2);

//         prom3()
//         .then((res3) => {
//             console.log("Prom3 Resolve:", res3);
//         })
//         .catch((rej) => {
//             console.log("Reject:", rej);
//         })
//     })
//     .catch((rej) => {
//         console.log("Prom2 rejection", rej);
//     })
// })
// .catch((rej) => {
//     console.log("Rejection:", rej);
// })

// above nesting can be solved using 'promise-chaining'
// then and catch are used to handle promise
prom1()
.then((res1) => {
    console.log("Prom1 Resolve:", res1);
    return prom2()  // returning prom2 ko function call
})
.then((res2) => {
    console.log("Prom2 Resolve:", res2);
    return prom3()
})
.then((res3) => {
    console.log("Prom3 Resolve:", res3);
    return prom3()
})
.catch((error) => {     // sablai eutai catch le kaam garxa: but func call return garena vane chai we have to write both then and catch
    console.log("Catch: ", error);
})