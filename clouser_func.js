// general func
// function doSomething(){
//     console.log("I am inside doSomething");
// }
// doSomething();


// func associated with object
// const access = {
//     text: "I am inside doNothing",
//     doNothing: () => {
//         return access.text;
//     }
// }
// console.log(access.doNothing(access.text));


// function associated with arrow notation
// clouser func: function inside func : synchronous call
// const doSomething = () => {
//     console.log("I am inside doSomething");

//     // clouser function
//     const doNothing = () => {
//         console.log("I am inside doNothing");
//     }

//     doNothing(); // yeslai func call vaninxa jasle vitrako codes execute garxa
//     doNothing; // this is called function scope(function)

// }
// doSomething();
// // doNothing(); // not defined : its scope is inside doSomething()


const doSomething = () => {
    console.log("I am inside doSomething");

    // clouser function
    const doNothing = () => {
        console.log("I am inside doNothing");
    }

    // doNothing(); // yeslai func call vaninxa jasle vitrako codes execute garxa
    return doNothing; // this is called function scope(function)

}
let clouserCall = doSomething();
// console.log(clouserCall); // returns undefined for func call but returns func scope for func scope doNothing;
clouserCall(); // we get scope outside doNothing func scope using clouserCall... clouser func vanda baira gayerw tyo func lai call garna paiyo only using  closureCall

// CLOUSER IS THE FUNC WITHIN THE FUNC.;; SYNCHRONOUS CALL



