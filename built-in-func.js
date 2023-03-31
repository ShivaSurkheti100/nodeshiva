const executeTimeout = () => {
    console.log("I am here");

}
// setTimeout(executeTimeout, 3000)
// console.log("I am after timeout");

// date
let date = new Date();
// console.log(date);

// :: Making Timer in browser: today is the object of Data class
const showClock = () =>{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h= appendZero(h);
    m = appendZero(m);
    s = appendZero(s);

    let time = h + ":" + m + ":" + s;
    setTimeout(showClock, 1000);
    document.getElementById('timer').innerHTML = time;
}
 
const appendZero = (n) => {
    return (n<10)? "0"+n : n;
}

// taking input from the user using prompt()

const getInput  = () => {
    let name = prompt("Enter your name:");
}

getInput();