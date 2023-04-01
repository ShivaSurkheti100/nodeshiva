// arko func ko parameter pathayo vane
// callback is asynchronous call.. asynchronous func means  one func not depending on  arko func

const doSomething = () => {
    // console.log(" I am inside doSomething");
}

const doNothing = (cb) => {
    // console.log(" I am inside doNothing");
    cb();
}

doNothing(doSomething);
// note doSomething() is func call and doSomething is function scope/ function.


// handling of asynchronous call : (error, success) are two parameters of callback
// async call maintains delay : one content not depending on other
const callback = (error, success) => {
    if(error){
        console.log("Error: ", error);
    } else{
        console.log("Success", success);
    }
}

// login(callback(null, true)); // login successful
// login(callback(true, null)); // login failed

// concept
// const xyz = () => {
//     // console.log("test");
// }

// const abc = () => {
//     // console.log("New test");
// }

// // abc(); // yo paila call garyo vane 'New test' first ma print hunxa
// // xyz(); // yo paila call garyo vane 'test' print hunxa

// abc();
// xyz();

// abc() not depending on xyz() func then its called async call, otherwise sync call
// delay in loading content while scrolling down in webpage is due to asynch call
// const xyz = async() => {
//     return "abc";

// }
// const abc = () => {
//     console.log("New test");
// }
// xyz();
// abc();

// example of callback
const xyz = (a) => {
    console.log("test");
    a();
}

const abc = () => {
    console.log("New test");
}

xyz(abc);

// generic way of executing function
// const setDisplay = (name) => {
//     console.log(name);
// }
// const getResult = () => {
//     setDisplay("Shiva Surkheti");
// }
// getResult();

// using callback
// const setDisplay = (name) => {
//     console.log(name);
// }
// const getResult = (setDisplay) => {
//     setDisplay("Shiva Surkheti");
// }
// getResult(setDisplay);

// or use anything ex
const setDisplay = (name) => {
    console.log(name);
}
const getResult = (show) => {
    show("Shiva Surkheti");
}
getResult(setDisplay);